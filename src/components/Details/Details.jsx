import React, { useContext, useState } from "react";
import KnifeContext from "../../KnifeContext";
import "./details.css";

export default function Details(props) {
  const { data } = useContext(KnifeContext);

  const filterProduct = data.filter(
    (product) => product._id === +props.match.params.id
  );

  return filterProduct.map((data) => {
    return (
      <div className="product-info-container">
        <div key={data._id} className="details-header">
          <img className="details-image" src={data.image} alt="img" />
        </div>
        <div className="content">
          <h3 className="details-name">{data.name}</h3>
          <p className="details-description">{data.description}</p>

          <div className="card-bottom">
            <p>
              Stock: <strong>{data.stock}</strong>
            </p>
            <p className="details-price">
              Price: <strong>{data.price}€</strong>
            </p>
          </div>
          <button className="product-btn">Add to cart</button>
        </div>
      </div>
    );
  });
}
