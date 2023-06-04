import React, {useState} from 'react'; 
import {  useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
import {NavLink} from "react-bootstrap";

const  HostRentingRoomPricing= () => {
  let date = new Date();
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(date);


  const [earliestCheckIn, setEarliestCheckIn] = useState("00:00:00");
  const [latestCheckOut, setLatestCheckOut] = useState("00:00:00");
  const [cancellationHourLimit, setCancellationHourLimit] = useState(0);

  const [price, setPrice] = useState(0);

  const [refundFee, setRefundFee] = useState(0.0);
  const [refundFeePercentage, setRefundFeePercentage] = useState(0);
  const [autoApprove, setAutoApprove] = useState(false);
  const [isAdminApproved, setisAdminApproved] = useState(true);
  const [customRefundEnabled, setCustomRefundEnabled] = useState(false);




  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    if (event.target.id === 'formCheck-1') {
      let refund = price * 0.25; // calculate 25% of daily price
      setRefundFee(refund);
    }
    else if (event.target.id === 'formCheck-2') {
      let refund = price * 0.5; // calculate 50% of daily price
      setRefundFee(refund);
    }
    else if (event.target.id === 'formCheck-4') {
      let refund = price; // calculate 100% of daily price
      setRefundFee(refund);
    }
  };

  const handleCustomRefundChange = (event) => {
    let refund =  (event.target.value);
    setRefundFee(refund);
  }
  const handleCustomRefundCheckbox = (event) =>
  {
    setCustomRefundEnabled(event.target.checked);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const rentalId = urlParams.get('rentalId');
  const userid = urlParams.get("userid");
  const handleSubmit = async (event) =>
  {
    event.preventDefault();
    console.log(rentalId);
    console.log(startDate);
    console.log(endDate);
    console.log(earliestCheckIn);
    console.log(latestCheckOut);
    console.log(cancellationHourLimit);
    console.log(price);
    console.log(refundFee);
    console.log(autoApprove);
    console.log(isAdminApproved);
    const updateRentalInfoResponse = await axios.put(`http://localhost:8080/Rentals/updateRentalInfo`, {
      rentalId: rentalId,
      earliestCheckInHour: earliestCheckIn,
      latestCheckOutHour: latestCheckOut,
      cancellationHourLimit: cancellationHourLimit,
      dailyPrice: price,
      cancellationRefund: refundFee,
      autoApprove: autoApprove,
      isAdminApproved: isAdminApproved

    });
    try {
      const isoStartDate = startDate.toISOString();
      const isoEndDate = endDate.toISOString();

      const updateRentalDatesResponse = await axios.put(`http://localhost:8080/Rentals/updateRentalDates?rentalId=${rentalId}&hostSelectedStartDate=${isoStartDate}&hostSelectedEndDate=${isoEndDate}`);
      console.log(updateRentalDatesResponse.data);
      console.log(updateRentalInfoResponse.data); // undefined variable

      // If successful, navigate to the next page
      navigate(`/HostRentingCurrentRents?userid=${userid}`);
    } catch (error) {
      console.error(error);
    }

  };
  const gotoGeneralLogin
      = (event) => {
    event.preventDefault();
    navigate('/');
  }

  const gotoHostRentingCurrentRents
      = (event) => {
    event.preventDefault();
    navigate('/HostRentingCurrentRents?userid=' + userid);
  }

    // Example of occupied dates
  const occupiedDates = [
    new Date(2023, 5, 10),
    new Date(2023, 5, 11),
    new Date(2023, 5, 12),
  ];
    return (
        <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Register - WeRent</title>
  <link rel="stylesheet" href="./hostAssets/bootstrap/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
  />
  <link rel="stylesheet" href="./hostAssets/Font Awesome 5 Brands.css" />
  <link rel="stylesheet" href="./hostAssets/Font Awesome 5 Free.css" />
  <link rel="stylesheet" href="./hostAssets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="./hostAssets/fonts/font-awesome.min.css" />
  <link rel="stylesheet" href="./hostAssets/fonts/fontawesome5-overrides.min.css" />
  <link rel="stylesheet" href="./hostAssets/baguetteBox.min.css" />
  <link rel="stylesheet" href="./hostAssets/Bootstrap-4-Calendar-No-Custom-Code.css" />
  <link rel="stylesheet" href="./Drag--Drop-Upload-Form.css" />
  <link rel="stylesheet" href="./hostAssets/Drag-Drop-File-Input-Upload.css" />
  <link rel="stylesheet" href="./hostAssets/pop-up-boxes.css" />
  <link rel="stylesheet" href="./hostAssets/vanilla-zoom.min.css" />
  <link rel="stylesheet" href="./hostAssets/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://cdn.reflowhq.com/v2/toolkit.min.css" />
  <link rel="stylesheet" href="./hostAssets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="./hostAssets/baguetteBox.min.css" />
  <link rel="stylesheet" href="./hostAssets/css/Banner-Heading-Image-images.css" />
  <link rel="stylesheet" href="./hostAssets/Button-modal-ecommerce-bs4_modal.min.css" />
  <link rel="stylesheet" href="./hostAssets/Button-modal-ecommerce-styles.css" />
  <link rel="stylesheet" href="./hostAssets/Hover-Button-1.css" />
  <link rel="stylesheet" href="./hostAssets/bootstrap/css/bootstrap.min-1.css" />
          <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
            <div className="container">
              <button
                  data-bs-toggle="collapse"
                  className="navbar-toggler"
                  data-bs-target="#navcol-1"
              >
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <a
                    className="navbar-brand logo"
                    style={{ paddingRight: 0, marginBottom: 0, fontSize: 32 }}
                >
                  WeRent
                </a>
                <ul className="navbar-nav ms-auto" />
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink onClick={gotoHostRentingCurrentRents} className="nav-link">
                      YOUR CURRENT RENTS
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fas fa-user" style={{ fontSize: 24 }} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <NavLink onClick={gotoGeneralLogin} className="nav-link">
                      LOGOUT
                    </NavLink>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
  <main className="page registration-page">
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">One way before the rent!</h2>
          <p>
            Your room looks fantastic. Now, you can set a daily price and
            cancellation policies about your room.
          </p>
        </div>
        <form
          className="text-start d-block float-none"
          style={{ textAlign: "left", display: "block" }}
          onSubmit={handleSubmit}
        >
          <h1
            className="fs-1 fw-bolder text-center"
            style={{ textAlign: "center" }}
          >
            Check-in and Cancellation Policy
          </h1>
          <figure className="figure" />
          <span />
          <div>
            <label
              className="form-label"
              style={{ fontWeight: "bold", fontSize: 24 }}
            >
              Set available dates for renting&nbsp;
            </label>
            <div>
              <DatePicker
                  selected={startDate}
                  onChange={(update) => {
                    setStartDate(update[0]);
                    setEndDate(update[1]);
                  }}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  dateFormat="yyyy/MM/dd"
                  minDate={new Date()} // disable past dates
                  excludeDates={occupiedDates} // exclude occupied dates
              />
    </div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Earliest Check-in hour&nbsp;
            </label>
            <input
                className="form-control"
                type="datetime"
                value={earliestCheckIn}
                onChange={event => setEarliestCheckIn(event.target.value)}
            />
          </div>
          <div>
            <div>
              <span className="text-white-50">Text</span>
            </div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Latest Check-in hour&nbsp;
            </label>
            <input
                className="form-control"
                type="datetime"
                value={latestCheckOut}
                onChange={event => setLatestCheckOut(event.target.value)}
            />
          </div>
          <div>
            <div>
              <span className="text-white-50">Text</span>
            </div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Cancellation hour limit prior to reservation date
            </label>
            <input
                className="form-control"
                type="number"
                value={cancellationHourLimit}
                onChange={event => setCancellationHourLimit(event.target.value)}
            />
          </div>
          <div>
            <span className="text-white-50">Text</span>
          </div>
          <div>
            <label className="form-label fs-3 fw-bold">
              Daily Price (in USD)
            </label>
            <input
                className="form-control"
                type="number"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />
            <div>
              <label className="form-label text-start">
                Optimal price means more customers!&nbsp;
              </label>
            </div>
          </div>
          <div>
      <label
        className="form-label"
        style={{ fontWeight: "bold", fontSize: 18 }}
      >
        Cancellation refund fee (in USD)
      </label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="refund"
          id="formCheck-1"
          onChange={handleRadioChange}
          disabled={customRefundEnabled}
        />
        <label className="form-check-label" htmlFor="formCheck-1">
          25% of Daily Price
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="refund"
          id="formCheck-2"
          onChange={handleRadioChange}
          disabled={customRefundEnabled}
        />
        <label className="form-check-label" htmlFor="formCheck-2">
          50% of Daily Price
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="refund"
          id="formCheck-4"
          onChange={handleRadioChange}
          disabled={customRefundEnabled}
        />
        <label className="form-check-label" htmlFor="formCheck-4">
          100% of Daily Price
        </label>
      </div>
      <label className="form-label" style={{ fontWeight: "bold" }}>
        OR, Custom Refund Fee:
      </label>
      <input
          className="form-control"
          type="number"
          disabled={!customRefundEnabled}
          value={refundFee}
          onChange={handleCustomRefundChange}
      />
      <div>
        <input
          type="checkbox"
          checked={customRefundEnabled}
          onChange={handleCustomRefundCheckbox}
        />
        <span className="text-black-50">Enable Custom Refund Fee</span>
      </div>
    </div>
          
          <div>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="formCheck-3"
                  value={autoApprove}
                  onChange={event => setAutoApprove(event.target.value)}
                />
                <label
                  className="form-check-label fs-4 fw-semibold"
                  htmlFor="formCheck-3"
                >
                  Auto approve cancellation requests
                </label>
              </div>
              <label className="form-label">
                WeRent can automatically accept cancellation requests sent by
                customers.&nbsp;
              </label>
            </div>
          </div>
          <span className="text-white-50">Text</span>
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-primary">
              Rent Now!
            </button>
          </div>
          <div />
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
      <p>© 2023 WeRent Inc.</p>
    </div>
  </footer>
</>

    )
}
export default HostRentingRoomPricing;