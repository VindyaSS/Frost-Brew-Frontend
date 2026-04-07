import React, { useState } from "react";

function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="FFields" >
      <label className="FLabel">{props.label}</label>

      <input
        type={showPassword ? "text" : "password"}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="FInput"
        minLength={props.minLength || 6}
      />

      
       
      
    </div>
  );
}

export default PasswordField;
