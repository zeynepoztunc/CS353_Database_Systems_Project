import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AdminViewUser() {
  const urlParams = new URLSearchParams(window.location.search);
  const userIdString = urlParams.get("userId");
  const userId = parseInt(userIdString, 10);

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const averageRating = useState(4.5);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [user, setUser] = useState([]);
  const [itemExist, setItemExist] = useState(false);
  const [name, setName] = useState("");

  const [reviews] = useState([
    {
      id: 1,
      author: "John ",
      comment: "Clean and kind guest!",
      image: "./customerAssets/img/istockphoto-1200677760-612x612.jpg",
    },
    {
      id: 2,
      author: "Jane ",
      comment: "Respectful and tidy",
      image:
        "./customerAssets/img/happy-young-woman-sitting-on-260nw-2018571389.webp",
    },
    {
      id: 3,
      author: "Liz",
      comment: "Was very nice and welcoming",
      image:
        "./customerAssets/img/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg",
    },
    {
      id: 4,
      author: "Deniz",
      comment: "Super guest!",
      image:
        "./customerAssets/img/smile-young-man-close-gorgeous-260nw-186076112.webp",
    },
  ]);

  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:8080/viewUser?userId=' + userIdString);
      console.log(response.data);
      if(response.data.length > 0){
        //console.log(user['name']);
        //setName(response.data['name']);
        console.log(response.data.name);
        setUser(response.data);
        setItemExist(true);
      }
      else{
        setItemExist(false);
        setUser([{}]);
      }
    } catch (error) {
      console.error('Failed:', error);
      setUser([]);
    }
  };

  useEffect(() => {
    fetchUser().then(r => console.log("done"));
  }, []);

  const handleDeleteUserModal = async (userId) => {
    try {
      var userid = "df";
      const response = await axios.delete(
        "http://localhost:8080/deleteReportedUser?userId=" + userId
      );
      console.log(response.data);
      if (response.data == 0) {
        alert("Error Deleting User");
      } else if (response.data == 1) {
        navigate("/AdminHome");
        alert("User deleted successfully!");
      }
    } catch (error) {
      console.error("Failed:", error);
    }

    console.log("Deleted the user from the modal");
    setIsModalOpen(false);
    alert("You have successfully deleted the user");
  };

  const reviewList = reviews.map((review) => (
    <div className="row">
      <div className="col-md-6" style={{ paddingTop: 17 }}>
        <img
          className="rounded-circle"
          src={review.image}
          width={87}
          height={83}
          style={{ marginTop: "-14px" }}
        />
        <div
          className="card"
          style={{
            marginLeft: 119,
            marginBottom: 0,
            paddingBottom: 0,
            paddingTop: 0,
            marginTop: "-85px",
          }}
        >
          <div
            className="card-body"
            style={{
              marginBottom: "-2px",
              marginLeft: 52,
              marginRight: 74,
            }}
          >
            <h4 className="card-title" style={{ marginLeft: "-56px" }}>
              <p>{review.author}</p>
            </h4>

            <p className="card-text" style={{ marginLeft: "-56px" }}>
              {review.comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  const handleShowAllReviews = () => {
    setIsModalOpen(true);
  };
  const handlePastBookings = (event) => {
    event.preventDefault();
    navigate("/PastBookingsPage?userid=" + userId);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const goToAddLandmark = (event) => {
    event.preventDefault();
    navigate("/AddLandmark?userid=" + userId);
  };

  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("JohnDoe");
  const [profileName, setProfileName] = useState("Alice Thompson");
  const [email, setEmail] = useState("alice.thompson@gmail.com");
  const [description, setDescription] = useState(
    "Hi! My  name is Alice and I currently live in Spain"
  );
  const [password, setPassword] = useState("******");
  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Perform save/update logic here
    setEditMode(false);
  };

  const handleFileUpload = () => {
    // Handle file upload logic here
    if (selectedFile) {
      // Perform actions with the selected file
      console.log("Selected file:", selectedFile);
    } else {
      // No file selected
      console.log("No file selected");
    }
  };

  const handlePastTransactions = (event) => {
    event.preventDefault();
    navigate("/PastTransactionsPage?userid=" + userId);
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>About Us - Brand</title>
      <link
        rel="stylesheet"
        href="customerAssets/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
      />
      <link
        rel="stylesheet"
        href="./customerAssets/fonts/fontawesome-all.min.css"
      />
      <link rel="stylesheet" href="./customerAssets/css/baguetteBox.min.css" />
      <link
        rel="stylesheet"
        href="./customerAssets/css/Banner-Heading-Image-images.css"
      />
      <link rel="stylesheet" href="./customerAssets/css/vanilla-zoom.min.css" />

      <Navbar></Navbar>

      <main className="page">
        <section className="clean-block about-us">
          <div className="container">
            {user.map((item, index) => (
            <div key={index} className="row text-bg-light">
              <div
                className="col-md-6 col-lg-4 text-center"
                style={{
                  marginTop: 40,
                  paddingTop: 19,
                  paddingRight: 32,
                  paddingLeft: 31,
                }}
              >
                <h4
                  className="fs-2"
                  style={{ paddingBottom: 0, marginBottom: 28 }}
                >
                  <strong> </strong>
                </h4>
                <div className="card">
                  <div className="card-body">
                    <h6 className="text-muted card-subtitle mb-2" />

                    <img
                      className="rounded-circle d-lg-flex align-items-lg-start"
                      src="customerAssets/img/istockphoto-1225524274-612x612.jpg"
                      width={126}
                      height={111}
                      style={{ paddingLeft: 0, marginLeft: 90 }}
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
                      &nbsp; &nbsp;&nbsp;
                      <span style={{ backgroundColor: "rgb(248, 249, 250)" }}>
                        {item['user-rating']} rating average
                      </span>
                      <br />
                      <br />
                    </p>
                  </div>
                </div>

                <div
                  className="card-body"
                  style={{
                    paddingBottom: 38,
                    marginRight: "-276px",
                    paddingRight: 288,
                    marginBottom: "-31px",
                    paddingTop: 0,
                    marginTop: 20,
                    paddingLeft: 0,
                    marginLeft: "-2px",
                  }}
                ></div>
              </div>

              <div className="col-md-6 col-lg-8" style={{ marginTop: 40 }}>
                <h4
                  className="fs-2"
                  style={{ paddingBottom: 0, marginBottom: 28 }}
                >
                  <strong> </strong>
                </h4>
                <h4
                  className="fs-2"
                  style={{ paddingBottom: 0, marginBottom: 28 }}
                >
                  <strong> </strong>
                </h4>
                <h4
                  className="fs-2"
                  style={{ paddingBottom: 0, marginBottom: 28 }}
                >
                  <strong> </strong>
                </h4>
                <h4
                  className="fs-2"
                  style={{ paddingBottom: 0, marginBottom: 28 }}
                >
                  <strong> </strong>
                </h4>
                <h4
                  className="fs-2"
                  style={{ paddingBottom: 0, marginBottom: 28 }}
                >
                  <strong>Delete User?</strong>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    style={{ marginLeft: 10 }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    Delete User
                  </button>
                  <Modal
                    show={isModalOpen}
                    onHide={() => setIsModalOpen2(false)}
                  >
                    <Modal.Header>
                      <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Are you sure you want to delete the user?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" 
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button variant="danger" onClick={() => handleDeleteUserModal(item['user-id'])}>
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
                            {item['name']} {item['surname']}
                          </span>
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
                        <h6
                          className="text-muted card-subtitle mb-2"
                          style={{ marginRight: 0 }}
                        >
                          <span style={{ color: "rgb(5, 6, 7)" }}>{item['e-mail']}</span>
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

                        <h6
                          className="text-muted card-subtitle mb-2"
                          style={{ marginRight: 0 }}
                        >
                          <span style={{ color: "rgb(5, 6, 7)" }}>
                            {password}
                          </span>
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
                          <strong>Description</strong>
                        </h5>

                        <h6
                          className="text-muted card-subtitle mb-2"
                          style={{ marginRight: 0 }}
                        >
                          <span style={{ color: "rgb(5, 6, 7)" }}>
                            {item['description']}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
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
              <strong>Reviews</strong>
            </h2>
          </div>
          <div className="container">
            <div className="row">
              {reviews.map((review) => (
                <div className="col-md-6" style={{ paddingTop: 17 }}>
                  <img
                    className="rounded-circle"
                    src={review.image}
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
                      marginTop: "-101px",
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        marginBottom: "-2px",
                        marginLeft: 52,
                        marginRight: 74,
                      }}
                    >
                      <h4
                        className="card-title"
                        style={{ marginLeft: "-56px" }}
                      >
                        <p>{review.author}</p>
                      </h4>

                      <p className="card-text" style={{ marginLeft: "-56px" }}>
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-6" style={{ paddingTop: 8 }}>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={handleShowAllReviews}
                  style={{
                    paddingTop: 7,
                    paddingLeft: 2,
                    marginLeft: 119,
                    marginTop: 14,
                  }}
                >
                  Show All Reviews
                </button>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={() => setIsModalOpen(false)}
                  contentLabel="All Reviews"
                  style={{
                    content: {
                      height: "600px",
                      marginTop: "100px",
                    },
                  }}
                >
                  <h4
                    className="fs-2"
                    style={{ paddingBottom: 0, marginBottom: 28 }}
                  >
                    <strong> </strong>
                  </h4>
                  <h2>All Reviews</h2>
                  <ul>{reviewList}</ul>
                </Modal>
              </div>
             
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
// Custom theme code

export default AdminViewUser;
