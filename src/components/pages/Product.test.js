/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router, BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Product from "././Product";
import App from "../../App";

test("landing on a bad page", async () => {
  const history = createMemoryHistory();
  history.push("/product/xx99-mark-one-headphones");
  console.log(history.location);
  render(<App />);
  //The product page should be displayed and the product displayed and the price displayed as
  // part of the product details
  let price = await screen.findByText("1750");
  console.log(price);
  expect(price).toBeInTheDocument();
});
