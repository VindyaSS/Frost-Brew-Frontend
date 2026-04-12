import React from "react";
import "../css/deals.css";
import Navbar from "../components/NavBar/navBar";
import SpecialCard from "../components/sweetSpecial/SpecialCard"
import image8 from "../assets/image8.png";
import "../css/sweetDelights.css";

export default function sweetDelights() {

    return (

        <>
            <Navbar />
            <div className="dealsS">
                <h1 className="Topic">Sweet Delights</h1>
                <p className="Text">Handcrafted daily with organic ingredients and a dash of seasonal magic.<br />Discover our colourful collection of cupcakes </p>
                <div className="image-row1">
                    <div className="image-group1">
                        <SpecialCard
                            image={image8}
                            title="Morning Velvet Latte"
                            price="Rs.600"
                            description="Our signature medium roast with oat milk"
                        />
                    </div>

                    <div className="image-group2">
                        <SpecialCard
                            image={image8}
                            title="Morning Velvet Latte"
                            price="Rs.600"
                            description="Our signature medium roast with oat milk"
                        />
                    </div>
                </div>
            </div>

























        </>




























    );




















}