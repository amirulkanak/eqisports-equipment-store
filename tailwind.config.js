module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Custom media queries screen size
      screens: {
        xs: '340px',
        tab: '834px',
        pc: '1320px',
      },
      // Custom font family
      fontFamily: {
        manrope: ['"Manrope"', 'sans-serif'],
      },
      // Custom colors
      colors: {
        'clr-light': '#e8e8e8',
        'clr-dark2': '#212121',
        'clr-dark': '#1d2330',
        'clr-darker': '#13161f',
      },
    },
  },
  plugins: [],
};
