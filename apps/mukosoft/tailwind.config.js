const { createGlobPatternsForDependencies } = require("@nrwl/angular/tailwind");
const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        "card-background": "#ffffff",
        primary: "#e6dcf4",
        "primary-contrast": "#00152b",
        "primary-shade": "#b4aac1",
        "primary-tint": "#ffffff",
        secondary: "#00152b",
        "secondary-contrast": "#ffffff",
        "secondary-shade": "#000000",
        "secondary-tint": "#2a3b54",
        danger: "#eb445a",
        body: "#F5F6F8",
      },
    },
  },
  plugins: [],
};
