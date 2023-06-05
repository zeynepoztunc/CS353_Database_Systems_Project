import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar.js";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Button from "react-bootstrap/Button";

function CustomerAddLandmark() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [lat, setLat] = useState("");
  const [longit, setLongit] = useState("");
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const userIdString = urlParams.get("userid");
  const userId = parseInt(userIdString, 10);
  const dropdownCities = [];
  const dropdownProvinces = [];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleAddLandmark = () => {
    setIsModalOpen(true);
  };

  const fetchCities =  async () => {
    try {
      const response =  await axios.get("http://localhost:8080/locations/cities");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch cities:", error);
      return [];
    }
  };

  const fetchDistricts =  async () => {
    try {
      console.log(selectedCity);
      const response =  await axios.get("http://localhost:8080/locations/districts?city=" + selectedCity);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch districts:", error);
      return [];
    }
  };

  const handleCitySelection = (cityName) => {
    setSelectedCity(cityName);
    fetchDistricts(cityName)
        .then((data) => {
          setDistricts(data);
        })
        .catch((error) => {
          console.error("Failed to fetch districts:", error);
          setDistricts([]);
        });
  };
  const handleDistrictSelection = (districtName) => {
    setSelectedDistrict(districtName);
  };

  const modalAddLandmark = async (event) => {
    event.preventDefault();

    try {
      // if ( name === "" || city === "" || province === "" || lat === "" || longit === "" ){
      //   alert("You have to enter all required fields!");
      //   setIsModalOpen(false);
      //   return;
      // }
      console.log("the name" + name);
      console.log("the city"+city);
      console.log("the province"+province);
      console.log("the desc"+desc);

      const response = await axios.post(
        `http://localhost:8080/addLandmarkCust?userId=${userId}&name=${name}&desc=${desc}&city=${city}&province=${province}&lat=${lat}&longit=${longit}`
      );
      console.log(response.data);
      if (response.data == 0) {
        alert("Error Adding Landmark");
      } else if (response.data == 1) {
        navigate("/ProfilePage?userId=" + userId);
        alert("Landmark Added Succesfully!");
      }
    } catch (error) {
      console.error("Failed:", error);
    }

    setIsModalOpen(false);
    alert("You have successfully added a landmark");
  };

  const containerStyle = {
    width: "435px",
    height: "400px",
  };

  const defaultCenter = {
    lat: 39.8813,
    lng: 32.6984,
  };
  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    fetchCities().then((data) => {
      setCities(data);
    });
  }, []);

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
      <link
        rel="stylesheet"
        href="assets/css/Font%20Awesome%205%20Brands.css"
      />
      <link rel="stylesheet" href="assets/css/Font%20Awesome%205%20Free.css" />
      <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
      <link rel="stylesheet" href="assets/fonts/font-awesome.min.css" />
      <link
        rel="stylesheet"
        href="assets/fonts/fontawesome5-overrides.min.css"
      />
      <link rel="stylesheet" href="assets/css/baguetteBox.min.css" />
      <link
        rel="stylesheet"
        href="assets/css/Bootstrap-4-Calendar-No-Custom-Code.css"
      />
      <link rel="stylesheet" href="assets/css/Drag--Drop-Upload-Form.css" />
      <link
        rel="stylesheet"
        href="assets/css/Drag-Drop-File-Input-Upload.css"
      />
      <link rel="stylesheet" href="assets/css/pop-up-boxes.css" />
      <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
      <link
        rel="stylesheet"
        href="assets/css/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.reflowhq.com/v2/toolkit.min.css"
      />
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
      <link
        rel="stylesheet"
        href="assets/css/Button-modal-ecommerce-styles.css"
      />
      <link rel="stylesheet" href="assets/css/Hover-Button-1.css" />
      <link
        rel="stylesheet"
        href="assets/css/bootstrap/css/bootstrap.min-1.css"
      />

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
                    {selectedLocation && <Marker position={selectedLocation} />}
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
                  Name
                </label>
                <div>
                  <input type="text" value={name} onChange={(input)=>{setName(input.value)}} required/>
                </div>
                <div>
                  <span className="text-white-50">Text</span>
                </div>
              </div>
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
                    {selectedCity ? selectedCity : "Select your city"}
                  </button>
                  <div className="dropdown-menu">
                    {cities.map((city,index) => (
                      <a
                        className="dropdown-item"
                        key={index}
                        href="#nogo"
                        onClick={() => handleCitySelection(city.name)}
                      >
                        {city.name}
                      </a>
                    ))}
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
                    {selectedDistrict ? selectedDistrict : "Select your city"}
                  </button>
                  <div className="dropdown-menu">
                    {districts.map((district,index) => (
                      <a
                        className="dropdown-item"
                        key={index}
                        href="#nogo"
                        onClick={() => handleDistrictSelection(district.name)}
                      >
                        {district.name}
                      </a>
                    ))}
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
                <textarea
                  className="form-control"
                  value={desc} // Bind the textarea value to the landmark info state
                  onChange={(desc)=>{setDesc(desc.value)}}
                />
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
                    value={files}
                    onChange={(event)=>{setFiles(event.value)}} required
                  />
                </div>
                <div style={{ textAlign: "left" }} />
              </div>
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleAddLandmark}
              >
                Add Landmark
              </button>
              <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
                <Modal.Header>
                  <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to add the landmark?
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="danger" onClick={modalAddLandmark}>
                    Add
                  </Button>
                </Modal.Footer>
              </Modal>
              <div />
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default CustomerAddLandmark;
