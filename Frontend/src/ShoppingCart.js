import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar.js';
import axios from "axios";

function ShoppingCart() {

  const urlParams = new URLSearchParams(window.location.search);
  const userIdString = urlParams.get('userid');
  const userId = parseInt(userIdString, 10);
  const [reservationList, setReservationList] = useState([]);



  const fetchReservations = async (userId) => {
    const response = await axios.get(`http://localhost:8080/Reservations/getReservationByUserId?userId=${userId}`);

    // Assuming response.data is an array of objects
    const reservations = response.data.map(reservation => ({
      reservationId: reservation.reservationId,
      customerId: reservation.customerId,
      rentalId: reservation.rentalId,
      startDate: reservation.reservationStartDate,
      endDate: reservation.reservationEndDate,
      duration: reservation.stayOfDuration,
      price: reservation.price,
      isPaidFor: reservation.isPaidFor,
      numberOfGuests: reservation.numberOfGuests,
      rentalName: reservation.rentalName // assuming reservation includes rentalName
    }));

    console.log(reservations);
    setReservationList(reservations);
    return reservations;
  }



  useEffect(() => {
    fetchReservations(userId).then(r => console.log(r));
    }, [userId]);

  const ApprovedRentalValues = [
    {
      ID: "123",
      rentalName: "Luxury Villa",
      price: "200",
      description: "Luxury Villa with a Jacuzzi, Antalya Kalkan",
      startDate: "18/08/2023",
      endDate: "25/08/2023",
      img: "customerAssets/img/Ekran%20Görüntüsü%20(1188).png",
    },
    {
      ID: "1233",
      rentalName: "House With Garden",
      price: "120",
      description: "A House With a Garden by the Sea Apart2",
      startDate: "17/10/2024",
      endDate: "27/10/2024",
      img: "customerAssets/img/Ekran%20Görüntüsü%20(1189).png",
    },
  ];



  const goToPaymentPage = (event) => {
    event.preventDefault();
    navigate('/PaymentPage?userid='  + userId);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const rental of reservationList) {
      totalPrice += rental.price;
    }
    return totalPrice;
  };



  const navigate = useNavigate();

  const goToRentalPage = (id) => {
    //event.preventDefault();
    navigate('/RentalPage?rentalId='  + id + '&userid=' + userId);
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
                      {reservationList.map((item, index) => (
                          <div className="card mb-4" key={index}>
                            <div className="card-body">
                              <h4 className="card-title" onClick={() => goToRentalPage(item.rentalId)}>
                                {item.rentalName}
                              </h4>
                              <p className="card-text">
                                {item.description}
                              </p>
                              <p className="card-text">
                                <strong>Start Date:</strong> {item.startDate} <br/>
                                <strong>End Date:</strong> {item.endDate} <br/>
                                <strong>Duration:</strong> {item.duration} <br/>
                                <strong>Guests:</strong> {item.numberOfGuests}
                              </p>
                              <div className="price">
                                <strong>Price:</strong> ${item.price}
                              </div>
                            </div>
                          </div>
                      ))}
                    </div>

                  </div>

                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="summary">
                    <h3>Summary</h3>
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