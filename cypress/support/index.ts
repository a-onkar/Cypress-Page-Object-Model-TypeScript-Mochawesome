// Import commands.js using ES2015 syntax:
import "dayjs";
import "./commands";

// To turn off all uncaught exception handling
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);
  }
});
