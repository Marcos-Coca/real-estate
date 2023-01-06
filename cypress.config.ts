import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "5w73z7",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    // specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
  },
  video: false,
  videoUploadOnPasses: false,
});
