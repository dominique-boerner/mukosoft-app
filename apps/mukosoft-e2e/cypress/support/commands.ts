import { home, HomeSelectorIdentifier } from "./selectors";

const BASE_URL = "localhost:4200";

/**
 * Get a specific element from the home screen.
 */
Cypress.Commands.add(
  "getHomeElement",
  (homeSelectorIdentifier: HomeSelectorIdentifier) => {
    return cy.get(home[homeSelectorIdentifier]);
  }
);

/**
 * Visit the home screen.
 */
Cypress.Commands.add("visitHome", () => {
  cy.visit(`${BASE_URL}/tabs/home`);
});

/**
 * Declaration of global cypress namespace.
 */
declare global {
  namespace Cypress {
    interface Chainable {
      visitHome(): void;
      getHomeElement(homeSelectorIdentifier: HomeSelectorIdentifier): Chainable;
    }
  }
}
