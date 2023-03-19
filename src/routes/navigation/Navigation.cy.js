import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Navigation Component", () => {
  it("renders", () => {
    cy.mount(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    cy.getBySel("nav").should("exist");
    cy.getBySel("logo").should("exist");
    cy.getBySel("collections").should("have.text", "Collections");
    cy.getBySel("signin").should("have.text", "Sign In");
    cy.getBySel("cart").should("exist");
  });
});
