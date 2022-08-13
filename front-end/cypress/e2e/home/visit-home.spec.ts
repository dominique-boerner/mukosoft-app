import { HOME_ELEMENTS } from "cypress/support/elements";
import { URLS } from "cypress/support/urls"

describe('Visiting the home page', () => {
  it('should show the default name, if no name is saved', () => {
    cy.visit(URLS.home);
    cy.get(HOME_ELEMENTS.GREETING_TITLE).contains("Hallo Nutzer!");
  })

  it('should show the users name, if the name is given', () => {
    cy.visit(URLS.home);
    cy.get(HOME_ELEMENTS.GREETING_TITLE).contains("Hallo Max!");
  })
})
