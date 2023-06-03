import {useLocation, useNavigate} from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const HostRentingCurrentRents = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [rentals, setRentals] = useState([]);
    const [rentalName, setRentalName] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [dailyPrice, setDailyPrice] = useState("");

    const { search } = useLocation();
    const urlParams = new URLSearchParams(search);
    const userid = urlParams.get("userid");
    console.log("userid: " + userid);

    useEffect(() => {
        const fetchRentals = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/Rentals/getRentalsByUserId?userid=${userid}`); // replace with your API endpoint
                console.log(response.data);
                setRentals(response.data)
                setRentalName(response.data.rentalName);
                setCity(response.data.city);
                setProvince(response.data.province);
                setDailyPrice(response.data.dailyPrice);
                return response;
            } catch (error) {
                console.error('Failed to fetch bookings:', error);
            }
        };
       fetchRentals().then(r => console.log("fetched bookings")
       );
    }, [userid]);



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
            <h4 className="fs-2" style={{ paddingBottom: 0, marginBottom: 28 }}>
                <strong>Spacer </strong>
            </h4>
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
                                Your Current Rents
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
                                            <th className="text-danger">Rental Name</th>
                                            <th className="text-danger">City</th>
                                            <th className="text-danger">Province</th>
                                            <th className="text-danger text-center">Daily Price</th>
                                            <th className="text-center">Actions</th> {/* This is a new column header for the Delete button */}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {rentals.map((rental) => (
                                            <tr key={rental["rental-id"]}>
                                                <td>{rental["rental-name"]}</td>
                                                <td>{rental["city"]}</td>
                                                <td>{rental["province"]}</td>
                                                <td className="text-center">{rental["daily-price"] + '$'}</td>
                                                <td className="text-center"> {/* Centering the button like the other cells in the column */}
                                                    <button
                                                        className="btn btn-danger btn-custom-class"
                                                        type="button"
                                                        style={{ marginLeft: 36 }}
                                                    >
                                                        Delete Rental
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
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
        </>


    );
}
// Custom theme code

export default HostRentingCurrentRents;

