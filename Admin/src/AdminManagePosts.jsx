import React, { useState } from "react";
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/vanilla-zoom.min.css';


export const AdminManagePosts = () => {
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
        <title>Gallery - Brand</title>
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
        <main className="page gallery-page">
          <section className="clean-block clean-gallery dark">
            <div className="container">
              <div className="block-heading">
                <h2 className="text-info">Posts</h2>
                <p>Rentals postings made by hosts.</p>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 item">
                  <a className="lightbox" href="assets/img/scenery/image1.jpg">
                    <img
                      className="img-thumbnail img-fluid image"
                      src="assets/img/scenery/d8db92b5-4852-4647-9169-ebb514b66cbd.webp"
                      width={356}
                      height={241}
                    />
                  </a>
                  <h4>Cozy Guesthouse in Alanya</h4>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        paddingLeft: 10,
                        margin: "auto",
                        /*borderLeft: 10, */ textAlign: "center"
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                  <a className="lightbox" href="assets/img/scenery/image4.jpg">
                    <img
                      className="img-thumbnail img-fluid image"
                      src="assets/img/scenery/image2.jpg"
                      width={356}
                      height={240}
                    />
                  </a>
                  <h4>Cosy 3+1 bedroom with private pool in Fethiye</h4>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        paddingLeft: 10,
                        margin: "auto",
                        /*borderLeft: 10, */ textAlign: "center"
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                  <a className="lightbox" href="assets/img/scenery/image6.jpg">
                    <img
                      className="img-thumbnail img-fluid image"
                      src="assets/img/scenery/a9deb25f-9830-4d2a-9520-f9de76d17ac9.jpg"
                      width={356}
                      height={217}
                    />
                  </a>
                  <h4>Villa in Dalaman</h4>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        paddingLeft: 10,
                        margin: "auto",
                        /*borderLeft: 10, */ textAlign: "center"
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                  <a className="lightbox" href="assets/img/scenery/image5.jpg">
                    <img
                      className="img-thumbnail img-fluid image"
                      src="assets/img/scenery/bcf9680c-1812-4f29-83ee-0ba8e22afb2c.webp"
                    />
                  </a>
                  <h4>Luxury condo in Efes</h4>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        paddingLeft: 10,
                        margin: "auto",
                        /*borderLeft: 10, */ textAlign: "center"
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                  <a className="lightbox" href="assets/img/scenery/image1.jpg">
                    <img
                      className="img-thumbnail img-fluid image"
                      src="assets/img/scenery/60a2e0f6-3c10-41c5-acce-1e4951e0dd41.jpeg"
                      width={356}
                      height={205}
                    />
                  </a>
                  <h4>Townhouse in Bodrum</h4>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        paddingLeft: 10,
                        margin: "auto",
                        /*borderLeft: 10, */ textAlign: "center"
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                  <a className="lightbox" href="assets/img/scenery/image4.jpg">
                    <img
                      className="img-thumbnail img-fluid image"
                      src="assets/img/scenery/airbnb-beach-dominican-6939168.webp"
                      width={356}
                      height={241}
                    />
                  </a>
                  <h4>Luxury beach villa 3+1 in Bodrum</h4>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        paddingLeft: 10,
                        margin: "auto",
                        /*borderLeft: 10, */ textAlign: "center"
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                  <a className="lightbox" href="assets/img/scenery/image6.jpg">
                    <img
                      className="img-thumbnail img-fluid image"
                      src="assets/img/scenery/3222a878-4e0e-46b8-92d2-90fee6a9caa4.webp"
                      width={356}
                      height={241}
                    />
                  </a>
                  <h4>Stylish flat in Muratpaşa</h4>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        paddingLeft: 10,
                        margin: "auto",
                        /*borderLeft: 10, */ textAlign: "center"
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                  <a className="lightbox" href="assets/img/scenery/image5.jpg">
                    <img
                      className="img-thumbnail img-fluid image"
                      src="assets/img/scenery/f91f480a-f1f6-4ad7-b24a-40d8a0d346e4.webp"
                    />
                  </a>
                  <h4>Villa in Turgutreis</h4>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        paddingLeft: 10,
                        margin: "auto",
                        /*borderLeft: 10, */ textAlign: "center"
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                  <a className="lightbox" href="assets/img/scenery/image1.jpg">
                    <img
                      className="img-thumbnail img-fluid image"
                      src="assets/img/scenery/e6034faf-5c55-42a0-b5e8-ed0b8e330b33.jpeg"
                      width={356}
                      height={270}
                    />
                  </a>
                  <h4>Vacation home in Kemer</h4>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        paddingLeft: 10,
                        margin: "auto",
                        /*borderLeft: 10, */ textAlign: "center"
                      }}
                    >
                      View
                    </button>
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


export default AdminManagePosts;