import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { CartContextProvider } from './ context/cartContext';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

console.log(`${process.env.PUBLIC_URL}/`);

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <ScrollToTop>
        <CartContextProvider item={''}>
          <App />
        </CartContextProvider>
      </ScrollToTop>
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('app')
);
