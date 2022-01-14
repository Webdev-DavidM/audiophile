import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { locateByTestAttr } from "../../test/testUtils";
import App from "../../App";
import data from "../../data.json";
import Product from "../pages/Product";

//i use one describe here because none of the data will conflict as I just testing
// earphones //

describe("renders the correct items to the screen", () => {
  // Memory router allows you to add a initial url params at the start of the test, so in this case I can mount the
  // app and then test it casues the correct category products ot be displayed based on the category param
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/product/xx59-headphones"]}>
        <App productData={data.products} />
      </MemoryRouter>
    );
  });

  test("I expect there to be a goback section, product details section, features section, in the box section ,images section rendered on the page and carousel section", () => {
    let goBackSection = locateByTestAttr(wrapper, "go-back-section");
    expect(goBackSection.length).toBeGreaterThan(0);
    let productDetailsSection = locateByTestAttr(
      wrapper,
      "product-details-section"
    );
    expect(productDetailsSection.length).toBeGreaterThan(0);
    let featuresSection = locateByTestAttr(wrapper, "features-section");
    expect(featuresSection.length).toBeGreaterThan(0);
    let inTheBoxSection = locateByTestAttr(wrapper, "in-the-box-section");
    expect(inTheBoxSection.length).toBeGreaterThan(0);
    let imagesSection = locateByTestAttr(wrapper, "images-section");
    expect(imagesSection.length).toBeGreaterThan(0);
    let carouselSection = locateByTestAttr(wrapper, "carousel-section");
    expect(carouselSection.length).toBeGreaterThan(0);
  });

  test("When a product is shown in the url, the correct product title is shown in the product section", () => {
    let product = locateByTestAttr(wrapper, "product-title");
    expect(product.first().text()).toBe("XX59 HEADPHONES");
  });
});

describe("These tests check if the button functionality works for the product with one item in state", () => {
  let originalUseState;
  let wrapper;

  // originalUseState = React.useState;
  // React.useState = jest.fn(() => [1, null]);

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/product/xx59-headphones"]}>
        <App />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    // React.useState = originalUseState;
  });

  // test("When quality of 1 is selected, the - button is disabled", () => {
  //   let minusButton = locateByTestAttr(wrapper, "minus-button");
  //   expect(minusButton).find().prop("disabled").length.toBeGreaterThan(0);
  //   /* I will be holding the quality in state in the component, I will mock the state quantity to be one, make the quantity is the first peice of state before the product, I will then expect the button to be disbaled, then write the test
  //    */
  // });
});

// test(
//   "When the quantity is more than 1, then the minus button is not disabled anymore"
// );
// test(
//   "if the user presses the plus, button, the quantity shown is increased by one"
// );

// describe("The test check the functionality for when the maximum amount of a product has been selected", () => {
//   test("If the user tries to select more than the amount in stock, they are prevented and an error message shows", () => {});
//   test(
//     "if the user presses the minus, button, the quantity shown is decreased by one"
//   );
// });

// describe("These tests check the functionality of the add to cart button and adding tiems ot context", () => {
//   test("If a user types in a number and presses add to cart the context function is called to add this with that number", () => {});
//   test("When an item is put in the basket via context, the basket icon show a number in it, need mount and context for this", () => {});
// });

/* Write the functional code for the tests above to pass, component complete!!! */
