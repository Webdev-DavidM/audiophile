import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { CartContextProvider } from "./ context/cartContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <CartContextProvider item={""}>
      <App />
    </CartContextProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
