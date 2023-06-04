import React, { useEffect,  useState } from "react";
import "./adminAssets/bootstrap/css/bootstrap.min.css";
import "./adminAssets/css/vanilla-zoom.min.css";
import { Navbar } from "./Navbar.jsx";
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export const AdminViewReporting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [detailsPost, setDetails] = useState([]);
  const [detailsUser, setDetailsUser] = useState([]);
  //const [userId, setUserId] = useState(0);
  const [rentalId, setRentalId] = useState(0);

  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const userid = urlParams.get('userId');

  const fetchPostDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8080/postReportDetails?userId=' + userid);
      console.log(response.data);
      setDetails(response.data);
      //setUserId(response.data[0]['user-id']);
      setRentalId(response.data[0]['rental-id']);
      const responseUser = await axios.get('http://localhost:8080/userReportDetails?userId=' + userid);
      console.log(responseUser.data);
      setDetailsUser(responseUser.data);
    } catch (error) {
      console.error('Failed to fetch cities:', error);
      setDetails([]);
      setDetailsUser([]);
    }
  };

  useEffect(() => {
    fetchPostDetails().then(r => console.log('fetched data'));
  }, []);

  /*const deleteUser = async (e) => {
    e.preventDefault();
    console.log("BURADAAYIMMMMMUSER");
    try {
      const response = await axios.delete('http://localhost:8080/deleteReportedUser?userId=' + userid);
      console.log(response.data);
      if(response.data == 0){
        alert("Error Deleting User");
      }
      else if (response.data == 1){
        navigate('/AdminHome');
        alert("User deleted successfully!");
      }
    } catch (error) {
      console.error('Failed:', error);
    }
  }
   */

  /*const removePost = async (e) => {
    e.preventDefault();
    console.log("BURADAAYIMMMMM");
    try {
      const response = await axios.delete('http://localhost:8080/deletePost?rentalId=' + rentalId);
      console.log(response.data);
      if(response.data == 0){
        alert("Error Deleting Post");
      }
      else if (response.data == 1){
        navigate('/AdminHome');
        alert("Post deleted successfully!");
      }
    } catch (error) {
      console.error('Failed:', error);
    }
  }
  */

  const handleDeleteUser = () => {
    setIsModalOpen(true);
    console.log("Deleted the user button clicked-modal opened");
  };
  
  const handleDeletePost = () => {
    setIsModal2Open(true);
    console.log("Deleted the post button clicked-modal opened");
  };
  
  const handleDeleteUserModal = async () => {
    try {
      const response = await axios.delete('http://localhost:8080/deleteReportedUser?userId=' + userid);
      console.log(response.data);
      if(response.data == 0){
        alert("Error Deleting User");
      }
      else if (response.data == 1){
        navigate('/AdminHome');
        alert("User deleted successfully!");
      }
    } catch (error) {
      console.error('Failed:', error);
    }

    console.log("Deleted the user from the modal");
    setIsModalOpen(false);
    alert("You have successfully deleted the user");
  };
  
  const handleDeletePostModal = async () => {
    try{
      const response = await axios.delete('http://localhost:8080/deletePost?rentalId=' + rentalId);
      console.log(response.data);
      if(response.data == 0){
        alert("Error Deleting Post");
      }
      else if (response.data == 1){
        navigate('/AdminHome');
        alert("Post deleted successfully!");
      }
    } catch (error) {
      console.error('Failed:', error);
    }
    console.log("Deleted the post from the modal");
    setIsModal2Open(false);
    try {
      alert("You have successfully deleted the post!");
    } catch (error) {
      alert("The post could not be deleted!");
    }
    
  };



  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Product - Brand</title>
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
      <main className="page product-page">
        <section className="clean-block clean-product dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Reporting</h2>
              <p>Reporting made by a user.</p>
            </div>
            <div className="block-content">
              {detailsPost.map((item, index) => (
              <div key={index} className="product-info">
                <div className="row">
                  <div className="col-md-6">
                    <div className="gallery">
                      <h1>
                        <span style={{ backgroundColor: "rgb(246, 246, 246)" }}>
                          {item['rental-name']}
                        </span>
                      </h1>
                      <div id="product-preview" className="vanilla-zoom">
                        <div className="zoomed-image">
                          <img
                            className="rounded img-fluid"
                            src="assets/img/scenery/3222a878-4e0e-46b8-92d2-90fee6a9caa4.webp"
                          />
                        </div>
                        <div className="sidebar">
                          <img
                            className="img-fluid d-block small-preview"
                            src="assets/img/q2qnno7jyzyg1lyfekvw.webp"
                          />
                          <img
                            className="img-fluid d-block small-preview"
                            src="assets/img/1529289660763.jpg"
                          />
                          <img
                            className="img-fluid d-block small-preview"
                            src="assets/img/tech/airbnb-quebec-2.webp"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info">
                      <div className="col-lg-7 col-xl-12">
                        <h3>Post Reporting</h3>
                        <div className="info">
                          <span className="text-muted">
                            Jan 16, 2022 by&nbsp;
                            <a href="#">{item['name']} {item['surname']} {item['e-mail']}</a>
                          </span>
                        </div>
                        <p>
                          {item['description']}
                        </p>
                        <button
                          className="btn btn-outline-primary btn-sm"
                          type="button"
                          style={{ marginLeft: 10 }}
                          onClick={() => setIsModalOpen(true)}
                        >
                          Delete User
                        </button>
                        <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
                        <Modal.Header >
                          <Modal.Title>Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Are you sure you want to delete the user?
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                            Cancel
                          </Button>
                          <Button variant="danger" onClick={handleDeleteUserModal}>
                            Delete
                          </Button>
                        </Modal.Footer>
                        </Modal>
                        <button
                          className="btn btn-outline-primary btn-sm"
                          type="button"
                          style={{ marginLeft: 30 }}
                          onClick={handleDeletePost}
                        >
                          Remove Post
                        </button>
                        <Modal show={isModal2Open} onHide={() => setIsModal2Open(false)}>
                        <Modal.Header >
                          <Modal.Title>Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Are you sure you want to delete the user?
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setIsModal2Open(false)}>
                            Cancel
                          </Button>
                          <Button variant="danger" onClick={handleDeletePostModal}>
                            Delete
                          </Button>
                        </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))}
              {detailsUser.map((item, index) => (
                  <div key={index} className="product-info">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="gallery">
                          <h1>
                        <span style={{ backgroundColor: "rgb(246, 246, 246)" }}>
                          {item['rental-name']}
                        </span>
                          </h1>
                          <div id="product-preview" className="vanilla-zoom">
                            <div className="zoomed-image">
                              <img
                                  className="rounded img-fluid"
                                  src="assets/img/scenery/3222a878-4e0e-46b8-92d2-90fee6a9caa4.webp"
                              />
                            </div>
                            <div className="sidebar">
                              <img
                                  className="img-fluid d-block small-preview"
                                  src="assets/img/q2qnno7jyzyg1lyfekvw.webp"
                              />
                              <img
                                  className="img-fluid d-block small-preview"
                                  src="assets/img/1529289660763.jpg"
                              />
                              <img
                                  className="img-fluid d-block small-preview"
                                  src="assets/img/tech/airbnb-quebec-2.webp"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info">
                          <div className="col-lg-7 col-xl-12">
                            <h3>User Reporting</h3>
                            <div className="info">
                          <span className="text-muted">
                            Jan 16, 2022 by&nbsp;
                            <a href="#">{item['name']} {item['surname']} {item['e-mail']}</a>
                          </span>
                            </div>
                            <p>
                              {item['description']}
                            </p>
                            <button
                                className="btn btn-outline-primary btn-sm"
                                type="button"
                                style={{ marginLeft: 10 }}
                                onClick={() => handleDeleteUser}
                            >
                              Delete User
                            </button>
                            <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
                              <Modal.Header >
                                <Modal.Title>Confirmation</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Are you sure you want to delete the user?
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                                  Cancel
                                </Button>
                                <Button variant="danger" onClick={handleDeleteUserModal}>
                                  Delete
                                </Button>
                              </Modal.Footer>
                            </Modal>
                            <button
                                className="btn btn-outline-primary btn-sm"
                                type="button"
                                style={{ marginLeft: 30 }}
                                onClick={handleDeletePost}
                            >
                              Remove Post
                            </button>
                            <Modal show={isModal2Open} onHide={() => setIsModal2Open(false)}>
                              <Modal.Header >
                                <Modal.Title>Confirmation</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Are you sure you want to delete the post?
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={() => setIsModal2Open(false)}>
                                  Cancel
                                </Button>
                                <Button variant="danger" onClick={handleDeletePostModal}>
                                  Delete
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
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
          <p />
        </div>
      </footer>
    </>
  );
};
export default AdminViewReporting;
