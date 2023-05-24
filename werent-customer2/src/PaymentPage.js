import React from 'react';
import {  useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

function PaymentPage() {
  
  const navigate = useNavigate();

  const goToMainPage = ( event) => {
    event.preventDefault();
    navigate( '/MainPage');
  };
  
  return (
    <>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <title>Payment - Brand</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
    />
    <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
    <link rel="stylesheet" href="assets/css/baguetteBox.min.css" />
    <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
    
    <NavBar></NavBar>

    <main className="page payment-page">
      <section className="clean-block payment-form dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Payment</h2>
            <p />
          </div>
          <form>
            <div className="products">
              <h3 className="title">Checkout</h3>
              <div className="item">
                <span className="price">$200</span>
                <p className="item-name" />
                <p className="item-description">
                  Luxury Villa with a Jacuzzi, Antalya Kalkan
                </p>
              </div>
              <div className="item">
                <span className="price">$120</span>
                <p className="item-description">
                  a House With a Garden by the Sea Apart2
                </p>
              </div>
              <div className="total">
                <span>Total</span>
                <span className="price">$320</span>
              </div>
            </div>
            <div className="card-details">
              <h3 className="title">Credit Card Details</h3>
              <div className="row">
                <div className="col-sm-7">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="card_holder">
                      Card Holder
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="card_holder"
                      placeholder="Zeynep Ak"
                      name="card_holder"
                    />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="mb-3">
                    <label className="form-label">Expiration date</label>
                    <div className="input-group expiration-date">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="08"
                        name="expiration_month"
                      />
                      <input
                        className="form-control"
                        type="text"
                        placeholder="24"
                        name="expiration_year"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="card_number">
                      Card Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="card_number"
                      placeholder="5101 6227 8497 8637"
                      name="card_number"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="cvc">
                      CVC
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="cvc"
                      placeholder="485"
                      name="cvc"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="mb-3">
                    <button 
                      onClick = {goToMainPage}
                      className="btn btn-primary d-block w-100"
                      type="submit"
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
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

export default PaymentPage;