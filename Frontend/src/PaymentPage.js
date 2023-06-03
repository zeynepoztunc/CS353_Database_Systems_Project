import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar.js';

function PaymentPage() {

  const urlParams = new URLSearchParams(window.location.search);
  const userIdString = urlParams.get('userid');
  const userId = parseInt(userIdString, 10);

  const ApprovedRentalValues = [
    {
      ID: "123345",
      rentalName: "Luxury Villa",
      price: "200",
      description: "Luxury Villa with a Jacuzzi, Antalya Kalkan",
      startDate: "18/08/2023",
      endDate: "25/08/2023",
      img: "./customerAssets/img/Ekran%20Görüntüsü%20(1188).png",
    },
    {
      ID: "123345",
      rentalName: "House With Garden",
      price: "120",
      description: "A House With a Garden by the Sea Apart2",
      startDate: "17/10/2024",
      endDate: "27/10/2024",
      img: "./customerAssets/img/Ekran%20Görüntüsü%20(1189).png",
    },
  ];

  const navigate = useNavigate();

  const goToMainPage = (event) => {
    event.preventDefault();
    navigate('/MainPage?userid='  + userId);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const rental of ApprovedRentalValues) {
      const rentalPrice = parseInt(rental.price.replace("", ""));
      totalPrice += rentalPrice;
    }
    return totalPrice;
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Payment - Brand</title>
      <link rel="stylesheet" href="./customerAssets/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
      />
      <link rel="stylesheet" href="./customerAssets/fonts/fontawesome-all.min.css" />
      <link rel="stylesheet" href="./customerAssets/css/baguetteBox.min.css" />
      <link rel="stylesheet" href="./customerAssets/css/vanilla-zoom.min.css" />

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
                {ApprovedRentalValues.map((item, index) => (
                  <div className="item">
                    <span className="price">${item.price}</span>
                    <p className="item-name" />
                    <p className="item-description">
                      {item.rentalName}
                    </p>
                  </div>
                ))}

                <div className="total">
                  <span>Total</span>
                  <span className="price">${calculateTotalPrice()}</span>
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
                        placeholder="Name Surname"
                        name="card_holder"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="mb-3">
                      <label className="form-label">Expiration date</label>
                      <div className="input-group expiration-date">
                        <select className="form-select" name="expiration_month">
                          <option value="" className="text-grey">Month</option>
                          {Array.from({ length: 12 }, (_, index) => {
                            const month = String(index + 1).padStart(2, '0');
                            return <option key={month} value={month} className="text-grey">{month}</option>;
                          })}
                        </select>
                        <select className="form-select" name="expiration_year">
                          <option value="" className="text-grey">Year</option>
                          {Array.from({ length: 10 }, (_, index) => {
                            const year = new Date().getFullYear() + index;
                            return <option key={year} value={year} className="text-grey">{year}</option>;
                          })}
                        </select>
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
                        onClick={goToMainPage}
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