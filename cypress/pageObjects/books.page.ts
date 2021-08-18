export default class BooksPage {
  url = "/books";
  private loginButton = "#login";
  private searchBox = "#searchBox";
  private logoutButton = "#submit";

  getLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.loginButton).should('be.visible');
  }

  getSearchBox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.searchBox).should('be.visible');
  }

  getLogoutButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.logoutButton).should('be.visible');
  }

}
