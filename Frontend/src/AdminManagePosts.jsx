import React, { useState, useEffect } from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';
import { Navbar } from './Navbar.jsx';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

export const AdminManagePosts = () => {
    const [mostRented, setMostRented] = useState(false);
    const [leastRented, setLeastRented] = useState(false);
    const [latestAdded, setLatestAdded] = useState(false);
    const [oldestAdded, setOldestAdded] = useState(false);
    const [highestRating, setHighestRating] = useState(false);
    const [lowestRating, setLowestRating] = useState(false);
    const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
    
    function handleSearch(){
      if ( document.getElementById("formCheck-1").checked ){
        console.log("is checked 1");
        setMostRented(true);
      }
      if ( document.getElementById("formCheck-2").checked ){
        console.log("is checked 2");
        setLeastRented(true);
      }
      if (document.getElementById("formCheck-3").checked ){
        console.log("is checked 3");
        setLatestAdded(true);
      }
      if (document.getElementById("formCheck-4").checked ){
        console.log("is checked 4");
        setOldestAdded(true);
      }
      if (document.getElementById("formCheck-5").checked ){
        console.log("is checked 5"); 
        setHighestRating(true);
      }
      if (document.getElementById("formCheck-6").checked ){
        console.log("is checked 6");
        setLowestRating(true);
      }
      
      const searchInput = document.getElementById("searchInput").value;
      setSearch(searchInput);
      console.log(search);
    }

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/listAllPosts');
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error('Failed:', error);
      setPosts([]);
    }
  };

  useEffect(() => {
    fetchPosts().then(r => console.log('fetched data'));
  }, []);

    
    return (
        <>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>Gallery - Brand</title>
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
        <main className="page gallery-page">
          <section className="clean-block clean-gallery dark">
            <div className="container">
              <div className="block-heading">
                <h2 className="text-info">Posts</h2>
                <p>Rentals postings made by hosts.</p>
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
              <label className="form-check-label" htmlFor="formCheck-1">
                Most rented
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-2"
              />
              <label className="form-check-label" htmlFor="formCheck-2">
                Least rented
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-3"
              />
              <label className="form-check-label" htmlFor="formCheck-3">
                Latest Added
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-4"
              />
              <label className="form-check-label" htmlFor="formCheck-4">
                Oldest Added
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-5"
              />
              <label className="form-check-label" htmlFor="formCheck-5">
                Highest Rating
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-6"
              />
              <label className="form-check-label" htmlFor="formCheck-6">
                Lowest Rating
              </label>
            </div>
          </div>
        </div>
        <div>
          <input type="search" id="searchInput" style={{ marginLeft: 100 }} />
          <button
            className="btn btn-primary"
            type="button" onClick={handleSearch}
            style={{ marginLeft: 10 }}
          >
            Search
          </button>
        </div>
              <div className="row">

              {posts.map((item, index) => (
                <div key={index} className="col-md-6 col-lg-4 item">
                  <a className="lightbox" href="assets/img/scenery/image1.jpg">
                    <img
                      className="img-thumbnail img-fluid image"
                      src="adminAssets/img/scenery/e6034faf-5c55-42a0-b5e8-ed0b8e330b33.jpeg"
                      width={356}
                      height={270}
                    />
                  </a>
                  <h4>{item['rental-name']}</h4>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        paddingLeft: 10,
                        margin: "auto",
                        /*borderLeft: 10, */ textAlign: "center"
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
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


export default AdminManagePosts;