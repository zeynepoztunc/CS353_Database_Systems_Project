import React, { useState } from "react";
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/vanilla-zoom.min.css';
import { Navbar } from './Navbar';

export const AdminReviews = () => {
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
          <h2 className="text-info">Reviews</h2>
          <p>Reviews left by all users are shown below.</p>
        </div>
        <div className="block-content">
          <div className="faq-item">
            <h4 className="question">Host Evaluation</h4>
            <div className="answer">
              <p>Jan 26, 2023 by John Smith johnsmith@gmail.com</p>
              <p>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  The host was very friendly.
                </span>
              </p>
              <div>
                <div className="row">
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Cleanliness</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Check-in</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3.5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>
                        Communication
                      </span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Accuracy</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Safety</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Location</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Value</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">Guest Evaluation</h4>
            <div className="answer">
              <p>March 14, 2023 by Emir Kasap emirkasap@gmail.com</p>
              <p>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  The guests left a lot of trash.
                </span>
              </p>
              <div>
                <div className="row">
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Cleanliness</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Check-in</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3.5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>
                        Communication
                      </span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Accuracy</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Safety</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Location</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Value</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">Stay Evaluation</h4>
            <div className="answer">
              <p>April 1, 2023 by Mary News marynews@gmail.com</p>
              <p>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  The house was clean overall. There were too many stray dogs
                  around the apartment.
                </span>
              </p>
              <div>
                <div className="row">
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Cleanliness</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Check-in</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3.5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>
                        Communication
                      </span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Accuracy</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Safety</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Location</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Value</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                </div>
              </div>
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


export default AdminReviews;