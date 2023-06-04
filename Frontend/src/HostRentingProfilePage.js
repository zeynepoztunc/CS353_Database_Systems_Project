import {NavLink} from "react-bootstrap";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const HostRentingProfilePage = () => {

    const navigate = useNavigate();

    const urlParams = new URLSearchParams(window.location.search);
    const hostId = urlParams.get("userid");

    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [region, setRegion] = React.useState("");
    const[password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [fullName, setFullName] = React.useState("");
    const [superhost, setSuperhost] = React.useState(false);
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [iban, setIban] = React.useState("");
    const [gender,setGender] = React.useState("");

    const fetchHost = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/Hosts/getHostDetails?hostid=${hostId}`); // replace with your API endpoint
            console.log(response.data);

            setName(response.data.user.name);
            setSurname(response.data.user.surname);
            setRegion(response.data.host.region);
            setPassword(response.data.user.password);
            setFullName(response.data.user.name + " " + response.data.user.surname);
            setEmail(response.data.registeredUser.email);
            setSuperhost(response.data.host.superhost);
            setDateOfBirth(response.data.registeredUser.dateOfBirth);
            setPhoneNumber(response.data.registeredUser.telephoneNo);
            setIban(response.data.host.iban);
            setGender(response.data.registeredUser.gender);

            return response;
        } catch (error) {
            console.error('Failed to fetch host:', error);
        }
    }




    useEffect(() => {
        fetchHost().then(r => console.log('fetched host')
        );
    }, []);

    const gotoGeneralLogin
        = (event) => {
        event.preventDefault();
        navigate('/');
    }

    const gotoHostRentingCurrentRents
        = (event) => {
        event.preventDefault();
        navigate('/HostRentingCurrentRents?userid=' + hostId);
    }

    return (
<>
    <meta charSet="utf-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <title>About Us - Brand</title>
    <link rel="stylesheet" href="./hostAssets/bootstrap/css/bootstrap.min.css" />
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
    />
    <link rel="stylesheet" href="./hostAssets/css/Font%20Awesome%205%20Brands.css" />
    <link rel="stylesheet" href="./hostAssets/css/Font%20Awesome%205%20Free.css" />
    <link rel="stylesheet" href="./hostAssets/fonts/fontawesome-all.min.css" />
    <link rel="stylesheet" href="./hostAssets/fonts/font-awesome.min.css" />
    <link
        rel="stylesheet"
        href="./hostAssets/fonts/fontawesome5-overrides.min.css"
    />
    <link rel="stylesheet" href="./hostAssets/css/baguetteBox.min.css" />
    <link
        rel="stylesheet"
        href="./hostAssets/css/Bootstrap-4-Calendar-No-Custom-Code.css"
    />
    <link rel="stylesheet" href="./hostAssets/css/Drag--Drop-Upload-Form.css" />
    <link rel="stylesheet" href="./hostAssets/css/Drag-Drop-File-Input-Upload.css" />
    <link rel="stylesheet" href="./hostAssets/css/pop-up-boxes.css" />
    <link rel="stylesheet" href="./hostAssets/css/vanilla-zoom.min.css" />
    <link rel="stylesheet" href="./hostAssets/css/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.reflowhq.com/v2/toolkit.min.css" />
    <link rel="stylesheet" href="./hostAssets/css/fonts/fontawesome-all.min.css" />
    <link rel="stylesheet" href="./hostAssets/css/css/baguetteBox.min.css" />
    <link
        rel="stylesheet"
        href="./hostAssets/css/css/Banner-Heading-Image-images.css"
    />
    <link
        rel="stylesheet"
        href="./hostAssets/css/Button-modal-ecommerce-bs4_modal.min.css"
    />
    <link
        rel="stylesheet"
        href="./hostAssets/css/Button-modal-ecommerce-styles.css"
    />
    <link rel="stylesheet" href="./hostAssets/css/Hover-Button-1.css" />
    <link
        rel="stylesheet"
        href="./hostAssets/css/bootstrap/css/bootstrap.min-1.css"
    />
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container">
            <button
                data-bs-toggle="collapse"
                className="navbar-toggler"
                data-bs-target="#navcol-1"
            >
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <a
                    className="navbar-brand logo"
                    style={{ paddingRight: 0, marginBottom: 0, fontSize: 32 }}
                >
                    WeRent
                </a>
                <ul className="navbar-nav ms-auto" />
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink onClick={gotoHostRentingCurrentRents} className="nav-link">
                            YOUR CURRENT RENTS
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={gotoGeneralLogin} className="nav-link">
                            LOGOUT
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    <main className="page">
        <section className="clean-block about-us">
            <div className="container">
                <div className="row text-bg-light">
                    <div
                        className="col-md-6 col-lg-4 text-center"
                        style={{
                            marginTop: 40,
                            paddingTop: 19,
                            paddingRight: 32,
                            paddingLeft: 31
                        }}
                    >
                        <div className="card">
                            <div className="card-body">
                                <h6 className="text-muted card-subtitle mb-2" />
                                <img
                                    className="rounded-circle d-lg-flex align-items-lg-start"
                                    src="./hostAssets/img/photo-1603775020644-eb8decd79994.jpg"
                                    style={{ paddingLeft: 0, marginLeft: 100 }}
                                    width={126}
                                    height={111}
                                />
                            </div>
                        </div>
                        <div className="card">
                            <div
                                className="card-body"
                                style={{ marginBottom: "-29px", paddingBottom: 6 }}
                            >
                                <h6 className="text-muted card-subtitle mb-2" />
                                <p />
                                <p style={{ marginTop: "-24px" }}>
                                    <i
                                        className="far fa-star text-warning"
                                        style={{ fontSize: 27 }}
                                    />
                                    <span style={{ backgroundColor: "rgb(248, 249, 250)" }}>
                    4.8 rating average
                  </span>
                                    <br />
                                    <br />
                                </p>
                                <p style={{ marginTop: "-24px" }}>
                                    <i
                                        className="fas fa-award text-warning"
                                        style={{ fontSize: 27 }}
                                    />
                                    <span
                                        style={{
                                            backgroundColor: "rgb(248, 249, 250)",
                                            fontWeight: "bold"
                                        }}
                                    >
                    {superhost ? "Super Host" : "Host"}
                  </span>
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div
                            className="card"
                            style={{
                                paddingTop: 0,
                                marginTop: 36,
                                paddingLeft: 16,
                                marginLeft: 3,
                                paddingRight: 12,
                                marginRight: "-4px"
                            }}
                        >
                            <div className="card-body" style={{ marginTop: 82 }}>
                                <h5
                                    className="text-center card-title"
                                    style={{
                                        marginTop: "-81px",
                                        marginLeft: "-22px",
                                        marginRight: "-19px"
                                    }}
                                >
                                    Upload Entitlement of Disaster pdf
                                </h5>
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    style={{
                                        paddingTop: 0,
                                        marginTop: "-2px",
                                        paddingLeft: 0,
                                        paddingBottom: 7,
                                        paddingRight: 0,
                                        marginRight: 37,
                                        marginLeft: 31
                                    }}
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-8" style={{ marginTop: 40 }}>
                        <h4 className="fs-2" style={{ paddingBottom: 0, marginBottom: 28 }}>
                            <strong>Welcome, {name}</strong>
                        </h4>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <strong>Name</strong>
                                        </h5>
                                        <h6
                                            className="text-muted card-subtitle mb-2"
                                            style={{ marginRight: 0 }}
                                        >
                      <span style={{ color: "rgb(5, 6, 7)" }}>
                        {fullName}
                      </span>
                                            <button
                                                className="btn btn-link text-end link-dark pull-right"
                                                type="button"
                                                style={{ marginTop: "-12px" }}
                                            >
                                                edit
                                            </button>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col" style={{ marginTop: 16 }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <strong>Email</strong>
                                        </h5>
                                        <h6 className="text-muted card-subtitle mb-2">
                      <span style={{ color: "rgb(5, 6, 7)" }}>
                        {email}
                      </span>
                                            <button
                                                className="btn btn-link text-end link-dark pull-right"
                                                type="button"
                                                style={{ marginTop: "-12px" }}
                                            >
                                                edit
                                            </button>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "-36px" }}>
                            <div className="col" style={{ paddingTop: 0, marginTop: 58 }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <strong>Password</strong>
                                        </h5>
                                        <h6 className="text-muted card-subtitle mb-2">
                                            <span style={{ color: "rgb(5, 6, 7)" }}>{password.replace(/./g, '*')}</span>
                                            <button
                                                className="btn btn-link text-end link-dark pull-right"
                                                type="button"
                                                style={{ marginTop: "-12px" }}
                                            >
                                                edit
                                            </button>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ marginTop: 15 }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <strong>Date of Birth</strong>
                                        </h5>
                                        <h6 className="text-muted card-subtitle mb-2">
                                            <button
                                                className="btn btn-link text-end link-dark pull-right"
                                                type="button"
                                                style={{ marginTop: "-12px" }}
                                            >
                                                edit
                                            </button>
                                            <span style={{ color: "rgb(5, 6, 7)" }}>{dateOfBirth}</span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ marginTop: 15 }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <strong>International Bank Account Number (IBAN)</strong>
                                        </h5>
                                        <h6 className="text-muted card-subtitle mb-2">
                      <span style={{ color: "rgb(5, 6, 7)" }}>
                        {iban}
                      </span>
                                            <button
                                                className="btn btn-link text-end link-dark pull-right"
                                                type="button"
                                                style={{ marginTop: "-12px" }}
                                            >
                                                edit
                                            </button>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ marginTop: 15 }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <strong>Telephone Number</strong>
                                        </h5>
                                        <h6 className="text-muted card-subtitle mb-2">
                      <span style={{ color: "rgb(5, 6, 7)" }}>
                        {phoneNumber}
                      </span>
                                            <button
                                                className="btn btn-link text-end link-dark pull-right"
                                                type="button"
                                                style={{ marginTop: "-12px" }}
                                            >
                                                edit
                                            </button>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ marginTop: 15 }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <strong>Gender</strong>
                                        </h5>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-primary dropdown-toggle"
                                                aria-expanded="false"
                                                data-bs-toggle="dropdown"
                                                type="button"
                                            >
                                                {gender}
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">
                                                    Male
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Female
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div />
                    </div>
                </div>
            </div>
            <div
                className="col-lg-10 offset-lg-0"
                style={{ marginTop: "-1px", marginBottom: 0, marginLeft: 82 }}
            >
                <h2 style={{ paddingTop: 64 }}>
                    <strong>Reply Reviews Made on You</strong>
                </h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ paddingTop: 17 }}>
                        <img
                            className="rounded-circle"
                            src="./hostAssets/img/images2.jpg"
                            width={101}
                            height={87}
                        />
                        <div
                            className="card"
                            style={{
                                marginLeft: 119,
                                marginBottom: 0,
                                paddingBottom: 0,
                                paddingTop: 0,
                                marginTop: "-101px"
                            }}
                        >
                            <div
                                className="card-body"
                                style={{
                                    marginBottom: "-2px",
                                    marginLeft: 52,
                                    marginRight: 74
                                }}
                            >
                                <h4
                                    className="card-title"
                                    style={{ marginRight: 0, marginLeft: "-56px" }}
                                >
                                    Selim Yılmaz
                                </h4>
                                <p className="card-text" style={{ marginLeft: "-56px" }}>
                                    Clean and kind owner.
                                </p>
                                <textarea
                                    style={{
                                        overflow: "auto",
                                        display: "inline-flex",
                                        position: "relative",
                                        width: 250,
                                        height: 80
                                    }}
                                    defaultValue={""}
                                />
                            </div>
                            <button className="btn btn-primary" type="button">
                                Reply
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ paddingTop: 17 }}>
                        <img
                            className="rounded-circle"
                            src="./hostAssets/img/pp.jpg"
                            width={101}
                            height={87}
                        />
                        <div
                            className="card"
                            style={{
                                marginLeft: 119,
                                marginBottom: 0,
                                paddingBottom: 0,
                                paddingTop: 0,
                                marginTop: "-101px"
                            }}
                        >
                            <div
                                className="card-body"
                                style={{
                                    marginBottom: "-2px",
                                    marginLeft: 52,
                                    marginRight: 74
                                }}
                            >
                                <h4 className="card-title" style={{ marginLeft: "-56px" }}>
                                    Francesca Balzo
                                </h4>
                                <p className="card-text" style={{ marginLeft: "-56px" }}>
                                    Respectful and helpful.
                                </p>
                                <textarea
                                    style={{ height: 80, width: 250 }}
                                    defaultValue={""}
                                />
                            </div>
                            <button className="btn btn-primary t" type="button">
                                Reply
                            </button>
                        </div>
                        <div />
                    </div>
                    <div className="col-md-6" style={{ paddingTop: 12, marginTop: 5 }}>
                        <img
                            className="rounded-circle"
                            src="./hostAssets/img/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"
                            width={101}
                            height={87}
                        />
                        <div
                            className="card"
                            style={{
                                marginLeft: 119,
                                marginBottom: 0,
                                paddingBottom: 0,
                                paddingTop: 0,
                                marginTop: "-101px"
                            }}
                        >
                            <div
                                className="card-body"
                                style={{
                                    marginBottom: "-2px",
                                    marginLeft: 52,
                                    marginRight: 52
                                }}
                            >
                                <h4 className="card-title" style={{ marginLeft: "-56px" }}>
                                    Jessy Lee
                                </h4>
                                <p className="card-text" style={{ marginLeft: "-56px" }}>
                                    Super owner!!
                                </p>
                                <textarea
                                    style={{ width: 250, height: 80 }}
                                    defaultValue={""}
                                />
                            </div>
                            <button className="btn btn-primary" type="button">
                                Reply
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ paddingTop: 8, marginTop: 5 }}>
                        <img
                            className="rounded-circle"
                            src="./hostAssets/img/Başlıksız.jpg"
                            width={101}
                            height={88}
                        />
                        <div
                            className="card"
                            style={{
                                marginLeft: 119,
                                marginBottom: 0,
                                paddingBottom: 0,
                                paddingTop: 0,
                                marginTop: "-101px"
                            }}
                        >
                            <div
                                className="card-body"
                                style={{
                                    marginBottom: "-2px",
                                    marginLeft: 52,
                                    marginRight: 74
                                }}
                            >
                                <h4 className="card-title" style={{ marginLeft: "-56px" }}>
                                    Dawson Ann-Harbor
                                </h4>
                                <p className="card-text" style={{ marginLeft: "-56px" }}>
                                    Respectful and helpful.
                                </p>
                                <textarea
                                    style={{ height: 80, width: 250 }}
                                    defaultValue={""}
                                />
                            </div>
                            <button className="btn btn-primary t" type="button">
                                Reply
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ paddingTop: 8 }}>
                        <div />
                    </div>
                    <div className="col-md-6 col-lg-12" style={{ paddingTop: 8 }}>
                        <button
                            className="btn btn-danger"
                            type="button"
                            style={{
                                paddingTop: 7,
                                marginTop: 14,
                                paddingLeft: 9,
                                marginLeft: 405
                            }}
                        >
                            Show All Reviews
                        </button>
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
            <p>© 2023 WeRent Inc.</p>
        </div>
    </footer>
</>
    );
}
export default HostRentingProfilePage;
