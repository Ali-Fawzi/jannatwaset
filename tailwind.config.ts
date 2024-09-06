import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        wheat: "#F5EFE0",
        ash: '#F6F5F2',
        ground: '#404A3D',
        yellow: '#F1CF69',
        darkYellow: '#F7C35F',
        green: '#5EC79C',
        green2: '#55b58d',
        darkGreen: '#255946',
      }
    },
  },
  plugins: [],
} satisfies Config;
