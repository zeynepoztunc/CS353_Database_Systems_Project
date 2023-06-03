import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const HostRentingFlatPricing = () => {
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
    if (event.target.id === "formCheck-1") {
      let refund = price * 0.25; // calculate 25% of daily price
      setRefundFee(refund);
    } else if (event.target.id === "formCheck-2") {
      let refund = price * 0.5; // calculate 50% of daily price
      setRefundFee(refund);
    } else if (event.target.id === "formCheck-4") {
      let refund = price; // calculate 100% of daily price
      setRefundFee(refund);
    }
  };

  const handleCustomRefundChange = (event) => {
    let refund = event.target.value;
    setRefundFee(refund);
  };

  const handleCustomRefundCheckbox = (event) => {
    setCustomRefundEnabled(event.target.checked);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const rentalId = urlParams.get("rentalId");
  const userid = urlParams.get("userid");
  const handleSubmit = async (event) => {
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
    const updateRentalInfoResponse = await axios.put(
      `http://localhost:8080/Rentals/updateRentalInfo`,
      {
        rentalId: rentalId,
        earliestCheckInHour: earliestCheckIn,
        latestCheckOutHour: latestCheckOut,
        cancellationHourLimit: cancellationHourLimit,
        dailyPrice: price,
        cancellationRefund: refundFee,
        autoApprove: autoApprove,
        isAdminApproved: isAdminApproved,
      }
    );
    try {
      const isoStartDate = startDate.toISOString();
      const isoEndDate = endDate.toISOString();

      const updateRentalDatesResponse = await axios.put(
        `http://localhost:8080/Rentals/updateRentalDates?rentalId=${rentalId}&hostSelectedStartDate=${isoStartDate}&hostSelectedEndDate=${isoEndDate}`
      );

      console.log(updateRentalDatesResponse.data);
      // console.log(updateRentalInfoResponse.data); // undefined variable

      // If successful, navigate to the next page
      navigate("/HostRentingCurrentRents?userid=" + userid);
    } catch (error) {
      console.error(error);
    }
  };

  const occupiedDates = [
    new Date(2021, 1, 1),
    new Date(2021, 1, 2),
    new Date(2021, 1, 3),
  ];

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Register - WeRent</title>
      <link
        rel="stylesheet"
        href="./hostAssets/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
      />
      <link rel="stylesheet" href="./hostAssets/Font Awesome 5 Brands.css" />
      <link rel="stylesheet" href="./hostAssets/Font Awesome 5 Free.css" />
      <link
        rel="stylesheet"
        href="./hostAssets/fonts/fontawesome-all.min.css"
      />
      <link rel="stylesheet" href="./hostAssets/fonts/font-awesome.min.css" />
      <link
        rel="stylesheet"
        href="./hostAssets/fonts/fontawesome5-overrides.min.css"
      />
      <link rel="stylesheet" href="./hostAssets/baguetteBox.min.css" />
      <link
        rel="stylesheet"
        href="./hostAssets/Bootstrap-4-Calendar-No-Custom-Code.css"
      />
      <link rel="stylesheet" href="./Drag--Drop-Upload-Form.css" />
      <link
        rel="stylesheet"
        href="./hostAssets/Drag-Drop-File-Input-Upload.css"
      />
      <link rel="stylesheet" href="./hostAssets/pop-up-boxes.css" />
      <link rel="stylesheet" href="./hostAssets/vanilla-zoom.min.css" />
      <link
        rel="stylesheet"
        href="./hostAssets/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.reflowhq.com/v2/toolkit.min.css"
      />
      <link
        rel="stylesheet"
        href="./hostAssets/fonts/fontawesome-all.min.css"
      />
      <link rel="stylesheet" href="./hostAssets/css/baguetteBox.min.css" />
      <link
        rel="stylesheet"
        href="./hostAssets/css/Banner-Heading-Image-images.css"
      />
      <link
        rel="stylesheet"
        href="./hostAssets/Button-modal-ecommerce-bs4_modal.min.css"
      />
      <link
        rel="stylesheet"
        href="./hostAssets/Button-modal-ecommerce-styles.css"
      />
      <link rel="stylesheet" href="./hostAssets/Hover-Button-1.css" />
      <link
        rel="stylesheet"
        href="./hostAssets/bootstrap/css/bootstrap.min-1.css"
      />
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
              href="#"
              style={{ paddingRight: 0, marginBottom: 0, fontSize: 32 }}
            >
              WeRent
            </a>
            <div>
              <a
                className="bs4_modal_trigger"
                href="#"
                data-modal-id="bs4_sldr_cmrce"
                data-bs-toggle="modal"
                style={{
                  fontSize: 16,
                  background: "var(--bs-blue)",
                  color: "var(--bs-white)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                SWITCH TO CUSTOMER MODE
              </a>
              <div
                id="bs4_sldr_cmrce"
                className="modal fade bs4_modal bs4_blue bs4_bg_white bs4_bd_black bs4_bd_semi_trnsp bs4_none_radius bs4_shadow_none bs4_center bs4_animate bs4FadeInDown bs4_duration_md bs4_easeOutQuint bs4_size_sldr_cmrce"
                role="dialog"
                data-modal-backdrop="true"
                data-show-on="click"
                data-modal-delay="false"
                data-modal-duration="false"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <a
                      className="bs4_btn_x_out_shtr bs4_sldr_cmrce_close"
                      href="#"
                      data-bs-dismiss="modal"
                    >
                      close
                    </a>
                    <div className="row">
                      <div className="col-12 col-md-5">
                        <div
                          id="bs4_sldr_commerce"
                          className="carousel slide bs4-carousel bs4_sldr_cmrce_indicators thumb-scroll-x swipe-x bs4s_easeOutInCubic"
                          data-duration={2000}
                          data-bs-ride="carousel"
                          data-bs-pause="hover"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                              <img
                                src="/bs4_slider_commerce_01.png"
                                alt="bs4_slider_commerce_01"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="/bs4_slider_commerce_02.png"
                                alt="bs4_slider_commerce_02"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="/bs4_slider_commerce_03.png"
                                alt="bs4_slider_commerce_03"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="/bs4_slider_commerce_04.png"
                                alt="bs4_slider_commerce_04"
                              />
                            </div>
                          </div>
                          <ol className="carousel-indicators">
                            <li
                              className="active"
                              data-bs-target="#bs4_sldr_commerce"
                              data-bs-slide-to={0}
                            >
                              <img
                                src="/bs4_slider_commerce_01.png"
                                alt="bs4_slider_commerce_01"
                              />
                            </li>
                            <li
                              data-bs-target="#bs4_sldr_commerce"
                              data-bs-slide-to={1}
                            >
                              <img
                                src="/bs4_slider_commerce_02.png"
                                alt="bs4_slider_commerce_02"
                              />
                            </li>
                            <li
                              data-bs-target="#bs4_sldr_commerce"
                              data-bs-slide-to={2}
                            >
                              <img
                                src="/bs4_slider_commerce_03.png"
                                alt="bs4_slider_commerce_03"
                              />
                            </li>
                            <li
                              data-bs-target="#bs4_sldr_commerce"
                              data-bs-slide-to={3}
                            >
                              <img
                                src="/bs4_slider_commerce_04.png"
                                alt="bs4_slider_commerce_04"
                              />
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div className="col-12 col-md-7">
                        <div className="bs4_sldr_cmrce_txt">
                          <h1>name of product, company plus modal number</h1>
                          <ul>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star" />
                            </li>
                            <li>
                              <i className="fa fa-star-o" />
                            </li>
                          </ul>
                          <h2 className="bs4_sldr_cmrce_txt">$130.00</h2>
                          <p style={{ fontSize: 15, fontWeight: 200 }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Nam nibh. Nunc varius facilisis eros. Sed
                            erat. In in velit quis arcu ornare laoreet.
                            Curabitur adipiscing luctus massa. Integer ut purus
                            ac augue commodo commodo. Nunc nec mi eu justo
                            tempor consectetuer. Etiam vitae nisl. In dignissim
                            lacus ut ante. Cras elit lectus, bibendum a,
                            adipiscing vitae, commodo et, dui.
                          </p>
                          <form action="#">
                            <div className="bs4_form_num">
                              <label className="form-label">quantity</label>
                              <input
                                className="form-control"
                                type="number"
                                name="quantity"
                                min={1}
                                max={20}
                              />
                            </div>
                            <div className="bs4_form_color">
                              <label className="form-label">colours</label>
                              <select className="form-select form-select-sm">
                                <optgroup label="Pick a color">
                                  <option value={12} selected="">
                                    RED
                                  </option>
                                  <option value={13}>BLUE</option>
                                  <option value={14} selected="">
                                    GREEN
                                  </option>
                                </optgroup>
                              </select>
                            </div>
                            <div className="bs4_form_size">
                              <label className="form-label">size</label>
                              <select className="form-select">
                                <optgroup label="select a size">
                                  <option value={12} selected="">
                                    18
                                  </option>
                                  <option value={13}>25</option>
                                  <option value={14}>36</option>
                                </optgroup>
                              </select>
                            </div>
                            <div className="bs4_form_cmrce_btn">
                              <button
                                className="btn btn-primary bs4_btn_x_out_shtr"
                                type="submit"
                              >
                                add to cart
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ms-auto" />
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#registration.html">
                  RENT YOUR HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  YOUR RENTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-user" style={{ fontSize: 24 }} />
                </a>
              </li>
              <li
                className="nav-item text-uppercase border rounded"
                style={{
                  color: "var(--bs-blue)",
                  background: "var(--bs-blue)",
                }}
              >
                <a
                  className="nav-link active"
                  href="#"
                  style={{ color: "var(--bs-gray-100)" }}
                >
                  LOG OUT
                </a>
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
                Your flat looks fantastic. Now, you can set a daily price and
                cancellation policies about your flat.
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
                  onChange={(event) => setEarliestCheckIn(event.target.value)}
                />
              </div>
              <div>
                <div>
                  <span className="text-white-50">Text</span>
                </div>
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Latest Check-out hour&nbsp;
                </label>
                <input
                  className="form-control"
                  type="datetime"
                  value={latestCheckOut}
                  onChange={(event) => setLatestCheckOut(event.target.value)}
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
                  onChange={(event) =>
                    setCancellationHourLimit(event.target.value)
                  }
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
                  onChange={(event) => setPrice(event.target.value)}
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
                  <span className="text-black-50">
                    Enable Custom Refund Fee
                  </span>
                </div>
              </div>

              <div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-3"
                    />
                    <label
                      className="form-check-label fs-4 fw-semibold"
                      htmlFor="formCheck-3"
                      type="Boolean"
                      value={autoApprove}
                      onChange={(event) => setAutoApprove(event.target.value)}
                    >
                      Auto approve cancellation requests
                    </label>
                  </div>
                  <label className="form-label">
                    WeRent can automatically accept cancellation requests sent
                    by customers.&nbsp;
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
  );
};
export default HostRentingFlatPricing;
