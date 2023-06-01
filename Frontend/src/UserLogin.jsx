import React, { useState } from "react";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/vanilla-zoom.min.css";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember_me, setRememberme] = useState(false);
  const [successful, setSuccesful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(document.getElementById("email").value);
    setPassword(document.getElementById("password").value);
    console.log(remember_me + "adsf");
    if (document.getElementById("rememberme").checked) {
      setRememberme(true);
    }

    if (!password) {
      alert("You have to enter your password");
      return;
    }
    if (!email) {
      alert("You have to enter your email.");
      return;
    }
    if (!email || !password) {
      alert("You have to input both email and password");
      return;
    }
    console.log(email);
    console.log(password);
    console.log(remember_me);

    const trueEmail = "";
    const truePassword = "";
    try {
      if (password.equals(truePassword)) {
      }
      setEmail("");
      setPassword("");
      setRememberme(true);
      setSuccesful(true);
      //history.push("/AdminHome");
    } catch (error) {
      alert(error.message);
    }
  };

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
      <Navbar />
      <main className="page login-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">User/Host Log In</h2>
              <p>Welcome to WeRent!</p>
            </div>
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input className="form-control item" type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input className="form-control" type="password" id="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox"
                  />
                  <label className="form-check-label" htmlFor="checkbox" value={remember_me} id="rememberme">
                    Remember me
                  </label>
                </div>
              </div>
              <Link to="/ForgotPassword">
                <div className="mb-3">
                  <label
                    className="form-label"
                    style={{ textDecoration: "underline" }}
                  >
                    Forgot Password?
                  </label>
                </div>
              </Link>
              <div>
                <label
                  className="form-label"
                  style={{ textDecoration: "underline", textAlign: "left" }}
                >
                  Register
                </label>
              </div>
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
  );
};
export default UserLogin;
