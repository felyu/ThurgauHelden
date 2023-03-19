/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}","./navigation/**/*.{js,jsx,ts,tsx}","./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        etk_darkgray : "#313131",
        etk_gray : "#DDDEE3",
        etk_red : "#F00100",
        etk_darkred : "#AF0605",
      },
      fontFamily: {
        example: ["chivo-black"],
      },
    }
  },
  plugins: [],
}
