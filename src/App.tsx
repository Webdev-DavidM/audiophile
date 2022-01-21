import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./components/pages/Homepage";
import Checkout from "./components/pages/Checkout";
import Category from "./components/pages/Category";
import Product from "./components/pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data.json";
import CartModal from "./components/modals/CartModal";
import { CSSTransition } from "react-transition-group";
import { CartContext } from "./ context/cartContext";

function App() {
  const { showCartModal } = useContext(CartContext);
  return (
    <div className="App">
      {/* <CSSTransition
        in={showCartModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      > */}
      {showCartModal && <CartModal />}

      {/* </CSSTransition> */}
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/category/:category"
          element={<Category productData={data.products} />}
        />
        <Route
          path="/product/:slug"
          element={<Product productData={data.products} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
