import React from "react";

function PhoneNum(props) {

    return (

        <>

            <div className="FFields">

                <label className="FLabel">{props.label}</label>
                <input

                    type={props.type || "text"}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    className="FInput"
                />
            </div>


        </>

    )


}

export default PhoneNum;