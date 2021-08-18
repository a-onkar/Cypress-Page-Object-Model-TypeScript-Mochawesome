export default class LoginPage {
  url = "/books";
  private userNameField = "#userName";
  private passwordField = "#password";
  private loginButton = "#login";
  // private newUserButton = "#newUser";

  getUserNameField() {
    return cy.get(this.userNameField).should("be.visible");
  }

  getPasswordField() {
    return cy.get(this.passwordField).should("be.visible");
  }

  getLoginButton() {
    return cy.get(this.loginButton).should("be.visible");
  }
}
