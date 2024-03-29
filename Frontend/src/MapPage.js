import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import NavBar from './NavBar.js';
import axios from "axios";

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


  const [selectedLocation, setSelectedLocation] = useState(null);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);
  const userid = urlParams.get("userid");

  const [rentalLocations, setRentalLocations] = useState([]);
  const [nearbyRentals,setNearbyRentals] = useState([]);

  const fetchAllRentalLocations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/Rentals/getRentalLocation');
      setRentalLocations(response.data);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  const fetchNearbyRentalLocations = async (lat, lng) => {
    try {
      const response = await axios.get(`http://localhost:8080/Rentals/getRentalLocationInRange?lat=${lat}&lng=${lng}`);
      setNearbyRentals(response.data);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };


  // Fetch all rental locations when the component mounts
  useEffect(() => {
    fetchAllRentalLocations();
  }, []);

// Fetch rental locations within 100km whenever the selected location changes
  useEffect(() => {
    if (selectedLocation) {
      fetchNearbyRentalLocations(selectedLocation.lat, selectedLocation.lng);
    }
  }, [selectedLocation]);






  const applyFilters = () => {
    let filteredRentals = nearbyRentals;

    if (selectedFilters.length > 0) {
      filteredRentals = filteredRentals.filter((item) => {
        const rentalName = item["rental-name"].toLowerCase();
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
              <LoadScript>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={defaultCenter}
                    zoom={10}
                    onClick={handleMapClick}
                >
                  {rentalLocations.map((location, index) => (
                      <Marker key={index} position={{ lat: location[0], lng: location[1] }} />
                  ))}
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
            <div className="row" style={{ borderStyle: "none", marginLeft: -20 }}>
              <div
                
                style={{
                  borderStyle: "none",
                  borderRightStyle: "none",
                  marginLeft: 0
                }}
              >

               
              </div>
              <div
                  className="col-md-6 col-xl-5 col-xxl-9 mx-auto"
              >
                <div>
                  {nearbyRentals.map((item,index) => (
                      <div key={index} className="row">
                      <div className="col-xl-3">

                      </div>
                        <div className="col-xl-6 mt-3">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Rental Location</h5>
                              <p className="card-text">
                                { "Rental Name: " + nearbyRentals[index] }
                              </p>
                              <button
                                  onClick={goToRentalPage}
                                  className="btn btn-primary"
                              >
                                View Details
                              </button>
                            </div>
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