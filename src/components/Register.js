import React from "react";
import '../Register.css'


export default function Register() {
    return (
        <div className='register' >
  
       <form className="register-form">
       <div className="form-outline mb-4 ">
    <input type="email" id="name" className="form-control" required placeholder="Name" />
     
  </div>
  <div className="form-outline mb-4 ">
    <input type="email" id="email" className="form-control" required placeholder="Email" />
     
  </div>

   
  <div className="form-outline mb-4">
    <input type="password" id="createPassword" className="form-control" required placeholder="Create Password" />
     
</div>
    
    <div className="form-outline mb-4">
    <input type="password" id="confirmPassword" className="form-control" required placeholder="Confirm Password" />
     
</div>
 <div className="form-outline mb-4">
    <input type="text" id="confirmPassword" className="form-control" required placeholder="Mobile Number" />
     
</div>

   
  <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
 
   
</form>
        </div>
        
    )
}