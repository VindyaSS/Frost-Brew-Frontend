import React from "react";
import QuantityButton from "./QuantityButton";

export default function SpecialCardB({ image, title, price, description }) {
  return (
    <div className="ScardS">
      {/* Image */}
      <figure className="ScardS-image1">
        <img src={image}  />
      </figure>

      {/* Body */}
      <div className="Scard-body">
        <header className="Scard-header">
          <h3 className="Scard-title">{title}</h3>
          <p className="Scard-price">{price}</p>
        </header>
        <p className="Scard-description">{description}</p>
        <QuantityButton/>

      </div>
      {/* Button */}
      <div className="Scard-action">
        <button className="Scard-btn">
          <span>{"Add To Basket"}</span>
        </button>
      </div>
    </div>
  );
}