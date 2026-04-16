import React, { useState } from "react";
import TextInput from "../loginComponents/textInput";
import Email from "../loginComponents/Email";
import PhoneNum from "../loginComponents/PhoneNum";
import "../../css/login.css";

export default function DetailCard() {

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <>
            <div className="whiteCard">
                <h4 className="text4">Guest Checkout</h4>
                <div className="form-row">

                    <div className="Cform-group">
                        <TextInput 
                            label="First Name"
                            placeholder="Enter Your FirstName"
                            value={firstName}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>

                    <div className="Cform-group">
                        <TextInput 
                            label="Last Name"
                            placeholder="Enter Your LastName"
                            value={lastName}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>

                    <Email 
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                    />

                    <PhoneNum 
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your Phone Number"
                    />

                </div>
            </div>
        </>
    );
}