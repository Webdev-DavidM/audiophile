import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./components/pages/Homepage";
import Checkout from "./components/pages/Checkout";
import Category from "./components/pages/Category";
import Product from "./components/pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/category/:category"
          element={<Category productData={data.products} />}
        />
        <Route path="/product/:slug" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
