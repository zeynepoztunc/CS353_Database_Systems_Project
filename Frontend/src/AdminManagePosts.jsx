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
  const [itemExist, setItemExist] = useState(false);
  //const [isCheckedMost, setIsCheckedMost] = useState(false);
  //const [isCheckedLeast, setIsCheckedLeast] = useState(false);
  const [isCheckedLatest, setIsCheckedLatest] = useState(false);
  const [isCheckedOldest, setIsCheckedOldest] = useState(false);
  const [isCheckedHighest, setIsCheckedHighest] = useState(false);
  const [isCheckedLowest, setIsCheckedLowest] = useState(false);

  /*const handleChangeLeast = () => {
    setIsCheckedLeast(!isCheckedLeast);
    if (isCheckedOldest) {
      setIsCheckedOldest(!isCheckedOldest);
    }
    if (isCheckedLatest) {
      setIsCheckedLatest(!isCheckedLatest);
    }
    if (isCheckedMost) {
      setIsCheckedMost(!isCheckedMost);
    }
    if (isCheckedHighest) {
      setIsCheckedHighest(!isCheckedHighest);
    }
    if (isCheckedLowest) {
      setIsCheckedLowest(!isCheckedLowest);
    }
  }

  const handleChangeMost = () => {
    setIsCheckedMost(!isCheckedMost);
    if (isCheckedOldest) {
      setIsCheckedOldest(!isCheckedOldest);
    }
    if (isCheckedLatest) {
      setIsCheckedLatest(!isCheckedLatest);
    }
    if (isCheckedLeast) {
      setIsCheckedLeast(!isCheckedLeast);
    }
    if (isCheckedHighest) {
      setIsCheckedHighest(!isCheckedHighest);
    }
    if (isCheckedLowest) {
      setIsCheckedLowest(!isCheckedLowest);
    }
  }
  */

  const handleChangeLatest = () => {
    setIsCheckedLatest(!isCheckedLatest);
    if (isCheckedOldest) {
      setIsCheckedOldest(!isCheckedOldest);
    }
    /*if (isCheckedMost) {
      setIsCheckedMost(!isCheckedMost);
    }
    if (isCheckedLeast) {
      setIsCheckedLeast(!isCheckedLeast);
    }*/
    if (isCheckedHighest) {
      setIsCheckedHighest(!isCheckedHighest);
    }
    if (isCheckedLowest) {
      setIsCheckedLowest(!isCheckedLowest);
    }
  }

  const handleChangeOldest = () => {
    setIsCheckedOldest(!isCheckedOldest);
    if (isCheckedLatest) {
      setIsCheckedLatest(!isCheckedLatest);
    }
    /*if (isCheckedMost) {
      setIsCheckedMost(!isCheckedMost);
    }
    if (isCheckedLeast) {
      setIsCheckedLeast(!isCheckedLeast);
    }*/
    if (isCheckedHighest) {
      setIsCheckedHighest(!isCheckedHighest);
    }
    if (isCheckedLowest) {
      setIsCheckedLowest(!isCheckedLowest);
    }
  }

  const handleChangeHighest = () => {
    setIsCheckedHighest(!isCheckedHighest);
    if (isCheckedLatest) {
      setIsCheckedLatest(!isCheckedLatest);
    }
    /*if (isCheckedMost) {
      setIsCheckedMost(!isCheckedMost);
    }
    if (isCheckedLeast) {
      setIsCheckedLeast(!isCheckedLeast);
    }*/
    if (isCheckedOldest) {
      setIsCheckedOldest(!isCheckedOldest);
    }
    if (isCheckedLowest) {
      setIsCheckedLowest(!isCheckedLowest);
    }
  }

  const handleChangeLowest = () => {
    setIsCheckedLowest(!isCheckedLowest);
    if (isCheckedLatest) {
      setIsCheckedLatest(!isCheckedLatest);
    }
    /*if (isCheckedMost) {
      setIsCheckedMost(!isCheckedMost);
    }
    if (isCheckedLeast) {
      setIsCheckedLeast(!isCheckedLeast);
    }*/
    if (isCheckedHighest) {
      setIsCheckedHighest(!isCheckedHighest);
    }
    if (isCheckedOldest) {
      setIsCheckedOldest(!isCheckedOldest);
    }
  }

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearch(event.target.value);
  }
    
    const handleSearch = async (e) => {
      e.preventDefault();
      /*let most = "0";
      let least = "0";*/
      let latest = "0";
      let oldest = "0";
      let highest = "0";
      let lowest = "0";

      /*if ( document.getElementById("formCheck-1").checked ){
        console.log("is checked 1");
        most = "1";
        setMostRented(true);
      }
      if ( document.getElementById("formCheck-2").checked ){
        console.log("is checked 2");
        least = "1";
        setLeastRented(true);
      }*/
      if (document.getElementById("formCheck-3").checked ){
        console.log("is checked 3");
        latest = "1";
        setLatestAdded(true);
      }
      if (document.getElementById("formCheck-4").checked ){
        console.log("is checked 4");
        oldest = "1";
        setOldestAdded(true);
      }
      if (document.getElementById("formCheck-5").checked ){
        console.log("is checked 5");
        highest = "1";
        setHighestRating(true);
      }
      if (document.getElementById("formCheck-6").checked ){
        console.log("is checked 6");
        lowest = "1";
        setLowestRating(true);
      }
      
      var searchInput = search;

    try {
      console.log("BURAK: ", search);
      const response = await axios.get('http://localhost:8080/searchPosts?title=' + searchInput + '&check3=' + latest + '&check4=' + oldest + '&check5=' + highest + '&check6=' + lowest);
      console.log(response.data);
      if(response.data.length > 0){
          setItemExist(true);
        setPosts(response.data);
      }
      else{
        setItemExist(false);
        setPosts([{}]);
      }
    } catch (error) {
      console.error('Failed:', error);
      setPosts([]);
    }
    }

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/listAllPosts');
      console.log(response.data);
      setPosts(response.data);
      if(response.data.length > 0){
        setItemExist(true);
      }
      else{
        setItemExist(false);
      }
    } catch (error) {
      console.error('Failed:', error);
      setPosts([]);
    }
  };

  useEffect(() => {
    fetchPosts().then(r => console.log('fetched data'));
  }, []);

  const handleView = (rentalId) => {
    navigate('/AdminViewPost?rentalId=' + rentalId);
  };
    
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
                id="formCheck-3"
                checked={isCheckedLatest}
                onChange={handleChangeLatest}
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
                checked={isCheckedOldest}
                onChange={handleChangeOldest}
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
                checked={isCheckedHighest}
                onChange={handleChangeHighest}
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
                checked={isCheckedLowest}
                onChange={handleChangeLowest}
              />
              <label className="form-check-label" htmlFor="formCheck-6">
                Lowest Rating
              </label>
            </div>
          </div>
        </div>
        <div>
          <input type="text" id="searchInput" style={{ marginLeft: 100 }} value={search}
                 onChange={handleChange}/>
          <button
            className="btn btn-primary"
            type="submit" onClick={handleSearch}
            style={{ marginLeft: 10 }}
          >
            Search
          </button>
        </div>
              <div className="row">

              {itemExist && posts.map((item, index) => (
                <div key={index} className="col-md-6 col-lg-4 item">
                  <a className="lightbox" href="assets/img/scenery/image1.jpg">
                    <img
                      className="img-thumbnail img-fluid image"
                      src={item['image-path']}
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
                      onClick={() => handleView(item['rental-id'])}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
                {!itemExist && (
                    <h1>
                    </h1>
                )}
              </div>
            </div>
          </section>
        </main>
      </>
      
        
    );

    
}


export default AdminManagePosts;