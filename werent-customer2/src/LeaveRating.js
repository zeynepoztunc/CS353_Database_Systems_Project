import React from 'react';

function LeaveRating() {
  return (
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Contact Us - Brand</title>
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
  />
  <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="assets/css/baguetteBox.min.css" />
  <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
  <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
    <div className="container">
      <a className="navbar-brand logo" href="#">
        WeRent
      </a>
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
          <li className="nav-item" />
          <li className="nav-item">
            <a className="nav-link" href="features.html">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pricing.html">
              MAP
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about-us.html">
              <i
                className="fas fa-shopping-basket text-dark"
                style={{ fontSize: 22 }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="PROJECT-leave-rating.html">
              <i
                className="fas fa-user-alt text-dark"
                style={{ fontSize: 22 }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="features.html">
              LOGout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main className="page contact-us-page">
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Rate Your Experience</h2>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Cleanliness
              <img
                src="assets/img/star.svg"
                style={{
                  paddingRight: 0,
                  marginRight: 4,
                  paddingLeft: 23,
                  marginLeft: 62
                }}
                width={57}
                height={44}
              />
              <img
                src="assets/img/star.svg"
                style={{
                  marginRight: 4,
                  paddingLeft: 23,
                  paddingRight: 0,
                  marginLeft: "-22px"
                }}
                width={58}
                height={48}
              />
              <img
                src="assets/img/star.svg"
                style={{
                  marginRight: 4,
                  paddingLeft: 23,
                  paddingRight: 0,
                  marginLeft: "-22px"
                }}
                width={58}
                height={48}
              />
              <img
                src="assets/img/star-half-empty.svg"
                width={35}
                height={46}
              />
              <img
                src="assets/img/star-empty.svg"
                width={39}
                height={49}
                style={{ marginRight: 10, paddingRight: 0, paddingLeft: 3 }}
              />
            </label>
            <label className="form-label" htmlFor="name">
              Communication
              <img
                src="assets/img/star.svg"
                style={{
                  paddingRight: 0,
                  marginRight: 4,
                  paddingLeft: 23,
                  marginLeft: 22
                }}
                width={57}
                height={44}
              />
              <img
                src="assets/img/star.svg"
                style={{
                  marginRight: 4,
                  paddingLeft: 23,
                  paddingRight: 0,
                  marginLeft: "-22px"
                }}
                width={58}
                height={48}
              />
              <img
                src="assets/img/star.svg"
                style={{
                  marginRight: 4,
                  paddingLeft: 23,
                  paddingRight: 0,
                  marginLeft: "-22px"
                }}
                width={58}
                height={48}
              />
              <img
                src="assets/img/star-half-empty.svg"
                width={35}
                height={46}
              />
              <img
                src="assets/img/star-empty.svg"
                width={38}
                height={47}
                style={{ marginRight: 10, paddingRight: 0, paddingLeft: 3 }}
              />
            </label>
            <label className="form-label" htmlFor="name">
              Check-in
              <img
                src="assets/img/star.svg"
                style={{
                  paddingRight: 0,
                  marginRight: 4,
                  paddingLeft: 23,
                  marginLeft: 82
                }}
                width={57}
                height={44}
              />
              <img
                src="assets/img/star.svg"
                style={{
                  marginRight: 4,
                  paddingLeft: 23,
                  paddingRight: 0,
                  marginLeft: "-22px"
                }}
                width={58}
                height={48}
              />
              <img
                src="assets/img/star.svg"
                style={{
                  marginRight: 4,
                  paddingLeft: 23,
                  paddingRight: 0,
                  marginLeft: "-22px"
                }}
                width={58}
                height={48}
              />
              <img
                src="assets/img/star-empty.svg"
                width={39}
                height={51}
                style={{
                  marginRight: 10,
                  paddingRight: 0,
                  paddingLeft: 3,
                  marginLeft: "-4px"
                }}
              />
              <img
                src="assets/img/star-empty.svg"
                width={38}
                height={47}
                style={{
                  paddingLeft: 3,
                  marginRight: 16,
                  paddingRight: 0,
                  marginLeft: "-9px"
                }}
              />
            </label>
            <label className="form-label" htmlFor="name">
              Accuracy
              <img
                src="assets/img/star.svg"
                style={{
                  paddingRight: 0,
                  marginRight: 4,
                  paddingLeft: 23,
                  marginLeft: 81
                }}
                width={57}
                height={44}
              />
              <img
                src="assets/img/star.svg"
                style={{
                  marginRight: 4,
                  paddingLeft: 23,
                  paddingRight: 0,
                  marginLeft: "-22px"
                }}
                width={58}
                height={48}
              />
              <img
                src="assets/img/star.svg"
                style={{
                  marginRight: 4,
                  paddingLeft: 23,
                  paddingRight: 0,
                  marginLeft: "-22px"
                }}
                width={58}
                height={48}
              />
              <img
                src="assets/img/star.svg"
                style={{
                  marginRight: 4,
                  paddingLeft: 23,
                  paddingRight: 0,
                  marginLeft: "-22px"
                }}
                width={58}
                height={48}
              />
              <img
                src="assets/img/star-half-empty.svg"
                width={35}
                height={46}
              />
            </label>
            <label className="form-label" htmlFor="name">
              Location
              <img
                src="assets/img/star.svg"
                style={{
                  paddingRight: 0,
                  marginRight: 4,
                  paddingLeft: 23,
                  marginLeft: 89
                }}
                width={57}
                height={44}
              />
              <img
                src="assets/img/star.svg"
                style={{
                  marginRight: 4,
                  paddingLeft: 23,
                  paddingRight: 0,
                  marginLeft: "-22px"
                }}
                width={58}
                height={48}
              />
              <img
                src="assets/img/star-empty.svg"
                width={38}
                height={47}
                style={{ marginRight: 10, paddingRight: 0, paddingLeft: 3 }}
              />
              <img
                src="assets/img/star-empty.svg"
                width={38}
                height={47}
                style={{
                  marginRight: 10,
                  paddingRight: 0,
                  paddingLeft: 3,
                  marginLeft: "-10px"
                }}
              />
              <img
                src="assets/img/star-empty.svg"
                width={38}
                height={47}
                style={{
                  marginRight: 10,
                  paddingRight: 0,
                  paddingLeft: 3,
                  marginLeft: "-10px"
                }}
              />
            </label>
            <label className="form-label" htmlFor="name">
              Value
              <img
                src="assets/img/star.svg"
                style={{
                  paddingRight: 0,
                  marginRight: 4,
                  paddingLeft: 23,
                  marginLeft: 112
                }}
                width={57}
                height={44}
              />
              <img
                src="assets/img/star.svg"
                style={{
                  marginRight: 4,
                  paddingLeft: 23,
                  paddingRight: 0,
                  marginLeft: "-22px"
                }}
                width={58}
                height={48}
              />
              <img
                src="assets/img/star-half-empty.svg"
                width={35}
                height={46}
              />
              <img
                src="assets/img/star-empty.svg"
                width={38}
                height={47}
                style={{ marginRight: 10, paddingRight: 0, paddingLeft: 3 }}
              />
              <img
                src="assets/img/star-empty.svg"
                width={38}
                height={47}
                style={{
                  marginRight: 10,
                  paddingRight: 0,
                  paddingLeft: 3,
                  marginLeft: "-9px"
                }}
              />
            </label>
            <div className="rating" />
          </div>
          <div className="mb-3" />
          <div className="mb-3" />
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Comments
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              defaultValue={""}
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-1"
              />
              <label className="form-check-label" htmlFor="formCheck-1">
                Remain Anonymous
              </label>
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginTop: 10 }}
            >
              Send
            </button>
          </div>
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
      <p>© 2023 Copyright Text</p>
    </div>
  </footer>
</>
  
  );
}

export default LeaveRating;