import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar.js';
import React, {useEffect, useState} from 'react';
import axios from "axios";

const MainPage = () => {

  const [placeValues, setPlaceValues] = useState([]);

  useEffect(() => {
    fetchData().then(r => console.log('fetched data'));
  }, []);

  const urlParams = new URLSearchParams(window.location.search);
  const userIdString = urlParams.get('userid');
  const userId = parseInt(userIdString, 10);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/Customers/main/listRentalsForCustomer?userId=${userId}`);
      console.log(response.data);
      setPlaceValues(response.data);
    } catch (error) {
      console.error('Failed to fetch rentals:', error);
      setPlaceValues([]);
    }
  };

  const [cities, setCities] = useState([]);

   const fetchCities = async () => {
      try {
        const response = await axios.get('http://localhost:8080/locations/cities');
        return response.data;
      } catch (error) {
        console.error('Failed to fetch cities:', error);
        return [];
      }
    };

    useEffect(() => {
      fetchCities().then((data) =>
      {
        setCities(data);
      });
    }, []);

function toggleHeart(rentalId) {
  setPlaceValues((prevPlaceValues) => {
    const updatedPlaceValues = prevPlaceValues.map((item) => {
      if (item['rental-id'] === rentalId) {
        return {
          ...item,
          isFavorited: !item.isFavorited,
        };
      }
      return item;
    });
    return updatedPlaceValues;
  });
}

  const HeartIcon = ({ id, isFavorited, onToggleHeart }) => {
    return (
      <i
        className={isFavorited ? "fas fa-heart" : "far fa-heart"}
        style={{ fontSize: 22, marginBottom: 10, cursor: "pointer" }}
        onClick={() => onToggleHeart(id)}
      ></i>
    );
  };


  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const applyFilters = () => {
    let filteredRentals = placeValues;

    if (selectedFilters.length > 0) {
      filteredRentals = filteredRentals.filter((item) => {
        const rentalName = item.rentalName.toLowerCase();
        return selectedFilters.some((filter) => rentalName.includes(filter));
      });
    }

    if (showFavoritesOnly) {
      filteredRentals = filteredRentals.filter((item) => item.isFavorited);
    }

    return filteredRentals;
  };

  const handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filterValue)) {
        return prevFilters.filter((filter) => filter !== filterValue);
      } else {
        return [...prevFilters, filterValue];
      }
    });
  };

  const toggleFavoritesOnly = () => {
    setShowFavoritesOnly((prevShowFavoritesOnly) => !prevShowFavoritesOnly);
  };

  function renderStars(rating) {
    const starCount = 5;
    const fullStarCount = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStarCount; i++) {
      stars.push(<img key={i} src="./customerAssets/img/star.svg" />);
    }

    if (hasHalfStar) {
      stars.push(<img key={fullStarCount} src="./customerAssets/img/star-half-empty.svg" />);
    }

    const emptyStarCount = starCount - fullStarCount - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStarCount; i++) {
      stars.push(<img key={fullStarCount + i + (hasHalfStar ? 1 : 0)} src="./customerAssets/img/star-empty.svg" />);
    }

    return stars;
  }


  const navigate = useNavigate();

  const goToRentalPage = (id) => {
    //event.preventDefault();
    navigate('/RentalPage?rentalId='  + id + '&userid=' + userId);
  }

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <link rel="stylesheet" href="./customerAssets/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
      />
      <link rel="stylesheet" href="./customerAssets/fonts/fontawesome-all.min.css" />
      <link rel="stylesheet" href="./customerAssets/fonts/simple-line-icons.min.css" />
      <link rel="stylesheet" href="./customerAssets/css/baguetteBox.min.css" />
      <link rel="stylesheet" href="./customerAssets/css/vanilla-zoom.min.css" />

      <NavBar></NavBar>

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
                        <h3>Location</h3>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-5"
                            value="countryside"
                            onChange={handleFilterChange}
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
                            value="sea"
                            onChange={handleFilterChange}
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
                            value="historical"
                            onChange={handleFilterChange}
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
                            id="formCheck-5"
                            value="countryside"
                            onChange={handleFilterChange}
                          />
                          <label className="form-check-label" htmlFor="formCheck-5">
                            Earthquake
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-5"
                            value="countryside"
                            onChange={handleFilterChange}
                          />
                          <label className="form-check-label" htmlFor="formCheck-5">
                            Couchsurfing
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-5"
                            value="countryside"
                            onChange={handleFilterChange}
                          />
                          <label className="form-check-label" htmlFor="formCheck-5">
                            Pet-Allowed
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <h3>City</h3>
                        <div className="form-check">
                          {cities.map((city, index) => (
                              <div>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="formCheck-5"
                                  value="countryside"
                                  onChange={handleFilterChange}
                                />
                                <label className="form-check-label" htmlFor="formCheck-5">
                                  {item['cityName']}
                                </label>
                              </div>
                          ))}
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-5"
                            value="countryside"
                            onChange={handleFilterChange}
                          />
                          <label className="form-check-label" htmlFor="formCheck-5">
                            İstanbul
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck-5"
                            value="countryside"
                            onChange={handleFilterChange}
                          />
                          <label className="form-check-label" htmlFor="formCheck-5">
                            İzmir
                          </label>
                        </div>
                      </div>

                      <div>
                        <button onClick={toggleFavoritesOnly}>
                          {showFavoritesOnly ? "Show all" : "Show Favorited"}
                        </button>
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
                      {applyFilters().map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                          <div className="clean-product-item" style={{ display: "flex", flexDirection: "column" }}>
                            <i
                              className={item.isFavorited ? "fas fa-heart" : "far fa-heart"}
                              style={{ fontSize: 22, marginBottom: 10, cursor: "pointer" }}
                              onClick={() => toggleHeart(item['rental-id'])}
                            ></i>
                            <div className="image">
                              <a href="#">
                                <img
                                  className="img-fluid d-block mx-auto"
                                  src={item.img}
                                  width={181}
                                  height={180}
                                />
                              </a>
                            </div>
                            <div className="product-name">
                              <a href="">
                                <br />
                                <strong onClick={() => goToRentalPage(item['rental-id'])}>
                                  <span style={{ color: "rgb(34, 34, 34)" }}>{item['rental-name']}</span>
                                </strong>
                                <br />
                                <br />
                              </a>
                            </div>
                            <div className="about" style={{ paddingTop: 0, marginTop: "auto" }}>
                              <div className="rating">
                                {renderStars(item.rating)}
                              </div>
                              <div className="price" style={{ alignSelf: "flex-end" }}>
                                <h3>{item['daily-price']}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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
          <p>© 2023 Copyright Text</p>
        </div>
      </footer>
    </>

  );
}

export default MainPage;