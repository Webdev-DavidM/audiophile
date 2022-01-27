import React, { useContext } from "react";
import "../../scss/cart-modal.scss";
import { CartContext } from "../../ context/cartContext";
import "../../App.scss";

export default function CartModal() {
  const { items, removeAllProducts } = useContext(CartContext);
  return (
    <div
      data-testid="cart"
      className="cart-modal cart-modal--navbar-not-covered"
    >
      <div className="cart-modal__container">
        <div data-testid="product-name" className="">
          {items.length > 0 && items[0].name}
        </div>
        <button onClick={() => removeAllProducts()}>EMPTY CART</button>
      </div>
    </div>
  );
}
