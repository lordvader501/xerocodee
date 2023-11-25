/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        darkblue: "#0C5BC6",
        lightwhite: "rgba(255, 255, 255, 0.53)",
        semiwhite: "#FCFCFF",
        lightblue: "rgba(65, 146, 255, 0.30)",
      },
      textColor: {
        semiblack: "#242331",
        semigrey: "#797979",
        darkblue: "#0C5BC6",
        lightpurple: "#494369",
      },
      fontSize: {
        px56: "56px",
        px44: "44px",
        px12: "12px",
        px28: "28px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
