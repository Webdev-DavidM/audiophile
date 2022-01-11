import React from "react";
import Enzyme, { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { locateByTestAttr } from "../../test/testUtils";
import App from "../../App";

//i use one describe here because none of the data will conflict as I just testing
// earphones //

describe("renders the correct items to the screen", () => {
  // Memory router allows you to add a initial url params at the start of the test, so in this case I can mount the
  // app and then test it casues the correct category products ot be displayed based on the category param
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/category/earphones"]}>
        <App />
      </MemoryRouter>
    );
  });

  test("When a category is shown in the url, the correct category items are shown", () => {
    let category = locateByTestAttr(wrapper, "category-title");
    console.log(category.text());
    expect(category.text()).toBe("earphones");
  });

  // Where are the props coming from?

  test("When a product is displayed it shows an image, title, description and button", () => {});
});
