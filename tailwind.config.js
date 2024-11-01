const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        kaushan: ["Kaushan Script", "cursive"],
        dm: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        primary: '0px 4.12121px 49.4545px rgba(0, 0, 0, 0.08)',
      },
      screens: {
        xxs: { max: "280px" },
        xs: { max: "575px" },
        "xs-to-min": {min: "576px"},
        sm: { min: "576px", max: "767px" },
        md: { min: "768px", max: "991px" },
        lg: { min: "992px", max: "1199px" },
        xl: { min: "1200px", max: "1399px" },
        "2xl": { min: "1400px", max: "1799px" },
        "3xl": { min: "1800px", max: "1999px" },
        "4xl": { min: "2000px", max: "2399px" },
        "5xl": { min: "2400px", max: "2599px" },
        "6xl": { min: "2600px", max: "2799px" },
        "7xl": { min: "2800px", max: "2999px" },
        "xs-to-sm-max": { max: "767px" },
        "xs-to-sm-min": { min: "768px" },
        "xs-to-md-max": { max: "991px" },
        "xs-to-md-min": { min: "992px" },
        "xs-to-lg-max": { max: "1199px" },
        "xs-to-lg-min": { min: "1200px" },
        "xs-to-xl-max": { max: "1399px" },
        "xs-to-xl-min": { min: "1400px" },
        "xs-to-xxl-max": { max: "1599px" },
        "xs-to-xxl-min": { min: "1599px" },
      },
      inset: {
        "25p": "25%",
        "18p": "18%",
      },
      keyframes: {
        slideRight: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(100%)",
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulseBorder: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1.5)',
            opacity: '0',
          },
        },
        "button-rotate": {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.5) rotate(180deg)" },
          "100%": { transform: "scale(1) rotate(360deg)" },
        },
      },
      animation: {
        "slide-right": "slideRight 2s infinite",
        "button-rotate": "button-rotate 2s ease-in-out infinite",
        "pulse-border": "pulseBorder 1500ms ease-out infinite",
        "fade-in-down": "fade-in-down 0.5s ease-out"
      },
      backgroundImage: {
        'available-card': 'linear-gradient(180deg, #daedef 0%, rgba(218, 237, 239, 0) 98.91%)',
      },
      colors: {
        white: '#fff',
        light: '#d8dbe0',
        dark: '#28292c',
        info: '#0dcaf0',
        body: '#fff',

        primary: '#017b6e',
        secondary: '#f26f55',
        tertiary: '#39a1f0',
        'primary-soft': '#daedef',
        'primary-soft-two': '#efeedb',

        'primary-rgb': 'rgb(1, 123, 110)',
        'secondary-rgb': 'rgb(242, 111, 85)',

        'primary-title': '#071516',
        'secondary-title': '#505a59',
        'tertiary-title': '#95b2b4',
        'pure-black': '#000',

        'primary-paragraph': '#4b5051',
        'secondary-paragraph': '#333333',
        'tertiary-paragraph': '#787787',

        'primary-btn': '#017b6e',
        'secondary-btn': '#ffd502',
        'tertiary-btn': '#090e0d',

        'ratting-color': '#fcac17',
        'ratting-color-rgb': 'rgb(255, 193, 7)',

        'section-bg-one': '#fffff3',
        'section-bg-two': '#f5f7f9',
        'section-bg-three': '#e5f1ff',

        'primary-border': '#c7d2d8',
        'secondary-border': '#dddddd70',
        'tertiary-border': '#eaebee',

        'primary-gray': '#cccdd3',
        'secondary-gray': '#f8f8f8',

        dark: '#fff',
        'dark-body': '#12151e',

        'dark-primary': '#222839',
        'dark-secondary': '#f26f55',
        'dark-tertiary': '#39a1f0',
        'dark-primary-soft': '#161B22',

        'dark-primary-title': '#F4F5F6',
        'dark-secondary-title': '#F4F5F6',
        'dark-tertiary-title': '#F4F5F6',

        'dark-primary-paragraph': '#8f94a3',
        'dark-secondary-paragraph': '#414456',

        'dark-primary-btn': '#24292F',
        'dark-secondary-btn': '#39a1f0',
        'dark-tertiary-btn': '#304839',

        'dark-section-bg-one': '#f2f2f2',
        'dark-section-bg-two': '#f2f2f2',
        'dark-section-bg-three': '#f2f2f2',

        'dark-primary-border': 'rgba(248,250,252,.17)',
        'dark-primary-border2': 'rgba(248,250,252,.08)',

        'dark-panel-bg': '#F4F6FA',
        'dark-gray-text': '#969696',

        'dark-bg1': '#24292F',
        'dark-bg2': '#161B22',
        'dark-bg3': '#272727',
        'dark-bg4': '#252525',
        'dark-bg5': '#2C2C2C',
        'dark-bg6': '#2E2E2E',
      },
      translate: {
        full: "100%",
      },
      zIndex: {
        100: "100",
      },
      spacing: {},
      fontSize: {
        xxs: "0.625rem", // 10px
        xs: "0.6875rem", // 11px
        sm: "0.75rem", // 12px
        "2sm": "0.8125rem", // 13px
        md: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.375rem", // 22px
        "3xl": "1.5rem", // 24px
        "4xl": "1.625rem", // 26px
        "5xl": "1.75rem", // 28px
        "6xl": "1.875rem", // 30px
        "7xl": "2rem", // 32px
        "8xl": "2.125rem", // 34px
        "9xl": "2.25rem", // 36px
        "10xl": "2.375rem", // 38px
        "11xl": "2.5rem", // 40px
        "12xl": "2.625rem", // 42px
        "13xl": "2.75rem", // 44px
        "14xl": "2.875rem", // 46px
        "15xl": "3rem", // 48px
        "16xl": "3.125rem", // 50px
        "17xl": "3.25rem", // 52px
        "18xl": "3.375rem", // 54px
        "19xl": "3.5rem", // 56px
        "20xl": "3.625rem", // 58px
        "21xl": "3.75rem", // 60px
        "22xl": "3.875rem", // 62px
        "23xl": "4rem", // 64px
        "24xl": "4.125rem", // 66px
        "25xl": "4.25rem", // 68px
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          margin: 'auto',
          padding:'0px 12px',
          '@screen xs-to-min': {
            maxWidth: '540px',
          },  
          '@screen xs-to-sm-min': {
            maxWidth: '720px',
          },
          '@screen xs-to-md-min': {
            maxWidth: '960px',
          },
          '@screen xs-to-lg-min': {
            maxWidth: '1140px',
          },
          '@screen xs-to-xl-min': {
            maxWidth: '1320px',
          },
        }
      });
    })
  ],
};

// Custom Spacing
function generateSpacingValues(start, end, step) {
  const spacing = {};
  for (let i = start; i <= end; i += step) {
    spacing[i] = `${i}px`;
  }
  return spacing;
}

module.exports.theme.extend.spacing = generateSpacingValues(1, 1000, 1);
