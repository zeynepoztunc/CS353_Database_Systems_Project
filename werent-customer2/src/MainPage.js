import React from 'react';
import {  useNavigate } from 'react-router-dom';


const  MainPage = () => {
    const navigate = useNavigate();
    
    const goToMainPage = ( event) => {
      event.preventDefault();
      navigate( '/MainPage');
    };

    const goToShoppingCartPage = ( event) => {
      event.preventDefault();
      navigate( '/ShoppingCart');
    };

    const goToMapPage = ( event) => {
      event.preventDefault();
      navigate( '/MapPage');
    };

    return (
    <>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <title>Catalog - Brand</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
    />
    <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
    <link rel="stylesheet" href="assets/fonts/simple-line-icons.min.css" />
    <link rel="stylesheet" href="assets/css/baguetteBox.min.css" />
    <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div className="container">
        <a onClick = {goToMainPage} className="navbar-brand logo">
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
              <a onClick = {goToMainPage} className="nav-link">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a onClick = {goToMapPage} className="nav-link">
                MAP
              </a>
            </li>
            <li className="nav-item">
              <a onClick={goToShoppingCartPage} className="nav-link">
                <i
                  className="fas fa-shopping-basket text-dark"
                  style={{ fontSize: 22 }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i
                  className="fas fa-user-alt text-dark"
                  style={{ fontSize: 22 }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                LOGout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main className="page catalog-page">
      <section className="clean-block clean-catalog dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Main Page</h2>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-md-3">
                <div className="d-none d-md-block">
                  <div className="filters">
                    <div className="filter-item">
                      <h3>Categories</h3>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                        />
                        <label className="form-check-label" htmlFor="formCheck-1">
                          Room
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-2"
                        />
                        <label className="form-check-label" htmlFor="formCheck-2">
                          Flat
                        </label>
                      </div>
                    </div>
                    <div className="filter-item">
                      <h3>Location</h3>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-5"
                        />
                        <label className="form-check-label" htmlFor="formCheck-5">
                          Countryside
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-6"
                        />
                        <label className="form-check-label" htmlFor="formCheck-6">
                          Sea
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-7"
                        />
                        <label className="form-check-label" htmlFor="formCheck-7">
                          Historical
                        </label>
                      </div>
                    </div>
                    <div className="filter-item">
                      <h3>Volunteer Services</h3>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-8"
                        />
                        <label className="form-check-label" htmlFor="formCheck-8">
                          Earthquake
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-9"
                        />
                        <label className="form-check-label" htmlFor="formCheck-9">
                          Couchsurfing
                        </label>
                      </div>
                    </div>
                    <div className="filter-item">
                      <h3>City</h3>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-3"
                        />
                        <label className="form-check-label" htmlFor="formCheck-3">
                          Adana
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-4"
                        />
                        <label className="form-check-label" htmlFor="formCheck-4">
                          Adıyaman
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-10"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck-10"
                        >
                          Afyonkarahisar
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-15"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck-15"
                        >
                          Ağrı
                        </label>
                      </div>
                      <a href="#">view more</a>
                    </div>
                  </div>
                </div>
                <div className="d-md-none">
                  <a
                    className="btn btn-link d-md-none filter-collapse"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="filters"
                    href="#filters"
                    role="button"
                  >
                    Filters
                    <i className="icon-arrow-down filter-caret" />
                  </a>
                  <div className="collapse" id="filters">
                    <div className="filters">
                      <div className="filter-item">
                        <h3>Categories</h3>
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
                            Room
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
                            Flat
                          </label>
                        </div>
                      </div>
                      <div className="filter-item">
                        <h3>Location</h3>
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
                            Countryside
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
                            Sea
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
                            Historical
                          </label>
                        </div>
                      </div>
                      <div className="filter-item">
                        <h3>Volunteer Services</h3>
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
                            Earthquake
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
                            Couchsurfing
                          </label>
                        </div>
                      </div>
                      <div className="filter-item">
                        <h3>City</h3>
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
                            Adana
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
                            Adıyaman
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-10"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-10"
                          >
                            Afyonkarahisar
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-15"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-15"
                          >
                            Ağrı
                          </label>
                        </div>
                        <a href="#">view more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="products">
                  <div className="row">
                    <div className="col">
                      <form className="search-form">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fa fa-search" />
                          </span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="I am looking for.."
                          />
                          <button className="btn btn-light" type="button">
                            Search{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="clean-product-item">
                        <div className="image">
                          <a href="#">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/img/tech/Ekran%20Görüntüsü%20(1189).png"
                              width={181}
                              height={180}
                            />
                          </a>
                        </div>
                        <div className="product-name">
                          <a href="#">
                            <br />
                            <strong>
                              <span style={{ color: "rgb(34, 34, 34)" }}>
                                Thatched cottage surrounded by nature
                              </span>
                            </strong>
                            <br />
                            <br />
                          </a>
                        </div>
                        <div
                          className="about"
                          style={{ paddingTop: 0, marginTop: 28 }}
                        >
                          <div className="rating">
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star-half-empty.svg" />
                            <img src="assets/img/star-empty.svg" />
                          </div>
                          <div className="price">
                            <h3>$95</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="clean-product-item">
                        <div className="image">
                          <a href="#">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/img/tech/Ekran%20Görüntüsü%20(1195).png"
                            />
                          </a>
                        </div>
                        <div className="product-name">
                          <a href="#">
                            <br />
                            <strong>
                              <span style={{ color: "rgb(34, 34, 34)" }}>
                                Unique &amp; Fascinating Villa With Magnificent
                                Garden
                              </span>
                            </strong>
                            <br />
                            <br />
                          </a>
                        </div>
                        <div
                          className="about"
                          style={{
                            paddingBottom: 0,
                            marginBottom: "-22px",
                            marginTop: "-18px"
                          }}
                        >
                          <div className="rating">
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star-half-empty.svg" />
                            <img src="assets/img/star-empty.svg" />
                          </div>
                          <div className="price">
                            <h3>$1097</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="clean-product-item">
                        <div className="image">
                          <a href="#">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/img/tech/Ekran%20Görüntüsü%20(1193).png"
                            />
                          </a>
                        </div>
                        <div className="product-name">
                          <a href="#">
                            <br />
                            <strong>
                              <span style={{ color: "rgb(34, 34, 34)" }}>
                                Sapanca Loft Bungalowv
                              </span>
                            </strong>
                          </a>
                        </div>
                        <div className="about" style={{ marginTop: 54 }}>
                          <div className="rating">
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star-half-empty.svg" />
                            <img src="assets/img/star-empty.svg" />
                          </div>
                          <div className="price">
                            <h3>$130</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="clean-product-item">
                        <div className="image">
                          <a href="#">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/img/tech/Ekran%20Görüntüsü%20(1196).png"
                            />
                          </a>
                        </div>
                        <div className="product-name">
                          <a href="#">
                            <br />
                            <strong>
                              <span style={{ color: "rgb(34, 34, 34)" }}>
                                La Stalla - Casa San Gabriel
                              </span>
                            </strong>
                            <br />
                            <br />
                          </a>
                        </div>
                        <div className="about" style={{ marginTop: "-24px" }}>
                          <div className="rating">
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star-half-empty.svg" />
                            <img src="assets/img/star-empty.svg" />
                          </div>
                          <div className="price">
                            <h3>$178</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="clean-product-item">
                        <div className="image">
                          <a href="#">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/img/tech/Ekran%20Görüntüsü%20(1192).png"
                            />
                          </a>
                        </div>
                        <div className="product-name">
                          <a href="#">
                            <br />
                            <strong>
                              <span style={{ color: "rgb(34, 34, 34)" }}>
                                Cabane Spa Divine
                              </span>
                            </strong>
                            <br />
                            <br />
                          </a>
                        </div>
                        <div className="about">
                          <div className="rating">
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star-half-empty.svg" />
                            <img src="assets/img/star-empty.svg" />
                          </div>
                          <div className="price">
                            <h3>$437</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="clean-product-item">
                        <div className="image">
                          <a href="#">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/img/tech/Ekran%20Görüntüsü%20(1194).png"
                            />
                          </a>
                        </div>
                        <div className="product-name">
                          <a href="#">
                            <br />
                            <strong>
                              <span style={{ color: "rgb(34, 34, 34)" }}>
                                Boutique house
                              </span>
                            </strong>
                            <br />
                            <br />
                          </a>
                        </div>
                        <div className="about">
                          <div className="rating">
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star-half-empty.svg" />
                            <img src="assets/img/star-empty.svg" />
                          </div>
                          <div className="price">
                            <h3>$342</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="clean-product-item">
                        <div className="image">
                          <a href="#">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/img/tech/Ekran%20Görüntüsü%20(1188).png"
                            />
                          </a>
                        </div>
                        <div className="product-name">
                          <a href="#">
                            <strong>
                              <span style={{ color: "rgb(34, 34, 34)" }}>
                                Luxury Villa With a Jakuzzi
                              </span>
                            </strong>
                          </a>
                        </div>
                        <div className="about" style={{ marginTop: 46 }}>
                          <div className="rating">
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star-half-empty.svg" />
                            <img src="assets/img/star-empty.svg" />
                          </div>
                          <div className="price">
                            <h3>$100</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="clean-product-item">
                        <div className="image">
                          <a href="#">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/img/tech/Ekran%20Görüntüsü%20(1191).png"
                            />
                          </a>
                        </div>
                        <div className="product-name">
                          <a href="#">
                            <br />
                            <strong>
                              <span style={{ color: "rgb(34, 34, 34)" }}>
                                Evaton Marion
                              </span>
                            </strong>
                            <br />
                            <br />
                          </a>
                        </div>
                        <div className="about">
                          <div className="rating">
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star-half-empty.svg" />
                            <img src="assets/img/star-empty.svg" />
                          </div>
                          <div className="price">
                            <h3>$80</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="clean-product-item">
                        <div className="image">
                          <a href="#">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/img/tech/Ekran%20Görüntüsü%20(1197).png"
                            />
                          </a>
                          <a href="#" />
                        </div>
                        <div className="product-name">
                          <a href="#">
                            <br />
                            <strong>
                              <span style={{ color: "rgb(34, 34, 34)" }}>
                                Chalet Lago dei Caprioli
                              </span>
                            </strong>
                            <br />
                            <br />
                          </a>
                        </div>
                        <div className="about">
                          <div className="rating">
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star.svg" />
                            <img src="assets/img/star-half-empty.svg" />
                            <img src="assets/img/star-empty.svg" />
                          </div>
                          <div className="price">
                            <h3>$207</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav>
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link">1</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">2</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
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
        <p>© 2023 Copyright Text</p>
      </div>
    </footer>
  </>
  
  );
}

export  default MainPage;