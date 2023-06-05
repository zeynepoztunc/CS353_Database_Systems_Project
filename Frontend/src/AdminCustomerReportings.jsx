import React, {useEffect, useState} from "react";
import "./adminAssets/bootstrap/css/bootstrap.min.css";
import "./adminAssets/css/vanilla-zoom.min.css";
import { Navbar } from "./Navbar.jsx";
import axios from "axios";
import {  useNavigate } from 'react-router-dom';
import {te} from "date-fns/locale";
export const AdminCustomerReportings = () => {
  const [mostRented, setMostRented] = useState(false);
  const [leastRented, setLeastRented] = useState(false);
  const [latestAdded, setLatestAdded] = useState(false);
  const [oldestAdded, setOldestAdded] = useState(false);
  const [highestRating, setHighestRating] = useState(false);
  const [lowestRating, setLowestRating] = useState(false);
  const [search, setSearch] = useState("");
  const [customerReportings, setReportings] = useState([]);
  const [userId, setUserId] = useState(0);
  const [itemExist, setItemExist] = useState(false);
  const [isCheckedLatest, setIsCheckedLatest] = useState(false);
  const [isCheckedOldest, setIsCheckedOldest] = useState(false);
  const [isCheckedHighest, setIsCheckedHighest] = useState(false);
  const [isCheckedLowest, setIsCheckedLowest] = useState(false);

  const users = [
    {
      name: "Airi Satou",
      userType: "Host",
      complaintCount: 0,
      joinDate: "2022/11/28",
      photo: "assets/img/avatars/avatar1.jpeg",
    },
    {
      name: "Airi Satou",
      userType: "Host",
      complaintCount: 0,
      joinDate: "2022/11/28",
      photo: "assets/img/avatars/avatar1.jpeg",
    },
  ];

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

  const fetchReportings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/customerReportings');
      console.log(response.data);
      if (response.data.length > 0){
        setItemExist(true);
        setReportings(response.data);
      }
      else{
        setItemExist(false);
        setReportings([{}]);
      }
    } catch (error) {
      console.error('Failed to fetch cities:', error);
      setReportings([]);
    }
  };

  useEffect(() => {
    fetchReportings().then(r => console.log('fetched data'));
  }, []);

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
      const response = await axios.get('http://localhost:8080/filterCustomerReportings?title=' + searchInput + '&check3=' + latest + '&check4=' + oldest + '&check5=' + highest + '&check6=' + lowest);
      console.log(response.data);
      if(response.data.length > 0){
        setItemExist(true);
        setReportings(response.data);
      }
      else{
        setItemExist(false);
        setReportings([{}]);
      }
    } catch (error) {
      console.error('Failed:', error);
      setReportings([]);
    }
  }

  /*const customerReportings = [
    {
      flatName: "Stylish flat in Muratpaşa",
      reportType: "Post Reporting",
      date: "Jan 16, 2022",
      userName: "John Smith",
      email: "johnsmith@gmail.com",
      content:
        "The pictures looked nothing like the actual house. The house also had heating problems and the host ignored our calls.",
      pictureLink:
        "adminAssets/img/scenery/3222a878-4e0e-46b8-92d2-90fee6a9caa4.webp",
    },
    /*{
      flatName: "Stylish flat in Muratpaşa",
      reportType: "Post Reporting",
      date: "Jan 16, 2022",
      userName: "John Smith",
      email: "johnsmith@gmail.com",
      content:
        "The pictures looked nothing like the actual house. The house also had heating problems and the host ignored our calls.",
      pictureLink:
        "adminAssets/img/scenery/3222a878-4e0e-46b8-92d2-90fee6a9caa4.webp",
    },
  ];*/

  const handleViewDetails = (userId) => {
    navigate('/AdminViewReporting?userId=' + userId);
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Blog - Brand</title>
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
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Customer Reportings</h2>
              <p>All post and user reports made by users.</p>
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
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-3"
                            >
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
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-4"
                            >
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
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-5"
                            >
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
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-6"
                            >
                              Lowest Rating
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div
                          className="text-md-end dataTables_filter"
                          id="dataTable_filter"
                        >
                          <input
                            type="text"
                            id="searchInput"
                            className="form-control form-control-sm"
                            aria-controls="dataTable"
                            placeholder="Search"
                            value={search}
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={handleSearch}
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center",
                            }}
                          >
                            Search
                          </button>
                          <label className="form-label" />
                        </div>
                      </div>
            <div className="block-content">

              {itemExist && customerReportings.map((item, index) => (
                <div className="clean-blog-post" key={index}>
                <div className="row">
                  <div className="col-lg-5">
                    <h1>
                      <span style={{ backgroundColor: "rgb(246, 246, 246)" }}>
                        {item['rental-name']}
                      </span>
                    </h1>
                    <img
                      className="rounded img-fluid"
                      src={item.pictureLink}
                    />
                  </div>
                  <div className="col-lg-7">
                    <h3>
                      <strong>{"Customer Post Reporting"}</strong>
                    </h3>
                    <div className="info">
                      <span className="text-muted">
                        {item['report-date'] + "    "}
                        <a href="#">{item['name'] + " " + item['surname'] + " - " + item['e-mail']} </a>
                      </span>
                    </div>
                    <p>
                      {item['description']}
                    </p>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      type="button"
                      onClick={() => handleViewDetails(item['user-id'])}
                    >
                      <span
                        style={{
                          color: "rgb(13, 110, 253)",
                          backgroundColor: "rgb(255, 255, 255)",
                        }}
                      >
                        View User's Reportings
                      </span>
                    </button>
                  </div>
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
};
export default AdminCustomerReportings;
