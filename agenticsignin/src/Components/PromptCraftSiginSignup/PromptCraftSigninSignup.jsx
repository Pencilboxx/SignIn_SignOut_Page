import React, { useState } from 'react'
import './PromptCraftSigninSignup.css'
import nameicon from '../Assets/icons8-name-24.png'
import emailicon from '../Assets/icons8-email-24.png'
import passwordicon from '../Assets/icons8-password-24.png'


const PromptCraftSigninSignup = () => 
{

    const [action,setAction]= useState("Sign Up");

    const [name, setName] = useState("");
    const [emailID, setEmailID] = useState("");
    const [password, setPassword] = useState("");
    
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5258';

    const handleSignUp = async (name, emailID, password) => {
        const response = await fetch(`${API_BASE_URL}/api/authorization/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, emailID, passwordHash: password })
        });
        let data = {};
        if (response.headers.get("content-type")?.includes("application/json")) 
        {
        data = await response.json();
   }
        if (response.ok) {
            alert(data.message || "Sign up successful!");
        } else {
            alert(data.message || "Sign up failed!");
            console.error(data);
        }
    };

    const handleSignIn = async (emailID, password) => {
        const response = await fetch(`${API_BASE_URL}/api/authorization/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emailID, passwordHash: password })
        });
        let data = {};
        if (response.headers.get("content-type")?.includes("application/json")) {
        data = await response.json();
    }
        if (response.ok) {
            alert("Sign in successful! Token: " + data.token);
        } else {
            alert(data.message || "Sign in failed!");
            console.error(data);
        }
    };

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div> 
            <div className="underline"></div>
        </div> 
        <div className="inputs">
            {action==="Sign In"?<div></div>:<div className="input">  
                <img src={nameicon} alt="" />
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>}
            
            <div className="input"> 
                <img src={emailicon} alt="" />
                <input type="email" placeholder='Email ID' value={emailID} onChange={(e) => setEmailID(e.target.value)} />
            </div>
            <div className="input">  
                <img src={passwordicon} alt="" />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot_password">Forgot Password ?<span> Click Here</span></div>}
        
        <div className="submit_section">
            <div className={action==="Sign In"?"submit graypart":"submit"}onClick={()=>{if(action==="Sign Up"){handleSignUp(name, emailID, password);}else{setAction("Sign Up");}}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit graypart":"submit"} onClick={()=>{if(action==="Sign In"){handleSignIn(emailID, password);}else{setAction("Sign In");}}}>{action=== "Sign Up" ? "Go to Sign In" : "Sign In"}</div>
        </div>
        

    </div>
  )
 
}
export default PromptCraftSigninSignup
