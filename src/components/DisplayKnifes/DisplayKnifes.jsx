import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import KnifeContext from "../../KnifeContext";
import "./displayKnifes.css";
import Card from "../UI/Card/Card";

export default function DisplayKnifes() {
  const { data } = useContext(KnifeContext);
  const [catalogue, setCatalogue] = useState(data);

  const catalogueList = catalogue.map((data) => {
    return (
      <Card>
        <div key={data._id} className="card-header">
          <img className="product-image" src={data.image} alt="img" />
        </div>
        <div className="content">
          <h3 className="product-name">{data.name}</h3>
          {/* <p className="product-description">{data.description}</p> */}
          <p className="product-price">
            Price: <strong>{data.price}€</strong>
          </p>
          <button className="details-btn">
            <Link to={`/product/${data._id}`}>View details</Link>
          </button>
          <button className="product-btn">Add to cart</button>
        </div>
      </Card>
    );
  });
  return <div className="product-container">{catalogueList}</div>;
}
