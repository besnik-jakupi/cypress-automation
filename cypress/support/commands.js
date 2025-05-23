Cypress.Commands.add('openHomePage', () => {
  cy.visit('/');
});

Cypress.Commands.add('clearSession', () => {
  cy.clearCookies();

  cy.window().then((win) => {
    win.localStorage.clear();
  });

  cy.window().then((win) => {
    win.sessionStorage.clear();
  });

  cy.log('Session cleared');
});