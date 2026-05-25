import React, { useState } from "react";
import TextInput from "../loginComponents/textInput";
import Email from "../loginComponents/Email";
import PhoneNum from "../loginComponents/PhoneNum";
import "../../css/login.css";
import BButton from "../loginComponents/BButton";

export default function PaymentMethodCard() {

    const [cardHolderName, setCardHoldername] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvc, setCVC] = useState("");

    return (
        <>
            <div className="whiteCard">
                <h4 className="text4">Payment Method</h4>
                <div className="form-row">

                    <div className="Cform-group">
                        <TextInput 
                            label="Card Holder"
                            placeholder="Enter Your Name"
                            value={cardHolderName}
                            onChange={(e) => setCardHolderName(e.target.value)}
                        />
                    </div>

                    <div className="Cform-group">
                        <TextInput 
                            label="Card Number"
                            placeholder=""
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>

                    <Email 
                        label="Expiry date"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder=""
                    />

                    <PhoneNum 
                        label="CVC"
                        value={cvc}
                        onChange={(e) => setCVC(e.target.value)}
                        placeholder=""
                    />

                    <BButton name="Pay"></BButton>

                </div>
            </div>
        </>
    );
}