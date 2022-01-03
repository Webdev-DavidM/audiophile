import React, { useState, useEffect } from "react";


interface Items{
  name: string,
  id: number,
  value: number,
  quantity: number
}

interface CartContextToGive {
  isLoggedIn: boolean,
  items: Items[] | [],
  removeProduct: (item:string) => void,
  decreaseQuantity: (item: string) => void,
  increaseQuantity: (item:string) => void,
  addProduct: (item: string, quantity: number) => void
  removeAllProducts: () => void
}

const CartContext = React.createContext<CartContextToGive>({
  isLoggedIn: false,
  items: [],
  removeProduct: () => null,
  decreaseQuantity: () => null,
  increaseQuantity: () => null,
  addProduct: () => null,
  removeAllProducts: () => null
});

// I need to really define what props are coming in to cartContext

export const CartContextProvider: React.FC<{item: string, quantity? : number }> = (props) => {

  const [items, updateItems] = useState<Items[] | []>([]);

  useEffect(() => {
    // I will check if the user is logged in and/or there is a cart and display if so
  },[])

  const removeProduct = (product: string) => {

  }

  const removeAllProducts = () => {

  }

  const decreaseQuantity = (product: string) => {

  }

  const increaseQuantity = ( product: string) => {

  }
  
  const addProduct = ( product: string, quantity: number) => {

  }

return (
  <CartContext.Provider value={{  
    isLoggedIn: false,
    items: [], 
    removeProduct: removeProduct, 
    decreaseQuantity: decreaseQuantity, 
    addProduct: addProduct,
    removeAllProducts: removeAllProducts,
    increaseQuantity: increaseQuantity}}>
      {props.children}</CartContext.Provider>
)

};

export default CartContextProvider;