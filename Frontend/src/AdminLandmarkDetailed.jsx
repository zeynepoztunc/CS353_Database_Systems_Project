import React, {useEffect, useState} from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';
import { Navbar } from './Navbar.jsx';
import { Link } from "react-router-dom";
import axios from "axios";
import {  useNavigate } from 'react-router-dom';

export const AdminLandmarkDetailed = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
  //const [landmarkId, setLandmarkId] = useState(0);
  const [landmark, setLandmark] = useState([]);

  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const landmarkId = urlParams.get('landmarkId');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

  const fetchLandmark = async () => {
    try {
      const response = await axios.get('http://localhost:8080/singleLandmarkForm?landmarkId=' + landmarkId);
      console.log(response.data);
      setLandmark(response.data);
    } catch (error) {
      console.error('Failed:', error);
      setLandmark([]);
    }
  };

  useEffect(() => {
    fetchLandmark().then(r => console.log('fetched data'));
  }, []);

  const deleteLandmarkSugg = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete('http://localhost:8080/deleteLandmarkSugg?landmarkId=' + landmarkId);
      console.log(response.data);
      if(response.data == 0){
        alert("Error Deleting Landmark Suggestion Form");
      }
      else if (response.data == 1){
        navigate('/AdminLandmarkSuggestions');
        alert("Landmark suggestion deleted successfully!");
      }
    } catch (error) {
      console.error('Failed:', error);
    }
  }

  const addLandmarkSugg = async (e) => {
      e.preventDefault();
    try {
      const response = await axios.delete('http://localhost:8080/addLandmarkSugg?landmarkId=' + landmarkId);
      console.log(response.data);
      if(response.data == 0){
        alert("Error Adding Landmark suggestion as official");
      }
      else if (response.data == 1){
        navigate('/AdminLandmarkSuggestions');
        alert("Landmark suggestion added successfully!");
      }
    } catch (error) {
      console.error('Failed:', error);
    }
  }
    
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
          <h2 className="text-info">Landmark Suggestion Form</h2>
          <p>Landmark Suggestion Form submitted by users.</p>
        </div>
        <div className="block-content">
          {landmark.map((item, index) => (
          <div key={index} className="product-info">
            <div className="row">
              <div className="col-md-6">
                <div className="gallery">
                  <div id="product-preview" className="vanilla-zoom">
                    <div className="zoomed-image">
                      <img
                        width={468}
                        height={364}
                        src="adminAssets/img/scenery/turkey-alanya-top-things-to-do-explore-alanya-castle.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-6">
                <div className="info">
                  <h3>{item['landmark-name']}</h3>
                  <div className="price">
                    <h3>Submitted: {item['name']} {item['surname']}</h3>
                  </div>
                  <div className="summary">
                    <h3>Message</h3>
                    <p>
                      {item['description']}
                    </p>
                    <h3>Location</h3>
                    <p style={{ fontSize: "20.4px" }}>
                      Latitude:&nbsp;
                      <span style={{ color: "rgb(32, 33, 36)" }}>
                        {item['latitude']} N
                      </span>
                    </p>
                    <p style={{ fontSize: "20.4px" }}>
                      Longitude:&nbsp;
                      <span style={{ color: "rgb(32, 33, 36)" }}>
                        {item['longitude']} E
                      </span>
                    </p>
                    <div>
                      <button
                        className="btn btn-primary"
                        type="button"
                        style={{ marginLeft: 10, background: "green" }}
                        onClick={addLandmarkSugg}
                      >
                        Add
                      </button>
                      <button
                        className="btn btn-primary"
                        type="button"
                        style={{ marginLeft: 20, background: "red" }}
                        onClick={deleteLandmarkSugg}
                      >
                        Delete
                      </button>
                    </div>
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
</>
        
    );

    
}


export default AdminLandmarkDetailed;