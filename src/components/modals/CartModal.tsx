import React, { useContext } from "react";
import "../../scss/cart-modal.scss";

export default function CartModal() {
  return (
    <div
      data-testid="cart"
      className="cart-modal cart-modal--navbar-not-covered"
    >
      <div className="cart-modal__container">CART</div>
    </div>
  );
}
