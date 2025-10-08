/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          tron: {
            bg: "#05070A",
            cyan: "#00FFF5",
            blue: "#00B3FF",
            magenta: "#FF3D81",
            text: "#E5E7EB"
          }
        },
        boxShadow: {
          neon: "0 0 20px rgba(0,255,245,.5), 0 0 40px rgba(0,179,255,.35)"
        }
      }
    },
    plugins: []
  };
  