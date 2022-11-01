describe("see the next medications at home", () => {
  it("should show the next medications", () => {
    cy.visitHome();
    cy.getHomeElement("greetingTitle").contains("Hallo Nutzer!");
    cy.getHomeElement("greetingSubtitle").contains("Wie geht es dir heute?");
  });

  it("should contain a title for medications", () => {
    cy.getHomeElement("medicationTitle").should("not.exist");
  });

  it("should contain next medications", () => {
    cy.getHomeElement("medication").should("not.exist");
  });
});
