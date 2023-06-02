import React, { useState } from "react";
import "./adminAssets/bootstrap/css/bootstrap.min.css";
import "./adminAssets/css/vanilla-zoom.min.css";
import { Navbar } from "./Navbar.jsx";

export const AdminManageUsers = () => {
  const [mostRented, setMostRented] = useState(false);
  const [leastRented, setLeastRented] = useState(false);
  const [latestAdded, setLatestAdded] = useState(false);
  const [oldestAdded, setOldestAdded] = useState(false);
  const [highestRating, setHighestRating] = useState(false);
  const [lowestRating, setLowestRating] = useState(false);
  const [search, setSearch] = useState("");
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

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Pricing - Brand</title>
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
      <main className="page pricing-table-page">
        <section className="clean-block clean-pricing dark">
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <div className="container-fluid">
                <div className="block-heading">
                  <h2 className="text-info">Manage Users</h2>
                  <p>All users and basic statistics about them.</p>
                </div>
                <div className="card shadow">
                  <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">User Info</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 text-nowrap">
                        <div
                          id="dataTable_length"
                          className="dataTables_length"
                          aria-controls="dataTable"
                        >
                          <label className="form-label">
                            Show&nbsp;
                            <select className="d-inline-block form-select form-select-sm">
                              <option value={10} selected="">
                                10
                              </option>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={100}>100</option>
                            </select>
                            &nbsp;
                          </label>
                        </div>
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
                    </div>
                    <div
                      className="table-responsive table mt-2"
                      id="dataTable-1"
                      role="grid"
                      aria-describedby="dataTable_info"
                    >
                      <table className="table my-0" id="dataTable">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>User Type</th>
                            <th>Complaint Count</th>
                            <th>Join Date</th>
                            <th>Manage</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>
                              <img
                                className="rounded-circle me-2"
                                width={30}
                                height={30}
                                src="adminAssets/img/avatars/avatar1.jpeg"
                              />
                              Airi Satou
                            </td>
                            <td>Host</td>
                            <td>0</td>

                            <td>2022/11/28</td>
                            <td style={{ textAlign: "center" }}>
                              <button
                                className="btn btn-primary"
                                type="button"
                                style={{
                                  paddingLeft: 10,
                                  margin: "auto",
                                  /*borderLeft: 10, */ textAlign: "center",
                                }}
                              >
                                View Profile
                              </button>
                            </td>
                          </tr>

                          {users.map((item) => (
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle me-2"
                                  width={30}
                                  height={30}
                                  src={item.photo}
                                />
                                {item.name}
                              </td>
                              <td>{item.userType}</td>
                              <td>{item.complaintCount}</td>

                              <td>
                                {item.joinDate}
                                <br />
                              </td>
                              <td style={{ textAlign: "center" }}>
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                  style={{
                                    paddingLeft: 10,
                                    margin: "auto",
                                    /*borderLeft: 10, */ textAlign: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      backgroundColor: "rgb(11, 94, 215)",
                                    }}
                                  >
                                    View Profile
                                  </span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>
                              <strong>Name</strong>
                            </td>
                            <td>
                              <strong>
                                <strong>User Type</strong>
                              </strong>
                            </td>
                            <td>
                              <strong>
                                <strong>Complaint Count</strong>
                              </strong>
                            </td>
                            <td>
                              <strong>
                                <strong>See Complaints</strong>
                              </strong>
                            </td>
                            <td>
                              <strong>
                                <strong>Join Date</strong>
                              </strong>
                            </td>
                            <td>
                              <strong>
                                <strong>Manage</strong>
                              </strong>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default AdminManageUsers;
