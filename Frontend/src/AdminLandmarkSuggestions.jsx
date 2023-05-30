import React, { useState } from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";

export const AdminLandmarkSuggestions = () => {
  const [mostRented, setMostRented] = useState(false);
  const [leastRented, setLeastRented] = useState(false);
  const [latestAdded, setLatestAdded] = useState(false);
  const [oldestAdded, setOldestAdded] = useState(false);
  const [highestRating, setHighestRating] = useState(false);
  const [lowestRating, setLowestRating] = useState(false);
  const [search, setSearch] = useState("");
  const users = [
    {
      name: "Airi Satou",
      userType: "Host",
      complaintCount: 0,
      joinDate: "2022/11/28",
      photo: "assets/img/avatars/avatar1.jpeg",
    },
    {
      name: "Airi Satou",
      userType: "Host",
      complaintCount: 0,
      joinDate: "2022/11/28",
      photo: "assets/img/avatars/avatar1.jpeg",
    },
  ];

  function handleSearch() {
    if (document.getElementById("formCheck-1").checked) {
      console.log("is checked 1");
      setMostRented(true);
    }
    if (document.getElementById("formCheck-2").checked) {
      console.log("is checked 2");
      setLeastRented(true);
    }
    if (document.getElementById("formCheck-3").checked) {
      console.log("is checked 3");
      setLatestAdded(true);
    }
    if (document.getElementById("formCheck-4").checked) {
      console.log("is checked 4");
      setOldestAdded(true);
    }
    if (document.getElementById("formCheck-5").checked) {
      console.log("is checked 5");
      setHighestRating(true);
    }
    if (document.getElementById("formCheck-6").checked) {
      console.log("is checked 6");
      setLowestRating(true);
    }
    var searchInput = document.getElementById("searchInput");
    if (searchInput) {
      setSearch(searchInput.value);
      console.log(search);
    }
  }
    
    return (
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Services - Brand</title>
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.css"
  />
  <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
  <Navbar />
  <main className="page service-page">
    <section className="clean-block clean-services dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Landmark Suggestion Forms</h2>
          <p>
            Landmark suggestion forms filled by users are listed down below.
          </p>
        </div>
        
        
        <p>Select search inputs</p>
                      <div>
                        <div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck-1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-1"
                            >
                              Most rented
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck-2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-2"
                            >
                              Least rented
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck-3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-3"
                            >
                              Latest Added
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck-4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-4"
                            >
                              Oldest Added
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck-5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-5"
                            >
                              Highest Rating
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck-6"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-6"
                            >
                              Lowest Rating
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div
                          className="text-md-end dataTables_filter"
                          id="dataTable_filter"
                        >
                          <input
                            type="search"
                            id="searchInput"
                            className="form-control form-control-sm"
                            aria-controls="dataTable"
                            placeholder="Search"
                          />
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleSearch}
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center",
                            }}
                          >
                            Search
                          </button>
                          <label className="form-label" />
                        </div>
                      </div>
                  
        
        
        
        
        
        
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/turkey-alanya-top-things-to-do-explore-alanya-castle.jpg"
              />
              <div className="card-body">
                <h4 className="card-title">Alanya Castle, Antalya</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  <span
                    style={{
                      color: "rgb(13, 110, 253)",
                      backgroundColor: "rgb(255, 255, 255)"
                    }}
                  >
                    View
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/Alanya-excursions-3.webp"
              />
              <div className="card-body">
                <h4 className="card-title">Aspendos, Antalya</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  <span
                    style={{
                      color: "rgb(13, 110, 253)",
                      backgroundColor: "rgb(255, 255, 255)"
                    }}
                  >
                    View
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/3d.jpg"
              />
              <div className="card-body">
                <h4 className="card-title">Green Canyon Boat Tour, Antalya</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  <span
                    style={{
                      color: "rgb(13, 110, 253)",
                      backgroundColor: "rgb(255, 255, 255)"
                    }}
                  >
                    View
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/Stone-head-statues-at-Nemrut-Mountain-in-Turkey_Depositphotos_74526735_s-2019.jpeg.webp"
              />
              <div className="card-body">
                <h4 className="card-title">Mount Nemrut, Adıyaman</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/Waterfall-Duden-at-Antalya-Turkey_Depositphotos_8524062_s-2019.jpeg.webp"
              />
              <div className="card-body">
                <h4 className="card-title">Duden Waterfalls, Antalya</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  <span
                    style={{
                      color: "rgb(13, 110, 253)",
                      backgroundColor: "rgb(255, 255, 255)"
                    }}
                  >
                    View
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                src="adminAssets/img/scenery/Famous-Lycian-Tombs-of-ancient-Caunos-city-Dalyan-Turkey_Depositphotos_467017994_s-2019.jpeg.webp"
              />
              <div className="card-body">
                <h4 className="card-title">Dalyan Lycian Rock Tombs, Muğla</h4>
                <p className="card-text" />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  <span
                    style={{
                      color: "rgb(13, 110, 253)",
                      backgroundColor: "rgb(255, 255, 255)"
                    }}
                  >
                    View
                  </span>
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
      <p />
    </div>
  </footer>
</>

        
    );

    
}


export default AdminLandmarkSuggestions;