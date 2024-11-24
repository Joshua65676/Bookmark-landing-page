/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        SoftBlue: "hsl(231, 69%, 60%)",
        SoftRed: "hsl(0, 94%, 66%)",
        GrayishBlue: "hsl(229, 8%, 60%)",
        DarkBlue: "hsl(229, 31%, 21%)",
      },
      screens: {
        sm: "300px",
        mx: "350px",
        xm: "410px",
        md: "768px",
        lg: "876px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
