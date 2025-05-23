import { BasePage } from "../pageObjects/BasePage";
import { Selectors } from "../pageObjects/Selectors";
import { faker } from '@faker-js/faker';

describe('signup spec', () => {
    const fullName = faker.person.fullName();
    const fakeName = faker.person.firstName();
    const fakeSurname = faker.person.firstName();
    const fakeCompany = faker.company.name();
    const fakeAddress = faker.address.streetAddress();
    const fakeEmail = faker.internet.email({ fullName: fakeName.split(' ')[0] });

  beforeEach(() => {
    cy.openHomePage();
    BasePage.isVisible(Selectors.homeIcon);
    BasePage.click(Selectors.loginButton);
    BasePage.hasText(Selectors.signupTitle, 'New User Signup!');
  })

  it('Register user', () => {
    BasePage.type(Selectors.byQa("signup-name"), fakeName);
    BasePage.type(Selectors.byQa("signup-email"), fakeEmail);
    BasePage.click(Selectors.byQa("signup-button"));

    BasePage.hasText(Selectors.accountInformationTitle, 'Enter Account Information');

    BasePage.check('[type="radio"][value="Mr"]');
    BasePage.type(Selectors.byQa("name"), fakeName);
    BasePage.type(Selectors.byQa("password"), "123456");
    BasePage.selectOption(Selectors.byQa("days"), '1');
    BasePage.selectOption(Selectors.byQa("months"), 'January');
    BasePage.check('[type="checkbox"][id="newsletter"]');
    BasePage.check('[type="checkbox"][id="optin"]');

    BasePage.type(Selectors.byQa("first_name"), fakeName);
    BasePage.type(Selectors.byQa("last_name"), fakeSurname);
    BasePage.type(Selectors.byQa("company"), fakeCompany);
    BasePage.type(Selectors.byQa("address"), fakeAddress);
    BasePage.type(Selectors.byQa("address2"), fakeAddress);
    BasePage.selectOption(Selectors.byQa("country"), 'United States');

    BasePage.type(Selectors.byQa("state"), 'California');
    BasePage.type(Selectors.byQa("city"), 'San Francisco');
    BasePage.type(Selectors.byQa("zipcode"), '1000');
    BasePage.type(Selectors.byQa("mobile_number"), '+3897770000');
    BasePage.click(Selectors.byQa("create-account"));

    BasePage.hasText(Selectors.byQa("account-created"), 'Account Created!');
    BasePage.click(Selectors.byQa("continue-button"));
    BasePage.hasText(Selectors.header, ' Logout');
    BasePage.click(Selectors.deleteButton);
    BasePage.hasText(Selectors.byQa("account-deleted"), 'Account Deleted!');
  })

  it('Register user with existing email', () => {
    BasePage.type(Selectors.byQa("signup-name"), "TestName");
    BasePage.type(Selectors.byQa("signup-email"), "testmail@yopmail.com");
    BasePage.click(Selectors.byQa("signup-button"));

    Selectors.textNotification('Email Address already exist!').should('be.visible');
  })

  afterEach(() => {
    cy.clearSession();
  });
})