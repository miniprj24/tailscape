/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", // Include your HTML files
    "./src/**/*.{js,jsx,ts,tsx}"], // Include all React component files],
  theme: {
    extend: { colors: {
      customRed: "#ff4d4f", // Add your desired color
    },},
  },
  plugins: [],
}


