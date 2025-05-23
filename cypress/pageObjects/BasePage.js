export class BasePage {
    static click(selector){
        cy.get(selector).click();
    }

    static hasText(selector, text){
        cy.get(selector).should('contain.text', text);
    }

    static doesNotExist(selector){
        cy.get(selector).should("not.exist");
    }

    static isVisible(selector){
        cy.get(selector).should("be.visible");
    }

    static validateUrl(expectedUrl) {
      cy.url().should('include', expectedUrl);
    }

    static type(selector, text){
        cy.get(selector).clear().type(text);
    }

    static openBasePage(){
        cy.visit("/");
    }

    static clickFirst(selector){
        cy.get(selector).first().click();
    }

    static selectOption(selector, option){
        cy.get(selector).select(option);
    }

    static validateAlert(expectedText) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal(expectedText);
        });
    }

    static clickByText(text) {
      cy.contains(text).click();
    }
    static check(selector) {
        cy.get(selector).check();
    }
}