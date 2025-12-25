/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#139a4e",
        "background-light": "#f6f8f7",
        "background-dark": "#111814",
        "surface-dark": "#1c2620",
        "border-dark": "#29382f",
        "input-border": "#3c5346",
        "text-secondary": "#9db8a9",
      },
      fontFamily: {
        display: ["Inter", "Noto Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },
  },
};
