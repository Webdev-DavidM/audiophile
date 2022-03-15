import React from "react";
import "../../../scss/homepage.scss";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="homepage__hero">
      <div className="homepage__hero-image">
        <picture className="homepage__image">
          <source
            className="homepage__image"
            srcSet="https://webdev-davidm.github.io/audiophile/assets/home/desktop/image-hero.jpg"
            media="(min-width: 1024px)"
          />
          <source
            className="homepage__image"
            srcSet="https://webdev-davidm.github.io/audiophile/assets/home/desktop/image-hero.jpg/assets/home/mobile/image-header.jpg"
            media="(max-width: 767px)"
          />
          <source
            className="homepage__image"
            srcSet="https://webdev-davidm.github.io/audiophile/assets/home/desktop/image-hero.jpg/assets/home/tablet/image-header.jpg"
            media="(min-width: 768px, max-width: 1023px)"
          />
          <img
            className="homepage__image"
            src="https://webdev-davidm.github.io/audiophile/assets/home/desktop/image-hero.jpg/assets/home/mobile/image-header.jpg"
            alt="hero product"
          />
        </picture>
      </div>
      <div className="homepage__hero-copy-section">
        <h6 className="homepage__hero-title">NEW PRODUCT</h6>
        <h2 className="homepage__hero-subtitle">XX99 MARK 11 HEADPHONE</h2>
        <p className="homepage__hero-copy">
          {" "}
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link
          className="homepage__hero-cta"
          to="/product/xx99-mark-one-headphones"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
}

// interface Category {
//   category: string,
//   tablet: string,
//   mobile: string,
//   desktop: string
// }

// FOR REFERENCE WHEN USING DIFFERENT IMAGE SIZES

// export default function CategorySummary() {
//   const [categories, setCategories] = useState<Category[] | []>([]);

//   useEffect(() => {
//     let cats = JSON.parse(JSON.stringify(data));
//     setCategories(cats['category-images']);
//   }, []);

//   return <div className="category-summary">
//       {categories && categories.map((cat) =>
//       <>
//         <div className="category-summary__item">
//   <picture className="category-summary__image">
//   <source className="category-summary__image" srcSet={cat.tablet}
//     media="(min-width: 768px)" />
//   <source className="category-summary__image" srcSet={cat.desktop}
//     media="(min-width: 1024px)" />
//   <img className="category-summary__image" src={`${cat.mobile}`} alt="" />
// </picture>
//           <h6 className="category-summary__category-name">{cat.category.toUpperCase()}</h6>
//           <button className="category-summary__cta">
//             <span className="category-summary__cta-text">SHOP</span>
//             <img className="category-summary__arrow" src={arrow} alt="" />
//           </button>
//         </div>

//         </>
//       )}
//   </div>;
