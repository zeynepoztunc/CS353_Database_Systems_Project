import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import NavBar from './NavBar.js';

function MapPage() {

  const [placeValues, setPlaceValues] = useState([
    {
      ID: "1233",
      rentalName: "2+1 Villa",
      description: "Luxury Villa With Jakuzzi",
      isFavorited: "true",
      location: { lat: 39.8813, lng: 32.6984 },
      img: "customerAssets/img/Ekran%20Görüntüsü%20(1189).png"
    },
    {
      ID: "123",
      rentalName: "Seaside Villa",
      description: "Luxury Villa With Sea View",
      isFavorited: "false",
      location: { lat: 39.8912, lng: 32.7021 },
      img: "customerAssets/img/Ekran%20Görüntüsü%20(1195).png"
    },
  ]);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const applyFilters = () => {
    let filteredRentals = placeValues;

    if (selectedFilters.length > 0) {
      filteredRentals = filteredRentals.filter((item) => {
        const rentalName = item.rentalName.toLowerCase();
        return selectedFilters.some((filter) => rentalName.includes(filter));
      });
    }

    if (showFavoritesOnly) {
      filteredRentals = filteredRentals.filter((item) => item.isFavorited);
    }

    return filteredRentals;
  };

  const toggleFavoritesOnly = () => {
    setShowFavoritesOnly((prevShowFavoritesOnly) => !prevShowFavoritesOnly);
  };

  const handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filterValue)) {
        return prevFilters.filter((filter) => filter !== filterValue);
      } else {
        return [...prevFilters, filterValue];
      }
    });
  };

  const handleApiLoaded = (map, maps) => {
    console.log(map);
    console.log(maps);
  };

  const containerStyle = {
    width: '720px',
    height: '322px',
    margin: '0 auto'
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
      <title>FAQ - Brand</title>
      <link rel="stylesheet" href="./customerAssets/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
      />
      <link rel="stylesheet" href="./customerAssets/fonts/fontawesome-all.min.css" />
      <link rel="stylesheet" href="./customerAssets/css/baguetteBox.min.css" />
      <link rel="stylesheet" href="./customerAssets/css/vanilla-zoom.min.css" />

      <NavBar></NavBar>

      <main className="page faq-page">
        <section
          className="clean-block clean-faq dark"
          style={{ borderStyle: "solid" }}
        >
          <div className="container">
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
            <div style={{ marginLeft: 72 }}>
              <h3
                style={{
                  marginRight: 288,
                  marginLeft: 428,
                  color: "rgb(59,153,224)"
                }}
              >
                NEARBY PLACES
              </h3>
            </div>
          </div>
          <div className="container">
            <div className="row" style={{ borderStyle: "none" }}>
              <div
                className="col-md-6 col-xl-2 col-xxl-1"
                style={{
                  borderStyle: "none",
                  borderRightStyle: "none",
                  marginLeft: 178
                }}
              >

                <div style={{ marginRight: 540 }}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-1"
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="formCheck-1">
                      Rentals
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-2"
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="formCheck-2">
                      Landmarks
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-3"
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="formCheck-3">
                      Favorited
                    </label>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-xl-5 col-xxl-9"
                style={{
                  borderStyle: "none",
              /*borderRightStyle: 'solid', */ borderLeftStyle: "none",
                  marginLeft: 0
                }}
              >
                <div>
                  {applyFilters().map((item, index) => (
                    <div className="row">
                      <div className="col-xl-6">
                        <div
                          className="clean-product-item"
                          style={{ marginLeft: 76 }}
                        >
                          <img
                            className="img-fluid d-block mx-auto"
                            src={item.img}
                            width={113}
                            height={113}
                          />
                        </div>
                      </div>
                      <div
                        className="col-xl-6"
                        style={{
                          marginTop: 18,
                          paddingRight: 4,
                          marginRight: 0,
                          marginLeft: "-38px"
                        }}
                      >
                        <div style={{ position: "relative" }}>
                          <label
                            onClick={goToRentalPage}
                            className="form-label"
                            style={{
                              color: "var(--bs-blue)",
                              textDecoration: "underline",
                              paddingRight: 30 // Adjust padding as needed
                            }}
                          >
                            {item.rentalName}
                          </label>
                          <i
                            className={item['is-favorited'] ? "fas fa-heart" : "far fa-heart"}
                            style={{
                              position: "absolute",
                              right: 0,
                              top: "50%",
                              transform: "translateY(-50%)",
                              fontSize: 20
                            }}
                          />
                        </div>

                        <div>
                          <label className="form-label" style={{ marginTop: 26 }}>
                            {item.description}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default MapPage;