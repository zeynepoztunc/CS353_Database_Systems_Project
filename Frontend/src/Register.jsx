import React, { useState } from "react";
import "./adminAssets/bootstrap/css/bootstrap.min.css";
import "./adminAssets/css/vanilla-zoom.min.css";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [successful, setSuccessful] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted:');
    console.log(name, surname, phoneNo, birthDate, gender, email, password);

    const registerData = {
      name: name,
      surname: surname,
      password: password,
      email: email,
      dateOfBirth: birthDate,
      telephoneNo: phoneNo,
      gender: gender
    }

    try {
      const response = await axios.post('http://localhost:8080/register', registerData);
      console.log(response.data);
      navigate('/UserLogin');
    }
    catch (error)
    {
      console.error('Failed to submit form: ', error);
    }
  }

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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input className="form-control item" type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="surname">
                    Surname
                  </label>
                  <input className="form-control item" type="text" id="surname" value={surname} onChange={e => setSurname(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="phoneNo">
                    Telephone-no
                  </label>
                  <input className="form-control item" type="text" id="phoneNo" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="birthDate">
                    Date of Birth
                  </label>
                  <input className="form-control item" type="date" id="birthDate" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="gender">
                    Gender
                  </label>
                  <select className="form-select" id="gender" value={gender} onChange={e => setGender(e.target.value)}>
                    <option value="">Select gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input className="form-control item" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input className="form-control item" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-primary" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </section>
        </main>
      </>
  );
};

export default Register;
