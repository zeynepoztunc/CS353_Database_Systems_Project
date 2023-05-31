import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const defaultCenter = {
    lat: 36.90188844423498,
    lng: 30.68876901249269
  };
  
const  HostRentingRoomLocation= () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const fetchCities = async () => {
    try {
      const response = await axios.get('http://localhost:8080/locations/cities');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch cities:', error);
      return [];
    }
  };

  const fetchDistricts = async () => {
    try {
      console.log(selectedCity);
      const response = await axios.get('http://localhost:8080/locations/districts?city=' + selectedCity );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch districts:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchCities().then((data) =>
    {
      setCities(data);
    });
  }, []);


  const handleMapClick = (event) => {
    const newLat = event.latLng.lat().toFixed(6);
    const newLng = event.latLng.lng().toFixed(6);

    setLat(newLat);
    setLng(newLng);
    setSelectedLocation({ lat: parseFloat(newLat), lng: parseFloat(newLng) });
  };

  const handleCitySelection = (cityName) => {
    setSelectedCity(cityName);
    fetchDistricts(cityName).then((data) => {
      setDistricts(data);
    }).catch((error) => {
      console.error('Failed to fetch districts:', error);
      setDistricts([]);
    });
  };
  const handleDistrictSelection = (districtName) => {
    setSelectedDistrict(districtName);
  };

  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(0.0);
  const [lng, setLng] = useState(0.0);

  const urlParams = new URLSearchParams(window.location.search);
  const rentalId = urlParams.get('rentalId');
  const hostId = urlParams.get('hostId');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(selectedCity);
    console.log(selectedDistrict);
    console.log(address);
    console.log(lat);
    console.log(lng);
    console.log(rentalId);
    try {
      const response = await axios.put(`http://localhost:8080/Rentals/updateLocation`, {
        rentalId: rentalId,
        city: selectedCity,
        province: selectedDistrict,
        latitude: lat,
        longitude: lng,
        address: address
      });
      console.log(response.data);
      // If successful, navigate to the next page
      navigate('/HostRentingRoomPricing?hostId=' + hostId + '&rentalId=' + rentalId);
    } catch (error) {
      console.error('Failed to send rental data:', error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };



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
  <link rel="stylesheet" href="./hostAssets/Drag--Drop-Upload-Form.css" />
  <link rel="stylesheet" href="./hostAssets/Drag-Drop-File-Input-Upload.css" />
  <link rel="stylesheet" href="./hostAssets/pop-up-boxes.css" />
  <link rel="stylesheet" href="./hostAssets/vanilla-zoom.min.css" />
  <link rel="stylesheet" href="./hostAssets/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://cdn.reflowhq.com/v2/toolkit.min.css" />
  <link rel="stylesheet" href="./hostAssets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="./hostAssets/css/baguetteBox.min.css" />
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
              fontFamily: "Montserrat, sans-serif"
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
                        elit. Nam nibh. Nunc varius facilisis eros. Sed erat. In
                        in velit quis arcu ornare laoreet. Curabitur adipiscing
                        luctus massa. Integer ut purus ac augue commodo commodo.
                        Nunc nec mi eu justo tempor consectetuer. Etiam vitae
                        nisl. In dignissim lacus ut ante. Cras elit lectus,
                        bibendum a, adipiscing vitae, commodo et, dui.
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
            style={{ color: "var(--bs-blue)", background: "var(--bs-blue)" }}
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
          <h2 className="text-info">Give Some Details About Your Room</h2>
          <p>
            Your room's location matters for customers. No worries, we'll share
            your adress after&nbsp; customer reserves it!
          </p>
        </div>
        <form style={{ textAlign: "left", display: "block" }} onSubmit={handleSubmit}>
          <h1 className="text-center">Where's your room located?</h1>
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
          <div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              City
            </label>
            <div className="dropdown">
              <button
                className="btn btn-light btn-sm dropdown-toggle text-center d-inline align-content-center"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"
              >
                {selectedCity || 'Select Your City'}
        </button>
        <div className="dropdown-menu">
        {cities.map((city, index) => (
      <a
        key={index}
        className="dropdown-item"
        href = "#nogo"
        onClick={() => handleCitySelection(city.name)}
      >
        {city.name}
      </a>
    ))}
              </div>
            </div>
          </div>
          <div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              District
            </label>
            <div className="dropdown">
              <button
                className="btn btn-light btn-sm dropdown-toggle text-center"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"
              >
                {selectedDistrict || "Select Your District"}
              </button>
              <div className="dropdown-menu">
              {districts.map((District, index)=> (
                <a
                key={index}
                className="dropdown-item"
                href = "#nogo"
                onClick={() => handleDistrictSelection(District.name)}
              >
                {District.name}
              </a>
    ))}
              </div>
            </div>
            
            <div>
              <span className="text-white-50">Text</span>
            </div>
          </div>
          <label className="form-label" style={{ fontWeight: "bold" }}>
            Your address
          </label>
          <div>
  <textarea
      className="form-control"
      value={address}
      onChange={event => setAddress(event.target.value)}
  />
          </div>

          <div>
            <span className="text-white-50">Text</span>
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-primary">
              Next
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

}

export default HostRentingRoomLocation;