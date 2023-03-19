import Banner from "./Banner";

describe("Banner component", () => {
  it("renders", () => {
    cy.mount(<Banner />);
    cy.getBySel("banner-bg").should("exist");
    cy.getBySel("banner-title").should("have.text", "Fashion Collection");
    cy.getBySel("banner-text").should(
      "have.text",
      "Upgrade your wardrobe with fashionable items that keep you shine and fabulous."
    );
    cy.getBySel("banner-btm").should("have.text", "View the collection");
  });
});
