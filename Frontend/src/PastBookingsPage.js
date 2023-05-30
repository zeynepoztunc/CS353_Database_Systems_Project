import {  useNavigate } from 'react-router-dom';
import NavBar from './NavBar.js';
function PastBookingsPage() {
  const navigate = useNavigate();

  const goBackToProfile = (event) => {
    event.preventDefault();
    navigate('/ProfilePage');
  };

    return (
        <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Blog - Brand</title>
  <link rel="stylesheet" href="./customerAssets/bootstrap/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
  />
  <link rel="stylesheet" href="./customerAssets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="./customerAssets/css/baguetteBox.min.css" />
  <link rel="stylesheet" href="./customerAssets/css/Banner-Heading-Image-images.css" />
  <link rel="stylesheet" href="./customerAssets/css/vanilla-zoom.min.css" />
  <NavBar></NavBar>
  <main className="page blog-post-list">
    <section className="clean-block clean-blog-list dark">
      <div
        className="container"
        style={{ marginBottom: "-40px", paddingBottom: 0 }}
      >
        <div
          className="block-heading"
          style={{ paddingBottom: 0, marginTop: "-23px", paddingTop: 22 }}
        >
          <h2
            className="text-start text-danger bs-custom"
            style={{ paddingTop: 13, marginBottom: "-32px" }}
          >
            Previous Bookings
          </h2>
        </div>
        <div
          className="block-content"
          style={{
            paddingLeft: 1,
            marginTop: 3,
            marginBottom: "-1px",
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 1
          }}
        >
          <div
            className="clean-blog-post"
            style={{ marginTop: 1, marginBottom: "-10px", paddingBottom: 9 }}
          >
            <div />
          </div>
          <div
            className="clean-blog-post"
            style={{ paddingLeft: 0, paddingBottom: 68, marginBottom: "-62px" }}
          >
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-danger">Start Date</th>
                    <th className="text-danger">End Date</th>
                    <th className="text-danger">City</th>
                    <th className="text-danger">Rental Name</th>
                    <th className="text-danger">Host</th>
                    <th className="text-danger">Guest Number</th>
                    <th className="text-danger">Add Landmark</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>24.03.2023</td>
                    <td>28.03.2023</td>
                    <td>Antalya</td>
                    <td>Kaş Luxury Villa</td>
                    <td>Timur</td>
                    <td className="text-center">3</td>
                    <td>
                      <button
                        className="btn btn-danger text-center btn-custom-class"
                        type="button"
                        style={{ marginLeft: 36 }}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>20.08.2022</td>
                    <td>28.08.2022</td>
                    <td>Dublin</td>
                    <td>Villa Serenity</td>
                    <td>Connor</td>
                    <td className="text-center">5</td>
                    <td>
                      <button
                        className="btn btn-danger text-center btn-custom-class"
                        type="button"
                        style={{ marginLeft: 36 }}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>26.04.2022</td>
                    <td>30.04.2022</td>
                    <td>İzmir</td>
                    <td>&nbsp;1+1 Flat Alsancak</td>
                    <td>Melih</td>
                    <td className="text-center">2</td>
                    <td>
                      <button
                        className="btn btn-danger text-center btn-custom-class"
                        type="button"
                        style={{ marginLeft: 36 }}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>06.08.2020</td>
                    <td>15.08.2020</td>
                    <td>Muğla</td>
                    <td>&nbsp;Voila Suites</td>
                    <td>Jenna</td>
                    <td className="text-center">2</td>
                    <td>
                      <button
                        className="btn btn-danger text-center btn-custom-class"
                        type="button"
                        style={{ marginLeft: 36 }}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button
            className="btn btn-primary btn btn-custom-class"
            type="button"
            onClick={goBackToProfile}
            style={{
              paddingLeft: 25,
              paddingRight: 32,
              paddingTop: 0,
              marginRight: "-8px",
              marginBottom: "-7px",
              marginTop: "-25px"
            }}
          >
            Back
          </button>
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
  
  export default PastBookingsPage;
  