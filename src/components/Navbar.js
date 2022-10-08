import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="navBar" >
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
          <Link to="/" >     <a className="navbar-brand" href="#">
                    <img src="https://toppng.com/uploads/preview/om-symbol-transparent-background-11549837690tn2ios9vux.png" width="30" height="30" class="d-inline-block align-top" alt="" />

                </a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info <span class="sr-only">(current)</span></a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to="/whydowe" ><a class="dropdown-item" href="#">Why we do</a></Link>
                            <Link to="conflictandconfusion"><a class="dropdown-item" href="#">Conflicts and Confusion</a></Link>    
                            </div>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Donate</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link " href="#">Contact Us</a>
                        </li>
<div>
                        <button type="button" id="register_login" className="btn btn-dark">Register/Login</button></div>
                    </ul>
                </div>
            </nav>
        </nav>
    )
}