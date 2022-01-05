import React, { useState, useEffect } from "react";
import "../../scss/category-summary.scss";
import data from "../../data.json";
import arrow from '../../assets/shared/icon-arrow-right.svg'

interface Category {
  category: string,
  tablet: string,
  mobile: string, 
  desktop: string
}

export default function CategorySummary() {
  const [categories, setCategories] = useState<Category[] | []>([]);

  useEffect(() => {
    let cats = JSON.parse(JSON.stringify(data));
    setCategories(cats['category-images']);
  }, []);

  return <div className="category-summary">
      {categories && categories.map((cat) => 
      <>
        <div className="category-summary__item">
            <picture>
            <source srcSet={cat.tablet}
              media="(min-width: 768px)" />
            <source srcSet={cat.desktop}
              media="(min-width: 1024px)" />
            <img src={`${cat.mobile}`} alt="" />
          </picture>
        </div>
        <h3>{cat.category.toUpperCase()}</h3>
        <button className="category-summary__cta">
          <span>SHOP</span>
          <img className="category-summary__arrow" src={arrow} alt="" />
        </button>
        </>
      )}
  </div>;

}

