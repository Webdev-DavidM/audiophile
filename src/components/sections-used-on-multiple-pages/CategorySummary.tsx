import React from "react";
import "../../scss/category-summary.scss";
import arrow from "../../assets/shared/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { getAllCategorySummaryImages } from '../../graphQL/getAllCategorySummaryImages';

interface Category {
  category: string;
  image: string;
}

export default function CategorySummary() {
  const { loading, error, data } = useQuery(getAllCategorySummaryImages);
  let categoryNames:any = []
  let categoriesToDisplay: Category[] = []
  
  if (data) { 
    categoriesToDisplay = data.getAllProducts.reduce((categoryArray:any, category:any) => {
      if (!categoryNames.includes(category.categorySummaryImages.category)) {
        categoryArray.push(category.categorySummaryImages);
        categoryNames.push(category.categorySummaryImages.category)
      }
      return categoryArray;
    }, []);
  }

  return (
    <div className="category-summary">
      {data &&
        categoriesToDisplay.map((cat: Category, index) => (
          <div key={index} className="category-summary__item">
            <img className="category-summary__image" src={cat.image} alt="" />
            <h6 className="category-summary__category-name">
              {cat.category.toUpperCase()}
            </h6>
            <Link
              to={`/category/${cat.category}`}
              className="category-summary__cta"
            >
              <span className="category-summary__cta-text">SHOP</span>
              <img className="category-summary__arrow" src={arrow} alt="" />
            </Link>
          </div>
        ))}
    </div>
  );
}
