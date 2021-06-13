export {};

// Different ways to declare & define custom commands

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<Element>;
      dataCy2: typeof dataCy2;
    }
  }
}


Cypress.Commands.add("dataCy", (value) => {
  return cy.get(`[data-cy=${value}]`);
});

function dataCy2(value: string): Cypress.Chainable{
  return cy.get(`[data-cy=${value}]`);
}
Cypress.Commands.add('dataCy2', dataCy2);