import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './NavBar.js';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


function CustomerAddLandmark() {

  const containerStyle = {
    width: '720px',
    height: '322px',
    marginLeft: '200px'
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

  return (

    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Register - WeRent</title>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
      />
      <link rel="stylesheet" href="assets/css/Font%20Awesome%205%20Brands.css" />
      <link rel="stylesheet" href="assets/css/Font%20Awesome%205%20Free.css" />
      <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
      <link rel="stylesheet" href="assets/fonts/font-awesome.min.css" />
      <link rel="stylesheet" href="assets/fonts/fontawesome5-overrides.min.css" />
      <link rel="stylesheet" href="assets/css/baguetteBox.min.css" />
      <link
        rel="stylesheet"
        href="assets/css/Bootstrap-4-Calendar-No-Custom-Code.css"
      />
      <link rel="stylesheet" href="assets/css/Drag--Drop-Upload-Form.css" />
      <link rel="stylesheet" href="assets/css/Drag-Drop-File-Input-Upload.css" />
      <link rel="stylesheet" href="assets/css/pop-up-boxes.css" />
      <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
      <link rel="stylesheet" href="assets/css/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.reflowhq.com/v2/toolkit.min.css" />
      <link rel="stylesheet" href="assets/css/fonts/fontawesome-all.min.css" />
      <link rel="stylesheet" href="assets/css/css/baguetteBox.min.css" />
      <link
        rel="stylesheet"
        href="assets/css/css/Banner-Heading-Image-images.css"
      />
      <link
        rel="stylesheet"
        href="assets/css/Button-modal-ecommerce-bs4_modal.min.css"
      />
      <link rel="stylesheet" href="assets/css/Button-modal-ecommerce-styles.css" />
      <link rel="stylesheet" href="assets/css/Hover-Button-1.css" />
      <link rel="stylesheet" href="assets/css/bootstrap/css/bootstrap.min-1.css" />

      <NavBar></NavBar>

      <main className="page registration-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Landmark Suggestion Form&nbsp;</h2>
              <p />
            </div>
            <form style={{ textAlign: "left", display: "block" }}>
              <h1 className="text-center">Where's the landmark located?</h1>
              <div className="block-heading">
                <h2 className="text-info">MAP</h2>
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

                {selectedLocation && (
                  <div>
                    <p>Latitude: {selectedLocation.lat}</p>
                    <p>Longitude: {selectedLocation.lng}</p>
                  </div>
                )}
              </div>
              <figure className="figure" />
              <span />
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
                    Select your city
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      First Item
                    </a>
                    <a className="dropdown-item" href="#">
                      Second Item
                    </a>
                    <a className="dropdown-item" href="#">
                      Third Item
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-white-50">Text</span>
              </div>
              <div>
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Province
                </label>
                <div className="dropdown">
                  <button
                    className="btn btn-light btn-sm dropdown-toggle text-center"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    type="button"
                  >
                    Select your province
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      First Item
                    </a>
                    <a className="dropdown-item" href="#">
                      Second Item
                    </a>
                    <a className="dropdown-item" href="#">
                      Third Item
                    </a>
                  </div>
                </div>
                <div>
                  <span className="text-white-50">Text</span>
                </div>
              </div>
              <label className="form-label" style={{ fontWeight: "bold" }}>
                Information about the landmark *optional
              </label>
              <div>
                <textarea className="form-control" defaultValue={""} />
              </div>
              <div>
                <span className="text-white-50">Text</span>
              </div>
              <div>
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Upload at least 1 photograph of the landmark
                </label>
                <div className="files color form-group mb-3">
                  <input
                    className="form-control"
                    type="file"
                    multiple=""
                    name="files"
                  />
                </div>
                <div style={{ textAlign: "left" }} />
              </div>
              <button className="btn btn-primary" type="button">
                Add Landmark
              </button>
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

export default CustomerAddLandmark;
