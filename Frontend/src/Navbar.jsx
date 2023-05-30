import React, { useState } from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';
import  { Link } from "react-router-dom";


export const Navbar = (props) => {
    return (
        <>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>Register - Brand</title>
        <link rel="stylesheet" href="adminAssets/bootstrap/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.css"
        />
        <link rel="stylesheet" href="adminAssets/css/vanilla-zoom.min.css" />
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
          <div className="container">
            <Link to= "/AdminHome" a className="navbar-brand logo" >
              WeRent
            </Link>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link to="/AdminHome" className="nav-link">
                    Home
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/AdminHome" className="nav-link">
                    About Us
                </Link>
                </li>
                <li className="nav-item" />
                <li className="nav-item">
                <Link to="/Register" className="nav-link">
                    Logout
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
    );
}
export default Navbar;