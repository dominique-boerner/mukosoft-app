describe("visit home", () => {
  it("should contain default a greeting", () => {
    cy.visitHome();
    cy.getHomeElement("greetingTitle").contains("Hallo Nutzer!");
    cy.getHomeElement("greetingSubtitle").contains("Wie geht es dir heute?");
  });

  it("should contain a default avatar", () => {
    cy.getHomeElement("avatarImage");
  });

  it("should not contain a title for medications", () => {
    cy.getHomeElement("medicationTitle").should("not.exist");
  });

  it("should not contain next medications", () => {
    cy.getHomeElement("medication").should("not.exist");
  });
});
