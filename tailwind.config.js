import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class' , 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    ".flowbite-react/class-list.json"
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact],
}
