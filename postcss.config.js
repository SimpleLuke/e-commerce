const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");

module.exports = {
  plugins: [postcss, autoprefixer, tailwindcss("./tailwind.config.js")],
};
