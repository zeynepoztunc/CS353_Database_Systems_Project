import React, { useState } from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';


export const AdminLandmarkSuggestions = () => {
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
  <title>Services - Brand</title>
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
  <main className="page service-page">
    <section className="clean-block clean-services dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Landmark Suggestion Forms</h2>
          <p>
            Landmark suggestion forms filled by users are listed down below.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/turkey-alanya-top-things-to-do-explore-alanya-castle.jpg"
              />
              <div className="card-body">
                <h4 className="card-title">Alanya Castle, Antalya</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  <span
                    style={{
                      color: "rgb(13, 110, 253)",
                      backgroundColor: "rgb(255, 255, 255)"
                    }}
                  >
                    View
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/Alanya-excursions-3.webp"
              />
              <div className="card-body">
                <h4 className="card-title">Aspendos, Antalya</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  <span
                    style={{
                      color: "rgb(13, 110, 253)",
                      backgroundColor: "rgb(255, 255, 255)"
                    }}
                  >
                    View
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/3d.jpg"
              />
              <div className="card-body">
                <h4 className="card-title">Green Canyon Boat Tour, Antalya</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  <span
                    style={{
                      color: "rgb(13, 110, 253)",
                      backgroundColor: "rgb(255, 255, 255)"
                    }}
                  >
                    View
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/Stone-head-statues-at-Nemrut-Mountain-in-Turkey_Depositphotos_74526735_s-2019.jpeg.webp"
              />
              <div className="card-body">
                <h4 className="card-title">Mount Nemrut, Adıyaman</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/Waterfall-Duden-at-Antalya-Turkey_Depositphotos_8524062_s-2019.jpeg.webp"
              />
              <div className="card-body">
                <h4 className="card-title">Duden Waterfalls, Antalya</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  <span
                    style={{
                      color: "rgb(13, 110, 253)",
                      backgroundColor: "rgb(255, 255, 255)"
                    }}
                  >
                    View
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/Famous-Lycian-Tombs-of-ancient-Caunos-city-Dalyan-Turkey_Depositphotos_467017994_s-2019.jpeg.webp"
              />
              <div className="card-body">
                <h4 className="card-title">Dalyan Lycian Rock Tombs, Muğla</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  <span
                    style={{
                      color: "rgb(13, 110, 253)",
                      backgroundColor: "rgb(255, 255, 255)"
                    }}
                  >
                    View
                  </span>
                </button>
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


export default AdminLandmarkSuggestions;