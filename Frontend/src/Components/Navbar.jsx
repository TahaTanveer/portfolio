import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
function Navbar() {
  const [state, setstate] = useState(false);
  
  const stateHandler = () => {
    setstate(!state);
  }

  return (
    <nav style={{
      fontFamily:"Poppins",
      textdecoration: "none",
      fontWeight:"bold",
      fontstyle: "oblique",
      // overflow:"hidden",
      backgroundColor:"red",
    }}className="navbar navbar-expand-lg bg-light sticky-top ">
      <div className="container-fluid">
        {/* Brand */}
        <Link
          className="navbar-brand"
          style={{
            fontSize: '35px',
            textdecoration: 'none',
            fontWeight: 'normal',
    
          }}
          to="/"
        >
          Taha
        </Link>

        {/* Toggler button for smaller screens */}
        <button
          onClick={stateHandler}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={state ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${state ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/services">
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        {/* "My Work" Button */}
        <NavLink to="https://github.com/TahaTanveer/TahaTanveer" className="custom-button">
          My Work
        </NavLink>

        {/* Inline Styles */}
        <style>
          {`
          .navbar{
          background-color:red;
          }
            .custom-link {
              font-size: 16px;
              font-family: 'Poppins', sans-serif;
              color: black;
              margin: 0 10px;
              text-decoration: none;
              transition: color 0.3s ease-in-out;
            }
            .custom-link:hover {
              color: orange;
            } 

            .custom-button {
              font-size: 15px;
              letter-spacing: 1px;
              font-family: 'Poppins', sans-serif;
              color: black;
              background-color: orange;
              border: 2px solid black;
              border-radius: 5px;
              padding: 10px 20px;
              cursor: pointer;
              transition: all 0.3s ease-in-out;
              font-style: oblique;
              text-decoration: none;
            }

            .custom-button:hover {
              background-color: black;
              color: white;
            }
          `}
        </style>
      </div>
    </nav>
  );
}

export default Navbar;
