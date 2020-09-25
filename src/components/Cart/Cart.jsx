import React, { useContext } from "react";
import { Link } from "react-router-dom";
import KnifeContext from "../../KnifeContext";
import Card from "../UI/Card/Card";

export default function Cart(props) {
  const { cart } = useContext(KnifeContext);

  console.log(cart);
  const showCart = cart.map((data) => {
    return (
      <Card>
        <div key={data._id} className="card-header">
          <img className="product-image" src={data.image} alt="img" />
        </div>
        <div className="content">
          <h3 className="product-name">{data.name}</h3>
          <p>Stock: {data.stock}</p>
          <p className="product-description">{data.description}</p>
          <p className="product-price">
            Price: <strong>{data.price}€</strong>
          </p>
          <button className="details-btn">
            <Link to={`/product/${data._id}`}>View details</Link>
          </button>
        </div>
      </Card>
    );
  });

  return (
    <div>
      {showCart}
      {/* {cart.length === 0 ? <h2>Cart Empty</h2> : { showCart }} */}
    </div>
  );
}
