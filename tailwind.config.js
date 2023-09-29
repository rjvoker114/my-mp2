/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      screens: {
        'sm': '640px',  // Small screens (e.g., mobile)
        'md': '768px',  // Medium screens (e.g., tablets)
        'lg': '1024px', // Large screens (e.g., desktops)
      },
    },
  plugins: [],
}
}