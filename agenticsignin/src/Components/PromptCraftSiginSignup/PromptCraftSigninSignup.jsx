import React, { useState } from 'react'
import './PromptCraftSigninSignup.css'
import nameicon from '../Assets/icons8-name-24.png'
import emailicon from '../Assets/icons8-email-24.png'
import passwordicon from '../Assets/icons8-password-24.png'


const PromptCraftSigninSignup = () => {

    const [action,setAction]= useState("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div> 
            <div className="underline"></div>
        </div> 
        <div className="inputs">
            {action==="Sign In"?<div></div>:<div className="input">  
                <img src={nameicon} alt="" />
                <input type="text" placeholder='Name' />
            </div>}
            
            <div className="input"> 
                <img src={emailicon} alt="" />
                <input type="email" placeholder='Email ID' />
            </div>
            <div className="input">  
                <img src={passwordicon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
            
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot_password">Forgot Password ?<span> Click Here</span></div>}
        
        <div className="submit_section">
            <div className={action==="Sign In"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Sign In")}}>Sign In</div>
        </div>

    </div>
  )
}

export default PromptCraftSigninSignup