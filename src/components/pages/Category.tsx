import React from "react";
import { useParams } from "react-router-dom";
import { ProductsObject } from "../../Interfaces/productObject";
import { Link } from "react-router-dom";
import "../../scss/categorypage.scss";
import CategorySummary from "../sections-used-on-multiple-pages/CategorySummary";
import BottomCopySection from "../sections-used-on-multiple-pages/BottomCopySection";

const Category = (props: { productData: ProductsObject[] }) => {
  let [products, setProducts] = React.useState<ProductsObject[] | []>([]);
  let cat = useParams();
  let { productData } = props;

  React.useEffect(() => {
    let chosenProducts = productData.filter(
      (product) => product.category === cat.category
    );
    setProducts(chosenProducts);
  }, [cat.category, productData]);

  return (
    <>
      <div className="category">
        <div className="category__hero">
          <h3 data-test="category-header" className="category__hero-title">
            {cat.category && cat.category.toUpperCase()}
          </h3>
        </div>

        {products.length > 0 &&
          products.map((product, index) => (
            <div key={index} className="category__product">
              <div
                data-test="category-image"
                className="category__image-container"
              >
                <picture>
                  <source
                    className="category__image"
                    media="(min-width: 768px, max-width: 1023px)"
                    srcSet={product.image.tablet}
                  />
                  <source
                    className="category__image"
                    media="(min-width: 1024px )"
                    srcSet={product.image.desktop}
                  />
                  <img className="category__image" src={product.image.mobile} />
                </picture>
              </div>
              <div className="category__copy-container">
                {product.new && (
                  <h6 className="category__new-product">NEW PRODUCT</h6>
                )}
                <h3 data-test="category-title" className="category__title">
                  {product.name.toUpperCase()}
                </h3>
                <p data-test="category-copy" className="category__copy">
                  {product.description}
                </p>
                <Link
                  data-test="category-cta"
                  to={`/product/${product.slug}`}
                  className="category__product-cta"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          ))}

        <CategorySummary />
        <BottomCopySection />
      </div>
    </>
  );
};

export default Category;
