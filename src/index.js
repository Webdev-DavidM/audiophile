import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { CartContextProvider } from './ context/cartContext';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter basename="https://audio-first.herokuapp.com/">
      <ScrollToTop>
        <CartContextProvider item={''}>
          <App />
        </CartContextProvider>
      </ScrollToTop>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('app')
);
