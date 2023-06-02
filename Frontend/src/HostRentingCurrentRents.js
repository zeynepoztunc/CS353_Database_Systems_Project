import {useLocation, useNavigate} from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const HostRentingCurrentRents = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);

    const { search } = useLocation();
    const urlParams = new URLSearchParams(search);
    const userid = urlParams.get("userid");
    console.log("userid: " + userid);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/Rentals/getRentalsByUserId?userid=${userid}`); // replace with your API endpoint
                setBookings(response.data);
            } catch (error) {
                console.error('Failed to fetch bookings:', error);
            }
        };
        fetchBookings();
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
                                            <th className="text-danger">Start Date</th>
                                            <th className="text-danger">End Date</th>
                                            <th className="text-danger">Rental Name</th>
                                            <th className="text-danger">City</th>
                                            <th className="text-danger">Province</th>
                                        </tr>
                                        </thead>
                                        {bookings.map((booking) => (
                                            <tbody key={booking.id}>
                                            <tr>
                                                <td>{booking.hostSelectedStartDate}</td>
                                                <td>{booking.edate}</td>
                                                <td>{booking.name}</td>
                                                <td>{booking.city}</td>
                                                <td>{booking.province}</td>
                                                <td className="text-center">3</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger text-center btn-custom-class"
                                                        type="button"
                                                        style={{ marginLeft: 36 }}
                                                    >
                                                        Add
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        ))}
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

