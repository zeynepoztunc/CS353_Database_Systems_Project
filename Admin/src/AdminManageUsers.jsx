import React, { useState } from "react";
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/vanilla-zoom.min.css';

export const AdminManageUsers = () => {
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
  <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
    <div className="container">
      <a className="navbar-brand logo" href="#">
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
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about-us.html">
              About Us
            </a>
          </li>
          <li className="nav-item" />
          <li className="nav-item">
            <a className="nav-link" href="registration-1.html">
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main className="page pricing-table-page">
    <section className="clean-block clean-pricing dark">
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <div className="container-fluid">
            <h3 className="text-dark mb-4">Manage Users</h3>
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
                  <div className="col-md-6">
                    <div
                      className="text-md-end dataTables_filter"
                      id="dataTable_filter"
                    >
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        aria-controls="dataTable"
                        placeholder="Search"
                      />
                      <button
                        className="btn btn-primary"
                        type="button"
                        style={{
                          paddingLeft: 10,
                          margin: "auto",
                          /*borderLeft: 10, */ textAlign: "center"
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
                        <th>See Complaints</th>
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
                            src="assets/img/avatars/avatar1.jpeg"
                          />
                          Airi Satou
                        </td>
                        <td>Host</td>
                        <td>0</td>
                        <td style={{ textAlign: "center" }}>
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
                        </td>
                        <td>2022/11/28</td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center"
                            }}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar2.jpeg"
                          />
                          Angelica Ramos
                        </td>
                        <td>User</td>
                        <td>1</td>
                        <td style={{ textAlign: "center" }}>
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
                        </td>
                        <td>
                          2022/10/09
                          <br />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center"
                            }}
                          >
                            <span
                              style={{ backgroundColor: "rgb(11, 94, 215)" }}
                            >
                              View Profile
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar3.jpeg"
                          />
                          Ashton Cox
                        </td>
                        <td>User</td>
                        <td>1</td>
                        <td style={{ textAlign: "center" }}>
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
                        </td>
                        <td>
                          2022/01/12
                          <br />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center"
                            }}
                          >
                            <span
                              style={{ backgroundColor: "rgb(11, 94, 215)" }}
                            >
                              View Profile
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar4.jpeg"
                          />
                          Bradley Greer
                        </td>
                        <td>User</td>
                        <td>0</td>
                        <td style={{ textAlign: "center" }}>
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
                        </td>
                        <td>
                          2022/10/13
                          <br />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center"
                            }}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar5.jpeg"
                          />
                          Brenden Wagner
                        </td>
                        <td>Host</td>
                        <td>0</td>
                        <td style={{ textAlign: "center" }}>
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
                        </td>
                        <td>
                          2022/06/07
                          <br />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center"
                            }}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar1.jpeg"
                          />
                          Brielle Williamson
                        </td>
                        <td>User</td>
                        <td>4</td>
                        <td style={{ textAlign: "center" }}>
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
                        </td>
                        <td>
                          2022/12/02
                          <br />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center"
                            }}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar2.jpeg"
                          />
                          Bruno Nash
                          <br />
                        </td>
                        <td>Host</td>
                        <td>22</td>
                        <td style={{ textAlign: "center" }}>
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
                        </td>
                        <td>
                          2022/05/03
                          <br />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center"
                            }}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar3.jpeg"
                          />
                          Caesar Vance
                        </td>
                        <td>Host</td>
                        <td>0</td>
                        <td style={{ textAlign: "center" }}>
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
                        </td>
                        <td>
                          2022/12/12
                          <br />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center"
                            }}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar4.jpeg"
                          />
                          Cara Stevens
                        </td>
                        <td>User</td>
                        <td>0</td>
                        <td style={{ textAlign: "center" }}>
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
                        </td>
                        <td>
                          2022/12/06
                          <br />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center"
                            }}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar5.jpeg"
                          />
                          Cedric Kelly
                        </td>
                        <td>Host</td>
                        <td>0</td>
                        <td style={{ textAlign: "center" }}>
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
                        </td>
                        <td>
                          2022/03/29
                          <br />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{
                              paddingLeft: 10,
                              margin: "auto",
                              /*borderLeft: 10, */ textAlign: "center"
                            }}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
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
                <div className="row">
                  <div className="col-md-6 align-self-center">
                    <p
                      id="dataTable_info"
                      className="dataTables_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 10 of 27
                    </p>
                  </div>
                  <div className="col-md-6">
                    <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            aria-label="Previous"
                            href="#"
                          >
                            <span aria-hidden="true">«</span>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" aria-label="Next" href="#">
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
        </div>
        <footer className="bg-white sticky-footer">
          <div className="container my-auto">
            <div className="text-center my-auto copyright">
              <span />
            </div>
          </div>
        </footer>
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
export default AdminManageUsers;