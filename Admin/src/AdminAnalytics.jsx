import React, { useState } from "react";
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/vanilla-zoom.min.css';
import { Navbar } from './Navbar';

export const AdminAnalytics = () => {
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
  <title>FAQ - Brand</title>
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
  <Navbar/>
  <main className="page faq-page">
    <section className="clean-block clean-faq dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Analytics Report Page</h2>
          <p>The current analytics are given below.</p>
        </div>
        <div className="block-content">
          <div className="faq-item">
            <h4 className="question">Update date:</h4>
            <div className="answer">
              <p>19.04.2023</p>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">Report ID:</h4>
            <div className="answer">
              <p>19329</p>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">User Count</h4>
            <div className="answer">
              <p>30</p>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">Host Count</h4>
            <div className="answer">
              <p>15</p>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">Postings Count</h4>
            <div className="answer">
              <p>33</p>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">Booking Count</h4>
            <div className="answer">
              <p>55</p>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">Earthquake Victim Count - User</h4>
            <div className="answer">
              <p>2</p>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">
              <strong>Earthquake Victim Count - Host</strong>
            </h4>
            <div className="answer">
              <p>1</p>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">Superhost Count</h4>
            <div className="answer">
              <p>5</p>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">Total User Reporting</h4>
            <div className="answer">
              <p>4</p>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">
              <strong>Total User Reporting Count</strong>
            </h4>
            <div className="answer">
              <p>2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="page-footer dark">
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <h5>Get started</h5>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
            <li>
              <a href="#">Downloads</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h5>About us</h5>
          <ul>
            <li>
              <a href="#">Company Information</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h5>Support</h5>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Help desk</a>
            </li>
            <li>
              <a href="#">Forums</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h5>Legal</h5>
          <ul>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <p />
    </div>
  </footer>
</>

    );

    
}


export default AdminAnalytics;