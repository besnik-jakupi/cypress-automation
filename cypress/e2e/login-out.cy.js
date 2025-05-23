import { BasePage } from "../pageObjects/BasePage";
import { Selectors } from "../pageObjects/Selectors";

describe('login spec', () => {
  beforeEach(() => {
    cy.openHomePage();
    BasePage.isVisible(Selectors.homeIcon);
    BasePage.click(Selectors.loginButton);
    BasePage.hasText(Selectors.loginTitle, 'Login to your account');
  })

  it('Login user with incorrect email and password', () => {
    BasePage.type(Selectors.byQa("login-email"), "wrongmail@yopmail.com");
    BasePage.type(Selectors.byQa("login-password"), "wrongPass");
    BasePage.click(Selectors.byQa("login-button"));

    Selectors.textNotification('Your email or password is incorrect!').should('be.visible');
  })

  it('Login user with correct email and password', () => {
    BasePage.type(Selectors.byQa("login-email"), Cypress.env('CYPRESS_USERNAME'));
    BasePage.type(Selectors.byQa("login-password"), Cypress.env('CYPRESS_PASSWORD'));
    BasePage.click(Selectors.byQa("login-button"));

    BasePage.hasText(Selectors.header, ' Logout');
  });

  it('Logout user', () => {
    BasePage.type(Selectors.byQa("login-email"), Cypress.env('CYPRESS_USERNAME'));
    BasePage.type(Selectors.byQa("login-password"), Cypress.env('CYPRESS_PASSWORD'));
    BasePage.click(Selectors.byQa("login-button"));

    BasePage.hasText(Selectors.header, ' Logout');
    BasePage.click(Selectors.logoutButton);
    BasePage.isVisible(Selectors.loginButton);
  });

  afterEach(() => {
    cy.clearSession();
  });
})