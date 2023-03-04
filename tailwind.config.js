/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
        "light-purple": "hsl(249, 99%, 64%)",
        "medium-purple": "hsl(278, 94%, 30%)",
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
        "error-red": "hsl(0, 100%, 66%)",
        "spg-cyan": "hsl(179, 62%, 43%)",
        "spg-light-cyan": "hsl(167, 68%, 47%)",
        "spg-bright-yellow": "hsl(71, 73%, 54%)",
        "spg-light-grey": "hsl(0, 0%, 98%)",
        "spg-grayish-blue": "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
