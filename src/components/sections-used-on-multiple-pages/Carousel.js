import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ products }) {
  var settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 2,
    centerMode: true,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "slides",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div className="product__carousel-image-container">
          <picture className="product__carousel-image">
            <source
              className="product__carousel-image"
              media="(min-width: 768px, max-width: 1023px)"
              srcSet={product.image.tablet}
            />
            <source
              className="product__carousel-image"
              media="(min-width: 1024px )"
              srcSet={product.image.desktop}
            />
            <img
              className="product__carousel-image"
              src={product.image.mobile}
            />
          </picture>
          <div className="product__title product__title--margin-top-and-bottom">
            {product.name}
          </div>
          <Link
            to={`/product/${product.slug}`}
            data-test="product-cta"
            className="product__product-cta product__product-cta--margin-top-and-bottom"
          >
            SEE PRODUCT
          </Link>
        </div>
      ))}
    </Slider>
  );
}
