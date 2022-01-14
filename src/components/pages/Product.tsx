import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../scss/productpage.scss";
import CategorySummary from "../sections-used-on-multiple-pages/CategorySummary";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductsObject } from "../../Interfaces/productObject";
import Carousel from "../sections-used-on-multiple-pages/Carousel";

export default function Product(props: { productData: ProductsObject[] }) {
  let paramsProduct = useParams();
  let navigate = useNavigate();
  let [quantity, setQuantity] = React.useState<Number>(1);
  let [product, setProduct] = React.useState<ProductsObject | undefined>(
    undefined
  );

  useEffect(() => {
    let { productData } = props;
    let chosenProduct = productData.filter(
      (product) => product.slug === paramsProduct.slug
    );
    setProduct(chosenProduct[0]);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [paramsProduct, props]);

  return (
    <div className="product">
      <span
        data-test="go-back-section"
        className="product__go-back-button"
        onClick={() => navigate(-1)}
      >
        GO BACK
      </span>
      <div
        data-test="product-details-section"
        className="product__product-details"
      >
        <div className="product__image-container">
          {product !== undefined && (
            <picture>
              <source
                className="product__image"
                media="(min-width: 768px, max-width: 1023px)"
                srcSet={`${product.image.tablet}`}
              />
              <source
                className="product__image"
                media="(min-width: 1024px )"
                srcSet={`${product.image.desktop}`}
              />
              <img className="product__image" src={`${product.image.mobile}`} />
            </picture>
          )}
        </div>
        <div className="product__copy-container">
          {product && product.new && (
            <h6 className="product__new-product">NEW PRODUCT</h6>
          )}

          <h3 data-test="product-title" className="product__title">
            {product && product.name.toUpperCase()}
          </h3>
          <p data-test="product-copy" className="product__copy">
            {product && product.description}
          </p>
          <h3 className="product__price" data-test="product-copy">
            £ {product && product.price}
          </h3>
          <div className="product__buttons-section">
            <div className="product__amount-button-section">
              <button
                data-test="minus-button"
                disabled={quantity === 1}
                className="product__minus-button"
              >
                -
              </button>
              <span className="product__amount">1</span>
              <button className="product__plus-button">+</button>
            </div>
            <button data-test="product-cta" className="product__product-cta">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="product__features-and-in-the-box-container">
        <div data-test="features-section" className="product__features-section">
          <h3 data-test="product-title" className="product__title">
            FEATURES
          </h3>
          <p data-test="product-copy" className="product__copy">
            {product && product.features}
          </p>
        </div>
        <div
          data-test="in-the-box-section"
          className="product__in-the-box-section"
        >
          <h3
            data-test="product-title"
            className="product__title product__title--half-width"
          >
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

      <div
        data-test="images-section"
        className="product__image-gallery-section"
      >
        <div className="product__gallery-image-container">
          <picture className="product__gallery-image">
            <source
              className="product__gallery-image"
              media="(min-width: 768px, max-width: 1023px)"
              srcSet={product && product.gallery.first.tablet}
            />
            <source
              className="product__gallery-image"
              media="(min-width: 1024px )"
              srcSet={product && product.gallery.first.desktop}
            />
            <img
              className="product__gallery-image"
              src={product && product.gallery.first.tablet}
            />
          </picture>
        </div>
        <div className="product__gallery-image-container">
          <picture className="product__gallery-image product__gallery-image">
            <source
              className="product__gallery-image"
              media="(min-width: 768px, max-width: 1023px)"
              srcSet={product && product.gallery.second.tablet}
            />
            <source
              className="product__gallery-image"
              media="(min-width: 1024px )"
              srcSet={product && product.gallery.second.desktop}
            />
            <img
              className="product__gallery-image"
              src={product && product.gallery.second.tablet}
            />
          </picture>
        </div>
        <div className="product__gallery-image-container product__gallery-image-container--larger-image">
          <picture className="product__gallery-image">
            <source
              className="product__gallery-image"
              media="(min-width: 768px, max-width: 1023px)"
              srcSet={product && product.gallery.third.tablet}
            />
            <source
              className="product__gallery-image"
              media="(min-width: 1024px )"
              srcSet={product && product.gallery.third.desktop}
            />
            <img
              className="product__gallery-image"
              src={product && product.gallery.third.tablet}
            />
          </picture>
        </div>
      </div>
      <h3 className="product__title product__title--center">
        YOU MAY ALSO LIKE
      </h3>
      <div className="product__carousel">
        {product && <Carousel products={product.others} />}
      </div>
      <CategorySummary />
      <div
        data-test="carousel-section"
        className="product__carousel-section"
      ></div>
    </div>
  );
}
