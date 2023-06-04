import React from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';
import  { Link } from "react-router-dom";
import { Navbar } from './Navbar.jsx';
import bgImage from './background.gif';
import {NavLink} from "react-bootstrap";

export const GeneralLogin = () => {

  return (
      <div style={{background: `url(${bgImage})`, backgroundSize: 'cover', height: '140vh'}}>
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
          <div className="container">
            <button
                data-bs-toggle="collapse"
                className="navbar-toggler"
                data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <a
                  className="navbar-brand logo"
                  style={{ paddingRight: 0, marginBottom: 0, fontSize: 32 }}
              >
                WeRent
              </a>
              <ul className="navbar-nav ms-auto" />
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink  className="nav-link">
                    ABOUT US
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="page registration-page">
          <section className="clean-block clean-form dark" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <div className="container">
              <div className="block-heading" style={{backgroundColor: 'rgba(255,255,255,0.8)', padding: '20px'}}>
                <h2 className="text-info">Choose Log In</h2>
                <p>Welcome to WeRent!</p>
              </div>
              <form style={{backgroundColor: 'rgba(255,255,255,0.8)', padding: '20px'}}>
                <div className="mb-3" style={{ textAlign: "center" }}>
                  <h2 className="text-info">Customer Login</h2>
                  <Link to="UserLogin">
                    <button className="btn btn-primary" type="submit" style={{ textAlign: "center" }}>
                      Log in
                    </button>
                  </Link>
                </div>
              </form>
              <form style={{backgroundColor: 'rgba(255,255,255,0.8)', padding: '20px'}}>
                <div className="mb-3" style={{ textAlign: "center" }}>
                  <h2 className="text-info">Host Login</h2>
                  <Link to="HostLogin">
                    <button className="btn btn-primary" type="submit" style={{ textAlign: "center" }}>
                      Log in
                    </button>
                  </Link>
                </div>
              </form>
              <form style={{backgroundColor: 'rgba(255,255,255,0.8)', padding: '20px'}}>
                <div className="mb-3" style={{ textAlign: "center" }}>
                  <h2 className="text-info">Admin Login</h2>
                  <Link to="AdminLogin">
                    <button className="btn btn-primary" type="submit" style={{ textAlign: "center" }}>
                      Log in
                    </button>
                  </Link>
                </div>
              </form>
              <form style={{backgroundColor: 'rgba(255,255,255,0.8)', padding: '20px'}}>
                <div className="mb-3" style={{ textAlign: "center" }}>
                  <h2 className="text-info">Register</h2>
                  <Link to="Register">
                    <button className="btn btn-primary" type="submit" style={{ textAlign: "center" }}>
                      Sign up
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
  );
}

export default GeneralLogin;
