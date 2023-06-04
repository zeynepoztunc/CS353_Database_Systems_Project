import {Link, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-bootstrap";
import React from "react";


const  HostRentingMainPage= () => {
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const userid = urlParams.get('userid');
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/HostRentingProperty?userid='+userid);
      };

  const gotoGeneralLogin
      = (event) => {
    event.preventDefault();
    navigate('/');
  }

  const gotoHostRentingCurrentRents
        = (event) => {
        event.preventDefault();
        navigate('/HostRentingCurrentRents?userid=' + userid);
  }
  //let userId = urlParams.get('userid');
  return (
        <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Features - WeRent</title>
  <link rel="stylesheet" href={"./hostAssets/css/bootstrap.min.css"} />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
  />
  <link rel="stylesheet" href={"./hostAssets/ome 5 Brands.css"} />
  <link rel="stylesheet" href={"./hostAssets/ome 5 Free.css"} />
  <link rel="stylesheet" href={"./hostAssets/tawesome-all.min.css"} />
  <link rel="stylesheet" href={"./hostAssets/t-awesome.min.css"} />
  <link rel="stylesheet" href={"./hostAssets/ple-line-icons.min.css"} />
  <link rel="stylesheet" href={"./hostAssets/tawesome5-overrides.min.css"} />
  <link rel="stylesheet" href={"./hostAssets/ox.min.css"} />
  <link rel="stylesheet" href={"./hostAssets/-4-Calendar-No-Custom-Code.css"} />
  <link rel="stylesheet" href={"./hostAssets/p-Upload-Form.css"} />
  <link rel="stylesheet" href={"./hostAssets/-File-Input-Upload.css"} />
  <link rel="stylesheet" href={"./hostAssets/xes.css"} />
  <link rel="stylesheet" href={"./hostAssets/oom.min.css"} />
  <link rel="stylesheet" href={"./hostAssets/css/bootstrap.min.css"} />
  <link rel="stylesheet" href={"https://cdn.reflowhq.com/v2/toolkit.min.css"} />
  <link rel="stylesheet" href={"./hostAssets/tawesome-all.min.css"} />
  <link rel="stylesheet" href={"./hostAssets/tteBox.min.css"} />
  <link rel="stylesheet" href={"./hostAssets/r-Heading-Image-images.css"} />
  <link rel="stylesheet" href={"./hostAssets/dal-ecommerce-bs4_modal.min.css"} />
  <link rel="stylesheet" href={"./hostAssets/dal-ecommerce-styles.css"} />
  <link rel="stylesheet" href={"./hostAssets/ton-1.css"} />
  <link rel="stylesheet" href={"./hostAssets/css/bootstrap.min-1.css"} />
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
                    <a className="nav-link" href="#">
                      <i className="fas fa-user" style={{ fontSize: 24 }} />
                    </a>
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
  <main className="page">
    <section className="clean-block features">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">&nbsp;You can easily rent your home now</h2>
          <p>Your place can reach to thousands of customers.&nbsp;</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 feature-box">
            <i className="icon-star icon" />
            <h4>Better than any other renting app</h4>
            <p>WeRent is a widely used by the customers.</p>
          </div>
          <div className="col-md-5 feature-box">
            <i className="icon-pencil icon" />
            <h4>Easy to take attention</h4>
            <p>
              You can specify every aspect of your property to make it look
              fancier!
            </p>
          </div>
          <div className="col-md-5 feature-box">
            <i className="icon-check icon" />
            <h4>Safety first!</h4>
            <p>Your earnings are kept safe in WeRent.</p>
          </div>
          <div className="col-md-5 feature-box">
            <i className="icon-organization icon" />
            <h4>Easy to use</h4>
            <p>User-friendly design make it easier to rent and have fun!</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary" type="button" onClick={handleSubmit} >
          Rent Your Home Now!
        </button>
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

    )
}

export  default HostRentingMainPage;