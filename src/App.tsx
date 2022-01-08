import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Checkout from "./components/pages/Checkout";
import Category from "./components/pages/Category";
import Product from "./components/pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/product/:slug" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
