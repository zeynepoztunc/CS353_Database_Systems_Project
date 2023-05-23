import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
function ProfilePage() {
  const navigate = useNavigate();
  const reviews = [
    { id: 1, author: 'John ', comment: 'Clean and kind guest!', image: "assets/img/istockphoto-1200677760-612x612.jpg" },
    { id: 2, author: 'Jane ', comment: 'Respectful and tidy',image: 'assets/img/happy-young-woman-sitting-on-260nw-2018571389.webp'},
    { id: 3, author: 'Liz', comment: 'Was very nice and welcoming', image:"assets/img/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg" },
    { id: 4, author: 'Deniz', comment: 'Super guest!', image:"assets/img/smile-young-man-close-gorgeous-260nw-186076112.webp" }

  ];
  const handlePastBookings = (event) => {
    event.preventDefault();
    navigate('/PastBookingsPage');
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    // Handle file upload logic here
    if (selectedFile) {
      // Perform actions with the selected file
      console.log('Selected file:', selectedFile);
    } else {
      // No file selected
      console.log('No file selected');
    }
  };

  const handlePastTransactions = (event) => {
    event.preventDefault();
    navigate('/PastTransactionsPage');
  };

    return (
        <>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>About Us - Brand</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
        />
        <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/baguetteBox.min.css" />
        <link rel="stylesheet" href="assets/css/Banner-Heading-Image-images.css" />
        <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
          <div className="container">
            <p className="fs-3">WeRent</p>
            <a className="navbar-brand logo" href="#" />
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pricing.html">
                    Map
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="profile.html">
                    <i
                      className="fas fa-shopping-basket text-dark"
                      style={{ fontSize: 22 }}
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact-us.html">
                    <i className="fas fa-user text-dark" style={{ fontSize: 24 }} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    LOG OUT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="page">
          <section className="clean-block about-us">
            <div className="container">
              <div className="row text-bg-light">
                <div
                  className="col-md-6 col-lg-4 text-center"
                  style={{
                    marginTop: 40,
                    paddingTop: 19,
                    paddingRight: 32,
                    paddingLeft: 31
                  }}
                >
                  <div className="card">
                    <div className="card-body">
                      <h6 className="text-muted card-subtitle mb-2" />
                      <img
                        className="rounded-circle d-lg-flex align-items-lg-start"
                        src="assets/img/istockphoto-1225524274-612x612.jpg"
                        width={126}
                        height={111}
                        style={{ paddingLeft: 0, marginLeft: 90 }}
                      />
                      <p style={{ marginTop: 16 }}>
                        <strong>
                          <span style={{ textDecoration: "underline" }}>
                            Change profile picture
                          </span>
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-body"
                      style={{ marginBottom: "-29px", paddingBottom: 6 }}
                    >
                      <h6 className="text-muted card-subtitle mb-2" />
                      <p />
                      <p style={{ marginTop: "-24px" }}>
                        <i
                          className="far fa-star text-warning"
                          style={{ fontSize: 27 }}
                        />
                        &nbsp; &nbsp;&nbsp;
                        <span style={{ backgroundColor: "rgb(248, 249, 250)" }}>
                          4.5 rating average
                        </span>
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-body"
                      style={{ marginBottom: "-29px", paddingBottom: 6 }}
                    >
                      <h6 className="text-muted card-subtitle mb-2" />
                      <p />
                      <p
                        className="fs-6 text-center text-primary"
                        style={{
                          paddingLeft: 0,
                          marginRight: 1,
                          marginLeft: "-2px",
                          paddingBottom: 0,
                          marginBottom: 35,
                          paddingTop: 18,
                          marginTop: "-36px"
                        }}
                      >
                        <span
                          style={{
                            textDecoration: "underline",
                            color: "rgb(16, 15, 13)",

                          }}>
                          <a
                           
                            onClick={handlePastBookings}
                          >
       
                          Show past bookings
                          </a>

                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-body"
                      style={{
                        paddingBottom: 38,
                        marginRight: "-4px",
                        marginBottom: "-32px"
                      }}
                    >
                      <p
                        className="fs-6 text-center text-primary"
                        style={{
                          paddingBottom: 0,
                          paddingLeft: 0,
                          marginBottom: "-1px",
                          marginRight: 1,
                          marginLeft: "-2px"
                        }}
                      >
                        <span
                          style={{
                            textDecoration: "underline",
                            color: "rgb(16, 15, 13)"
                          }}
                        >
                            <a
                           onClick={handlePastTransactions}
                         >
                          Show past transaction history

                         </a>
                        </span>
                      </p>
                      <h6 className="text-muted card-subtitle mb-2" />
                      <p />
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-body"
                      style={{
                        paddingBottom: 38,
                        marginRight: "-4px",
                        marginBottom: "-32px"
                      }}
                    >
                      <p
                        className="fs-6 text-center text-primary"
                        style={{
                          paddingBottom: 0,
                          paddingLeft: 0,
                          marginBottom: "-1px",
                          marginRight: 1,
                          marginLeft: "-2px"
                        }}
                      >
                        <span
                          style={{
                            textDecoration: "underline",
                            color: "rgb(16, 15, 13)"
                          }}
                        >
                          Show favorited rentals
                        </span>
                      </p>
                      <h6 className="text-muted card-subtitle mb-2" />
                      <p />
                    </div>
                  </div>
                  <div
                    className="card"
                    style={{
                      paddingTop: 0,
                      marginTop: 65,
                      paddingRight: 0,
                      paddingLeft: 0,
                      marginLeft: 423,
                      marginRight: "-461px"
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        paddingBottom: 38,
                        marginRight: "-276px",
                        paddingRight: 288,
                        marginBottom: "-31px",
                        paddingTop: 0,
                        marginTop: 20,
                        paddingLeft: 0,
                        marginLeft: "-2px"
                      }}
                    >
                      <p
                        className="fs-6 text-center text-primary"
                        style={{
                          paddingBottom: 0,
                          paddingLeft: 0,
                          marginBottom: "-1px",
                          marginRight: 1,
                          marginLeft: "-2px"
                        }}
                      >
                        <span
                          style={{
                            textDecoration: "underline",
                            color: "rgb(16, 15, 13)"
                          }}
                        >
                          Upload Entitlement of Disaster pdf
                        </span>
                      </p>
                    
                      <h6 className="text-muted card-subtitle mb-2" />
                      <p />
                      <input
                          className="form-control"
                          type="file"
                          name="files"
                          accept=".pdf"
                          id="fileInput" 
                          onChange={handleFileChange}
                        />
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={handleFileUpload}
                        style={{
                          paddingTop: 0,
                          marginTop: "5px",
                          paddingLeft: 0,
                          paddingBottom: 7,
                          paddingRight: 0,
                          marginRight: 37,
                          marginLeft: 31
                        }}
                      >
                        Upload
                      </button>
                      
                      
                    
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-8" style={{ marginTop: 40 }}>
                  <h4 className="fs-2" style={{ paddingBottom: 0, marginBottom: 28 }}>
                    <strong>Welcome, Alice</strong>
                  </h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">
                            <strong>Name</strong>
                          </h5>
                          <h6
                            className="text-muted card-subtitle mb-2"
                            style={{ marginRight: 0 }}
                          >
                            <span style={{ color: "rgb(5, 6, 7)" }}>
                              Alice Thompson
                            </span>
                            <button
                              className="btn btn-link text-end link-dark pull-right"
                              type="button"
                              style={{ marginTop: "-12px" }}
                            >
                              edit
                            </button>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col" style={{ marginTop: 16 }}>
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">
                            <strong>Email</strong>
                          </h5>
                          <h6 className="text-muted card-subtitle mb-2">
                            <span style={{ color: "rgb(5, 6, 7)" }}>
                              alice.thompson@gmail.com
                            </span>
                            <button
                              className="btn btn-link text-end link-dark pull-right"
                              type="button"
                              style={{ marginTop: "-12px" }}
                            >
                              edit
                            </button>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "-36px" }}>
                    <div className="col" style={{ paddingTop: 0, marginTop: 58 }}>
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">
                            <strong>Password</strong>
                          </h5>
                          <h6 className="text-muted card-subtitle mb-2">
                            <span style={{ color: "rgb(5, 6, 7)" }}>********</span>
                            <button
                              className="btn btn-link text-end link-dark pull-right"
                              type="button"
                              style={{ marginTop: "-12px" }}
                            >
                              edit
                            </button>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ marginTop: 15 }}>
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">
                            <strong>Description</strong>
                          </h5>
                          <h6 className="text-muted card-subtitle mb-2">
                            <span style={{ color: "rgb(5, 6, 7)" }}>
                              Hi, my name is Alice and I currently live in Spain
                            </span>
                            <button
                              className="btn btn-link text-end link-dark pull-right"
                              type="button"
                              style={{ marginTop: "-12px" }}
                            >
                              edit
                            </button>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div />
                </div>
              </div>
            </div>
            <div
              className="col-lg-10 offset-lg-0"
              style={{ marginTop: "-1px", marginBottom: 0, marginLeft: 82 }}
            >
              <h2 style={{ paddingTop: 64 }}>
                <strong>Reviews</strong>
              </h2>
            </div>
            <div className="container">
              <div className="row">
              
              {reviews.map((review) => (
                <div className="col-md-6" style={{ paddingTop: 17 }}>
                  <img
                    className="rounded-circle"
                    src={review.image}
                    width={101}
                    height={87}
                  />
                  <div
                    className="card"
                    style={{
                      marginLeft: 119,
                      marginBottom: 0,
                      paddingBottom: 0,
                      paddingTop: 0,
                      marginTop: "-101px"
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        marginBottom: "-2px",
                        marginLeft: 52,
                        marginRight: 74
                      }}
                    >
                     
                      <h4 className="card-title" style={{ marginLeft: "-56px" }}>
                      <p>{review.author}</p>

                      </h4>
                       
                       <p className="card-text" style={{ marginLeft: "-56px" }}>
                       {review.comment}
                       </p> 
                    </div>
                  </div>
                </div>
                ))}

                <div className="col-md-6" style={{ paddingTop: 8 }}>
                  <button
                    className="btn btn-danger"
                    type="button"
                    style={{
                      paddingTop: 7,
                      paddingLeft: 2,
                      marginLeft: 298,
                      marginTop: 14
                    }}
                  >
                    Show All Reviews
                  </button>
                </div>
                <div
                  className="col-md-6 col-lg-12"
                  style={{ paddingTop: 8, marginLeft: 36 }}
                >
                  <button
                    className="btn btn-danger"
                    type="button"
                    style={{
                      paddingTop: 7,
                      marginTop: 14,
                      paddingLeft: 9,
                      marginLeft: 500
                    }}
                  >
                    Switch to Host Mode
                  </button>
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
      
  
    
    );
  }
  // Custom theme code
  
  export default ProfilePage;
  