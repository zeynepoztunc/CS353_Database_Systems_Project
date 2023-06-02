import React, {useEffect, useState} from "react";
import "./adminAssets/bootstrap/css/bootstrap.min.css";
import "./adminAssets/css/vanilla-zoom.min.css";
import { Navbar } from "./Navbar.jsx";
import axios from "axios";
export const AdminCustomerReportings = () => {
  const [mostRented, setMostRented] = useState(false);
  const [leastRented, setLeastRented] = useState(false);
  const [latestAdded, setLatestAdded] = useState(false);
  const [oldestAdded, setOldestAdded] = useState(false);
  const [highestRating, setHighestRating] = useState(false);
  const [lowestRating, setLowestRating] = useState(false);
  const [search, setSearch] = useState("");
  const [customerReportings, setReportings] = useState([]);

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

  const fetchReportings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/customerReportings');
      console.log(response.data);
      /*for (let i = 0; i < response.data.length; i++){
        console.log("flatname: ", response.data[i]['rental-name'], " email: ", response.data[i]['e-mail']);
        customerReportings[i].flatName = response.data[i]['rental-name'];
        customerReportings[i].reportType = "Customer Post Reporting";
        customerReportings[i].date = response.data[i]['report-date'];
        customerReportings[i].userName = response.data[i]['name'];
        customerReportings[i].email = response.data[i]['e-mail'];
        customerReportings[i].content = response.data[i]['description'];
      }*/
      setReportings(response.data);
      //return customerReportings;
    } catch (error) {
      console.error('Failed to fetch cities:', error);
      setReportings([]);
    }
  };

  useEffect(() => {
    fetchReportings().then(r => console.log('fetched data'));
  }, []);

  function handleSearch() {
    if (document.getElementById("formCheck-1").checked) {
      console.log("is checked 1");
      setMostRented(true);
    }
    if (document.getElementById("formCheck-2").checked) {
      console.log("is checked 2");
      setLeastRented(true);
    }
    if (document.getElementById("formCheck-3").checked) {
      console.log("is checked 3");
      setLatestAdded(true);
    }
    if (document.getElementById("formCheck-4").checked) {
      console.log("is checked 4");
      setOldestAdded(true);
    }
    if (document.getElementById("formCheck-5").checked) {
      console.log("is checked 5");
      setHighestRating(true);
    }
    if (document.getElementById("formCheck-6").checked) {
      console.log("is checked 6");
      setLowestRating(true);
    }
    var searchInput = document.getElementById("searchInput");
    if (searchInput) {
      setSearch(searchInput.value);
      console.log(search);
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
                              id="formCheck-1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck-1"
                            >
                              Most rented
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
                              Least rented
                            </label>
                          </div>
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
                              Latest Added
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
                              Oldest Added
                            </label>
                          </div>
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
                              Highest Rating
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
                            type="search"
                            id="searchInput"
                            className="form-control form-control-sm"
                            aria-controls="dataTable"
                            placeholder="Search"
                          />
                          <button
                            className="btn btn-primary"
                            type="button"
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
              
              {customerReportings.map((item, index) => (
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
                    >
                      <span
                        style={{
                          color: "rgb(13, 110, 253)",
                          backgroundColor: "rgb(255, 255, 255)",
                        }}
                      >
                        View Details
                      </span>
                    </button>
                  </div>
                </div>
              </div>
                
                
                
              ))}
              

            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default AdminCustomerReportings;
