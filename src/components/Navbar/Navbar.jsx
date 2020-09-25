import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bars from "../../svg/bars-solid.svg";
import Cart from "../../svg/shopping-cart-solid.svg";
import Times from "../../svg/times-solid.svg";
import "./navbar.css";

export default function Navbar() {
  let [openNav, setOpenNav] = useState(false);

  let menuClass = "menu-list ";
  menuClass += openNav && "open";

  const handleMenu = () => {
    setOpenNav(!openNav);
  };

  return (
    <div>
      <header>
        <div onClick={handleMenu} className="menu">
          <img src={Bars} alt="bars" width="20" />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">The Knife Shop</Link>
          </h1>
        </div>
        <nav>
          <ul className={menuClass}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
            <li onClick={handleMenu} className="close">
              <img src={Times} width="20" alt="times" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>0</span>
            <Link to="/cart">
              <img src={Cart} width="20" alt="cart" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
