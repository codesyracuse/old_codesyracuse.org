module.exports = {
  plugins: [
    require("postcss-import"),
    require('postcss-nesting'),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
  ]
};
