/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "390px",
        xm: "500px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        darkblue: "#0C5BC6",
        semilightblue: "#C6DEFF",
        lightwhite: "rgba(255, 255, 255, 0.53)",
        semiwhite: "#FCFCFF",
        lightblue: "rgba(65, 146, 255, 0.30)",
        semiblack: "#C6DEFF1A",
      },
      textColor: {
        semiblack: "#242331",
        semigrey: "#797979",
        darkblue: "#0C5BC6",
        lightpurple: "#494369",
        semilightpurple: "#5E587A",
        darkpurple: "#332C5C",
      },
      boxShadow: {
        infra: "0px 20px 80px 0px rgba(0, 0, 0, 0.03)",
        infraimg:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 25px 40px 0px rgba(0, 0, 0, 0.05)",
        testimonial:
          "-5px -5px 15px 0px rgba(0, 0, 0, 0.10) inset, 5px 5px 15px 0px rgba(0, 0, 0, 0.10)",
      },
      fontSize: {
        px10: "10px",
        px12: "12px",
        px14: "14px",
        px28: "28px",
        px176: "176px",
        "clamp-heading-sm": "clamp(16px, 5vw, 36px)",
        "clamp-heading": "clamp(20px, 5vw, 44px)",
        "clamp-heading-md": "clamp(24px, 5vw, 56px)",
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
