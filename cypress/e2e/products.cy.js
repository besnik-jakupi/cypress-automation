import { BasePage } from "../pageObjects/BasePage";
import { Selectors } from "../pageObjects/Selectors";

describe('products spec', () => {
  beforeEach(() => {
      cy.openHomePage();
      BasePage.isVisible(Selectors.homeIcon);
      BasePage.click(Selectors.productsButton);
      BasePage.validateUrl('/products');
  })

  it('Search product', () => {
    BasePage.type(Selectors.byId("search_product"), 'Premium Polo T-Shirts');
    BasePage.click(Selectors.byId("submit_search"));
    Selectors.textNotification('Premium Polo T-Shirts').should('be.visible');
  })

  it('Verify product detail page', () => {
    BasePage.click(Selectors.viewProductLink(1));
    BasePage.validateUrl('/product_details/1');

    BasePage.hasText(Selectors.productInformationTitle, 'Blue Top');
    Selectors.textNotification('Category: Women > Tops').should('be.visible');
    BasePage.hasText(Selectors.productInformationPrice, 'Rs. 500');

    Selectors.textNotification('Availability').should('be.visible');
    Selectors.textNotification('In stock').should('be.visible');
    Selectors.textNotification('Condition').should('be.visible');
    Selectors.textNotification('New').should('be.visible');
    Selectors.textNotification('Brand').should('be.visible');
    Selectors.textNotification('Polo').should('be.visible');
  })

  it('Add review on product', () => {
    BasePage.click(Selectors.viewProductLink(1));
    BasePage.validateUrl('/product_details/1');

    BasePage.hasText(Selectors.reviewsText, 'Write Your Review');

    BasePage.type(Selectors.byId("name"), "test");
    BasePage.type(Selectors.byId("email"), "test@yopmail.com");
    BasePage.type(Selectors.byId("review"), "test dummy text!");
    BasePage.click(Selectors.byId("button-review"));
    BasePage.validateAlert('Thank you for your review.');
  })

  it('View category products', () => {
    BasePage.hasText(Selectors.category, 'CategoryBrands');
    BasePage.clickByText('Women');
    BasePage.clickByText('Dress');
    BasePage.hasText(Selectors.productsTitle, 'Women - Dress Products');
    BasePage.clickByText('Men');
    BasePage.clickByText('Jeans');
    BasePage.hasText(Selectors.productsTitle, 'Men - Jeans Products');
  })

  afterEach(() => {
    cy.clearSession();
  });
})