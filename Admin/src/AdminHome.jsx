import React, { useState } from "react";
import {  useNavigate } from 'react-router-dom';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/vanilla-zoom.min.css';
import  { Link } from "react-router-dom";

export const AdminHome = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/HostRentingProperty');
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
            <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
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
            <main className="page blog-post-list">
                <section className="clean-block clean-blog-list dark">
                <div className="container">
                    <div className="block-heading">
                    <h2 className="text-info">Welcome, Admin</h2>
                    <p />
                    </div>
                    <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <div className="container-fluid">
                        <div className="d-sm-flex justify-content-between align-items-center mb-4">
                            <h3 className="text-dark mb-0">Dashboard</h3>
                            <a
                            className="btn btn-primary btn-sm d-none d-sm-inline-block"
                            role="button"
                            href="#"
                            >
                            View Report
                            </a>
                            <a
                            className="btn btn-primary btn-sm d-none d-sm-inline-block"
                            role="button"
                            href="#"
                            >
                            <i className="fas fa-download fa-sm text-white-50" />
                            &nbsp;Download Report
                            </a>
                        </div>
                        <div className="col">
                            <div className="row">
                            <div className="col-lg-6 mb-4">
                            <Link to="/AdminCustomerReportings">
                                <div className="card text-white bg-primary shadow">
                                <div className="card-body">
                                    
                                    <p className="m-0">Customer Reporting</p>
                                    
                                </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-6 mb-4">
                            <Link to="/AdminManageUsers">
                                <div className="card text-white bg-success shadow">
                                <div className="card-body">
                                    <p className="m-0">Manage Users</p>
                                </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-6 mb-4">
                            <Link to="/AdminManagePosts">
                                <div className="card text-white bg-info shadow">
                                <div className="card-body">
                                    <p className="m-0">Manage Posts</p>
                                </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-6 mb-4">
                            <Link to="/AdminLandmarkSuggestions">
                                <div className="card text-white bg-warning shadow">
                                <div className="card-body">
                                    <p className="m-0">Landmark Postings</p>
                                </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-6 mb-4">
                            <Link to="/AdminReviews">
                                <div className="card text-white bg-danger shadow">
                                <div className="card-body">
                                    <p className="m-0">Surveys</p>
                                </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-6 mb-4">
                            <Link to="/AdminMaintenanceForm">
                                <div className="card text-white bg-secondary shadow">
                                <div className="card-body">
                                    <p className="m-0">Maintenance Mode</p>
                                </div>
                                </div>
                                </Link>
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
                </div>
                </section>
            </main>

            </>

    );

    
}
export default AdminHome;