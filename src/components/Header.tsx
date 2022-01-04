import React from "react";
import { Link } from 'react-router-dom'
import '../scss/header.scss'

 const Header:React.FC<{number: string}> = (props) => {
  const [showMenu, setShowMenu] = React.useState(false)

  return <div data-test="header">
    <div data-test="hamburger" className="header__hamburger" onClick={() => setShowMenu(true)}>Hamburger</div>
    <ul className="header__nav-links">
      <li>HOME</li>
      <li>HEADPHONES</li>
      <li>SPEAKERS</li>
      <li>EARPHONES</li>
    </ul>
  </div>;
}

export default Header