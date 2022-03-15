import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { CartContextProvider } from './ context/cartContext';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://audio-first.herokuapp.com',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter basename="https://webdev-davidm.github.io/audiophile">
      <ScrollToTop>
        <CartContextProvider item={''}>
          <App />
        </CartContextProvider>
      </ScrollToTop>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('app')
);
