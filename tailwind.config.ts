import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#00A9E0",
        secondary: "#1D1D1D",
        info: "#1184E0",
        success: "#08875D",
        warning: "#F6BD11",
        error: "#E02D3C",
      },
      textColor: {
        lightPrimary: "#1D1D1D",
        lightSecondary: "#333333",
        lightDisabled: "#1D243350",
        darkPrimary: "#FFFFFF",
        darkSecondary: "#FFFFFF75",
        darkDisabled: "#FFFFFF50",
      },
    },

    screens: {
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      mg: "961px",
      // => @media (min-width: 961px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      xs: "480px",
      // => @media (min-width: 480px) { ... }
    },
  },
  plugins: [],
} satisfies Config;
