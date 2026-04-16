import React from "react";
import "../css/deals.css";
import imageB1 from "../assets/imageB1.png";
import imageB2 from "../assets/imageB2.png";
import imageB3 from "../assets/imageB3.png";
import imageB4 from "../assets/imageB4.png";
import imageB5 from "../assets/imageB5.png";
import imageB6 from "../assets/imageB6.png";

import "../css/sweetBrews.css";
import "../css/specialCard.css";
import "../css/SpecialCardB.css";
import "../css/specialCardC.css";

import Navbar from "../components/NavBar/navBar";
import SpecialCard from "../components/sweetSpecial/SpecialCard";
import SpecialCardB from "../components/sweetSpecial/SpecialCardB";
import SpecialCardC from "../components/sweetSpecial/SpecialCardC";

export default function SweetBrews() {
    return (
        <>
            <Navbar />

            <div className="dealsB">
                <h1 className="Topic">Artisanal Brews</h1>
                <p className="Text">
                    Experience the precision of a slow-pour culture. Every cup is a canvas<br />
                    of roasted depth and aromatic elegance.
                </p>

                <div className="image-group1">
                    <SpecialCardB
                        image={imageB1}
                        title="Cold Brew"
                        price="Rs.450"
                        description="Mixure of dark chocolate and toasted walnut"
                    />
                    <div className="image-group2">

                        <SpecialCardC
                            image={imageB2}
                            title="Espresso"
                            price="Rs.300"
                            description="Floral notes with wildflower honey core"
                        />

                        <SpecialCardC
                            image={imageB3}
                            title="Latte"
                            price="Rs.350"
                            description="Vanilla bean cake with sea salt caramel"
                        />
                    </div>

                </div>
                <div className="image-row1">
                
                    <SpecialCard
                            image={imageB4}
                            title="Macchiato"
                            price="Rs.250"
                            description="Vanilla bean cake with sea salt caramel"
                        />

                        <SpecialCard
                            image={imageB5}
                            title="Flat White"
                            price="Rs.320"
                            description="Vanilla bean cake with sea salt caramel"
                        />

                        <SpecialCard
                            image={imageB6}
                            title="Cortado"
                            price="Rs.250"
                            description="Vanilla bean cake with sea salt caramel"
                        />
                        </div>
                
            </div>
        </>
    );
}