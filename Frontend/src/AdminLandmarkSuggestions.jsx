import React, {useEffect, useState} from "react";
import "./adminAssets/bootstrap/css/bootstrap.min.css";
import "./adminAssets/css/vanilla-zoom.min.css";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

export const AdminLandmarkSuggestions = () => {
  const [mostRented, setMostRented] = useState(false);
  const [leastRented, setLeastRented] = useState(false);
  const [latestAdded, setLatestAdded] = useState(false);
  const [oldestAdded, setOldestAdded] = useState(false);
  const [highestRating, setHighestRating] = useState(false);
  const [lowestRating, setLowestRating] = useState(false);
  const [search, setSearch] = useState("");
  const [forms, setForms] = useState([]);
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

  const navigate = useNavigate();

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

  const fetchLandmarkForms = async () => {
    try {
      const response = await axios.get('http://localhost:8080/allLandmarkForms');
      console.log(response.data);
      setForms(response.data);
    } catch (error) {
      console.error('Failed:', error);
      setForms([]);
    }
  };

  useEffect(() => {
    fetchLandmarkForms().then(r => console.log('fetched data'));
  }, []);

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
                  <label className="form-check-label" htmlFor="formCheck-1">
                    Most rented
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-2"
                  />
                  <label className="form-check-label" htmlFor="formCheck-2">
                    Least rented
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-3"
                  />
                  <label className="form-check-label" htmlFor="formCheck-3">
                    Latest Added
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-4"
                  />
                  <label className="form-check-label" htmlFor="formCheck-4">
                    Oldest Added
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-5"
                  />
                  <label className="form-check-label" htmlFor="formCheck-5">
                    Highest Rating
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-6"
                  />
                  <label className="form-check-label" htmlFor="formCheck-6">
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
              {forms.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top w-100 d-block"
                    src="adminAssets/img/scenery/turkey-alanya-top-things-to-do-explore-alanya-castle.jpg"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item['landmark-name']}</h4>
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
                          backgroundColor: "rgb(255, 255, 255)",
                        }}
                      >
                        View
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              ))}

              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top w-100 d-block"
                    src="adminAssets/img/scenery/Famous-Lycian-Tombs-of-ancient-Caunos-city-Dalyan-Turkey_Depositphotos_467017994_s-2019.jpeg.webp"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      Dalyan Lycian Rock Tombs, Muğla
                    </h4>
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
                          backgroundColor: "rgb(255, 255, 255)",
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
    </>
  );
};

export default AdminLandmarkSuggestions;
