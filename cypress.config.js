const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
    projectId: "gyts1u",
    experimentalStudio:true,
    // ...rest of the Cypress project config
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
