import React from "react";
import QuantityButton from "./QuantityButton";

export default function SpecialCardB({ image, title, price, description }) {
    return (
        <div className="ScardC">
            <div className="ScardC-body">
                <div className="body-left">

                    {/* Image */}
                    <figure className="ScardC-image2">
                        <img src={image} />
                    </figure>
                    <QuantityButton />

                </div>
                {/* Body */}
                <div className="body-right">
                    <header className="ScardC-header">
                        <h3 className="ScardC-title">{title}</h3>
                        <p className="ScardC-price">{price}</p>
                    </header>

                </div>
            </div>



            {/* Button */}
            <div className="ScardC-action">
                <button className="ScardC-btn">
                    <span>{"Add To Basket"}</span>
                </button>
            </div>
        </div>
    );
}