import React, { useState } from "react";
import coffeeImg from "../assets/loginCoffee.jpg";
import "../css/login.css";
import TextInput from "../components/loginComponents/textInput";
import PasswordField from "../components/loginComponents/PasswordField";
import BButton from "../components/loginComponents/BButton";
import Navbar from "../components/NavBar/navBar";
export default function Login() {
    const [username, setUsername] = useState('');
    const[password,setPassword]= useState('')
  return (
    <>
    <Navbar/>

    <div className="Login-container">
      <div className="FLEmpty">
      <div className="form-columns">
        <div className="Form-left">
          <h1 className="Topic"><b>Fresh Coffee,</b><br/>Sweet<br/>Moments</h1>
          <p className="Text">
            Experience the perfect blend of<br/> 
            slow-poured<br/>
            craftsmanship and small-batch sweetness.
          </p>
          
          <img src={coffeeImg} alt="login img" style={{ width: "350px", height: "350px",borderRadius:"40px"}}
          />
        </div>

        <div className="Form-right">
          <div className="WhiteCard">
            <h2 className="Topic2"><b>Welcome Back</b></h2>
            <p className="Text2">log into your account</p><br/>
            <TextInput label="USERNAME"
              placeholder="Enter Your Username "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            
            <PasswordField label = "PASSWORD"
              placeholder="Enter Your Password"
              value ={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="Text3"><href>Forgot Password?</href></p>
            <BButton name="Login"></BButton>

          </div>
        </div>
    </div>
      </div>
    </div>
  </> 
  );
}