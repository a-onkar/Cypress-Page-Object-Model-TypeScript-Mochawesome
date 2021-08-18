import dayjs = require("dayjs");
import BooksPage from "../pageObjects/books.page";
import LoginPage from "../pageObjects/login.page";

describe("Regression Suite", () => {
  const booksObj = new BooksPage();
  const loginObj = new LoginPage();

  before(() => {
    cy.clearCookies();
  });

  let testdata: any;
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.fixture("test-data").then((data) => (testdata = data));
  });

  it("Login", () => {
    cy.visit(booksObj.url);
    booksObj.getLoginButton().click();
    loginObj.getUserNameField().type(testdata.username);
    loginObj.getPasswordField().type(testdata.password);
  });
});
