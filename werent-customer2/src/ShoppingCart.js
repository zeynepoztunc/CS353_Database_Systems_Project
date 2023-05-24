import React from 'react';
import {  useNavigate } from 'react-router-dom';

function ShoppingCart() {

  const navigate = useNavigate();

  const goToMainPage = ( event) => {
    event.preventDefault();
    navigate( '/MainPage');
  };

  const goToPaymentPage = ( event) => {
    event.preventDefault();
    navigate( '/PaymentPage');
  };

  return (
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Shopping Cart - Brand</title>
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
  />
  <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="assets/css/baguetteBox.min.css" />
  <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
  <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
    <div className="container">
      <a onClick={goToMainPage} className="navbar-brand logo" href="#">
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
          <li className="nav-item" />
          <li className="nav-item">
            <a className="nav-link" href="features.html">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pricing.html">
              MAP
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about-us.html">
              <i
                className="fas fa-shopping-basket text-dark"
                style={{ fontSize: 22 }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="PROJECT-leave-rating.html">
              <i
                className="fas fa-user-alt text-dark"
                style={{ fontSize: 22 }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="features.html">
              LOGout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main className="page shopping-cart-page">
    <section className="clean-block clean-cart dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Shopping Cart</h2>
        </div>
        <div className="content">
          <div className="row g-0">
            <div className="col-md-12 col-lg-8">
              <div className="items">
                <div className="product">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-3">
                      <div className="product-image">
                        <img
                          className="img-fluid d-block mx-auto image"
                          src="assets/img/Ekran%20Görüntüsü%20(1188).png"
                          width={146}
                          height={146}
                        />
                      </div>
                    </div>
                    <div className="col-md-5 product-info">
                      <a className="product-name" href="#">
                        Luxury Villa
                      </a>
                      <div className="product-specs">
                        <div>
                          <span>
                            <br />
                            <span
                              style={{
                                fontWeight: "normal !important",
                                backgroundColor: "rgb(247, 251, 255)"
                              }}
                            >
                              Luxury Villa with a Jacuzzi, Antalya Kalkan
                            </span>
                            <br />
                            <br />
                          </span>
                          <div />
                          <span>18/08/2023-25/08/2023</span>
                        </div>
                        <div>
                          <span className="value" />
                        </div>
                        <div />
                      </div>
                    </div>
                    <div className="col-6 col-md-2 price">
                      <span>$200</span>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-3">
                      <div className="product-image">
                        <img
                          className="img-fluid d-block mx-auto image"
                          src="assets/img/Ekran%20Görüntüsü%20(1189).png"
                        />
                      </div>
                    </div>
                    <div className="col-md-5 product-info">
                      <a className="product-name" href="#">
                        House With Garden
                      </a>
                      <div className="product-specs">
                        <div>
                          <span>
                            <br />
                            <span
                              style={{
                                fontWeight: "normal !important",
                                backgroundColor: "rgb(247, 251, 255)"
                              }}
                            >
                              A House With a Garden by the Sea Apart2
                            </span>
                            <br />
                            <br />
                          </span>
                        </div>
                        <div />
                        <div>
                          <span>17/10/2024-27/10/2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-2 price">
                      <span>$120</span>
                    </div>
                  </div>
                </div>
                <div className="product" style={{ marginTop: 18 }}>
                  <label
                    className="form-label text-secondary"
                    style={{ marginLeft: 74 }}
                  >
                    Waiting for Host Approval
                  </label>
                  <div className="product">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-md-3">
                        <div className="product-image">
                          <img
                            className="img-fluid d-block mx-auto image"
                            src="assets/img/Ekran%20Görüntüsü%20(1191).png"
                          />
                        </div>
                      </div>
                      <div className="col-md-5 product-info">
                        <a className="product-name" href="#">
                          Boutique House
                        </a>
                        <div className="product-specs">
                          <div>
                            <span>
                              <br />
                              <span
                                style={{
                                  fontWeight: "normal !important",
                                  backgroundColor: "rgb(247, 251, 255)"
                                }}
                              >
                                Small House inside a forest
                              </span>
                              <br />
                              <br />
                            </span>
                          </div>
                          <div />
                          <div>
                            <span>07/08/2024-16/08/2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-2 price">
                        <span>$160</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="summary">
                <h3>Summary</h3>
                <h4>
                  <span className="text">Subtotal</span>
                  <span className="price">$480</span>
                </h4>
                <h4>
                  <span className="text">Unattended Total</span>
                  <span className="price">$160</span>
                </h4>
                <h4>
                  <span className="text">Total</span>
                  <span className="price">$320</span>
                </h4>
                <button
                  onClick={goToPaymentPage}
                  className="btn btn-primary btn-lg d-block w-100"
                  type="button"
                >
                  Checkout
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
      <p>© 2023 Copyright Text</p>
    </div>
  </footer>
</>

  
  );
}

export default ShoppingCart;