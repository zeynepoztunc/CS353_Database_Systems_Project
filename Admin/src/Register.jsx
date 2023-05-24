import React, { useState } from "react";
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/vanilla-zoom.min.css';
import  { Link } from "react-router-dom";


export const Register = () => {
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
                <li className="nav-item">
                  <a className="nav-link" href="registration-1.html">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="page registration-page">
          <section className="clean-block clean-form dark">
            <div className="container">
              <div className="block-heading">
                <h2 className="text-info">Registration</h2>
                <p>Please enter your information</p>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input className="form-control item" type="text" id="name" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Surname
                  </label>
                  <input className="form-control item" type="text" id="name-1" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Telephone-no
                  </label>
                  <input className="form-control item" type="email" id="email" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Date of Birth
                  </label>
                  <input className="form-control" type="date" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Gender
                  </label>
                  <div className="dropdown show">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      aria-expanded="true"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown{" "}
                    </button>
                    <div className="dropdown-menu show" data-bs-popper="none">
                      <a className="dropdown-item" href="#">
                        Female
                      </a>
                      <a className="dropdown-item" href="#">
                        Male
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input className="form-control item" type="email" id="email-1" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control item"
                    type="password"
                    id="password"
                  />
                </div>
                <Link to="">
                <button className="btn btn-primary" type="submit">
                  Sign Up
                </button>
                </Link>
                <Link to="">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ float: "right" }}
                >
                  LogIn
                </button>
                </Link>
              </form>
            </div>
          </section>
        </main>
      </>
    );

    
}
export default Register;