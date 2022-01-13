import React from "react";
import Enzyme, { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { locateByTestAttr } from "../../test/testUtils";
import App from "../../App";
import data from "../../data.json";

//i use one describe here because none of the data will conflict as I just testing
// earphones //

describe("renders the correct items to the screen", () => {
  // Memory router allows you to add a initial url params at the start of the test, so in this case I can mount the
  // app and then test it casues the correct category products ot be displayed based on the category param
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/category/earphones"]}>
        <App productData={data.products} />
      </MemoryRouter>
    );
  });

  test("When a category is shown in the url, the correct category name is shown in the header section", () => {
    let category = locateByTestAttr(wrapper, "category-header");
    expect(category.text()).toBe("EARPHONES");
  });

  test("When a product from the category is displayed is displayed it shows an image, title, description and button", () => {
    let categoryImage = locateByTestAttr(wrapper, "category-image");
    expect(categoryImage.length).toBeGreaterThan(0);
    let categoryTitle = locateByTestAttr(wrapper, "category-title");
    expect(categoryTitle.length).toBeGreaterThan(0);
    let categoryCopy = locateByTestAttr(wrapper, "category-copy");
    expect(categoryCopy.length).toBeGreaterThan(0);
    let categoryCTA = locateByTestAttr(wrapper, "category-cta");
    expect(categoryCTA.length).toBeGreaterThan(0);
  });
});
