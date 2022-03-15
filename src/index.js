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

console.log(process.env.PUBLIC_URL);

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <CartContextProvider item={''}>
          <App />
        </CartContextProvider>
      </ScrollToTop>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('app')
);
