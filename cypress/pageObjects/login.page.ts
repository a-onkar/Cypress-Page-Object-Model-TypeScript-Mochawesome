export default class LoginPage {
  url = "/books";
  private userNameField = "#userName";
  private passwordField = "#password";
  private loginButton = "#login";
  // private newUserButton = "#newUser";

  getUserNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.userNameField).should("be.visible");
  }

  getPasswordField(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.passwordField).should("be.visible");
  }

  getLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.loginButton).should("be.visible");
  }
}
