import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Header from "./Header";
import { locateByTestAttr } from "../test/testUtils";

describe("test", () => {
  let wrapper;
  let mockMenuState = jest.fn();
  let originalUseState;

  beforeEach(() => {
    mockMenuState.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockMenuState]);
    wrapper = shallow(<Header />);
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test("The component renders to the page", () => {
    let wrapper = shallow(<Header />);
    const headerComponent = locateByTestAttr(wrapper, "header");
    expect(headerComponent.exists()).toBe(true);
  });

  test("When the hamburger menu button is pressed, the state showDropMenu is updated to true", () => {
    let hamburgerButton = locateByTestAttr(wrapper, "hamburger");
    hamburgerButton.simulate("click");
    expect(mockMenuState).toHaveBeenCalledWith(true);
  });
});
