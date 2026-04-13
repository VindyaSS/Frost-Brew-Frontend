import React from "react";
import QuantityButton from "./QuantityButton";


export default function SpecialCard({ image, title, price, description }) {
  return (
    <div className="card">
      {/* Image */}
      <figure className="card-image">
        <img src={image}  />
      </figure>

      {/* Body */}
      <div className="card-body">
        <header className="card-header">
          <h3 className="card-title">{title}</h3>
          <p className="card-price">{price}</p>
        </header>
        <p className="card-description">{description}</p>
        <QuantityButton/>

      </div>
      {/* Button */}
      <div className="card-action">
        <button className="card-btn">
          <span>{"Add To Basket"}</span>
        </button>
      </div>
    </div>
  );
}