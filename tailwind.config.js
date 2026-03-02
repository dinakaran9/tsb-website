
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {50:'#fff1f1',100:'#ffe0e0',200:'#ffc7c7',300:'#ffa0a0',400:'#ff6a6a',500:'#e11d2f',600:'#c91928',700:'#a11420',800:'#7b0f18',900:'#5d0b12'},
          gray: {25:'#fcfcfd',50:'#f9fafb',100:'#f2f4f7',200:'#e4e7ec',300:'#d0d5dd',400:'#98a2b3',500:'#667085',600:'#475467',700:'#344054',800:'#1d2939',900:'#0f1728'}
        }
      }
    }
  },
  plugins: [],
}
