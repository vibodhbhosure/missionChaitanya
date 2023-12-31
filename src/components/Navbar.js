import React from "react";
import { Link } from "react-router-dom";
import '../Navbar.css'
export default function Navbar() {
  return (
    <nav className="navBar">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navbar"
      >
        <Link to="/">
          {" "}
          <a className="navbar-brand" href="#">
            <img
              src="https://toppng.com/uploads/preview/om-symbol-transparent-background-11549837690tn2ios9vux.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link nav-i"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                
              >
                Info <span className="sr-only">(current)</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to="/whydowe">
                  <a className="dropdown-item" href="#">
                    Why do we?
                  </a>
                </Link>
                <Link to="conflictandconfusion">
                  <a className="dropdown-item" href="#">
                    Conflicts and Confusion
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item active ">
              <Link to="/donate" className="nav-link nav-i"  >
                Donate
              </Link>
            </li>
            <li className="nav-item active nav-i">
            <Link to="/aboutus" className="nav-link nav-i"  >
                About 
                </Link>
            </li>
            <li className="nav-item active nav-i">
            <Link to="/contactus" className="nav-link nav-i"  >
                Contact
                </Link>
            </li>
            <li className="nav-item active nav-i">
            <Link to="/join" className="nav-link nav-i"  >
                Join 
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}
