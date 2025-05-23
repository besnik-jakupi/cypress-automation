import { BasePage } from "../pageObjects/BasePage";
import { Selectors } from "../pageObjects/Selectors";

describe('test cases spec', () => {
  beforeEach(() => {
    cy.openHomePage();
  })

  it('Verify test cases page', () => {
    BasePage.isVisible(Selectors.homeIcon);
    BasePage.click(Selectors.testCasesButton);
    BasePage.validateUrl('/test_cases');
  })

  afterEach(() => {
    cy.clearSession();
  });
})