export class Selectors {
  static byQa(value) {
    return `[data-qa="${value}"]`;
  }

  static byName(name) {
    return `[name="${name}"]`;
  }

  static byId(id) {
    return `#${id}`;
  }

  static textNotification(text) {
    return cy.contains('p', new RegExp(text, 'i'));
  }

  static viewProductLink(productId) {
    return `a[href="/product_details/${productId}"]`;
  }

  //
  static homeIcon = '#header .fa-home';  
  static signupTitle = '.signup-form h2'; 
  static loginTitle = '.login-form h2'; 
  static productsTitle = '.col-sm-9 .features_items h2';
  static accountInformationTitle = '.login-form b'; 
  static header = '#header a'; 
  static deleteButton = '.fa-trash-o';
  static logoutButton = '[href="/logout"]';
  static loginButton = '[href="/login"]';
  static productsButton = '[href="/products"]';
  static productInformationTitle = '.product-information h2';
  static productInformationPrice = '.product-information span';
  static testCasesButton = '.nav [href="/test_cases"]';
  static reviewsText = 'a[href="#reviews"]';
  static category = '.left-sidebar h2';
}