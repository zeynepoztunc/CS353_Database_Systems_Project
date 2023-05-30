import React, { useState, useEffect } from "react";
import "./adminAssets/bootstrap/css/bootstrap.min.css";
import "./adminAssets/css/vanilla-zoom.min.css";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [successful, setSuccesful] = useState(false);

  useEffect(() => {
    console.log(gender); // Display the selected value whenever it changes
  });

  const handleSelect = (event) => {
    setGender(event.target.value);
    
  };
  const handleSubmit = (e) => {
    setName(document.getElementById("name"));
    setPassword(document.getElementById("password"));
    setSurname(document.getElementById("surname"));
    setPhoneNo(document.getElementById("phoneNo"));
    setBirthDate(document.getElementById("birthDate"));
    
    if ( name === "" ){
      alert("Name is empty.");
      return;
    }
    if ( surname === "" ){
      alert("Surname is empty.");
      return;
    }
    if ( password === "" ){
      alert("Password is empty.");
      return;
    }
    if ( phoneNo === "" ){
      alert("Phone number is empty.");
      return;
    }
    if ( birthDate === "" ){
      alert("Date of birth is empty.");
      return;
    }
    if ( gender === "" ){
      alert("Gender is empty.");
      return;
    }
    try {
      
    } catch (error) {
      
    }
  };
  

  return (
    <>
      <Navbar />
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
                <input className="form-control item" type="text" id="surname" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Telephone-no
                </label>
                <input className="form-control item" type="tel" id="phoneNo" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Date of Birth
                </label>
                <input className="form-control" type="date" id="birthDate" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="gender"
                  value={gender}
                  onChange={handleSelect}>
                  <option value="">Select gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control item"
                  type="email"
                  id="email"
                />
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
              {successful && (
                <Link to="">
                  <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
                    Sign Up
                  </button>
                </Link>
              )}{" "}
              {!successful && (
                <Link to="/">
                  <button className="btn btn-primary" type="submit">
                    Sign Up
                  </button>
                </Link>
              )}
              <Link to="/">
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
};
export default Register;
