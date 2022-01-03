import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../components/Header";
import findByTestAttr from "../test/testUtils";

test("The component renders to the page", () => {
  // eslint-disable-next-line testing-library/await-async-query
  const headerComponent = findByTestAttr("header");
  expect(headerComponent.exists()).toBe(true);
});
/*

1. The component renders to the page


2. When the screen is less than 768 the hamburger menu shows
3. the screen is more than 768 the links show
4. When the hamburger menu is clicked the menu expands and the three main categories are shown
5. When you click the categories the slug is shown in the params url
6. When an item is put in the basket, the basket icon show a number in it



*/
