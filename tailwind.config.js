module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': {'min': '827px',},
    },
    extend: {},
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'gilroy': ['Gilroy', 'sans-serif'],
      'tt-norms-pro': ['TTNormsPro', 'sans-serif'],
    },
  },
  plugins: [],
}