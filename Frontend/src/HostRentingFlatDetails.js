import React, {useEffect, useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {NavLink} from "react-bootstrap";

const  HostRentingRoomDetails= () => {
    const [selectedCounts, setSelectedCounts] = useState({});
    const navigate = useNavigate();

    const handleDropdownItemClick = (dropdownId, value) => {
        setSelectedCounts({ ...selectedCounts, [dropdownId]: value });
      };
    
      const getButtonText = (dropdownId) => {
        if (dropdownId === 'Flat Type') {
          return selectedItems['Flat Type'] || 'Select Flat Type';
        }
        else{
          return selectedCounts[dropdownId] || 'Count';
        }
  
      };
      const handleDropdownItemClickType = (itemType, value) => {
        setSelectedItems((prevSelectedItems) => ({
          ...prevSelectedItems,
          [itemType]: value,
        }));
      };

  const [isValid, setIsValid] = useState(true);
  const [fileNames, setFileNames] = useState([]);
  const handleFileUpload = (event) => 
  {
    const files = event.target.files;
    if (files.length < 3) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    const names = [];

    for (let i = 0; i < files.length; i++) {
      names.push(files[i].name);
    }
    setFileNames(names);
  };

  const [flatName, setFlatName] = useState("");
  const [flatSize, setFlatSize] = useState(0);
  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [flatType, setFlatType] = useState("");
  const [numberOfBathrooms, setNumberOfBathrooms] = useState(0);
  const [bedCount, setBedCount] = useState(0);
  const [guestCount, setGuestCount] = useState(0);
  const [description, setDescription] = useState("");
  const [earthquakeSupport, setEarthquakeSupport] = useState(false);
  const [couchsurfing, setCouchsurfing] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const hostId = urlParams.get('userid');
  const rentalId = urlParams.get('rentalId');

  const handleFlatDescriptionChange = event => setDescription(event.target.value);
  const handleEarthquakeSupportChange = event => setEarthquakeSupport(event.target.checked);
  const handleCouchsurfingChange = event => setCouchsurfing(event.target.checked);

  const [amenities, setAmenities] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    fetchAmenities().then((data) => {
      setAmenities(data);
    });
  }, []);

  const fetchAmenities = async () => {
    try
    {
      const response = await axios.get('http://localhost:8080/amenities');
      return response.data;
    } catch (error)
    {
      console.error('Failed to fetch amenities:', error);
      return [];
    }
  };

  const handleClick = (amenity) => {
    if (selectedItems.includes(amenity)) {
      // If amenity is already selected, remove it
      setSelectedItems(selectedItems.filter((item) => item !== amenity));
    } else {
      // If amenity is not selected, add it
      setSelectedItems([...selectedItems, amenity]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Flat Name: " + flatName);
    console.log("Flat Size: " + flatSize);
    console.log("Number of Rooms: " + numberOfRooms);
    console.log("Flat Type: " + flatType);
    console.log("Number of Bathrooms: " + numberOfBathrooms);
    console.log("Bed Count: " + bedCount);
    console.log("Guest Count: " + guestCount);
    console.log("Description: " + description);
    console.log("Earthquake Support: " + earthquakeSupport);
    console.log("Couchsurfing: " + couchsurfing);
    console.log("Host ID: " + hostId);
    console.log("Rental ID: " + rentalId);

    const formData = {
        rentalName: flatName,
        areaInM2: flatSize,
        numOfRoomsInFlat: numberOfRooms,
        flatType: flatType,
        numOfBathrooms: numberOfBathrooms,
        numOfBedsInFlat: bedCount,
        guestNo: guestCount,
        description: description,
        earthquakeSupport: earthquakeSupport,
        couchsurfing: couchsurfing,
        hostId: hostId,
        rentalId: rentalId
    };

    const amenitiesData = {
      rentalId: rentalId,
      amenities: amenities.map((amenity) => {
        const amenityData = {};
        amenityData[amenity.toString().toLowerCase().replace(" ","")] = selectedItems.includes(amenity) ? 1 : 0;
        return amenityData;
      }),
    };

    const photographsData = new FormData();
    photographsData.append("rentalId", rentalId);

    fileNames.forEach((file, index) => {
      photographsData.append("photographs", file);
    });

// Now, photographsData is ready to be sent in a fetch or axios request.


    try {
      console.log(amenitiesData);
      console.log(formData);
      const amenitiesResponse = await axios.post('http://localhost:8080/updateRoomDetails/amenities', amenitiesData);
      const response = await axios.post('http://localhost:8080/UpdateFlatDetails', formData);
      //const photographsResponse = await axios.post('http://localhost:8080/photographs/upload', photographsData);
      console.log(response.data);
      console.log(amenitiesResponse.data);
      //console.log(photographsResponse.data);
      navigate('/HostRentingFlatLocation?hostId=' + hostId + '&rentalId=' + rentalId);
    }
    catch (error)
    {
      console.error('Failed to submit form: ', error);
    }

  };

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

  const gotoProfilePage = (event) => {
    event.preventDefault();
    navigate('/HostRentingProfilePage?userid=' + hostId);
  }


    return (
      <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Register - WeRent</title>
  <link rel="stylesheet" href="./hostAssets/bootstrap/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
  />
  <link rel="stylesheet" href="./hostAssets/Font Awesome 5 Brands.css" />
  <link rel="stylesheet" href="./hostAssets/Font Awesome 5 Free.css" />
  <link rel="stylesheet" href="./hostAssets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="./hostAssets/fonts/font-awesome.min.css" />
  <link rel="stylesheet" href="./hostAssets/fonts/fontawesome5-overrides.min.css" />
  <link rel="stylesheet" href="./hostAssets/baguetteBox.min.css" />
  <link rel="stylesheet" href="./hostAssets/Bootstrap-4-Calendar-No-Custom-Code.css" />
  <link rel="stylesheet" href="./hostAssets/Drag--Drop-Upload-Form.css" />
  <link rel="stylesheet" href="./hostAssets/Drag-Drop-File-Input-Upload.css" />
  <link rel="stylesheet" href="./hostAssets/pop-up-boxes.css" />
  <link rel="stylesheet" href="./hostAssets/vanilla-zoom.min.css" />
  <link rel="stylesheet" href="./hostAssets/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://cdn.reflowhq.com/v2/toolkit.min.css" />
  <link rel="stylesheet" href="./hostAssets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="./hostAssets/css/baguetteBox.min.css" />
  <link rel="stylesheet" href="./hostAssets/css/Banner-Heading-Image-images.css" />
  <link rel="stylesheet" href="./hostAssets/Button-modal-ecommerce-bs4_modal.min.css" />
  <link rel="stylesheet" href="./hostAssets/Button-modal-ecommerce-styles.css" />
  <link rel="stylesheet" href="./hostAssets/Hover-Button-1.css" />
  <link rel="stylesheet" href="./hostAssets/bootstrap/css/bootstrap.min-1.css" />
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
                  <NavLink onClick={gotoProfilePage} className="nav-link">
                    <i className="fas fa-user" style={{ fontSize: 24 }} />
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
  <main className="page registration-page">
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Now, be specific!</h2>
          <p>
          Your flat's location is not the only decisive feature for customers. Common areas as well as features of the flat are important. Be catchy!
          </p>
        </div>
        <form
          className="text-start d-block float-none"
          style={{ textAlign: "left", display: "block" }}
          onSubmit={handleSubmit}
        >
          <h1 className="fs-1 fw-bolder text-center">Details of your flat</h1>
          <figure className="figure" />
          <span />
          <div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Flat  name&nbsp;
            </label>
            <input className="form-control" type="text"  value={flatName}
                   onChange={(e) => setFlatName(e.target.value)}/>
          </div>
          <div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Flat size ( in sqm)
            </label>
            <input className="form-control" type="text" value={flatSize}
                   onChange={(e) => setFlatSize(e.target.value)} />
          </div>
          <div>
            <span className="text-white-50">Text</span>
          </div>
          <div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Number of Rooms
            </label>
            <div className="dropdown">
              <button
                 className="btn btn-light btn-sm dropdown-toggle text-center"
                 aria-expanded="false"
                 data-bs-toggle="dropdown"
                 type="button"
              >
                {numberOfRooms}
              </button>
              <div className="dropdown-menu" >
              {Array.from({ length: 10 }, (_, i) => (
            <a
              key={i}
              className="dropdown-item"
              href="#nogo"
              onClick={() => {
                handleDropdownItemClick('Number of Rooms', (i + 1).toString());
                setNumberOfRooms((i + 1).toString());
              }}
            >
              {i + 1}
            </a>
          ))}
              </div>
            </div>
            <div>
              <span className="text-white-50">Text</span>
            </div>
          </div>
          <div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Flat Type
            </label>
            <div className="dropdown">
              <button
                className="btn btn-light btn-sm dropdown-toggle text-center"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"
              >
              {flatType}
              </button>
              <div className="dropdown-menu">
              {['Apartment', 'Villa'].map((flatType) => (
      <a
        key={flatType}
        className="dropdown-item"
        href="#nogo"
        onClick={() => {
          handleDropdownItemClick('Flat Type', flatType);
          setFlatType(flatType);
        }}
      >
        {flatType}
      </a>
    ))}
              </div>
            </div>
            <div>
              <span className="text-white-50">Text</span>
            </div>
          </div>
          <div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Number of Bathrooms
            </label>
            <div className="dropdown">
              <button
                className="btn btn-light btn-sm dropdown-toggle text-center"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"
              >
                {numberOfBathrooms}
              </button>
              <div className="dropdown-menu">
              {Array.from({ length: 6 }, (_, i) => (
            <a
              key={i}
              className="dropdown-item"
              href="#nogo"
              onClick={() => {
                handleDropdownItemClick('Number of Bathrooms', (i + 1).toString());
                setNumberOfBathrooms((i + 1).toString());
              }}
            >
              {i + 1}
            </a>
          ))}
              </div>
            </div>
            <div>
              <span className="text-white-50">Text</span>
            </div>
          </div>
          <div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Bed(s) in the Flat
            </label>
            <div />
            <div className="dropdown">
              <button
                className="btn btn-light btn-sm dropdown-toggle text-center"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"
              >
                {bedCount}
              </button>
              <div className="dropdown-menu">
              {Array.from({ length: 12 }, (_, i) => (
            <a
              key={i}
              className="dropdown-item"
              href="#nogo"
              onClick={() => {
                handleDropdownItemClick('Bed(s) in the Room', (i + 1).toString());
                setBedCount((i + 1).toString());
              }}
            >
              {i + 1}
            </a>
          ))}
              </div>
            </div>
            <div>
              <span className="text-white-50">Text</span>
              <div>
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Guest Limit in Person
                </label>
                <div className="dropdown">
                  <button
                    className="btn btn-light btn-sm dropdown-toggle text-center"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    type="button"
                  >
                    {guestCount}
                  </button>
                  <div className="dropdown-menu">
                  {Array.from({ length: 12 }, (_, i) => (
            <a
              key={i}
              className="dropdown-item"
              href="#nogo"
              onClick={() => {
                handleDropdownItemClick('Guest Limit in Person', (i + 1).toString());
                setGuestCount((i + 1).toString());
              }}
            >
              {i + 1}
            </a>
          ))}
                  </div>
                </div>
                <div>
                  <span className="text-white-50">Text</span>
                </div>
              </div>
            </div>
            <div />
            <div>
              <label className="form-label" style={{ fontWeight: "bold" }}>
                Flat description
              </label>
              <textarea className="form-control" value={description} onChange={handleFlatDescriptionChange} />
            </div>
            <span style={{ color: "rgba(33,37,41,0.01)" }}>Text</span>
            <div>
              <label className="form-label" style={{ fontWeight: "bold" }}>
                Upload at least 1 photograph about your room
              </label>
              <div className="files color form-group mb-3">
                <input
                  className="form-control"
                  type="file"
                  multiple="true"
                  name="files"
                  onChange={handleFileUpload}
                />
              </div>
              {!isValid && (
        <div style={{ textAlign: "left", color: "red" }}>
          Please upload at least 1 photograph.
        </div>
      )}
       <div style={{ textAlign: "left" }}>
          {fileNames.length > 0 && (
            <div>
              <h4>Uploaded files:</h4>
              <ul>
                {fileNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
            </div>
            <div />
            <div>
              <h2 className="fs-2 fw-bold text-center">Additional Features</h2>
              <span className="text-white-50">Text</span>
              <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-1"
                    checked={earthquakeSupport}
                    onChange={handleEarthquakeSupportChange}
                />
                <label
                    className="form-check-label fs-4 fw-semibold text-start"
                    htmlFor="formCheck-1"
                >
                  Free accommodation for earthquake victims&nbsp;
                </label>
              </div>
              <label className="form-label">
                Millions of earthquake victims in Turkey are now homeless. You
                can rent your room to them free!
              </label>
              <span className="text-white-50">Text</span>
              <div className="form-check text-start bg-white">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-2"
                    checked={couchsurfing}
                    onChange={handleCouchsurfingChange}
                />
                <label
                    className="form-check-label fs-4 fw-semibold text-start"
                    htmlFor="formCheck-2"
                >
                  Couchsurfing
                </label>
              </div>
              <label className="form-label">
                &nbsp;Use Couchsurfing to find a place to stay or share your
                home and hometown with travelers and have fun!
              </label>
              <div className="col-md-12" style={{ textAlign: "center" }}>
                <label
                  className="col-form-label"
                  style={{ fontWeight: "bold", fontSize: 24 }}
                >
                  Select Amenities for this property:
                </label>
              </div>
              <div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                    <tr>
                      <th>Amenity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {amenities.map((amenity, index) => (
                        <tr
                            key={index}
                            onClick={() => handleClick(amenity)}
                            className={selectedItems.includes(amenity) ? 'selected' : ''}
                            style={{ cursor: 'pointer' }}
                        >
                          <td>{amenity}</td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                  <div>
                    <h4><b>Selected Amenities:</b></h4>
                    <ul>
                      {selectedItems.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
</div>
            <span className="text-white-50">Text</span>
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
          <div />
        </form>
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

export default HostRentingRoomDetails;
