import React, { useState } from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';
import { Navbar } from './Navbar.jsx';
import { Link } from "react-router-dom";

export const AdminLandmarkDetailed = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (

<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Product - Brand</title>
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
  <main className="page product-page">
    <section className="clean-block clean-product dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Landmark Suggestion Form</h2>
          <p>Landmark Suggestion Form submitted by users.</p>
        </div>
        <div className="block-content">
          <div className="product-info">
            <div className="row">
              <div className="col-md-6">
                <div className="gallery">
                  <div id="product-preview" className="vanilla-zoom">
                    <div className="zoomed-image">
                      <img
                        width={468}
                        height={364}
                        src="adminAssets/img/scenery/turkey-alanya-top-things-to-do-explore-alanya-castle.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-6">
                <div className="info">
                  <h3>Alanya Castle, Alanya</h3>
                  <div className="price">
                    <h3>Submitted: austinkasap@gmail.com</h3>
                  </div>
                  <div className="summary">
                    <h3>Message</h3>
                    <p>
                      You should definitely add this place to the landmarks
                      page!!
                    </p>
                    <h3>Location</h3>
                    <p style={{ fontSize: "20.4px" }}>
                      Latitude:&nbsp;
                      <span style={{ color: "rgb(32, 33, 36)" }}>
                        39.8746° N
                      </span>
                    </p>
                    <p style={{ fontSize: "20.4px" }}>
                      Longitude:&nbsp;
                      <span style={{ color: "rgb(32, 33, 36)" }}>
                        32.7476° E
                      </span>
                    </p>
                    <div>
                      <button
                        className="btn btn-primary"
                        type="button"
                        style={{ marginLeft: 10, background: "green" }}
                      >
                        Add
                      </button>
                      <button
                        className="btn btn-primary"
                        type="button"
                        style={{ marginLeft: 20, background: "red" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-info">
            <div>
              <ul className="nav nav-tabs" role="tablist" id="myTab">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    role="tab"
                    data-bs-toggle="tab"
                    id="description-tab"
                    href="#description"
                  >
                    Location
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active description"
                  role="tabpanel"
                  id="description"
                >
                  <img
                    className="img-fluid"
                    src="adminAssets/img/scenery/Screenshot%202023-03-26%20at%2018.00.59.png"
                    width={634}
                    height={462}
                  />
                  <p />
                </div>
                <div
                  className="tab-pane fade specifications"
                  role="tabpanel"
                  id="specifications"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td className="stat">Display</td>
                          <td>5.2"</td>
                        </tr>
                        <tr>
                          <td className="stat">Camera</td>
                          <td>12MP</td>
                        </tr>
                        <tr>
                          <td className="stat">RAM</td>
                          <td>4GB</td>
                        </tr>
                        <tr>
                          <td className="stat">OS</td>
                          <td>iOS</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" role="tabpanel" id="reviews">
                  <div className="reviews">
                    <div className="review-item">
                      <div className="rating">
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star-empty.svg" />
                      </div>
                      <h4>Incredible product</h4>
                      <span className="text-muted">
                        <a href="#">John Smith</a>, 20 Jan 2018
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec augue nunc, pretium at augue at, convallis
                        pellentesque ipsum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="reviews">
                    <div className="review-item">
                      <div className="rating">
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star-empty.svg" />
                      </div>
                      <h4>Incredible product</h4>
                      <span className="text-muted">
                        <a href="#">John Smith</a>, 20 Jan 2018
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec augue nunc, pretium at augue at, convallis
                        pellentesque ipsum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="reviews">
                    <div className="review-item">
                      <div className="rating">
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star.svg" />
                        <img src="adminAssets/img/star-empty.svg" />
                      </div>
                      <h4>Incredible product</h4>
                      <span className="text-muted">
                        <a href="#">John Smith</a>, 20 Jan 2018
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec augue nunc, pretium at augue at, convallis
                        pellentesque ipsum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
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


export default AdminLandmarkDetailed;