export default class BooksPage {
  url = "/books";
  private loginButton = "#login";
  private searchBox = "#searchBox";

  getLoginButton() {
    return cy.get(this.loginButton).should('be.visible');
  }

  getSearchBox() {
    return cy.get(this.searchBox).should('be.visible');
  }

}
