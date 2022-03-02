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
  loggedIn: (value: boolean) => void;
  decreaseQuantity: (item: string) => void;
  increaseQuantity: (item: string) => void;
  addProduct: (itemToAdd: Items) => void;
  removeAllProducts: () => void;
  showCart: (value: string) => void;
  showCartModal: boolean;
  showConfirmation: (value: boolean) => void;
  showConfirmationModal: boolean;
  loading: boolean;
}

export const CartContext = React.createContext<CartContextToGive>({
  loggedIn: () => null,
  isLoggedIn: false,
  items: [],
  decreaseQuantity: () => null,
  increaseQuantity: () => null,
  addProduct: () => null,
  removeAllProducts: () => null,
  showCartModal: false,
  showCart: () => null,
  showConfirmationModal: false,
  showConfirmation: () => null,
  loading: false
});

// I need to really define what props are coming in to cartContext

export const CartContextProvider: React.FC<{
  item: string;
  quantity?: number;
}> = (props) => {
  const [items, updateItems] = useState<Items[] | []>([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    updateItems([]);
    // I will check if the user is logged in and/or there is a cart and display if so
  }, []);

  const removeAllProducts = () => {
    updateItems([]);
  };

  const decreaseQuantity = (product: string) => {
    // If the user is adding the same item again, this will add this quanity to the existing item
    let existingItems = [...items];
    // eslint-disable-next-line array-callback-return
    existingItems.map((item) => {
      if (item.name === product && item.quantity !== 1) {
        item.quantity--;
      } else {
        return item;
      }
      updateItems(existingItems);
    });
  };

  const increaseQuantity = (product: string) => {
    let itemsToUpdate = [...items];
    itemsToUpdate.map((item) =>
      item.name === product ? item.quantity++ : item
    );
    updateItems(itemsToUpdate);
  };

  const loggedIn = (value: boolean) => {
    setIsLoggedIn(value);
  };

  const showConfirmation = (value: boolean) => {
    setShowConfirmationModal(value);
  };

  const addProduct = (itemToAdd: Items) => {
    let addedAlready = false;
    // If the user is adding the same item again, this will add this quanity to the existing item
    let existingItems = [...items];
    // eslint-disable-next-line array-callback-return
    existingItems.map((item) => {
      if (item.name === itemToAdd.name) {
        item.quantity += itemToAdd.quantity;
        addedAlready = true;
      } else {
        return item;
      }
    });

    addedAlready
      ? updateItems(existingItems)
      : updateItems(existingItems.concat(itemToAdd));

    if (isLoggedIn) {
      localStorage.setItem('items', JSON.stringify(items));
    }
  };

  const showCart = (action: string) => {
    if (action === 'toggle') {
      setShowCartModal((bool) => !bool);
    } else {
      setShowCartModal(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        items: items,
        loggedIn: loggedIn,
        showCartModal: showCartModal,
        showCart: showCart,
        decreaseQuantity: decreaseQuantity,
        addProduct: addProduct,
        removeAllProducts: removeAllProducts,
        increaseQuantity: increaseQuantity,
        showConfirmationModal: showConfirmationModal,
        showConfirmation: showConfirmation,
        loading: loading
      }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default { CartContextProvider, CartContext };
