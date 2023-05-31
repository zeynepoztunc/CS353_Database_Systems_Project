import React, { useState } from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';
import { Navbar } from './Navbar.jsx';

export const AdminReviews = () => {
  const [highestCleanliness, setHighestCleanliness] = useState(false);
  const [highestCheckIn, setHighestCheckIn] = useState(false);
  const [highestCommunication, setHighestCommunication] = useState(false);
  const [highestAccuracy, setHighestAccuracy] = useState(false);
  const [highestSafety, setHighestSafety] = useState(false);
  const [highestLocation, setHighestLocation] = useState(false);
  const [highestValue, setHighestValue] = useState(false);
  const [leastReviewed, setLeastReviewed] = useState(false);
  const [mostReviewed, setMostReviewed] = useState(false);
  const [search, setSearch] = useState("");
  
  const reviews = [
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
      setHighestCleanliness(true);
    }
    if (document.getElementById("formCheck-2").checked) {
      console.log("is checked 2");
      setHighestCheckIn(true);
    }
    if (document.getElementById("formCheck-3").checked) {
      console.log("is checked 3");
      setHighestCommunication(true);
    }
    if (document.getElementById("formCheck-4").checked) {
      console.log("is checked 4");
      setHighestAccuracy(true);
    }
    if (document.getElementById("formCheck-5").checked) {
      console.log("is checked 5");
      setHighestSafety(true);
    }
    if (document.getElementById("formCheck-6").checked) {
      console.log("is checked 6");
      setHighestLocation(true);
    }
    if (document.getElementById("formCheck-7").checked) {
      console.log("is checked 7");
      setHighestValue(true);
    }
    if (document.getElementById("formCheck-8").checked) {
      console.log("is checked 7");
      setLeastReviewed(true);
    }
    if (document.getElementById("formCheck-8").checked) {
      console.log("is checked 7");
      setMostReviewed(true);
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
  <title>FAQ - Brand</title>
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
  <Navbar/>
  <main className="page faq-page">
    <section className="clean-block clean-faq dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Reviews</h2>
          <p>Reviews left by all users are shown below.</p>
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
                              Highest Cleanliness
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
                              Highest Check-in
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
                              Highest Communication
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
                              Highest Accuracy
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
                              Highest Safety
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
                              Highest Location
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck-7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-7"
                            >
                              Highest Value
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck-8"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-8"
                            >
                              Least Reviewed
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck-9"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-9"
                            >
                              Most Reviewed
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
        
        
        <div className="block-content">
          <div className="faq-item">
            <h4 className="question">Host Evaluation</h4>
            <div className="answer">
              <p>Jan 26, 2023 by John Smith johnsmith@gmail.com</p>
              <p>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  The host was very friendly.
                </span>
              </p>
              <div>
                <div className="row">
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Cleanliness</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Check-in</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3.5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>
                        Communication
                      </span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Accuracy</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Safety</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Location</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Value</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">Guest Evaluation</h4>
            <div className="answer">
              <p>March 14, 2023 by Emir Kasap emirkasap@gmail.com</p>
              <p>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  The guests left a lot of trash.
                </span>
              </p>
              <div>
                <div className="row">
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Cleanliness</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Check-in</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3.5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>
                        Communication
                      </span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Accuracy</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Safety</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Location</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Value</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h4 className="question">Stay Evaluation</h4>
            <div className="answer">
              <p>April 1, 2023 by Mary News marynews@gmail.com</p>
              <p>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  The house was clean overall. There were too many stray dogs
                  around the apartment.
                </span>
              </p>
              <div>
                <div className="row">
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Cleanliness</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Check-in</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3.5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>
                        Communication
                      </span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Accuracy</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 3</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Safety</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Location</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                  <div className="col">
                    <header />
                    <h4>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Value</span>
                    </h4>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>Rating: 5</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</>

        
    );

    
}


export default AdminReviews;