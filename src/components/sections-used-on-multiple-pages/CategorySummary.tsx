import React, { useState, useEffect } from "react";
import "../../scss/category-summary.scss";
import arrow from "../../assets/shared/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import data from "../../data.json";

interface Category {
  category: string;
  image: string;
}

interface Props {
  showMenu?: (value: boolean) => void;
}

export default function CategorySummary({ showMenu }: Props) {
  const [categories, setCategories] = useState<Category[] | []>([]);

  useEffect(() => {
    let cats = JSON.parse(JSON.stringify(data));
    setCategories(cats["category-images"]);
  }, []);

  return (
    <div className="category-summary">
      {categories &&
        categories.map((cat) => (
          <>
            <div className="category-summary__item">
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
          </>
        ))}
    </div>
  );
}
