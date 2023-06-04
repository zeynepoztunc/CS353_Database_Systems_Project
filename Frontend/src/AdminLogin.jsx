import React, { useState } from "react";
import "./adminAssets/bootstrap/css/bootstrap.min.css";
import "./adminAssets/css/vanilla-zoom.min.css";
//import 'https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.css';
import { Link, Navigate } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import {NavLink} from "react-bootstrap";
import bgImage from "./admin.gif";

export const AdminLogin = (props) => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [remember_me, setRememberme] = useState(false);
  const [successful, setSuccesful] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAdminId(document.getElementById("adminId").value);
    setPassword(document.getElementById("password").value);
    console.log(remember_me + "adsf");
    //setSuccesful(true);
    if (document.getElementById("rememberme").checked) {
      setRememberme(true);
    }

    if (!password) {
      alert("You have to enter your password");
      return;
    }
    if (!adminId) {
      alert("You have to enter your admin ID.");
      return;
    }
    if (!adminId || !password) {
      alert("You have to input both admin ID and password");
      return;
    }
    console.log(adminId);
    console.log(password);
    console.log(remember_me);

    const trueAdminId = "";
    const truePassword = "";
    try {
      if (password != truePassword) {
        const loginResponse = await axios.get('http://localhost:8080/adminLogin?adminId=' + adminId + '&password=' + password);
        console.log(loginResponse.data);
        if(loginResponse.data.loginSuccessful == true){
          //adminId = loginResponse.data.adminId; diyeceğiz burada
          navigate('/AdminHome');
        }
        else{
          alert("Login unsuccessful");
        }
      }
      setAdminId("");
      setPassword("");
      setRememberme(true);
      setSuccesful(true);
      //history.push("/AdminHome");
    } catch (error) {
      alert(error.message);
    }
  };

  const gotoGeneralLogin
      = (event) => {
    event.preventDefault();
    navigate('/');
  }

  return (
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
                <NavLink onClick={gotoGeneralLogin} className="nav-link">
                  GO BACK
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="page login-page">
        <section className="clean-block clean-form dark" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative' }}>
          <div className="container">
            <div className="block-heading" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
              <h2 className="text-info">Admin Log In</h2>
              <p>Enter your info</p>
            </div>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '50px', borderRadius: '20px' }}>
              <div className="mb-3">
                <label className="form-label" htmlFor="adminId">
                  Admin ID
                </label>
                <input
                  className="form-control item"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  type="adminId"
                  id="adminId"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox"
                  />
                  <label
                    className="form-check-label"
                    value={remember_me}
                    htmlFor="checkbox"
                    id="rememberme"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <Link to="/ForgotPassword">
                <div className="mb-3">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={props.onFormSwitch}
                  >
                    Forgot Password?
                  </button>
                </div>
              </Link>

              {successful && (
                <Link to="/AdminHome">
                  <button className="btn btn-primary" type="submit">
                    Log In
                  </button>
                </Link>
              )}
              {!successful && (
                <button className="btn btn-primary" type="submit">
                  Log In
                </button>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
export default AdminLogin;
