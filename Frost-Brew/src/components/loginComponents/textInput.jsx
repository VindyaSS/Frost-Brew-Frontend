import React from "react";

export default function textInput(props) {
  return (
    <>
        <div className="FFields">
            <label className="FLabel">{props.label}</label>  
            <input className="FInput" 
            type={props.type||"text"} 
            placeholder={props.placeholder} 
            onChange={props.onChange} 
            value={props.value}/>
           
        </div>
    
    </>
    
  );
}
