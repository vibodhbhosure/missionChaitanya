import { Link } from "react-router-dom";
import React from "react";
import '../Login.css'


export default function Login() {
    return (
        <div className='login' >
  
       <form className="login-form">
   
  <div className="form-outline mb-4 ">
    <input type="email" id="form2Example1" className="form-control" required placeholder="Email" />
     
  </div>

   
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" required placeholder="Password" />
     
</div>
  

   
  <button type="button" className="btn btn-primary btn-block mb-4">Login</button>
<p>Not a member? <Link to="register">Register</Link></p>
   
</form>
        </div>
        
    )
}