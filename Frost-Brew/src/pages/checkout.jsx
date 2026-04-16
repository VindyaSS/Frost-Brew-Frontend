import React from "react";
import "../css/deals.css";
import Navbar from "../components/NavBar/navBar";
import DetailCard from "../components/checkout/DetailCard";
import "../css/checkout.css"
import OrderSummaryCard from "../components/checkout/OrderSummaryCard";
import ImgC from "../assets/imagC1.png"
export default function Chekout() {

    return (
        <>
            <Navbar />
            <div className="dealsB">
                <h1 className="Topic">Complete Your Oder</h1>
                <p className="Text">
                    Your journey to coffee bliss is just one step away
                </p>

                <div className="grid">

                    <DetailCard/>
                    <OrderSummaryCard/>
                    <figure className="cardimage">

                    <img src={ImgC} alt="Photo" />
                    </figure>

                </div>
            </div>





















        </>























    );


























}
