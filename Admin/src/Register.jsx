import React, { useState } from "react";
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/vanilla-zoom.min.css';
import  { Link } from "react-router-dom";
import { Navbar } from './Navbar';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <>
        <Navbar/>
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
                  <input className="form-control item" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email-1" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control item" value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password"/>
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