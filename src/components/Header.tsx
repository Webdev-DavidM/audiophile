import React from "react";
import { Link } from "react-router-dom";
import "../scss/header.scss";
import CategorySummary from "./sections-used-on-multiple-pages/CategorySummary";
/* Note when using typescript below is the only import style which will work is below, 
importing an image/svg as a component wont work, I also need to create a index.d.ts 
file to include svg and jpg and any other files */
import hamburger from "../assets/shared/icon-hamburger.svg";
import logo from "../assets/shared/logo.svg";
import cart from "../assets/shared/icon-cart.svg";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  let headerMenu = showMenu ? `header header--open` : `header`;

  return (
    <>
      <div data-test="header" className={headerMenu}>
        <div
          data-test="hamburger"
          className="header__hamburger"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src={hamburger} alt="hamburger menu" />
        </div>
        <div className="header__title">
          <Link to="/">
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
        <div className="header__dropdown">
          <Link to="/sign-up" className="header__drop-down-sign-up">
            SIGN UP
          </Link>
          <Link to="/register" className="header__drop-down-register">
            LOGIN
          </Link>
          <CategorySummary />
        </div>
      </div>
    </>
  );
};

export default Header;
