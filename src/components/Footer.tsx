import React from "react";
import "../scss/footer.scss";
import { Link, BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import facebook from "../assets/shared/icon-facebook.svg";
import instagram from "../assets/shared/icon-instagram.svg";
import twitter from "../assets/shared/icon-twitter.svg";

export default function Footer() {
  return (
    <Router>
      <div className="footer">
        <div className="footer__title">
          <img src={logo} alt="audiophile logo" />
        </div>
        <ul className="footer__nav-links">
          <Link to="/home" className="footer__link">
            HOME
          </Link>
          <Link to="/headphones" className="footer__link">
            HEADPHONES
          </Link>
          <Link to="/speakers" className="footer__link">
            SPEAKERS
          </Link>
          <Link to="/earphones" className="footer__link">
            EARPHONES
          </Link>
        </ul>
        <p className="footer__copy">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="footer__copy footer__copy--half-width">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="footer__social-media">
          <img className="footer__social-svg" src={facebook} alt="" />
          <img className="footer__social-svg" src={instagram} alt="" />
          <img className="footer__social-svg" src={twitter} alt="" />
        </div>
      </div>
    </Router>
  );
}
