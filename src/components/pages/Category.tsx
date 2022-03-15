import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../scss/categorypage.scss';
import { getAllProductsByCategory} from '../../graphQL/getCategory'
import CategorySummary from '../sections-used-on-multiple-pages/CategorySummary';
import { useQuery } from '@apollo/client';
import {CartContext} from '../../ context/cartContext'
import BottomCopySection from '../sections-used-on-multiple-pages/BottomCopySection';


const Category = () => {
  let cat = useParams();
  const { setLoadingPage } = useContext(CartContext);
  const { loading, error, data } = useQuery( getAllProductsByCategory, {variables: { category : cat.category}});


  useEffect(() => {
    loading ? setLoadingPage(true) : setLoadingPage(false)
  }, [loading, setLoadingPage]);


  return (
    <>
      <div className="category">
        <div className="category__hero">
          <h3 data-test="category-header" className="category__hero-title">
            {cat.category && cat.category.toUpperCase()}
          </h3>
        </div>

        {data &&
          data.getAllProductsByCategory.map((product:any, index:any) => (
            <div key={index} className="category__product">
              <div
                data-test="category-image"
                className="category__image-container"
              >
                <picture>
                  <source
                    className="category__image"
                    media="(min-width: 1024px )"
                    srcSet={`${process.env.PUBLIC_URL}/${product.image.desktop}`}
                  />{' '}
                  <source
                    className="category__image"
                    media="(max-width: 767px )"
                    srcSet={`${process.env.PUBLIC_URL}/${product.image.mobile}`}
                  />{' '}
                  <source
                    className="category__image"
                    media="(min-width: 768px, max-width: 1023px)"
                    srcSet={`${process.env.PUBLIC_URL}/${product.image.tablet}`}
                  />
                  <img className="category__image" src={`${process.env.PUBLIC_URL}/${product.image.mobile}`} alt="product" />
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
                  data-testid="category-cta"
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
