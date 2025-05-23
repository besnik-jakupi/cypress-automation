module.exports = {
  e2e: {
    baseUrl: 'https://www.automationexercise.com/',
    env: {
      CYPRESS_USERNAME: process.env.CYPRESS_USERNAME,
      CYPRESS_PASSWORD: process.env.CYPRESS_PASSWORD,
    },
    setupNodeEvents(on, config) {
      // node event listeners
    },
  },
};
