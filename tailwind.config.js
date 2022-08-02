module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Chicago Plain",'-apple-system','BlinkMacSystemFont',"Segoe UI",'Roboto',"Helvetica Neue",'Arial','sans-serif'],
      },
      colors: {
        brand: {
          green: {
            100: "#4AB786",
            200: "#42A378",
            300: "#3A8F6A",
            400: "#327B5C",
            500: "#2A684E",
            600: "#21543F",
            700: "#194031",
            800: "#112C23",
            900: "#091815",
          },
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
