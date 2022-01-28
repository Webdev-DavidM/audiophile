/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-debugging-utils */

import { CartContextProvider } from '../../ context/cartContext';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import CartModal from './CartModal';
import Header from '../Header';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Product from '../pages/Product';
import data from '../../data.json';

// The modal uses react transition group to fade into the page but i will not be testing this, i have commented it out for now as it causes the all tests to fail

const renderWithContext = () => {
  render(
    <MemoryRouter initialEntries={[`/product/xx59-headphones`]}>
      <CartContextProvider>
        <Header />
        <CartModal />
        <Routes>
          <Route
            path='/product/:slug'
            element={<Product productData={data.products} />}></Route>
        </Routes>
      </CartContextProvider>
    </MemoryRouter>
  );
};

describe('test the modal is shown and functionality', () => {
  beforeEach(() => {
    renderWithContext();
    // This will select an add an item to the cart form the product page and then view cart so I can run all the tests on the cart which is now rendered to the page
    const cartButton = screen.getByText('ADD TO CART');
    userEvent.click(cartButton);
    const cartIcon = screen.getByTestId('cart-icon');
    userEvent.click(cartIcon);
  });

  test('When the user presses the add to cart button, a cart modal is displayed', async () => {
    let cartModal = await screen.findByTestId('cart');
    expect(cartModal).toBeInTheDocument();
  });

  test('Once a product is selected on the product page', async () => {
    const testName = await screen.findByTestId('product-name');
    expect(testName).toHaveTextContent('XX59');
  });

  test('If the user clicks remove all the empty becomes empty', async () => {
    // This first line makes sure the product has shown up in the cart as this is async before
    // I then test it is removed properly below
    const product = await screen.findByTestId('product-name');
    let emptyButton = screen.getByRole('button', {
      name: /remove all/i,
    });
    userEvent.click(emptyButton);
    await waitFor(() => expect(product).not.toBeInTheDocument());
  });

  test('if the user clicks + then an item is added to their basket for that item and the correct subtotal  is shown', async () => {
    let plusButtonCart = await screen.findByTestId('plus-button-cart');
    userEvent.click(plusButtonCart);
    let quantity = await screen.findByTestId('quantity-cart-item');
    expect(quantity).toHaveTextContent('2');
  });

  test('the total in the cart is correct based on the items and their quantity', () => {});

  test('if the user clicks - then an item is added to their basket for that item and the correct subtotal is shown', () => {});
});

describe('these tests are based on whether the user is logged in or not', () => {
  test('If the user clicks the cart and nothing is in there it should display a message, cart is empty', () => {});

  test('if the user is logged in and there is something in the basket, it is added to local storage', () => {});

  test('If the user clicks checkout with something in the basket and they are logged in, they are taken to the checkout page', () => {});

  test('If the user clicks the checkout and they are not signed in they are re directed to sign up page', () => {});
});
