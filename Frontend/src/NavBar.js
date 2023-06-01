import React from 'react';
import {  useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react'; 
import { addDays, subDays } from "date-fns";
import DropdownMenu from './DropdownMenu';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const  NavBar= () => {
    const navigate = useNavigate();
    
    const goToMainPage = ( event) => {
      event.preventDefault();
      navigate( '/MainPage');
    };

    const goToShoppingCartPage = ( event) => {
      event.preventDefault();
      navigate( '/ShoppingCart');
    };

    const goToMapPage = ( event) => {
      event.preventDefault();
      navigate( '/MapPage');
    };
    const goToProfile = ( event) => {
        event.preventDefault();
        navigate( '/ProfilePage');
    };


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
  <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar" style={{ paddingTop: 0, marginTop: 0}}>
    <div className="container">
      <p onClick={goToMainPage}className="fs-3">WeRent</p>
      <a className="navbar-brand logo" href="#" />
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
            <a onClick={goToMainPage} className="nav-link" href="index.html">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a  onClick={goToMapPage} className="nav-link" href="pricing.html">
              Map
            </a>
          </li>
          <li className="nav-item">
            <a onClick={goToShoppingCartPage} className="nav-link" href="profile.html">
              <i
                className="fas fa-shopping-basket text-dark"
                style={{ fontSize: 22 }}
                
              />
            </a>
          </li>
          <li className="nav-item">
            <a onClick={goToProfile}  className="nav-link" href="contact-us.html">
              <i className="fas fa-user text-dark" style={{ fontSize: 24 }} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              LOG OUT
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</>
</container>

  );
}
export default NavBar;
