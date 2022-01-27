/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';

interface Items {
  name: string;
  value: number;
  quantity: number;
  image: string;
}

interface CartContextToGive {
  isLoggedIn: boolean;
  items: Items[] | [];
  decreaseQuantity: (item: string) => void;
  increaseQuantity: (item: string) => void;
  addProduct: (itemToAdd: Items) => void;
  removeAllProducts: () => void;
  showCart: () => void;
  showCartModal: boolean;
}

export const CartContext = React.createContext<CartContextToGive>({
  isLoggedIn: false,
  items: [],
  decreaseQuantity: () => null,
  increaseQuantity: () => null,
  addProduct: () => null,
  removeAllProducts: () => null,
  showCartModal: false,
  showCart: () => null,
});

// I need to really define what props are coming in to cartContext

export const CartContextProvider: React.FC<{
  item: string;
  quantity?: number;
}> = (props) => {
  const [items, updateItems] = useState<Items[] | []>([]);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    updateItems([]);
    // I will check if the user is logged in and/or there is a cart and display if so
  }, []);

  const removeAllProducts = () => {
    updateItems([]);
  };

  const decreaseQuantity = (product: string) => {};

  const increaseQuantity = (product: string) => {};

  const addProduct = (itemToAdd: Items) => {
    let existingItems = [...items];
    updateItems(existingItems.concat(itemToAdd));
  };

  const showCart = () => {
    setShowCartModal((bool) => !bool);
  };

  return (
    <CartContext.Provider
      value={{
        isLoggedIn: false,
        items: items,
        showCartModal: showCartModal,
        showCart: showCart,
        decreaseQuantity: decreaseQuantity,
        addProduct: addProduct,
        removeAllProducts: removeAllProducts,
        increaseQuantity: increaseQuantity,
      }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default { CartContextProvider, CartContext };
