import {  useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';



function PastBookingsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const userIdString = urlParams.get('userid');
  const userId = parseInt(userIdString, 10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [posts, setPosts] = useState([]);
  const [itemExist, setItemExist] = useState(false);
  const isReviewed=useState(false);

  const navigate = useNavigate();
  const [booking] = useState([
    { id:1, sdate: "24/03/2023", edate: "27/03/2023", name: 'Kaş Luxury Villa ',  city:"Antalya",host: 'Timur',guestNum:2},
    { id:2, sdate: "16/01/2022", edate: "20/03/2022",name: 'Bursa 3+1 Flat', city:"Bursa", host: 'Connor', guestNum:4 },
    { id:3, sdate: "20/11/2022", edate: "14/11/2022",name: 'İzmir Beach House ',  city:"İzmir", host: 'Melih',guestNum:5 },
    { id:4, sdate: "2/02/2021", edate: "30/01/2021",name: 'Villa Suites', city:"Muğla", host:'Jenna',guestNum:3 },
  ]);
  const goToLeaveRatingPage = async (userId2, reservationId) => {
    navigate( '/LeaveRating?userid='  + userId + '&userid2=' + userId2 + '&reservationId=' + reservationId);
  };

  const fetchPast = async () => {
    try {
      const response = await axios.get('http://localhost:8080/listPastBookings?userid=' + userIdString);
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
  };

  useEffect(() => {
    fetchPast().then(r => console.log('fetched data'));
  }, []);

  const handleDeleteUserModal = async (userId, rentalId) => {
    try {
      const response = await axios.post('http://localhost:8080/reportStayedRental?userId=' + userId + '&rentalId=' + rentalId);
      console.log(response.data);
      if(response.data == 0){
        alert("Error Reporting Rental");
      }
      else if (response.data == 1){
        navigate('/PastBookingsPage?userId=' + userId);
        alert("Rental reported successfully!");
      }
    } catch (error) {
      console.error('Failed:', error);
    }

    setIsModalOpen(false);
  };
  const handleDeleteUserModal2 = async (userId, userId2) => {
    try {
      const response = await axios.post('http://localhost:8080/reportStayedHost?userId=' + userId + '&userId2=' + userId2);
      console.log(response.data);
      if(response.data == 0){
        alert("Error Reporting Host");
      }
      else if (response.data == 1){
        navigate('/PastBookingsPage?userId=' + userId);
        alert("User reported successfully!");
      }
    } catch (error) {
      console.error('Failed:', error);
    }

    setIsModal2Open(false);
  };

  const goBackToProfile = (event) => {
    event.preventDefault();
    navigate('/ProfilePage?userid='  + userId);
  };

  const addLandmrak = (event) => {
    event.preventDefault();
    navigate('/AddLandmark?userid='  + userId);
  };

    return (
        <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Blog - Brand</title>
  <link rel="stylesheet" href="customerAssets/bootstrap/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
  />
  <link rel="stylesheet" href="customerAssets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="customerAssets/css/baguetteBox.min.css" />
  <link rel="stylesheet" href="customerAssets/css/Banner-Heading-Image-images.css" />
  <link rel="stylesheet" href="customerAssets/css/vanilla-zoom.min.css" />
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
            Previous Bookings
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
                    <th className="text-danger">City</th>
                    <th className="text-danger">Rental Name</th>
                    <th className="text-danger">Host</th>
                    <th className="text-danger">Guest Number</th>
                    <th className="text-danger">Price</th>
                    <th className="text-danger">Leave Review</th>
                  </tr>
                </thead>
                {posts.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{item['reservation-start-date']}</td>
                    <td>{item['reservation-end-date']}</td>
                    <td>{item['city']}</td>
                    <td>{item['rental-name']}<i className="fas fa-flag" onClick={() => setIsModalOpen(true)}></i>
                      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to report the rental?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                          Cancel
                        </Button>
                        <Button variant="danger"
                                onClick={() => handleDeleteUserModal(userId, item['rental-id'])} >
                          Report
                        </Button>
                      </Modal.Footer>
                    </Modal>
                          </td>
                    <td>{item['name']} {item['surname']}<i className="fas fa-flag" onClick={() => setIsModal2Open(true)}></i></td>
                    <Modal show={isModal2Open} onHide={() => setIsModal2Open(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to report the host?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={() => setIsModal2Open(false)}>
                          Cancel
                        </Button>
                        <Button variant="danger" onClick={() => handleDeleteUserModal2(userId, item['user-id'])}>
                          Report
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <td className="text-left" >{item['number-of-guests']}</td>
                    <td className="text-left" >{item['price']}</td>
                    <td className="text-left" >
                      <button
                      className="btn btn-primary btn btn-custom-class"
                      type="button"
                      onClick={() => goToLeaveRatingPage(item['host-id'], item['reservation-id'])}
                      style={{
                        paddingLeft: 25,
                        paddingRight: 32,
                        paddingTop: 0,
                        marginRight: "-8px",
                        marginBottom: "-7px",
                        marginTop: "-25px"
                      }}
                    >
                      Leave Review
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
  
  export default PastBookingsPage;
  
