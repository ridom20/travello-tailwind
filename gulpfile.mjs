import browsersync from 'browser-sync';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import cleanCSS from 'gulp-clean-css';
import fileinclude from 'gulp-file-include';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import { deleteAsync } from 'del';

const browsersyncInstance = browsersync.create();

const paths = {
    dist: {
        base: './dist',
        css: './dist/assets/css',
        js: './dist/assets/js',
        img: './dist/assets/images',
        fonts: './dist/assets/fonts',
    },
    src: {
        base: './src',
        html: './src/**/*.html',
        css: './src/tailwind.css', // Your Tailwind entry file
        cssAll: './src/assets/css/**/*.css', // Path to all CSS files
        js: './src/assets/js/**/*.js',
        img: './src/assets/images/**/*', // Source for images
        fonts: './src/assets/fonts/**/*',
        partials: './src/partials/**/*.html',
    },
};

// Clean task to remove dist folder contents
gulp.task('clean', function () {
    return deleteAsync([`${paths.dist.base}/**/*`]); // Delete all files in dist folder
});

// Process and Minify Tailwind CSS
gulp.task('css', function () {
    return gulp
        .src(paths.src.css)
        .pipe(sourcemaps.init())
        .pipe(postcss([tailwindcss(), autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(rename({ basename: 'style', suffix: '.min' })) // Rename to style.min.css
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dist.css));
});

// Copy all CSS files
gulp.task('copy-css', function () {
    return gulp
        .src(paths.src.cssAll)
        .pipe(gulp.dest(paths.dist.css)); // Copy to dist folder
});

// Process HTML files
gulp.task('html', function () {
    return gulp
        .src([paths.src.html, '!' + paths.src.partials])
        .pipe(fileinclude({ prefix: '@@', basepath: '@file', indent: true }))
        .pipe(gulp.dest(paths.dist.base));
});

// Process JavaScript files
gulp.task('js', function () {
    return gulp
        .src(paths.src.js)
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.js));
});

// Copy fonts
gulp.task('copy-fonts', function () {
    return gulp
        .src(paths.src.fonts,{ encoding: false })
        .pipe(gulp.dest(paths.dist.fonts)); // Copy to dist/fonts folder
});

// Copy images
gulp.task('images', function () {
    return gulp
        .src(paths.src.img, { encoding: false })
        .pipe(imagemin({
            verbose: true, // Enable verbose output
            interlaced: false, // Disable interlacing
        }))
        .pipe(gulp.dest(paths.dist.img));
});


// Define the browsersync task
gulp.task('browsersync', function () {
    browsersyncInstance.init({
        server: {
            baseDir: paths.dist.base,
            index: 'index.html',
        },
        open: 'external', // Open the browser externally
        startPath: '/index.html', // Specify the path to open on star
    });
});

// Watch task for file changes
gulp.task('watch', function () {
    gulp.watch(paths.src.css, gulp.series('css', browsersync.reload));
    gulp.watch(paths.src.html, gulp.series('html', browsersync.reload));
    gulp.watch(paths.src.js, gulp.series('js', browsersync.reload));
    gulp.watch(paths.src.fonts, gulp.series('copy-fonts', browsersync.reload));
    gulp.watch(paths.src.img, gulp.series('images', browsersync.reload)); // Watch for image changes
});

// Define the default task
gulp.task('default', gulp.series('clean', gulp.parallel('css', 'copy-css', 'html', 'js', 'images','copy-fonts'), gulp.parallel('browsersync', 'watch')));
