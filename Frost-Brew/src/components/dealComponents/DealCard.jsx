import React from "react";

export default function CardEcommerce({props}) {
  return (
    <div className="card">
      {/* Image */}
      <figure className="card-image">
        <img src={props.image} alt={props.title} />
      </figure>

      {/* Body */}
      <div className="card-body">
        <header className="card-header">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-price">{props.price}</p>
        </header>
        <p className="card-description">{props.description}</p>
      </div>

      {/* Button */}
      <div className="card-action">
        <button className="card-btn">
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
}