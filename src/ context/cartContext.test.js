import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow, mount } from "enzyme";
import CartContextProvider from "./cartContext";

Enzyme.configure({ adapter: new Adapter() });

// a child functional component for our tests, a div tag just to reutrn jsx
const FunctionalComponent = () => {
  return <div />;
};

test("no error thrown when the provider is wrapped around the child component", () => {
  expect(() => {
    mount(
      <CartContextProvider>
        <FunctionalComponent />
      </CartContextProvider>
    );
  }).not.toThrow();
});
