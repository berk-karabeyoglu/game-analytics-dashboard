/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        midgray: "#777777",
        sidebarActiveHeader: "#111111",
        logoutRed: "#FC2220",
        placeholderGray: "#999999",
        textSuccess: "#75F94C",
        textError: "#EB3223",
      },
    },
  },
  plugins: [],
};
