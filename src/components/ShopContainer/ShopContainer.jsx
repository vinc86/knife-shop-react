import React from "react";
import { Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Details from "../Details/Details";
import DisplayKnifes from "../DisplayKnifes/DisplayKnifes";
import Home from "../Home/Home";
import "./container.css";
export default function ShopContainer(props) {
  return (
    <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={DisplayKnifes} />
      <Route path="/product/:id" component={Details} />
      <Route path="/cart" component={Cart} />
      {props.children}
    </div>
  );
}
