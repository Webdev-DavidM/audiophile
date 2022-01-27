import React, { useContext } from 'react';
import '../../scss/cart-modal.scss';
import { CartContext } from '../../ context/cartContext';
import '../../App.scss';

export default function CartModal() {
  const { items, removeAllProducts, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  console.log(items[0]);

  const total = 100;

  return (
    <div
      data-testid='cart'
      className='cart-modal cart-modal--navbar-not-covered'>
      <div className='cart-modal__container'>
        <div className='cart-modal__header-and-remove-all-section'>
          <span>CART ({items.length})</span>
          <button onClick={() => removeAllProducts()}>Remove All</button>
        </div>

        {items.length > 0 &&
          items.map((item) => (
            <div className='cart-modal__item'>
              <img src={item.image} alt='' className='cart-modal__image' />
              <div className='cart-modal__item-details'>
                <div
                  data-testid='product-name'
                  className='cart-modal__item-name'>
                  {item.name.split(' ')[0]}
                </div>
                <div className='cart-modal__price'>£{item.value}</div>
              </div>
              <div className='product__buttons-section product__buttons-section--cart-modal'>
                <div className='product__amount-button-section product__amount-button-section--cart-modal'>
                  <button
                    onClick={() => decreaseQuantity(item.name)}
                    disabled={item.quantity === 1}
                    className='product__minus-button'>
                    -
                  </button>
                  <span
                    data-testid='quantity-cart-item'
                    className='product__amount'>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.name)}
                    data-testid='plus-button-cart'
                    className='product__plus-button'>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        <div className='total-section'>
          <span>TOTAL</span>
          <span>£{total}</span>
        </div>
      </div>
    </div>
  );
}
