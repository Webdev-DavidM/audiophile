import React from "react";

interface ImageGalleryTS {
  first: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  second: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  third: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export default function ImageGallery(props: { imageGallery: ImageGalleryTS }) {
  const { imageGallery } = props;
  return (
    <div data-test="images-section" className="product__image-gallery-section">
      <div className="product__gallery-image-container">
        <picture className="product__gallery-image">
          <source
            className="product__gallery-image"
            media="(min-width: 1024px )"
            srcSet={`${process.env.PUBLIC_URL}/${imageGallery.first.desktop}`}
          />
          <source
            className="product__gallery-image"
            media="(max-width: 767px )"
            srcSet={`${process.env.PUBLIC_URL}/${imageGallery.first.mobile}`}
          />
          <source
            className="product__gallery-image"
            media="(min-width: 768px, max-width: 1023px)"
            srcSet={`${process.env.PUBLIC_URL}/${imageGallery && imageGallery.first.tablet}`}
          />
          <img
            className="product__gallery-image"
            src={`${process.env.PUBLIC_URL}/${imageGallery.first.tablet}`}
            alt="product"
          />
        </picture>
      </div>
      <div className="product__gallery-image-container">
        <picture className="product__gallery-image product__gallery-image">
          <source
            className="product__gallery-image"
            media="(min-width: 1024px )"
            srcSet={`${process.env.PUBLIC_URL}/${imageGallery.second.desktop}`}
          />
          <source
            className="product__gallery-image"
            media="(max-width: 767px )"
            srcSet={`${process.env.PUBLIC_URL}/${imageGallery.second.mobile}`}
          />
          <source
            className="product__gallery-image"
            media="(min-width: 768px, max-width: 1023px)"
            srcSet={`${process.env.PUBLIC_URL}/${imageGallery.second.tablet}`}
          />
          <img
            className="product__gallery-image"
            src={`${process.env.PUBLIC_URL}/${imageGallery.second.tablet}`}
            alt="product"
          />
        </picture>
      </div>
      <div className="product__gallery-image-container product__gallery-image-container--larger-image">
        <picture className="product__gallery-image">
          <source
            className="product__gallery-image"
            media="(min-width: 1024px )"
            srcSet={`${process.env.PUBLIC_URL}/${imageGallery.third.desktop}`}
          />
          <source
            className="product__gallery-image"
            media="(max-width: 767px )"
            srcSet={`${process.env.PUBLIC_URL}/${imageGallery.third.mobile}`}
          />
          <source
            className="product__gallery-image"
            media="(min-width: 768px, max-width: 1023px)"
            srcSet={`${process.env.PUBLIC_URL}/${imageGallery.third.tablet}`}
          />
          <img
            className="product__gallery-image"
            src={`${process.env.PUBLIC_URL}/${imageGallery.third.tablet}`}
            alt="product"
          />
        </picture>
      </div>
    </div>
  );
}
