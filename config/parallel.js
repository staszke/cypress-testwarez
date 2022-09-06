const { defineConfig } = require("cypress");
const base = require("./base");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    ...base,
    baseUrl: 'https://jobs.gft.com',
    specPattern: 'cypress/e2e/parallel/*.spec.js',
    projectId: 'testwarez-demo',
    video: true
  },
});
