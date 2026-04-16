import React from "react";

function Email(props) {

    return (
        <>

            <div className="FFields">

                <label className="FLabel">{props.label}</label>
                <input
                    type={props.type}
                    value={props.value}
                    name={props.name}
                    onChange={props.onChange}
                    placeholder={props.placeholder || "example@domain.com"}
                    className="FInput"
                    
                />


            </div>


        </>

    )



}

export default Email;