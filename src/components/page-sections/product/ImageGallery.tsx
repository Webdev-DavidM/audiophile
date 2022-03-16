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
            srcSet={`https://audio-first-react-express.herokuapp.com/${imageGallery.first.desktop}`}
          />
          <source
            className="product__gallery-image"
            media="(max-width: 767px )"
            srcSet={`https://audio-first-react-express.herokuapp.com/${imageGallery.first.mobile}`}
          />
          <source
            className="product__gallery-image"
            media="(min-width: 768px, max-width: 1023px)"
            srcSet={`https://audio-first-react-express.herokuapp.com/${imageGallery && imageGallery.first.tablet}`}
          />
          <img
            className="product__gallery-image"
            src={`https://audio-first-react-express.herokuapp.com/${imageGallery.first.tablet}`}
            alt="product"
          />
        </picture>
      </div>
      <div className="product__gallery-image-container">
        <picture className="product__gallery-image product__gallery-image">
          <source
            className="product__gallery-image"
            media="(min-width: 1024px )"
            srcSet={`https://audio-first-react-express.herokuapp.com/${imageGallery.second.desktop}`}
          />
          <source
            className="product__gallery-image"
            media="(max-width: 767px )"
            srcSet={`https://audio-first-react-express.herokuapp.com/${imageGallery.second.mobile}`}
          />
          <source
            className="product__gallery-image"
            media="(min-width: 768px, max-width: 1023px)"
            srcSet={`https://audio-first-react-express.herokuapp.com/${imageGallery.second.tablet}`}
          />
          <img
            className="product__gallery-image"
            src={`https://audio-first-react-express.herokuapp.com/${imageGallery.second.tablet}`}
            alt="product"
          />
        </picture>
      </div>
      <div className="product__gallery-image-container product__gallery-image-container--larger-image">
        <picture className="product__gallery-image">
          <source
            className="product__gallery-image"
            media="(min-width: 1024px )"
            srcSet={`https://audio-first-react-express.herokuapp.com/${imageGallery.third.desktop}`}
          />
          <source
            className="product__gallery-image"
            media="(max-width: 767px )"
            srcSet={`https://audio-first-react-express.herokuapp.com/${imageGallery.third.mobile}`}
          />
          <source
            className="product__gallery-image"
            media="(min-width: 768px, max-width: 1023px)"
            srcSet={`https://audio-first-react-express.herokuapp.com/${imageGallery.third.tablet}`}
          />
          <img
            className="product__gallery-image"
            src={`https://audio-first-react-express.herokuapp.com/${imageGallery.third.tablet}`}
            alt="product"
          />
        </picture>
      </div>
    </div>
  );
}
