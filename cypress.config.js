module.exports = {
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      CYPRESS_USERNAME: process.env.CYPRESS_USERNAME,
      CYPRESS_PASSWORD: process.env.CYPRESS_PASSWORD,
    },
    setupNodeEvents(on, config) {
      // node event listeners
    },
  },
};
