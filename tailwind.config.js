module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      //inserindo novas cores na paleta de cores do tailwind
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257e6",
        },
        boderRadius: {
          md:'4px'
        }
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
};
