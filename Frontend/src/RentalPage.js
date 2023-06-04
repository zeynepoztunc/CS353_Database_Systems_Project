import React, {useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react'; 
import {addDays, format, parseISO, subDays} from "date-fns";
import DropdownMenu from './DropdownMenu';
import {Circle, GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import NavBar from './NavBar';
import Modal from 'react-modal';
import axios from 'axios';
import {FaCouch, FaMountain} from 'react-icons/fa';



const  RentalPage= () => {
    let date = new Date();

  const [selectedCounts, setSelectedCounts] = useState({});
  const [selectedItems, setSelectedItems] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const avgRating=useState(4.5);
  const avgCleanlinessRating=useState(4.5);
  const avgCommunicationRating=useState(4.25);
  const avgAccuracyRating=useState(4);
  const avgCheckinRating=useState(5);
  const avgValueRating=useState(4.5);
  const avgLocationRating=useState(4.75);
  const numOfReview=useState(15);
  const [rentalName, setRentalName] = useState('');
  const [hostFullName, setHostFullName] = useState('');
  const [isFavorited, setIsFavorited] = useState(false);
  const [imagePath,setImagePath] = useState("");


  const [dailyPrice, setPrice] = useState(0);
  const [earthquakeSupport, setEarthquakeSupport] = useState(false);
  const [guestNo, setGuestNo] = useState(0);
  const [areaInM2, setAreaInM2] = useState(0);
  const [description, setDescription] = useState('');
  const [numOfBeds, setNumOfBeds] = useState(0);
  const [location, setLocation] = useState({lat: 0.0, lng: 0.0});
  const [amenities, setAmenities] = useState([]);
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [cancellationRefund, setcancellationRefund] = useState(0);
  const [couchsurfing, setCouchsurfing] = useState(false);
  const [hostSelectedStartDate, setHostSelectedRentalStartDate] = useState(date);
  const [hostSelectedEndDate, setHostSelectedRentalEndDate] = useState(date);
  const [earliestcheckin, setEarliestCheckin] = useState("00:00:00");
  const [latestcheckout, setLatestCheckout] = useState("00:00:00");
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(date);
  const [selectedNumber, setSelectedNumber] = useState(1);
  let price = 0;



  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const userIdString = urlParams.get('userid');
  const rentalIdString = urlParams.get('rentalId');



  const calculatePrice = () => {
    const start = startDate;
    const end = endDate;
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    price = dailyPrice * diffDays;
    if (earthquakeSupport === true) {
      price = 0;
    }
    console.log(price);
    return price;
  }

  const calculateDays = () => {
    const start = startDate;
    const end = endDate;
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  const goToShoppingCartPage = ( event) => {
    event.preventDefault();
    navigate( '/ShoppingCart?userid='  + userIdString);
  };
  const fetchRentalDetails = async (rentalIdString) => {
    try {
      const response = await axios.get(`http://localhost:8080/Rentals/getRentalsRentalId?rentalId=${rentalIdString}`);
      console.log(response.data);
      console.log( "earthquake: " + response.data.earthquakeSupport);
      return response.data;
    } catch(error) {
      console.error('Error fetching rental details:', error);
    }
  };

  const fetchHostDetails = async (rentalIdString) => {
    try {
      const response = await axios.get(`http://localhost:8080/Customers/hostInfo?rentalId=${rentalIdString}`);
      console.log(response.data);
      return response.data;
    } catch(error) {
      console.error('Error fetching host details:', error);
    }
  }

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




  useEffect(() => {
    fetchRentalDetails(rentalIdString)
        .then(rental => {
          console.log('fetched data');
          console.log(rental.rentalName);
          console.log(rental.hostId);
          console.log(rental.dailyPrice);
          console.log(rental.earthquakeSupport);
          console.log(rental.guestNo);
          console.log(rental.areaInM2);
          console.log(rental.description);
          console.log(rental.numOfBeds);
          console.log(rental.latitude);
          console.log(rental.longitude);
          console.log(rental.city);
          console.log(rental.province);
          console.log(rental.cancellationRefund);
          console.log(rental.numOfBathrooms);
          console.log(rental.couchsurfing);
          console.log(rental.earliestCheckInHour);
          console.log(rental.latestCheckOutHour);
          console.log(rental.imagePath);
          setImagePath(rental.imagePath);
          setRentalName(rental.rentalName);
          setPrice(rental.dailyPrice);
          setEarthquakeSupport(rental.earthquakeSupport);
          setGuestNo(rental.guestNo);
          setAreaInM2(rental.areaInM2);
          setDescription(rental.description);
          setNumOfBeds(rental.numOfBeds);
          setLocation({lat: rental.latitude, lng: rental.longitude});
          setCity(rental.city);
          setProvince(rental.province);
          setcancellationRefund(rental.cancellationRefund);
          setCouchsurfing(rental.couchsurfing);
          setEarliestCheckin(rental.earliestCheckInHour);
          setLatestCheckout(rental.latestCheckOutHour);
          console.log(rental.hostSelectedRentalStartDate);
          console.log(rental.hostSelectedRentalEndDate);
          rental.hostSelectedRentalStartDate = parseISO(rental.hostSelectedRentalStartDate, );
          rental.hostSelectedRentalEndDate = parseISO(rental.hostSelectedRentalEndDate);
          console.log(rental.hostSelectedRentalStartDate);
          console.log(rental.hostSelectedRentalEndDate);
          setHostSelectedRentalStartDate(rental.hostSelectedRentalStartDate);
          setHostSelectedRentalEndDate(rental.hostSelectedRentalEndDate);

          return fetchHostDetails(rental.rentalId);
        })
        .then(host => {
          console.log('fetched host data');
          console.log(host.name);
          console.log(host.surname);
          setHostFullName(host.name + ' ' + host.surname);

          return fetchAmenities();
        })
        .then(amenities => {
          console.log(amenities);
          setAmenities(amenities);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }, [rentalIdString]);
  // Include dependencies your effect uses

    const handleReservation = async (event) => {
    event.preventDefault();
    price = calculatePrice();
    const reservation = {
        rentalId: rentalIdString,
        customerId: userIdString,
        reservationStartDate: startDate,
        reservationEndDate: endDate,
        price: price,
        numberOfGuests: guestNo,
        stayOfDuration: calculateDays()
    };

    try {
        const response = await axios.post('http://localhost:8080/Reservations/addReservation', reservation);
        console.log(response.data);
        navigate('/ShoppingCart?userid=' + userIdString);
    }
    catch (error) {
        console.error('Error:', error);
    }
    console.log(reservation);
    }
  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };
  const options = Array.from({ length: 10 }, (_, index) => index + 1);
  const [reviews]= useState( [
    { id: 1, author: 'Jennifer ', comment: 'The place was just perfect.', image: "customerAssets/img/photo-1596813362035-3edcff0c2487.jpg" },
    { id: 2, author: 'Natalie ', comment: 'I really enjoyed my stay!', image: "customerAssets/img/images.jpg" },
    { id: 3, author: 'Jonathan', comment: 'Lovely place with a great view.', image: "customerAssets/img/profile.webp" },
    { id: 4, author: 'Elif', comment: 'Wonderful place...', image: "customerAssets/img/profile.webp" },
    { id: 5, author: 'Chris', comment: 'Everything was perfect!', image: "customerAssets/img/photo-1584043720379-b56cd9199c94.jpg" },
    { id: 4, author: 'Nate', comment: 'This place was amazing!', image: "customerAssets/img/dark-haired-man-in-brown-leather-jacket.jpg" }

  ]);

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
                      marginTop: "-85px"
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
  const amenitiesList = reviews.map((review) => (
    <div></div>
  ));

  const containerStyle = {
    width: '600px',
    height: '360px',
    marginLeft:'240px'
  };


  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  };
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleDropdownItemClick = (dropdownId, value) => {
    setSelectedCounts({ ...selectedCounts, [dropdownId]: value });
  };
  const getButtonText = (dropdownId) => {
    if (dropdownId === 'Flat Type') {
      return selectedItems['Flat Type'] || 'Select Flat Type';
    }
    else{
      return selectedCounts[dropdownId] || 'Guest Number';
    }

  };

  const reservedDate=new Date(2023, 5, 18);
  return (
    <container>
    <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Product - Brand</title>
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
  <main className="page product-page">
    <section className="clean-block clean-product dark">
      <div className="container">
        <div className="block-content">
          <div className="product-info">
            <div className="row">
              <div className="col-md-6">
                <div className="gallery">
                  <div id="product-preview" className="vanilla-zoom">
                    <div className="zoomed-image">
                      <img
                        width={405}
                        height={299}
                        src={imagePath}
                      />
                    </div>
                    <div className="sidebar">
                      <img
                        className="img-fluid d-block small-preview"
                        src="./customerAssets/img/tech/9f3826b0-98e6-469b-bb92-30d517fc5d50.webp"
                      />
                      <img
                        className="img-fluid d-block small-preview"
                        src="./customerAssets/img/tech/c4ac305f-878c-43a5-8638-3007c262d529.webp"
                      />
                      <img
                        className="img-fluid d-block small-preview"
                        src="./customerAssets/img/tech/37fe2a4e-d234-4443-92b2-19b65e1bb356.webp"
                      />
                      <img
                        className="img-fluid d-block small-preview"
                        src="./customerAssets/img/tech/0892a134-a933-42e0-bb48-fd91b6c915ca.webp"
                      />
                      <img
                        className="img-fluid d-block small-preview"
                        src="./customerAssets/img/tech/2383b7af-246a-48e0-8c83-b6ac69856d46.webp"
                      />
                      <img
                        className="img-fluid d-block small-preview"
                        src="./customerAssets/img/tech/0f8870df-97d8-4de6-a8ec-203c64785273.webp"
                      />
                    </div>
                  </div>
                </div>
                  <div style={{
                      padding: '10px',
                      margin: '10px 0',
                      borderRadius: '5px',
                      backgroundColor: '#f8f9fa',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                      color: 'rgb(34, 34, 34)',
                      fontSize: 16
                  }}>
                      <strong>Property Description:</strong>
                      <p style={{ marginTop: '10px' }}>{description}</p>
                  </div>

                  <div style={{
                      display: 'flex',
                      padding: '10px',
                      margin: '10px 0',
                      borderRadius: '5px',
                      backgroundColor: '#f8f9fa',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                      color: 'rgb(34, 34, 34)',
                      fontSize: 16
                  }}>
                      <strong>Can accommodate up to {guestNo} people</strong>
                  </div>

                  <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      color: 'rgb(34, 34, 34)',
                      fontSize: 16,
                      padding: '10px',
                      borderRadius: '5px',
                      backgroundColor: '#f8f9fa',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                      margin: '10px 0'
                  }}>
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                          <i className="fas fa-bed" style={{ marginRight: '5px', color: '#007bff' }} />
                          <strong> {numOfBeds} beds </strong>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                          <i className="fas fa-border-all" style={{ marginRight: '5px', color: '#007bff' }} />
                          <strong> Total Area: {areaInM2} m2 </strong>
                      </div>
                  </div>

                  <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      color: 'rgb(34, 34, 34)',
                      fontSize: 16,
                      padding: '10px',
                      borderRadius: '5px',
                      backgroundColor: '#f8f9fa',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                      margin: '10px 0'
                  }}>
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                          <i className="fas fa-clock" style={{ marginRight: '5px', color: '#007bff' }} />
                          <strong> earliest check-in hour: {earliestcheckin} </strong>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                          <i className="fas fa-clock" style={{ marginRight: '5px', color: '#007bff' }} />
                          <strong> latest check-out hour: {latestcheckout} </strong>
                      </div>
                  </div>
                  <p>
                      <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '10px',
                          margin: '10px 0',
                          borderRadius: '5px',
                          backgroundColor: '#f8f9fa',
                          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)'
                      }}>
                          <i className="fas fa-exclamation" style={{ fontSize: 16, color: '#dc3545', marginRight: '10px' }} />
                          <strong>
    <span style={{ color: "rgb(34, 34, 34)" }}>
      Cancellation Refund Fee: {cancellationRefund} $
    </span>
                          </strong>
                      </div>

                  </p>

              </div>
              <div className="col-auto col-md-6 col-lg-6 text-start">
                <div className="info">
                  <h4>
                    <strong>
                      {rentalName}&nbsp; &nbsp;&nbsp;
                    </strong>
                    <i
                       className={`far fa-heart ${isFavorited ? 'fas' : ''} text-end text-danger justify-content-end`}
                       style={{ fontSize: 27 }}
                       onClick={handleFavoriteClick}
                    />
                  </h4>
                  <div className="text-start rating">
                    <p
                      style={{
                        marginBottom: "-4px",
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginRight: 113
                      }}
                    >
                      <img src="./customerAssets/img/star.svg" />
                      <img src="./customerAssets/img/star.svg" />
                      <img src="./customerAssets/img/star.svg" />
                      <img src="./customerAssets/img/star.svg" width={18} height={19} />
                      <img src="./customerAssets/img/star-half-empty.svg" />
                      <span style={{ color: "rgb(0, 0, 0)" }}>&nbsp;{avgRating}</span>
                    </p>
                    <p>
                      <span
                        style={{
                          textDecoration: "underline",
                          color: "rgb(0, 0, 0)"
                        }}
                      >
                        {numOfReview} reviews
                      </span>
                    </p>
                    <p>
                      <span
                          style={{
                            textDecoration: "italic",
                            color: "rgb(0, 0, 0)"
                          }}
                      >
                        city: <strong>{city}</strong> , district: <strong>{province}</strong>
                      </span>
                    </p>
                    <div className="col">
                      <div />
                    </div>
                    <h3 />
                    <p
                        className="fs-6"
                        style={{
                          marginBottom: "-4px",
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          marginRight: 113
                        }}
                    >
                        <span style={{ color: earthquakeSupport ? "green" : "red" }}>
    <FaMountain style={{ marginRight: "10px" }} />
                          {earthquakeSupport ? "Earthquake support" : "No earthquake support"}
  </span>
                    </p>
                      <p
                          className="fs-6"
                          style={{
                              marginBottom: "-4px",
                              paddingRight: 0,
                              paddingTop: 0,
                              paddingBottom: 0,
                              marginRight: 113
                          }}
                      >
                        <span style={{ color: couchsurfing ? "green" : "red" }}>
    <FaCouch style={{ marginRight: "10px" }} />
                            { couchsurfing ? "CouchSurfing: Yes" : "CouchSurfing: No"}
  </span>
                      </p>
                  </div>
                  <div className="price">
                    <h3>${dailyPrice} /night</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">select dates</h5>
                              <DatePicker
                                  className="text card-subtitle mb-2"
                                  selected={startDate}
                                  onChange={(update) => {
                                      setStartDate(update[0]);
                                      setEndDate(update[1]);
                                  }}
                                  startDate={startDate}
                                  endDate={endDate}
                                  minDate={new Date(hostSelectedStartDate)} // convert the timestamp to milliseconds
                                  maxDate={new Date(hostSelectedEndDate)} // convert the timestamp to milliseconds
                                  selectsRange
                                  dateFormat="MM/dd/yyyy"
                              />
                          </div>
                        </div>
                      </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body text-start">
                                    <h5 className="card-title">Guest number</h5>
                                </div>
                            </div>
                            <div className="dropdown fancy-dropdown">
                                <button className="btn btn-secondary dropdown-toggle fancy-button" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="true">
                                    <strong>Guests: {selectedNumber}</strong>
                                </button>
                                <ul className="dropdown-menu fancy-menu" aria-labelledby="dropdownMenuButton">
                                    {[...Array(guestNo)].map((_, index) => (
                                        <li key={index} className="fancy-item">
                                            <a
                                                className="dropdown-item fancy-link"
                                                href="#nogo"
                                                onClick={() => setSelectedNumber(index + 1)} // Set the selected number on click
                                            >
                                                {index + 1}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                      <div
                        className="col"
                        style={{
                          marginTop: "-21px",
                          paddingTop: 0,
                          marginBottom: "-17px",
                          paddingBottom: 0
                        }}
                      >
                        <button
                          className="btn btn-danger text-start"
                          type="button"
                          onClick={handleReservation}
                          style={{
                            marginTop: 28,
                            paddingBottom: 10,
                            marginRight: "-11px",
                            marginLeft: 0
                          }}
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div />
                <h6>
                  <strong>
                    Hosted by {hostFullName}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                  </strong>
                  <img
                    className="rounded-circle"
                    width={93}
                    height={74}
                    src="./customerAssets/img/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-250nw-1548802709.webp"
                  />
                  <strong>&nbsp;</strong>
                </h6>
                <div className="row">
                  <div className="col">
                    <p className="text-warning">
                      <i
                        className="fas fa-award text-warning"
                        style={{ fontSize: 44 }}
                      />
                      &nbsp; superhost
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-info">
            <div>
              <ul className="nav nav-tabs" role="tablist" id="myTab">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    role="tab"
                    data-bs-toggle="tab"
                    id="description-tab"
                    href="#description"
                  >
                    Specifications
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    role="tab"
                    data-bs-toggle="tab"
                    id="reviews-tab"
                    href="#reviews"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
              <div
                  className="tab-pane fade show active description"
                  role="tabpanel"
                  id="description"
                >
              <p className="fs-4">
                    <strong>What this place offers</strong>
                </p>
                <div className="container my-5">
                  <div className="row">
                    {amenities.map((amenity, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                          <div className="card h-100 shadow-sm">
                            <div className="card-body">
                              <p className="fs-7 text-center">
                                <strong>{amenities[index]}</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
              </div>
              </div>

              <div className="tab-content" id="myTabContent">

                <p className="fs-4 text-center text-uppercase">
                  <strong>Rental Location</strong>
                </p>

                <LoadScript googleMapsApiKey="AIzaSyAdc1phOB8xRTsyJwEa3wBuAGPIg9ZFnJ4">
                  <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={location}
                      zoom={14}
                  >
                    <Circle
                        center={location}
                        radius={300}
                        options={{ fillColor: 'red', fillOpacity: 0.3, strokeColor: 'red' }}
                    />
                  </GoogleMap>
                </LoadScript>
                {/* <div
                  className="tab-pane fade show active description"
                  role="tabpanel"
                  id="description"
                >
                  <p className="fs-5">
                    <i className="fas fa-star text-warning" />
                    <strong>
                      &nbsp;
                      <span style={{ color: "rgb(0, 0, 0)" }}>{avgRating}&nbsp;</span>
                      <span style={{ color: "rgb(34, 34, 34)" }}>·&nbsp;</span>
                      <span style={{ color: "rgb(0, 0, 0)" }}>&nbsp;</span>
                      <span
                        style={{
                          textDecoration: "underline",
                          color: "rgb(0, 0, 0)"
                        }}
                      >
                        {numOfReview} reviews
                      </span>
                    </strong>
                  </p>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="row">
                        <div
                          className="col-lg-6 offset-lg-0"
                          style={{ marginTop: "-1px", marginBottom: 0 }}
                        >
                          <p className="fs-5">
                            <strong>Cleanliness ({avgCleanlinessRating}) </strong>
                          </p>
                        </div>
                        <div className="col">
                          <p className="fs-5">
                          {/* <span style={{ color: "rgb(0, 0, 0)" }}>
                              &nbsp; &nbsp;{avgCleanlinessRating}&nbsp;
                            </span> }
                            {[1, 2, 3, 4, 5].map((index) => (
                              <span key={index} onClick={() => handleCleanliness(index)}>
                                {index <= cleanlinessRating ? (
                                  <i className="fas fa-star text-warning" />
                                ) : index - 0.5 === cleanlinessRating ? (
                                  <i className="fas fa-star-half-alt text-warning" />
                                ) : (
                                  <i className="far fa-star text-warning" />
                                )}
                              </span>
                            ))}
      
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <div className="col-lg-6">
                              <p className="fs-5">
                                <strong>Communication ({avgCommunicationRating})</strong>
                              </p>
                            </div>
                            <div className="col">
                              <p className="fs-5">
                              {[1, 2, 3, 4, 5].map((index) => (
                              <span key={index} onClick={() => handleCommunication(index)}>
                                {index <= communicationRating ? (
                                  <i className="fas fa-star text-warning" />
                                ) : index - 0.5 === communicationRating ? (
                                  <i className="fas fa-star-half-alt text-warning" />
                                ) : (
                                  <i className="far fa-star text-warning" />
                                )}
                              </span>
                            ))}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          className="col"
                          style={{
                            paddingBottom: 0,
                            marginLeft: 0,
                            paddingTop: 0
                          }}
                        >
                          <p className="fs-5">
                            <strong>Accuracy ({avgAccuracyRating})</strong>
                          </p>
                        </div>
                        <div className="col">
                          <p className="fs-5">
                          {[1, 2, 3, 4, 5].map((index) => (
                              <span key={index} onClick={() => handleAccuracy(index)}>
                                {index <= accuracyRating ? (
                                  <i className="fas fa-star text-warning" />
                                ) : index - 0.5 === cleanlinessRating ? (
                                  <i className="fas fa-star-half-alt text-warning" />
                                ) : (
                                  <i className="far fa-star text-warning" />
                                )}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <p className="fs-5">
                            <strong>Check-in({avgCheckinRating})</strong>
                          </p>
                        </div>
                        <div className="col">
                          <p className="fs-5">
                          {[1, 2, 3, 4, 5].map((index) => (
                              <span key={index} onClick={() => handleCheckin(index)}>
                                {index <= checkinRating ? (
                                  <i className="fas fa-star text-warning" />
                                ) : index - 0.5 === checkinRating ? (
                                  <i className="fas fa-star-half-alt text-warning" />
                                ) : (
                                  <i className="far fa-star text-warning" />
                                )}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p className="fs-5">
                            <strong>Value({avgValueRating})</strong>
                          </p>
                        </div>
                        <div className="col">
                          <p className="fs-5">
                          {[1, 2, 3, 4, 5].map((index) => (
                              <span key={index} onClick={() => handleValue(index)}>
                                {index <= valueRating ? (
                                  <i className="fas fa-star text-warning" />
                                ) : index - 0.5 === valueRating ? (
                                  <i className="fas fa-star-half-alt text-warning" />
                                ) : (
                                  <i className="far fa-star text-warning" />
                                )}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p className="fs-5">
                            <strong>Location({avgLocationRating})</strong>
                          </p>
                        </div>
                        <div className="col">
                          <p className="fs-5">
                          {[1, 2, 3, 4, 5].map((index) => (
                              <span key={index} onClick={() => handleLocation(index)}>
                                {index <= locationRating ? (
                                  <i className="fas fa-star text-warning" />
                                ) : index - 0.5 === locationRating ? (
                                  <i className="fas fa-star-half-alt text-warning" />
                                ) : (
                                  <i className="far fa-star text-warning" />
                                )}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}




      <div className="tab-pane fade show active description" role="tabpanel" id="description">
        <p className="fs-5"><i className="fas fa-star text-warning" /><strong>&nbsp;<span style={{color: 'rgb(0, 0, 0)'}}>4,5&nbsp;</span><span style={{color: 'rgb(34, 34, 34)'}}>·&nbsp;</span><span style={{color: 'rgb(0, 0, 0)'}}>&nbsp;</span><span style={{textDecoration: 'underline', color: 'rgb(0, 0, 0)'}}>{numOfReview} reviews</span></strong></p>
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-lg-6 offset-lg-0" style={{marginTop: '-1px', marginBottom: '0px'}}>
                <p className="fs-5"><strong>Cleanliness</strong></p>
              </div>
              <div className="col">
                <p className="fs-5"><i className="fas fa-star text-warning" /><span style={{color: 'rgb(0, 0, 0)'}}>&nbsp; &nbsp;{avgCleanlinessRating}&nbsp;</span></p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-lg-6">
                    <p className="fs-5"><strong>Communication</strong></p>
                  </div>
                  <div className="col">
                    <p className="fs-5"><i className="fas fa-star text-warning" /><span style={{color: 'rgb(0, 0, 0)'}}>&nbsp; &nbsp;{avgCommunicationRating}&nbsp;</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{paddingBottom: '0px', marginLeft: '0px', paddingTop: '0px'}}>
                <p className="fs-5"><strong>Accuracy</strong></p>
              </div>
              <div className="col">
                <p className="fs-5"><i className="fas fa-star text-warning" /><span style={{color: 'rgb(0, 0, 0)'}}>&nbsp; &nbsp;{avgAccuracyRating}&nbsp;</span></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <p className="fs-5"><strong>Check-in</strong></p>
              </div>
              <div className="col">
                <p className="fs-5"><i className="fas fa-star text-warning" /><span style={{color: 'rgb(0, 0, 0)'}}>&nbsp; &nbsp;{avgCheckinRating}&nbsp;</span></p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="fs-5"><strong>Value</strong></p>
              </div>
              <div className="col">
                <p className="fs-5"><i className="fas fa-star text-warning" /><span style={{color: 'rgb(0, 0, 0)'}}>&nbsp; &nbsp;{avgValueRating}&nbsp;</span></p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="fs-5"><strong>Location</strong></p>
              </div>
              <div className="col">
                <p className="fs-5"><i className="fas fa-star text-warning" /><span style={{color: 'rgb(0, 0, 0)'}}>&nbsp; &nbsp;{avgLocationRating}&nbsp;</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
                          


                <div
                  className="tab-pane fade specifications"
                  role="tabpanel"
                  id="specifications"
                >
                
                </div>
                <div className="tab-pane fade" role="tabpanel" id="reviews">
                  <div className="reviews">
                    <div className="review-item">
                      <div className="rating">
                        <img src="customerAssets/img/star.svg" />
                        <img src="customerAssets/img/star.svg" />
                        <img src="customerAssets/img/star.svg" />
                        <img src="customerAssets/img/star.svg" />
                        <img src="customerAssets/img/star-empty.svg" />
                      </div>
                     
                    </div>
                  </div>
                  <div className="reviews">
                    <div className="review-item">
                     
                    
                    </div>
                  </div>
                  <div className="reviews">
                    <div className="review-item">s
                      <h4>Incredible product</h4>
                      <span className="text-muted">
                        <a href="#">John Smith</a>, 20 Jan 2018
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            </div>
            
          <div
            className="col-lg-10 offset-lg-0"
            style={{ marginTop: "-1px", marginBottom: 0, marginLeft: 82 }}
          >
            <h2 style={{ paddingTop: 64,marginLeft:50 }}>
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
                      marginTop: "-85px"
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
              ))}
              <div className="row">
                        <div className="col-lg-10" style={{ marginLeft: 45 }}>
                          <button
                            className="btn btn-danger"
                            type="button"
                            style={{
                              paddingTop: 7,
                              paddingLeft: 0,
                              marginTop: 20,
                              marginLeft: 80
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
                                height: '600px', 
                                marginTop: '100px'
                              },
                            }}
                          >
                            
                            <h2>All Reviews</h2>
                            <ul>{reviewList}</ul>
                          </Modal>
                        </div>
                      </div>
            </div>
            </div>

          <div className="clean-related-items">
            <div className="items" />
          </div>
        </div>
      </div>
    </section>
  </main>
 
</>
</container>

  );
}
export default RentalPage;

