import React, { useState } from "react";
import "./QuantityButton.css";

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="stepper">
      <button className="btn" onClick={decrease}>-</button>
      <span className="qty">{quantity}</span>
      <button className="btn" onClick={increase}>+</button>
    </div>
  );
}