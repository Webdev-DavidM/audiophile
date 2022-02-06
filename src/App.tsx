import React, { useContext, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import Homepage from './components/pages/Homepage';
import Checkout from './components/pages/Checkout';
import Category from './components/pages/Category';
import Product from './components/pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './data.json';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import CartModal from './components/modals/CartModal';
import { CSSTransition } from 'react-transition-group';
import { CartContext } from './ context/cartContext';
import ConfirmationModal from './components/modals/ConfirmationModal';

function App() {
  const { showCartModal, showConfirmationModal } = useContext(CartContext);
  const { pathname } = useLocation();
  const myRef = useRef(null);

  // below makes each page loaded scroll to the top
  useEffect(() => {
    // @ts-ignore: Object is possibly 'null'.
    myRef.current.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div id="top" ref={myRef} className="App">
      <CSSTransition
        in={showCartModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <CartModal />
      </CSSTransition>
      <CSSTransition
        in={showConfirmationModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <ConfirmationModal />
      </CSSTransition>
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
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
