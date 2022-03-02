import React, { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../scss/productpage.scss';
import CategorySummary from '../sections-used-on-multiple-pages/CategorySummary';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductsObject } from '../../Interfaces/productObject';
import Carousel from '../sections-used-on-multiple-pages/Carousel';
import ImageGallery from '../page-sections/product/ImageGallery';
import { CartContext } from '../../ context/cartContext';
import BottomCopySection from '../sections-used-on-multiple-pages/BottomCopySection';

export default function Product(props: { productData: ProductsObject[] }) {
  const { items, addProduct } = useContext(CartContext);

  let paramsProduct = useParams();
  let navigate = useNavigate();
  let [quantity, setQuantity] = useState<number>(1);
  let [product, setProduct] = useState<ProductsObject | undefined>(undefined);
  let [error, setError] = useState<boolean>(false);
  let [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    let { productData } = props;

    let chosenProduct = productData.filter(
      (product) => product.slug === paramsProduct.slug
    );
    setProduct(chosenProduct[0]);
       // I will also add the items to local storage here in this function
       if (items.length !== 0) {
        // let localStorageItems = Object.keys(localStorage);
        // localStorageItems.map((item) => {
        //   return item !== 'userInfo' && localStorage.removeItem(`${item}`);
        // });
        items.map((item, index) => {
          return localStorage.setItem(`item${index}`, JSON.stringify(item));
        });
      }
      // else {
      //   items.map((item) => localStorage.setItem(`item0`, JSON.stringify(items)))
      //   // return localStorage.setItem(`item0`, JSON.stringify(items));
      // }
      //clear the product state when the product component unmounts
      return () => {
        setProduct(undefined)
      }
  }, [paramsProduct, props, items]);

  const addToCart = () => {
    if (product) {
      let itemToAdd = {
        name: product.name,
        value: product.price,
        quantity: quantity,
        image: product.image.mobile,
      };
      addProduct(itemToAdd);
      setAddedToCart(true);
      setTimeout(() => {
        setAddedToCart(false);
      }, 4000);
    }

  };

  const updateQuantity = (operator: string) => {
    if (product && operator === '+' && quantity === product.stock) {
      return setError(true);
    }
    if (operator === '+') {
      setQuantity((PrevQuantity) => (PrevQuantity += 1));
    } else {
      setError(false);
      setQuantity((PrevQuantity) => (PrevQuantity -= 1));
    }
  };

  return (
    <div className="product">
      <span className="product__go-back-button" onClick={() => navigate(-1)}>
        GO BACK
      </span>
      <div className="product__product-details">
        <div className="product__image-container">
          {product !== undefined && (
            //note that it will only work in this order so put the two media queries tbalet last
            <picture>
              <source
                className="product__image"
                media="(max-width: 767px)"
                srcSet={`${product.image.mobile}`}
              />
              <source
                className="product__image"
                media="(min-width: 1024px)"
                srcSet={`${product.image.mobile}`}
              />
              <source
                className="product__image"
                media="(min-width: 768px), (max-width: 1023px)"
                srcSet={`${product.image.tablet}`}
              />

              <img className="product__image" src={`${product.image.mobile}`} />
            </picture>
          )}
        </div>
        <div className="product__copy-container">
          {product && product.new && (
            <h6 className="product__new-product">NEW PRODUCT</h6>
          )}

          <h3 className="product__title">
            {product && product.name.toUpperCase()}
          </h3>
          <p className="product__copy">{product && product.description}</p>
          <h3 className="product__price">£ {product && product.price}</h3>
          <div className="product__buttons-section">
            <div className="product__amount-button-section">
              <button
                onClick={() => updateQuantity('-')}
                disabled={quantity === 1}
                className="product__minus-button"
              >
                -
              </button>
              <span data-testid="quantity" className="product__amount">
                {quantity}
              </span>

              <button
                onClick={() => updateQuantity('+')}
                className="product__plus-button"
              >
                +
              </button>
            </div>
            <button
              onClick={() => addToCart()}
              className="product__product-cta"
            >
              ADD TO CART
            </button>
          </div>
          <div className="product__warning">
            {error && 'Maximum in stock selected'}
          </div>
          <div className="product__added-to-cart">
            {addedToCart && 'Added to cart'}
          </div>
        </div>
      </div>
      <div className="product__features-and-in-the-box-container">
        <div className="product__features-section">
          <h3 className="product__title">FEATURES</h3>
          <p className="product__copy">{product && product.features}</p>
        </div>
        <div className="product__in-the-box-section">
          <h3 className="product__title product__title--half-width">
            IN THE BOX
          </h3>
          <div className="product__in-the-box-list">
            {product &&
              product.items.map((item, index) => (
                <div
                  key={index}
                  className="product__copy product__copy--no-margin-top"
                >
                  <span className="product__item-quantity">
                    {item.quantity} x
                  </span>
                  {item.item}
                </div>
              ))}
          </div>
        </div>
      </div>
      {product && <ImageGallery imageGallery={product.gallery} />}

      <h3 className="product__title product__title--center">
        YOU MAY ALSO LIKE
      </h3>
      <div className="product__carousel">
        {product && <Carousel products={product.others} />}
      </div>
      <CategorySummary />
      <div className="product__carousel-section"></div>
      <BottomCopySection />
    </div>
  );
}
