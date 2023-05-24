import React, { useState } from "react";
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/vanilla-zoom.min.css';
//import 'https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.css';
import  { Link } from "react-router-dom";


export const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    };
    
    return( 
        <>
        <meta charSet="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>Login - Brand</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
        />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.css"
        />
        <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
            <div className="container">
            <a className="navbar-brand logo" href="#">
                WeRent
            </a>
            <button
                data-bs-toggle="collapse"
                className="navbar-toggler"
                data-bs-target="#navcol-1"
            >
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="about-us.html">
                    About Us
                    </a>
                </li>
                <li className="nav-item" />
                </ul>
            </div>
            </div>
        </nav>
        <main className="page login-page">
            <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">
                <h2 className="text-info">Admin Log In</h2>
                <p>Enter your info</p>
                </div>
                <form onSubmit = {handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                        Email
                        </label>
                        <input className="form-control item" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                        Password
                        </label>
                        <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkbox"
                        />
                        <label className="form-check-label" htmlFor="checkbox">
                            Remember me
                        </label>
                        </div>
                    </div>
                    <Link to="/ForgotPassword">
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">
                        Forgot Password?
                        </button>
                    </div>
                    </Link> 
                    <Link to="/AdminHome">
                    <button className="btn btn-primary" type="submit">
                        Log In
                    </button>
                    </Link>
                </form>
            </div>
            </section>
        </main>
        </>
    )
}


export default AdminLogin;