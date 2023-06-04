import React, {useState} from 'react'; 
import {Link, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {NavLink} from "react-bootstrap";


const  HostRentingProperty= () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const hostId = urlParams.get('userid');

  const handleChange = (event) => {
    setSelectedOption(event.target.id);
  };

  /*const handleSubmit = async (event) => {  // <-- make this function async
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/Rentals', { // <-- use your backend server url and api endpoint
        selectedOption: selectedOption
      });
      console.log(res.data);  // <-- response from server

      if (selectedOption === 'formCheck-1') {
        navigate('/HostRentingRoomDetails');
      }
      if (selectedOption === 'formCheck-2') {
        navigate('/HostRentingFlatDetails');
      }
    } catch (err) {
      console.error(err);
    }
  };*/

  const handleSubmit = async (event) => {
    event.preventDefault();
    let rentalType = '';
    if (selectedOption === 'formCheck-1') {
      rentalType = 'Room';

    } else if (selectedOption === 'formCheck-2') {
      rentalType = 'Flat';

    }
    try {
      const res = await axios.post('http://localhost:8080/Rentals/addRental', {
        selectedOption: selectedOption,
        rentalType: rentalType,// pass rentType in the request body
        hostId: hostId
      });
      console.log(res.data);
      let rentalId = res.data.rentalId;

      if (selectedOption === 'formCheck-1') {
        navigate(`/HostRentingRoomDetails?userid=${hostId}&rentalId=${rentalId}`);

      }
      if (selectedOption === 'formCheck-2') {
        navigate(`/HostRentingFlatDetails?userid=${hostId}&rentalId=${rentalId}`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const gotoGeneralLogin
      = (event) => {
    event.preventDefault();
    navigate('/');
  }

  const gotoHostRentingCurrentRents
      = (event) => {
    event.preventDefault();
    navigate('/HostRentingCurrentRents?userid=' + hostId);
  }

  const gotoProfilePage = (event) => {
    event.preventDefault();
    navigate('/HostRentingProfilePage?userid=' + hostId);
  }
  return (
    <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>WeRent-Identify Your Property</title>
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
                style={{ paddingRight: 0, marginBottom: 0, fontSize: 32 }}
            >
              WeRent
            </a>
            <ul className="navbar-nav ms-auto" />
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink onClick={gotoHostRentingCurrentRents} className="nav-link">
                  YOUR CURRENT RENTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={gotoProfilePage} className="nav-link">
                  <i className="fas fa-user" style={{ fontSize: 24 }} />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={gotoGeneralLogin} className="nav-link">
                  LOGOUT
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
  <main className="page registration-page">
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Become a Host in Minutes!</h2>
          <p>
            We simply ask you a few questions about your property. What could
            you do in three minutes? You can boil an egg or become a host at
            WeRent!
          </p>
        </div>
        <form style={{ textAlign: "left", display: "block" }} onSubmit={handleSubmit}>
          <figure className="figure" />
          <h1>Which describes your property best?</h1>
          <div
            className="form-check"
            style={{
              background:
                'url("./hostAssets/img/istockphoto-1160217929-612x612.jpg") right / contain no-repeat',
              position: "relative",
              display: "flex",
              textAlign: "initial",
              height: 68
            }}
          >
            <input className="form-check-input" type="radio" id="formCheck-1" checked={selectedOption === 'formCheck-1'}
          onChange={handleChange} />
            <label
              className="form-check-label"
              htmlFor="formCheck-1"
              style={{
                position: "absolute",
                display: "inline-block",
                overflow: "visible",
                textAlign: "center",
                fontSize: 25,
                fontWeight: "bold"
              }}
            >
              Room
            </label>
          </div>
          <div
            className="form-check"
            style={{
              background: 'url("./hostAssets/img/6676508.png") right / contain no-repeat',
              position: "relative",
              display: "flex",
              textAlign: "right",
              height: 68
            }}
          >
            <input className="form-check-input" type="radio" id="formCheck-2" checked={selectedOption === 'formCheck-2'}
          onChange={handleChange} />
            <label
              className="form-check-label"
              htmlFor="formCheck-2"
              style={{
                position: "absolute",
                display: "inline-block",
                overflow: "visible",
                textAlign: "center",
                fontSize: 25,
                fontWeight: "bold"
              }}
            >
              Entire Flat
            </label>
          </div>
          <div className="container">
            <h1>&nbsp;</h1>
            <div className="row justify-content-center">
              <button type="submit" className="btn btn-primary">
                Next
              </button>
            </div>
          </div>
          <div style={{ textAlign: "center" }} />
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

export default HostRentingProperty;
