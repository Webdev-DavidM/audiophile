import React from "react";
import Enzyme, { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
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
    expect(product.text()).toBe("XX59 HEADPHONES");
  });
});

/*Build out the whole css of the page now including the data-test atrributes for the tests below */

describe("These tests check if the button functionality works for the product", () => {
  test("When quality of 1 is selected, the - button is disabled", () => {});
  test("If the user tries to select more than the amount in stock, they are prevented and an error message shows", () => {});
  test("If a user types in a number and presses add to cart the context function is called to add this with that number", () => {});
  test("When an item is put in the basket via context, the basket icon show a number in it, need mount and context for this", () => {});
});

/* Write the functional code for the tests above to pass, component complete!!! */
