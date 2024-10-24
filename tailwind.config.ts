import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#003771',     // Azul índigo vibrante
        secondary: '#B0C1D3',   // Morado suave
        accent: '#6BE1B5',      // Morado oscuro para énfasis
        background: '#F2F2F2',  // Fondo gris claro
        neutral: '#303030',     // Texto gris oscuro
        footer: '#10221E',      // Gris mediano para detalles
      },
      fontFamily: {
        sans: [
          "Lato",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      backgroundImage:{
        'custom-gradient': 'linear-gradient(269.78deg, #29574D -16.46%, #10221E 118.27%)',
      }
    },
  },
  plugins: [],
} satisfies Config;
