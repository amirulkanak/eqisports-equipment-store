module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Custom media queries screen size
      screens: {
        xs: '340px',
        tab: '834px',
        pc: '1330px',
      },
      // Custom font family
      fontFamily: {
        manrope: ['"Manrope"', 'sans-serif'],
        playwrite: ['"Playwrite HR Lijeva"', 'cursive'],
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
