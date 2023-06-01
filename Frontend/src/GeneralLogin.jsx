import React, { useState } from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';
import  { Link } from "react-router-dom";
import { Navbar } from './Navbar.jsx';

export const GeneralLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Register - Brand</title>
  <link rel="stylesheet" href="./adminAssets/bootstrap/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.css"
  />
  <link rel="stylesheet" href="./adminAssets/css/vanilla-zoom.min.css" />
  <Navbar/>
  <main className="page registration-page">
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Choose Log In</h2>
          <p>Welcome to WeRent!</p>
        </div>
        <form>
          <div className="mb-3" style={{ textAlign: "center" }}>
            <h2 className="text-info">User/Host Login</h2>
            <Link to="UserLogin">
            <button
              className="btn btn-primary"
              type="submit"
              style={{ textAlign: "center" }}
            >
              Log in
            </button>
            </Link>
          </div>
        </form>
        <form>
          <div className="mb-3" style={{ textAlign: "center" }}>
            <h2 className="text-info">Admin Login</h2>
            <Link to="AdminLogin">
            <button
              className="btn btn-primary"
              type="submit"
              style={{ textAlign: "center" }}>
            Log in
            </button>
            </Link>
          </div>
        </form>
        <form>
          <div className="mb-3" style={{ textAlign: "center" }}>
            <h2 className="text-info">Register</h2>
            <Link to="Register">
            <button
              className="btn btn-primary"
              type="submit"
              style={{ textAlign: "center" }}
            >
              Sign up
            </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  </main>
</>

        
    );

    
}


export default GeneralLogin;