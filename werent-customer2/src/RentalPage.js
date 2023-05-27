import React from 'react';
import {  useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react'; 
import { addDays, subDays } from "date-fns";
import DropdownMenu from './DropdownMenu';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import NavBar from './NavBar';


const  RentalPage= () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [selectedCounts, setSelectedCounts] = useState({});
  const [selectedItems, setSelectedItems] = useState({});
  const options = Array.from({ length: 10 }, (_, index) => index + 1);
  const containerStyle = {
    width: '720px',
    height: '322px',
    marginLeft:'240px'
  };

  const defaultCenter = {
    lat: 39.8813,
    lng: 32.6984
  };
  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  };
  const [selectedLocation, setSelectedLocation] = useState(null);




  const handleDropdownItemClick = (dropdownId, value) => {
    setSelectedCounts({ ...selectedCounts, [dropdownId]: value });
  };
  const getButtonText = (dropdownId) => {
    if (dropdownId === 'Flat Type') {
      return selectedItems['Flat Type'] || 'Select Flat Type';
    }
    else{
      return selectedCounts[dropdownId] || 'Guest Number';
    }

  };


  const reservedDate=new Date(2023, 5, 18);
  return (
    <container>
    <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Product - Brand</title>
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
  />
  <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="assets/css/baguetteBox.min.css" />
  <link rel="stylesheet" href="assets/css/Banner-Heading-Image-images.css" />
  <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
  <NavBar></NavBar>
  <main className="page product-page">
    <section className="clean-block clean-product dark">
      <div className="container">
        <div className="block-content">
          <div className="product-info">
            <div className="row">
              <div className="col-md-6">
                <div className="gallery">
                  <div id="product-preview" className="vanilla-zoom">
                    <div className="zoomed-image">
                      <img
                        width={405}
                        height={299}
                        src="assets/img/e447ece9-eb6d-41b2-a90a-008c82f607da.webp"
                      />
                    </div>
                    <div className="sidebar">
                      <img
                        className="img-fluid d-block small-preview"
                        src="assets/img/tech/9f3826b0-98e6-469b-bb92-30d517fc5d50.webp"
                      />
                      <img
                        className="img-fluid d-block small-preview"
                        src="assets/img/tech/c4ac305f-878c-43a5-8638-3007c262d529.webp"
                      />
                      <img
                        className="img-fluid d-block small-preview"
                        src="assets/img/tech/37fe2a4e-d234-4443-92b2-19b65e1bb356.webp"
                      />
                      <img
                        className="img-fluid d-block small-preview"
                        src="assets/img/tech/0892a134-a933-42e0-bb48-fd91b6c915ca.webp"
                      />
                      <img
                        className="img-fluid d-block small-preview"
                        src="assets/img/tech/2383b7af-246a-48e0-8c83-b6ac69856d46.webp"
                      />
                      <img
                        className="img-fluid d-block small-preview"
                        src="assets/img/tech/0f8870df-97d8-4de6-a8ec-203c64785273.webp"
                      />
                    </div>
                  </div>
                </div>
                <p style={{ marginTop: "-5px" }}>
                  <span style={{ color: "rgb(34, 34, 34)" }}>
                    In Kalkan, with its excellent sea view and location
                    surrounded by nature, awaits you. Our rental villa with the
                    capacity of 6 people has 3 bedrooms. In the rental villa ,
                    it has all the kitchen utensils you may need. It has a
                    spacious lounge with open american kitchen where you can be
                    modern, convenient and comfortable.
                  </span>
                  <br />
                  <br />
                </p>
                <p style={{ marginTop: "-13px" }}>
                  <strong>
                    <span style={{ color: "rgb(34, 34, 34)" }}>
                      Can accommodate 6 people&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    </span>
                  </strong>
                </p>
                <p>
                  <i className="fas fa-bed" />
                  <strong>
                    <span style={{ color: "rgb(34, 34, 34)" }}>
                      &nbsp;3 bedrooms&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp;
                    </span>
                  </strong>
                  <i className="fas fa-shower" style={{ fontSize: 22 }} />
                  <strong>
                    <span style={{ color: "rgb(34, 34, 34)" }}>
                      &nbsp; 2 bathrooms
                    </span>
                  </strong>
                </p>
                <p>
                  <i className="fas fa-exclamation" style={{ fontSize: 21 }} />
                  <strong>
                    <span style={{ color: "rgb(34, 34, 34)" }}>
                      &nbsp; No pets are allowed
                    </span>
                  </strong>
                </p>
              </div>
              <div className="col-auto col-md-6 col-lg-6 text-start">
                <div className="info">
                  <h4>
                    <strong>
                      Antalya, Kalkan Beach House&nbsp; &nbsp;&nbsp;
                    </strong>
                    <i
                      className="far fa-heart text-end text-danger justify-content-end"
                      style={{ fontSize: 27 }}
                    />
                  </h4>
                  <div className="text-start rating">
                    <p
                      style={{
                        marginBottom: "-4px",
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginRight: 113
                      }}
                    >
                      <img src="assets/img/star.svg" />
                      <img src="assets/img/star.svg" />
                      <img src="assets/img/star.svg" />
                      <img src="assets/img/star.svg" width={18} height={19} />
                      <img src="assets/img/star-half-empty.svg" />
                      <span style={{ color: "rgb(0, 0, 0)" }}>&nbsp;4,5</span>
                    </p>
                    <p>
                      <span
                        style={{
                          textDecoration: "underline",
                          color: "rgb(0, 0, 0)"
                        }}
                      >
                        15 reviews
                      </span>
                    </p>
                    <div className="col">
                      <div />
                    </div>
                    <h3 />
                    <p
                      className="fs-6 text-success"
                      style={{
                        marginBottom: "-4px",
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginRight: 113
                      }}
                    >
                      <i className="fas fa-unlock text-success" />
                      <span style={{ color: "rgb(0, 0, 0)" }}>
                        &nbsp;free for earthquake victims
                      </span>
                    </p>
                  </div>
                  <div className="price">
                    <h3>$200 /night</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">select dates</h5>
                            <DatePicker
                            className="text card-subtitle mb-2"
                              selected={startDate}
                              onChange={(update) => {
                                setDateRange(update);
                              }}
                              startDate={startDate}
                              endDate={endDate}
                              selectsRange
                              dateFormat="yyyy/MM/dd"
                              minDate={new Date()} // disable past dates
                              excludeDateIntervals={[{start: subDays(new Date(), 5), end: addDays(new Date(), 5) }]}
                            />
                            
                          </div>
                          
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card">
                          <div className="card-body text-start">
                            <h5 className="card-title">guest number</h5>
                          </div>
                        </div>
                        {/* <div className="dropdown">
                          <button
                            className="btn btn-danger dropdown-toggle text-start text-bg-light"
                            aria-expanded="false"
                            data-bs-toggle="dropdown"
                            type="button"
                            style={{ marginTop: 15 }}
                          >
                            1 guest
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Adults
                            </a>
                            <a className="dropdown-item" href="#">
                              Childrens
                            </a>
                            <a className="dropdown-item" href="#">
                              Pets
                            </a>
                          </div>
                        </div> */}
                        <DropdownMenu/>
                        <div className="dropdown">
                </div>

                      </div>
                      <div
                        className="col"
                        style={{
                          marginTop: "-21px",
                          paddingTop: 0,
                          marginBottom: "-17px",
                          paddingBottom: 0
                        }}
                      >
                        <button
                          className="btn btn-danger text-start"
                          type="button"
                          style={{
                            marginTop: 28,
                            paddingBottom: 10,
                            marginRight: "-11px",
                            marginLeft: 0
                          }}
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div />
                <h6>
                  <strong>
                    Villa hosted by Ali&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                  </strong>
                  <img
                    className="rounded-circle"
                    width={93}
                    height={74}
                    src="assets/img/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-250nw-1548802709.webp"
                  />
                  <strong>&nbsp;</strong>
                </h6>
                <div className="row">
                  <div className="col">
                    <p className="text-warning">
                      <i
                        className="fas fa-award text-warning"
                        style={{ fontSize: 44 }}
                      />
                      &nbsp; superhost
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-info">
            <div>
              <ul className="nav nav-tabs" role="tablist" id="myTab">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    role="tab"
                    data-bs-toggle="tab"
                    id="description-tab"
                    href="#description"
                  >
                    Specifications
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    role="tab"
                    data-bs-toggle="tab"
                    id="reviews-tab"
                    href="#reviews"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active description"
                  role="tabpanel"
                  id="description"
                >
                  <p className="fs-4">
                    <strong>What this place offers</strong>
                  </p>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-lg-1">
                          <i
                            className="fas fa-wifi text-dark"
                            style={{ fontSize: 29 }}
                          />
                        </div>
                        <div className="col-lg-6">
                          <p className="fs-5" style={{ marginLeft: 4 }}>
                            <strong>Wifi</strong>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <div className="col-lg-1">
                              <i
                                className="fas fa-parking text-dark"
                                style={{ fontSize: 29 }}
                              />
                            </div>
                            <div className="col-lg-6">
                              <p className="fs-5">
                                <strong>Free-parking</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-1">
                          <i
                            className="fas fa-first-aid"
                            style={{ fontSize: 26 }}
                          />
                        </div>
                        <div className="col">
                          <p className="fs-5">
                            <strong>First-aid kit</strong>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-1">
                          <i
                            className="fas fa-fire-extinguisher"
                            style={{ fontSize: 26 }}
                          />
                        </div>
                        <div className="col">
                          <p className="fs-5">
                            <strong>Fire extinguisher</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col-lg-2">
                          <i
                            className="fas fa-umbrella-beach"
                            style={{ fontSize: 26 }}
                          />
                        </div>
                        <div className="col">
                          <p className="fs-5">
                            <strong>Beach Access</strong>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2">
                          <i
                            className="fas fa-car text-dark"
                            style={{ fontSize: 29 }}
                          />
                        </div>
                        <div className="col">
                          <p className="fs-5">
                            <strong>Transportation Access</strong>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2">
                          <i
                            className="fas fa-thermometer-half text-dark"
                            style={{ fontSize: 29 }}
                          />
                        </div>
                        <div className="col">
                          <p className="fs-5">
                            <strong>Heating</strong>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <button className="btn btn-danger" type="button">
                            Show All Amenties
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <figure className="figure" />
                    </div>
                    <div className="col-md-7 col-lg-12 right">
                      <h4 className="text-truncate text-start">
                        House Location&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </h4>
                      {/* <img
                        width={720}
                        height={322}
                        src="assets/img/Ekran%20Görüntüsü%20(486).png"
                      /> */}
                    </div>
                  </div>
                </div>

                <LoadScript googleMapsApiKey="AIzaSyAdc1phOB8xRTsyJwEa3wBuAGPIg9ZFnJ4">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={defaultCenter}
                  zoom={10}
                  onClick={handleMapClick}
                >
                  {selectedLocation && (
                    <Marker position={selectedLocation} />
                  )}
                </GoogleMap>
              </LoadScript>
              
                <div
                  className="tab-pane fade show active description"
                  role="tabpanel"
                  id="description"
                >
                  <p className="fs-5">
                    <i className="fas fa-star text-warning" />
                    <strong>
                      &nbsp;
                      <span style={{ color: "rgb(0, 0, 0)" }}>4,5&nbsp;</span>
                      <span style={{ color: "rgb(34, 34, 34)" }}>·&nbsp;</span>
                      <span style={{ color: "rgb(0, 0, 0)" }}>&nbsp;</span>
                      <span
                        style={{
                          textDecoration: "underline",
                          color: "rgb(0, 0, 0)"
                        }}
                      >
                        15 reviews
                      </span>
                    </strong>
                  </p>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="row">
                        <div
                          className="col-lg-6 offset-lg-0"
                          style={{ marginTop: "-1px", marginBottom: 0 }}
                        >
                          <p className="fs-5">
                            <strong>Cleanliness</strong>
                          </p>
                        </div>
                        <div className="col">
                          <p className="fs-5">
                            <i className="far fa-star" />
                            <span style={{ color: "rgb(0, 0, 0)" }}>
                              &nbsp; &nbsp;4,5&nbsp;
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <div className="col-lg-6">
                              <p className="fs-5">
                                <strong>Communication</strong>
                              </p>
                            </div>
                            <div className="col">
                              <p className="fs-5">
                                <i className="far fa-star" />
                                <span style={{ color: "rgb(0, 0, 0)" }}>
                                  &nbsp; &nbsp;4,25&nbsp;
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          className="col"
                          style={{
                            paddingBottom: 0,
                            marginLeft: 0,
                            paddingTop: 0
                          }}
                        >
                          <p className="fs-5">
                            <strong>Accuracy</strong>
                          </p>
                        </div>
                        <div className="col">
                          <p className="fs-5">
                            <i className="far fa-star" />
                            <span style={{ color: "rgb(0, 0, 0)" }}>
                              &nbsp; &nbsp;4,0&nbsp;
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <p className="fs-5">
                            <strong>Check-in</strong>
                          </p>
                        </div>
                        <div className="col">
                          <p className="fs-5">
                            <i className="far fa-star" />
                            <span style={{ color: "rgb(0, 0, 0)" }}>
                              &nbsp; &nbsp;5,0&nbsp;
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p className="fs-5">
                            <strong>Value</strong>
                          </p>
                        </div>
                        <div className="col">
                          <p className="fs-5">
                            <i className="far fa-star" />
                            <span style={{ color: "rgb(0, 0, 0)" }}>
                              &nbsp; &nbsp;4,5&nbsp;
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p className="fs-5">
                            <strong>Location</strong>
                          </p>
                        </div>
                        <div className="col">
                          <p className="fs-5">
                            <i className="far fa-star" />
                            <span style={{ color: "rgb(0, 0, 0)" }}>
                              &nbsp; &nbsp;4,75&nbsp;
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade specifications"
                  role="tabpanel"
                  id="specifications"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td className="stat">Display</td>
                          <td>5.2"</td>
                        </tr>
                        <tr>
                          <td className="stat">Camera</td>
                          <td>12MP</td>
                        </tr>
                        <tr>
                          <td className="stat">RAM</td>
                          <td>4GB</td>
                        </tr>
                        <tr>
                          <td className="stat">OS</td>
                          <td>iOS</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" role="tabpanel" id="reviews">
                  <div className="reviews">
                    <div className="review-item">
                      <div className="rating">
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star-empty.svg" />
                      </div>
                      <h4>Incredible product</h4>
                      <span className="text-muted">
                        <a href="#">John Smith</a>, 20 Jan 2018
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec augue nunc, pretium at augue at, convallis
                        pellentesque ipsum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="reviews">
                    <div className="review-item">
                      <div className="rating">
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star-empty.svg" />
                      </div>
                      <h4>Incredible product</h4>
                      <span className="text-muted">
                        <a href="#">John Smith</a>, 20 Jan 2018
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec augue nunc, pretium at augue at, convallis
                        pellentesque ipsum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="reviews">
                    <div className="review-item">
                      <div className="rating">
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star.svg" />
                        <img src="assets/img/star-empty.svg" />
                      </div>
                      <h4>Incredible product</h4>
                      <span className="text-muted">
                        <a href="#">John Smith</a>, 20 Jan 2018
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec augue nunc, pretium at augue at, convallis
                        pellentesque ipsum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade description"
                  role="tabpanel"
                  id="description-1"
                  style={{ marginRight: 66, marginLeft: 46, paddingRight: 0 }}
                >
                  <div className="row">
                    <div
                      className="col-md-7 col-lg-7"
                      style={{ marginRight: "-57px" }}
                    >
                      <div className="row" style={{ marginRight: 15 }}>
                        <div className="col-lg-3">
                          <img
                            className="rounded-circle"
                            src="assets/img/photo-1596813362035-3edcff0c2487.jpg"
                            width={87}
                            height={83}
                            style={{ marginTop: "-14px" }}
                          />
                        </div>
                        <div className="col-lg-8">
                          <p className="fs-6">
                            <strong>Jennifer</strong>
                          </p>
                          <p style={{ marginBottom: 21, marginTop: "-44px" }}>
                            The place was just perfect.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <div className="col-lg-3">
                              <img
                                className="rounded-circle"
                                src="assets/img/images.jpg"
                                width={96}
                                height={87}
                              />
                            </div>
                            <div className="col">
                              <div className="row">
                                <div className="col-lg-8">
                                  <p className="fs-6">
                                    <strong>Natalie</strong>
                                  </p>
                                  <p
                                    style={{
                                      marginBottom: 21,
                                      marginTop: "-44px"
                                    }}
                                  >
                                    I really enjoyed my stay!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3">
                          <img
                            className="rounded-circle"
                            src="assets/img/profile.webp"
                            width={87}
                            height={83}
                            style={{ marginTop: 6 }}
                          />
                        </div>
                        <div className="col-lg-8">
                          <p className="fs-6">
                            <strong>Jonathan</strong>
                          </p>
                          <p style={{ marginBottom: 21, marginTop: "-44px" }}>
                            Wonderful place...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col-lg-2">
                          <img
                            className="rounded-circle ms-lg-0"
                            src="assets/img/dark-haired-man-in-brown-leather-jacket.jpg"
                            width={87}
                            height={83}
                            style={{ paddingTop: 0, marginTop: "-10px" }}
                          />
                        </div>
                        <div className="col-lg-9">
                          <p className="fs-6" style={{ marginLeft: 35 }}>
                            <strong>Nate</strong>
                          </p>
                          <p
                            style={{
                              marginBottom: 21,
                              marginTop: "-44px",
                              marginLeft: 32
                            }}
                          >
                            This place was amazing!
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2">
                          <img
                            className="rounded-circle"
                            src="assets/img/profile.webp"
                            width={87}
                            height={83}
                            style={{ marginTop: 1 }}
                          />
                        </div>
                        <div className="col">
                          <p className="fs-6" style={{ marginLeft: 28 }}>
                            <strong>&nbsp;Elif</strong>
                          </p>
                          <p
                            style={{
                              marginBottom: 21,
                              marginTop: "-44px",
                              marginLeft: 32
                            }}
                          >
                            Lovely place with a great view.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2">
                          <img
                            className="rounded-circle"
                            src="assets/img/photo-1584043720379-b56cd9199c94.jpg"
                            width={87}
                            height={83}
                            style={{
                              paddingLeft: 0,
                              paddingTop: 0,
                              marginTop: 8
                            }}
                          />
                        </div>
                        <div className="col">
                          <p className="fs-6" style={{ marginLeft: 35 }}>
                            <strong>Chris</strong>
                          </p>
                          <p
                            style={{
                              marginBottom: 21,
                              marginTop: "-44px",
                              marginLeft: 32
                            }}
                          >
                            Everything was perfect!
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <button
                            className="btn btn-danger"
                            type="button"
                            style={{
                              marginLeft: 178,
                              paddingTop: 7,
                              marginTop: 15
                            }}
                          >
                            Show All Reviews
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <figure className="figure" />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active description"
                  role="tabpanel"
                  id="description"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <div className="row">
                        <div
                          className="col-lg-3 offset-lg-0"
                          style={{ marginTop: "-1px", marginBottom: 0 }}
                        >
                          <img
                            className="rounded-circle"
                            src="assets/img/photo-1596813362035-3edcff0c2487.jpg"
                            width={87}
                            height={83}
                            style={{ marginTop: "-14px" }}
                          />
                        </div>
                        <div className="col-lg-8">
                          <p className="fs-6">
                            <strong>
                              Jennifer&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </strong>
                            <i className="fas fa-flag" />
                          </p>
                          <p style={{ marginBottom: 21, marginTop: "-44px" }}>
                            The place was just perfect.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <div className="col-lg-3">
                              <img
                                className="rounded-circle"
                                src="assets/img/images.jpg"
                                width={96}
                                height={87}
                              />
                            </div>
                            <div className="col-lg-8">
                              <p className="fs-6">
                                <strong>
                                  Natalie&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp; &nbsp;
                                </strong>
                                <i className="fas fa-flag" />
                              </p>
                              <p
                                style={{ marginBottom: 21, marginTop: "-44px" }}
                              >
                                I really enjoyed my stay!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          className="col-lg-3"
                          style={{
                            paddingBottom: 0,
                            marginLeft: 0,
                            paddingTop: 0
                          }}
                        >
                          <img
                            className="rounded-circle"
                            src="assets/img/profile.webp"
                            width={87}
                            height={83}
                            style={{ marginTop: 6 }}
                          />
                        </div>
                        <div className="col-lg-8">
                          <p className="fs-6">
                            <strong>
                              Jonathan&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                            </strong>
                            <i className="fas fa-flag" />
                          </p>
                          <p style={{ marginBottom: 21, marginTop: "-44px" }}>
                            Wonderful place...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div
                          className="col-lg-3"
                          style={{ marginLeft: "-31px" }}
                        >
                          <img
                            className="rounded-circle ms-lg-0"
                            src="assets/img/dark-haired-man-in-brown-leather-jacket.jpg"
                            width={87}
                            height={83}
                            style={{
                              paddingTop: 0,
                              marginTop: "-10px",
                              marginLeft: 24,
                              paddingLeft: 0
                            }}
                          />
                        </div>
                        <div
                          className="col-lg-10"
                          style={{ marginRight: 0, marginLeft: "-11px" }}
                        >
                          <p className="fs-6" style={{ marginLeft: 35 }}>
                            <strong>
                              Nate&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp;
                            </strong>
                            <i className="fas fa-flag" />
                          </p>
                          <p
                            style={{
                              marginBottom: 21,
                              marginTop: "-44px",
                              marginLeft: 32
                            }}
                          >
                            This place was amazing!
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3">
                          <img
                            className="rounded-circle"
                            src="assets/img/profile.webp"
                            width={87}
                            height={83}
                            style={{ marginLeft: "-31px", marginTop: 4 }}
                          />
                        </div>
                        <div
                          className="col-lg-10"
                          style={{ marginLeft: "-41px" }}
                        >
                          <p className="fs-6" style={{ marginLeft: 28 }}>
                            <strong>&nbsp;Elif</strong>&nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp;
                            <i className="fas fa-flag" />
                          </p>
                          <p
                            style={{
                              marginBottom: 21,
                              marginTop: "-44px",
                              marginLeft: 32
                            }}
                          >
                            Lovely place with a great view.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3">
                          <img
                            className="rounded-circle"
                            src="assets/img/photo-1584043720379-b56cd9199c94.jpg"
                            width={87}
                            height={83}
                            style={{
                              paddingLeft: 0,
                              marginLeft: "-31px",
                              paddingTop: 0,
                              marginTop: "-7px"
                            }}
                          />
                        </div>
                        <div
                          className="col-lg-10"
                          style={{ marginLeft: "-40px" }}
                        >
                          <p className="fs-6" style={{ marginLeft: 35 }}>
                            <strong>
                              Chris&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp;&nbsp;
                            </strong>
                            <i className="fas fa-flag" />
                          </p>
                          <p
                            style={{
                              marginBottom: 21,
                              marginTop: "-44px",
                              marginLeft: 32
                            }}
                          >
                            Everything was perfect!
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-10" style={{ marginLeft: 45 }}>
                          <button
                            className="btn btn-danger"
                            type="button"
                            style={{
                              paddingTop: 7,
                              paddingLeft: 0,
                              marginTop: 0,
                              marginLeft: 80
                            }}
                          >
                            Show All Reviews
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clean-related-items">
            <div className="items" />
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
</container>

  );
}
export default RentalPage;
