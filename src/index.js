import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { CartContextProvider } from './ context/cartContext';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './scrollToTop';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <CartContextProvider item={''}>
        <App />
      </CartContextProvider>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('app')
);
