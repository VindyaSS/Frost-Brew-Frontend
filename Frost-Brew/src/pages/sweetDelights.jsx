import React from "react";
import "../css/deals.css";
import Navbar from "../components/NavBar/navBar";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image3 from "../assets/image3.png";

import "../css/sweetDelights.css";
import DealCard from "../components/dealComponents/DealCard";

export default function sweetDelights() {

    return (

        <>
            <Navbar />
            <div className="dealsS">
                <h1 className="Topic">Sweet Delights</h1>
                <p className="Text">Handcrafted daily with organic ingredients and a dash of seasonal magic.<br />Discover our colourful collection of cupcakes </p>
                <div className="image-row">
                    <div className="image-group">
                        <DealCard
                            image={image8}
                            title="Velvet Espresso Blush"
                            price="Rs.250"
                            description="A rich dark cocoa based topping"
                        />
                    </div>

                    <div className="image-group">
                        <DealCard
                            image={image9}
                            title="Lavender Honey"
                            price="Rs.270"
                            description="floral notes with wildflower honey core"
                        />
                    </div>

                    <div className="image-group">
                        <DealCard
                            image={image10}
                            title="Morning Mist"
                            price="Rs.210"
                            description="vanil bean cake with sea salt caramel "
                        />
                    </div>
                </div>

                <div className="image-row">
                    <div className="image-group">
                        <DealCard
                            image={image11}
                            title="Midnight Berry"
                            price="Rs.150"
                            description="70% cocoa with fresh raspberry reduction"
                        />
                    </div>

                    <div className="image-group">
                        <DealCard
                            image={image12}
                            title="Citrus Bloom"
                            price="Rs.200"
                            description="Sponge with a tausted coconut trim"
                        />
                    </div>

                    <div className="image-group">
                        <DealCard
                            image={image3}
                            title="Ruby Velvet Muffin"
                            price="Rs.300"
                            description="Infused with madagascar vanila"
                        />
                    </div>
                </div>
            </div>

























        </>




























    );




















}