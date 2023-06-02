import React from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';
import  { Link } from "react-router-dom";
import { Navbar } from './Navbar.jsx';
import bgImage from './background.gif';

export const GeneralLogin = () => {

  return (
      <div style={{background: `url(${bgImage})`, backgroundSize: 'cover', height: '140vh'}}>
        <Navbar/>
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
