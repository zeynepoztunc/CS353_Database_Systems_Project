import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar.js';

function ShoppingCart() {

  const ApprovedRentalValues = [
    {
      ID: "123345",
      rentalName: "Luxury Villa",
      price: "$200",
      description: "Luxury Villa with a Jacuzzi, Antalya Kalkan",
      startDate: "18/08/2023",
      endDate: "25/08/2023",
      img: "customerAssets/img/Ekran%20Görüntüsü%20(1188).png",
    },
    {
      ID: "123345",
      rentalName: "House With Garden",
      price: "$120",
      description: "A House With a Garden by the Sea Apart2",
      startDate: "17/10/2024",
      endDate: "27/10/2024",
      img: "customerAssets/img/Ekran%20Görüntüsü%20(1189).png",
    },
  ];

  const WaitingRentalValues = [
    {
      ID: "123345",
      rentalName: "Boutique House",
      price: "$160",
      description: "Small House inside a forest",
      startDate: "17/10/2024",
      endDate: "27/10/2024",
      img: "customerAssets/img/Ekran%20Görüntüsü%20(1191).png",
    },
  ];

  const goToPaymentPage = (event) => {
    event.preventDefault();
    navigate('/PaymentPage');
  };

  const calculateTotalPrice = () => 
  {
    let totalPrice = 0;
    for (const rental of ApprovedRentalValues) {
      // Remove the '$' symbol from the price and parse it as a number
      const rentalPrice = parseInt(rental.price.replace("$", ""));
      totalPrice += rentalPrice;
    }
    return totalPrice;
  };

  const calculateUnattendedTotalPrice = () => 
  {
    let totalPrice = 0;
    for (const rental of WaitingRentalValues) {
      // Remove the '$' symbol from the price and parse it as a number
      const rentalPrice = parseInt(rental.price.replace("$", ""));
      totalPrice += rentalPrice;
    }
    return totalPrice;
  };

  const navigate = useNavigate();

  const goToRentalPage = (event) => {
    event.preventDefault();
    navigate('/RentalPage');
  }

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Shopping Cart - Brand</title>
      <link rel="stylesheet" href="./customerAssets/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
      />
      <link rel="stylesheet" href="./customerAssets/fonts/fontawesome-all.min.css" />
      <link rel="stylesheet" href="./customerAssets/css/baguetteBox.min.css" />
      <link rel="stylesheet" href="./customerAssets/css/vanilla-zoom.min.css" />

      <NavBar></NavBar>

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
                      {ApprovedRentalValues.map((item, index) => (
                        <div className="row justify-content-center align-items-center" style={{ marginTop: 30 }}>
                          <div className="col-md-3">
                            <div className="product-image">
                              <img
                                className="img-fluid d-block mx-auto image"
                                src={item.img}
                                width={146}
                                height={146}
                              />
                            </div>
                          </div>

                          <div className="col-md-5 product-info">
                            <a className="product-name" onClick={goToRentalPage}>
                              {item.rentalName}
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
                                    {item.description}
                                  </span>
                                  <br />
                                  <br />
                                </span>
                                <div />
                                <span>{item.startDate}-{item.endDate}</span>
                              </div>
                              <div>
                                <span className="value" />
                              </div>
                              <div />
                            </div>
                          </div>
                          <div className="col-6 col-md-2 price">
                            <span>{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>


                    <div className="product" style={{ marginTop: 18 }}>
                      <label
                        className="form-label text-secondary"
                        style={{ marginLeft: 74 }}
                      >
                        Waiting for Host Approval
                      </label>

                      <div className="product">
                        {WaitingRentalValues.map((item, index) => (
                          <div className="row justify-content-center align-items-center" style={{ marginTop: 30 }}>
                            <div className="col-md-3">
                              <div className="product-image">
                                <img
                                  className="img-fluid d-block mx-auto image"
                                  src={item.img}
                                  width={146}
                                  height={146}
                                />
                              </div>
                            </div>

                            <div className="col-md-5 product-info">
                              <a className="product-name" onClick={goToRentalPage}>
                                {item.rentalName}
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
                                      {item.description}
                                    </span>
                                    <br />
                                    <br />
                                  </span>
                                  <div />
                                  <span>{item.startDate}-{item.endDate}</span>
                                </div>
                                <div>
                                  <span className="value" />
                                </div>
                                <div />
                              </div>
                            </div>
                            <div className="col-6 col-md-2 price">
                              <span>{item.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="summary">
                    <h3>Summary</h3>
                    <h4>
                      <span className="text">Subtotal</span>
                      <span className="price">${calculateUnattendedTotalPrice() + calculateTotalPrice()}</span>
                    </h4>
                    <h4>
                      <span className="text">Unattended Total</span>
                      <span className="price">${calculateUnattendedTotalPrice()}</span>
                    </h4>
                    <h4>
                      <span className="text">Total</span>
                      <span className="price">${calculateTotalPrice()}</span>
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