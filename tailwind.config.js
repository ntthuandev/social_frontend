/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#0095f6",
        "primary-600": "#3572EF",
        "error-500": "#FF204E",
      },
    },
  },
  plugins: [],
};
