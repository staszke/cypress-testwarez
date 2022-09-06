const { defineConfig } = require("cypress");
const base = require("./base");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    ...base,
    specPattern: '**/speedComparison/*.spec.js',
  },
});
