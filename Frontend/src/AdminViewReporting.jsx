import React, { useState } from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';
import { Navbar } from './Navbar.jsx';
export const AdminViewReporting = () => {
    const [email, setEmail] = useState('');

    const deleteUser = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const removePost = (e) => {
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
        <Navbar/>
        <main className="page product-page">
          <section className="clean-block clean-product dark">
            <div className="container">
              <div className="block-heading">
                <h2 className="text-info">Reporting</h2>
                <p>Reporting made by a user.</p>
              </div>
              <div className="block-content">
                <div className="product-info">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="gallery">
                        <h1>
                          <span style={{ backgroundColor: "rgb(246, 246, 246)" }}>
                            Stylish flat in Muratpaşa
                          </span>
                        </h1>
                        <div id="product-preview" className="vanilla-zoom">
                          <div className="zoomed-image">
                            <img
                              className="rounded img-fluid"
                              src="assets/img/scenery/3222a878-4e0e-46b8-92d2-90fee6a9caa4.webp"
                            />
                          </div>
                          <div className="sidebar">
                            <img
                              className="img-fluid d-block small-preview"
                              src="assets/img/q2qnno7jyzyg1lyfekvw.webp"
                            />
                            <img
                              className="img-fluid d-block small-preview"
                              src="assets/img/1529289660763.jpg"
                            />
                            <img
                              className="img-fluid d-block small-preview"
                              src="assets/img/tech/airbnb-quebec-2.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info">
                        <div className="col-lg-7 col-xl-12">
                          <h3>Post Reporting</h3>
                          <div className="info">
                            <span className="text-muted">
                              Jan 16, 2022 by&nbsp;
                              <a href="#">John Smith johnsmith@gmail.com</a>
                            </span>
                          </div>
                          <p>
                            The pictures looked nothing like the actual house. The
                            house also had heating problems and the host ignored our
                            calls.
                          </p>
                          <button
                            className="btn btn-outline-primary btn-sm"
                            type="button"
                            style={{ marginLeft: 10 }}
                            onClick={deleteUser}
                          >
                            Delete User
                          </button>
                          <button
                            className="btn btn-outline-primary btn-sm"
                            type="button"
                            style={{ marginLeft: 30 }}
                            onClick={removePost}
                          >
                            Remove Post
                          </button>
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
                          Pictures
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active description"
                        role="tabpanel"
                        id="description"
                      >
                        <p>Pictures provided by the user are down below.</p>
                        <div className="row">
                          <div className="col">
                            <img
                              className="img-fluid"
                              src="assets/img/q2qnno7jyzyg1lyfekvw.webp"
                              width={720}
                              height={479}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <img
                              className="img-fluid"
                              src="assets/img/1529289660763.jpg"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <img
                              className="img-fluid"
                              src="assets/img/tech/airbnb-quebec-2.webp"
                              width={720}
                              height={540}
                            />
                          </div>
                        </div>
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
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star-empty.svg" />
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
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star-empty.svg" />
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
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star.svg" />
                              <img src="assets/img/star-empty.svg" />
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
export default AdminViewReporting;