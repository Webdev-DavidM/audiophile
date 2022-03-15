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
import { getProduct} from '../../graphQL/getProduct'
import { useQuery } from '@apollo/client';
import BottomCopySection from '../sections-used-on-multiple-pages/BottomCopySection';

export default function Product() {
  const { items, addProduct, setLoadingPage } = useContext(CartContext);
  let paramsProduct = useParams();
  const { loading, error, data } = useQuery(getProduct, {variables: { slug : paramsProduct.slug}});
  let navigate = useNavigate();
  let [quantity, setQuantity] = useState<number>(1);
  let [product, setProduct] = useState<ProductsObject | undefined>(undefined);
  let [quantityError, setQuantityError] = useState<boolean>(false);
  let [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
       // I will also add the items to local storage here in this function
       if (items.length !== 0) {
        items.map((item, index) => {
          return localStorage.setItem(`item${index}`, JSON.stringify(item));
        });
      }
      //clear the product state when the product component unmounts
      data && setProduct(data.getProduct.product)  
      return () => {
        setProduct(undefined)
      }
  }, [paramsProduct, data, items]);

  useEffect(() => {
    loading ? setLoadingPage(true) : setLoadingPage(false)
  }, [loading, setLoadingPage]);

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
      return setQuantityError(true);
    }
    if (operator === '+') {
      setQuantity((PrevQuantity) => (PrevQuantity += 1));
    } else {
      setQuantityError(false);
      setQuantity((PrevQuantity) => (PrevQuantity -= 1));
    }
  };



  return (
    <div className="product">
      {data?.getProduct.code === 200 ?   <>   <div className="product__product-details">
        <div className="product__image-container">

            <picture>
              <source
                className="product__image"
                media="(max-width: 767px)"
                srcSet={`${process.env.PUBLIC_URL}/${data.getProduct.product.image.mobile}`}
              />
              <source
                className="product__image"
                media="(min-width: 1024px)"
                srcSet={`${process.env.PUBLIC_URL}/${data.getProduct.product.image.mobile}`}
              />
              <source
                className="product__image"
                media="(min-width: 768px), (max-width: 1023px)"
                srcSet={`${process.env.PUBLIC_URL}/${data.getProduct.product.image.tablet}`}
              />

              <img className="product__image" src={`${process.env.PUBLIC_URL}/${data.getProduct.product.image.mobile}`} alt="product"/>
            </picture>
          
        
        
        </div>
        <div className="product__copy-container">
          {product && product.new && (
            <h6 className="product__new-product">NEW PRODUCT</h6>
          )}

          <h3 className="product__title">
            {data && data.getProduct.product.name.toUpperCase()}
          </h3>
          <p className="product__copy">{data && data.getProduct.product.description}</p>
          <h3 className="product__price">£ {data && data.getProduct.product.price}</h3>
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
            {quantityError && 'Maximum in stock selected'}
          </div>
          <div className="product__added-to-cart">
            {addedToCart && 'Added to cart'}
          </div>
        </div>
      </div>
      <div className="product__features-and-in-the-box-container">
        <div className="product__features-section">
          <h3 className="product__title">FEATURES</h3>
          <p className="product__copy">{data && data.getProduct.product.features}</p>
        </div>
        <div className="product__in-the-box-section">
          <h3 className="product__title product__title--half-width">
            IN THE BOX
          </h3>
          <div className="product__in-the-box-list">
            {data &&
              data.getProduct.product.items.map((item:any, index:any) => (
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
      {data && <ImageGallery imageGallery={data.getProduct.product.gallery[0]} />}

      <h3 className="product__title product__title--center">
        YOU MAY ALSO LIKE
      </h3>
      <div className="product__carousel">
        {!loading && data && <Carousel products={data.getProduct.product.others} />}
      </div></>: <p className="product__not-found">Product not found</p>}
 
      <CategorySummary />
      <div className="product__carousel-section"></div>
      <BottomCopySection />
    </div>
  );
}
