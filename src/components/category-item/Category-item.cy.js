import CategoryItem from "./Category-item";

const categories = [
  {
    id: 1,
    name: "Hats Collection",
    imageSrc: "https://i.ibb.co/cvpntL1/hats.png",
    imageAlt: "",
    description: "",
  },
  {
    id: 2,
    name: "Jackets Collection",
    imageSrc: "https://i.ibb.co/px2tCc3/jackets.png",
    imageAlt: "",
    description: "",
  },
];

describe("CategoryItem component", () => {
  it("mount", () => {
    cy.mount(<CategoryItem categories={categories} />);
    cy.getBySel("title").should("have.text", "Shop by Collection");
    cy.getBySel("text").should(
      "have.text",
      "Each season, we collaborate with world-class designers to create a collection inspired by the modern world."
    );
    cy.getBySel("category-item").should("have.length", 2);
  });
});
