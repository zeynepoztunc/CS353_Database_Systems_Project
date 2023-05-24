import React, { useState } from "react";
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/vanilla-zoom.min.css';
import { Navbar } from './Navbar';

export const AdminMaintenanceForm = () => {
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
          <h2 className="text-info">Maintenance Mode</h2>
          <p>Choose time duration for the Maintenance Mode.</p>
        </div>
        <div className="block-content">
          <div className="faq-item">
            <h4 className="question">Choose time</h4>
            <div className="answer">
              <div className="row">
                <div className="col">
                  <h1>Timezone:</h1>
                </div>
                <div className="col">
                  <div className="dropdown" style={{ alignSelf: "center" }}>
                    <button
                      className="btn btn-primary dropdown-toggle"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Timezones&nbsp;
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        GMT +3&nbsp; - Turkiye
                      </a>
                      <a className="dropdown-item" href="#">
                        GMT +1 - UK
                      </a>
                      <a className="dropdown-item" href="#">
                        GMT -4 - NYC
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1>Date:</h1>
                </div>
                <div className="col">
                  <input type="date" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1>Start time:</h1>
                </div>
                <div className="col">
                  <input type="time" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1>End time:</h1>
                </div>
                <div className="col">
                  <input type="time" />
                </div>
              </div>
              <div className="row">
                <div className="col" style={{ alignSelf: "center" }}>
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={{ marginLeft: 400 }}
                  >
                    Start Maintenance
                  </button>
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


export default AdminMaintenanceForm;