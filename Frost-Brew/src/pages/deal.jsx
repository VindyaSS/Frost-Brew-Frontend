import React from "react";
import "../css/login.css";
import Navbar from "../components/NavBar/navBar";
import "../css/deals.css";
import DealCard from "../components/dealComponents/DealCard"
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";

export default function deal() {

    return (
        <>
            <Navbar />
            <div className="dealsS">
                <h1 className="Topic">Our Special<br />Deals</h1>
                <p className="Text">Handcrafted treats and small batch-brews at price that feels as<br /> good<br /> as they taste.Explore our daily selection of artisanal favourites </p>
                <div className="image-row">
                    <div className="image-group">
                        <DealCard
                            image={image2}
                            title="Morning Velvet Latte"
                            price="Rs.600"
                            description="Our signature medium roast with oat milk"
                        />
                    </div>

                    <div className="image-group">
                        <DealCard
                            image={image3}
                            title="Ruby Velvet Muffin"
                            price="Rs.200"
                            description="Infused with madagascar vanila"
                        />

                    </div>

                    <div className="image-group">
                        <DealCard
                            image={image4}
                            title="Hot Drip"
                            price="Rs.400"
                            description="4 hour slow brew with citrus notes"
                        />

                    </div>
                </div>

                <div className="image-row">
                    <div className="image-group">
                        <DealCard
                            image={image5}
                            title="Cocoa Duo Muffin"
                            price="Rs.350"
                            description="Creamy cocoa"
                        />
                    </div>

                    <div className="image-group">
                        <DealCard
                            image={image6}
                            title="Caramel Cloud Iced"
                            price="Rs.400"
                            description="Mix with caramel cocoa"
                        />
                    </div>

                    <div className="image-group">
                        <DealCard
                            image={image7}
                            title="Spring Minis Box"
                            price="Rs.700"
                            description="Contains 6 muffines"
                        />
                    </div>




                </div>



            </div>
        </>


    );














}