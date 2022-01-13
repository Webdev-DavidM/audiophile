import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/header.scss";

/* Note when using typescript below is the only import style which will work is below, 
importing an image/svg as a component wont work, I also need to create a index.d.ts 
file to include svg and jpg and any other files */
import hamburger from "../assets/shared/icon-hamburger.svg";
import logo from "../assets/shared/logo.svg";
import cart from "../assets/shared/icon-cart.svg";
import data from "../data.json";
import arrow from "../assets/shared/icon-arrow-right.svg";

interface Category {
  category: string;
  image: string;
}

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [categories, setCategories] = useState<Category[] | []>([]);

  useEffect(() => {
    let cats = JSON.parse(JSON.stringify(data));
    setCategories(cats["category-images"]);
  }, []);

  let headerMenu = showMenu ? `header header--open` : `header`;

  let dropdown = showMenu
    ? `header__dropdown`
    : `header__dropdown header__dropdown--hidden`;

  const closeDropDown = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div id="top" data-test="header" className={headerMenu}>
        <div
          data-test="hamburger"
          className="header__hamburger"
          onClick={() => closeDropDown()}
        >
          <img src={hamburger} alt="hamburger menu" />
        </div>
        <div className="header__title">
          <Link onClick={() => setShowMenu(false)} to="/">
            <img src={logo} alt="audiophile logo" />
          </Link>
        </div>
        <ul className="header__nav-links">
          <Link to="/" className="header__link">
            HOME
          </Link>
          <Link to="/category/headphones" className="header__link">
            HEADPHONES
          </Link>
          <Link to="category/speakers" className="header__link">
            SPEAKERS
          </Link>
          <Link to="/category/earphones" className="header__link">
            EARPHONES
          </Link>
        </ul>
        <div className="header__login-and-register">
          <Link to="/sign-up" className="header__sign-up">
            SIGN UP
          </Link>
          <Link to="/register" className="header__register">
            LOGIN
          </Link>
        </div>
        <div className="header__cart">
          <img className="header__cart-svg" src={cart} alt="cart" />
        </div>
        <div className={dropdown}>
          <Link to="/sign-up" className="header__drop-down-sign-up">
            SIGN UP
          </Link>
          <Link to="/register" className="header__drop-down-register">
            LOGIN
          </Link>
          <div className="category-summary">
            {categories &&
              categories.map((cat, index) => (
                <div key={index} className="category-summary__item">
                  <img
                    className="category-summary__image"
                    src={cat.image}
                    alt=""
                  />
                  <h6 className="category-summary__category-name">
                    {cat.category.toUpperCase()}
                  </h6>
                  <Link
                    onClick={() => setShowMenu(false)}
                    to={`/category/${cat.category}`}
                    className="category-summary__cta"
                  >
                    <span className="category-summary__cta-text">SHOP</span>
                    <img
                      className="category-summary__arrow"
                      src={arrow}
                      alt=""
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
