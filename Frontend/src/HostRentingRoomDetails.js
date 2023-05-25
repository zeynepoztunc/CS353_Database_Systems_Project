import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const  HostRentingRoomDetails= () => {
    const [selectedCounts, setSelectedCounts] = useState({});
    const navigate = useNavigate();

    const handleDropdownItemClick = (dropdownId, value) => {
        setSelectedCounts({ ...selectedCounts, [dropdownId]: value });
      };
    
      const getButtonText = (dropdownId) => {
        return selectedCounts[dropdownId] || 'Count';
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
  const handleSubmit = async (event) =>
  {
    event.preventDefault();
    const rentalDetails = {
      fileNames: fileNames,
      selectedCounts: selectedCounts,
      selectedItems: selectedItems,
    };
    try
    {
      const response = await axios.post('http://localhost:8080/RoomDetails', rentalDetails);
      console.log(response.data);
      navigate('/HostRentingRoomLocation');
    } catch (error) {
      console.error('Failed to submit form: ', error);
    }
    navigate('/HostRentingRoomLocation');
  };

  const initialData = [
    ['heating', 'fas fa-thermometer-full'],
    ['hair-conditioner', 'far fa-laugh-beam'],
    ['beachfront', 'fas fa-umbrella-beach'],
    ['museum access', 'far fa-object-group'],
    ['airport access', 'fas fa-plane'],
    ['private entrance', 'far fa-eye-slash']
  ];

  const [cellData, setCellData] = useState(initialData.map(item => ({ data: item, selected: false })));

  const handleClick = (index) => {
    setCellData(cellData.map((item, i) => (i === index ? { ...item, selected: !item.selected } : item)));
  };

  const selectedItems = cellData.filter(item => item.selected).map(item => item.data[0]);


    return (
      <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Register - WeRent</title>
  <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
  />
  <link rel="stylesheet" href="./assets/Font Awesome 5 Brands.css" />
  <link rel="stylesheet" href="./assets/Font Awesome 5 Free.css" />
  <link rel="stylesheet" href="./assets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="./assets/fonts/font-awesome.min.css" />
  <link rel="stylesheet" href="./assets/fonts/fontawesome5-overrides.min.css" />
  <link rel="stylesheet" href="./assets/baguetteBox.min.css" />
  <link rel="stylesheet" href="./assets/Bootstrap-4-Calendar-No-Custom-Code.css" />
  <link rel="stylesheet" href="./assets/Drag--Drop-Upload-Form.css" />
  <link rel="stylesheet" href="./assets/Drag-Drop-File-Input-Upload.css" />
  <link rel="stylesheet" href="./assets/pop-up-boxes.css" />
  <link rel="stylesheet" href="./assets/vanilla-zoom.min.css" />
  <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://cdn.reflowhq.com/v2/toolkit.min.css" />
  <link rel="stylesheet" href="./assets/fonts/fontawesome-all.min.css" />
  <link rel="stylesheet" href="./assets/css/baguetteBox.min.css" />
  <link rel="stylesheet" href="./assets/css/Banner-Heading-Image-images.css" />
  <link rel="stylesheet" href="./assets/Button-modal-ecommerce-bs4_modal.min.css" />
  <link rel="stylesheet" href="./assets/Button-modal-ecommerce-styles.css" />
  <link rel="stylesheet" href="./assets/Hover-Button-1.css" />
  <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap.min-1.css" />
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
          href="#"
          style={{ paddingRight: 0, marginBottom: 0, fontSize: 32 }}
        >
          WeRent
        </a>
        <div>
          <a
            className="bs4_modal_trigger"
            href="#"
            data-modal-id="bs4_sldr_cmrce"
            data-bs-toggle="modal"
            style={{
              fontSize: 16,
              background: "var(--bs-blue)",
              color: "var(--bs-white)",
              fontFamily: "Montserrat, sans-serif"
            }}
          >
            SWITCH TO CUSTOMER MODE
          </a>
          <div
            id="bs4_sldr_cmrce"
            className="modal fade bs4_modal bs4_blue bs4_bg_white bs4_bd_black bs4_bd_semi_trnsp bs4_none_radius bs4_shadow_none bs4_center bs4_animate bs4FadeInDown bs4_duration_md bs4_easeOutQuint bs4_size_sldr_cmrce"
            role="dialog"
            data-modal-backdrop="true"
            data-show-on="click"
            data-modal-delay="false"
            data-modal-duration="false"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <a
                  className="bs4_btn_x_out_shtr bs4_sldr_cmrce_close"
                  href="#"
                  data-bs-dismiss="modal"
                >
                  close
                </a>
                <div className="row">
                  <div className="col-12 col-md-5">
                    <div
                      id="bs4_sldr_commerce"
                      className="carousel slide bs4-carousel bs4_sldr_cmrce_indicators thumb-scroll-x swipe-x bs4s_easeOutInCubic"
                      data-duration={2000}
                      data-bs-ride="carousel"
                      data-bs-pause="hover"
                      data-bs-interval="false"
                    >
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                          <img
                            src="/bs4_slider_commerce_01.png"
                            alt="bs4_slider_commerce_01"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="/bs4_slider_commerce_02.png"
                            alt="bs4_slider_commerce_02"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="/bs4_slider_commerce_03.png"
                            alt="bs4_slider_commerce_03"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="/bs4_slider_commerce_04.png"
                            alt="bs4_slider_commerce_04"
                          />
                        </div>
                      </div>
                      <ol className="carousel-indicators">
                        <li
                          className="active"
                          data-bs-target="#bs4_sldr_commerce"
                          data-bs-slide-to={0}
                        >
                          <img
                            src="/bs4_slider_commerce_01.png"
                            alt="bs4_slider_commerce_01"
                          />
                        </li>
                        <li
                          data-bs-target="#bs4_sldr_commerce"
                          data-bs-slide-to={1}
                        >
                          <img
                            src="/bs4_slider_commerce_02.png"
                            alt="bs4_slider_commerce_02"
                          />
                        </li>
                        <li
                          data-bs-target="#bs4_sldr_commerce"
                          data-bs-slide-to={2}
                        >
                          <img
                            src="/bs4_slider_commerce_03.png"
                            alt="bs4_slider_commerce_03"
                          />
                        </li>
                        <li
                          data-bs-target="#bs4_sldr_commerce"
                          data-bs-slide-to={3}
                        >
                          <img
                            src="/bs4_slider_commerce_04.png"
                            alt="bs4_slider_commerce_04"
                          />
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="bs4_sldr_cmrce_txt">
                      <h1>name of product, company plus modal number</h1>
                      <ul>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                      <h2 className="bs4_sldr_cmrce_txt">$130.00</h2>
                      <p style={{ fontSize: 15, fontWeight: 200 }}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Nam nibh. Nunc varius facilisis eros. Sed erat. In
                        in velit quis arcu ornare laoreet. Curabitur adipiscing
                        luctus massa. Integer ut purus ac augue commodo commodo.
                        Nunc nec mi eu justo tempor consectetuer. Etiam vitae
                        nisl. In dignissim lacus ut ante. Cras elit lectus,
                        bibendum a, adipiscing vitae, commodo et, dui.
                      </p>
                      <form action="#">
                        <div className="bs4_form_num">
                          <label className="form-label">quantity</label>
                          <input
                            className="form-control"
                            type="number"
                            name="quantity"
                            min={1}
                            max={20}
                          />
                        </div>
                        <div className="bs4_form_color">
                          <label className="form-label">colours</label>
                          <select className="form-select form-select-sm">
                            <optgroup label="Pick a color">
                              <option value={12} selected="">
                                RED
                              </option>
                              <option value={13}>BLUE</option>
                              <option value={14} selected="">
                                GREEN
                              </option>
                            </optgroup>
                          </select>
                        </div>
                        <div className="bs4_form_size">
                          <label className="form-label">size</label>
                          <select className="form-select">
                            <optgroup label="select a size">
                              <option value={12} selected="">
                                18
                              </option>
                              <option value={13}>25</option>
                              <option value={14}>36</option>
                            </optgroup>
                          </select>
                        </div>
                        <div className="bs4_form_cmrce_btn">
                          <button
                            className="btn btn-primary bs4_btn_x_out_shtr"
                            type="submit"
                          >
                            add to cart
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="navbar-nav ms-auto" />
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#registration.html">
              RENT YOUR HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              YOUR RENTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-user" style={{ fontSize: 24 }} />
            </a>
          </li>
          <li
            className="nav-item text-uppercase border rounded"
            style={{ color: "var(--bs-blue)", background: "var(--bs-blue)" }}
          >
            <a
              className="nav-link active"
              href="#"
              style={{ color: "var(--bs-gray-100)" }}
            >
              LOG OUT
            </a>
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
            Your room's location is not the only decisive feature for customers.
            Common areas as well as features of the room are important. Be
            catchy!
          </p>
        </div>
        <form
          className="text-start d-block float-none"
          style={{ textAlign: "left", display: "block" }}
          onSubmit={handleSubmit}
        >
          <h1 className="fs-1 fw-bolder text-center">Details of your room</h1>
          <figure className="figure" />
          <span />
          <div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Room name&nbsp;
            </label>
            <input className="form-control" type="text"  value={roomName}
                   onChange={(e) => setRoomName(e.target.value)}/>
          </div>
          <div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Room size ( in sqm)
            </label>
            <input className="form-control" type="text" value={roomSize}
                   onChange={(e) => setRoomSize(e.target.value)} />
          </div>
          <div>
            <span className="text-white-50">Text</span>
          </div>
          <div>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Common kitchen
            </label>
            <div className="dropdown">
              <button
                 className="btn btn-light btn-sm dropdown-toggle text-center"
                 aria-expanded="false"
                 data-bs-toggle="dropdown"
                 type="button"
              >
                {getButtonText('Common Kitchen')}
              </button>
              <div className="dropdown-menu" >
              {Array.from({ length: 6 }, (_, i) => (
            <a
              key={i}
              className="dropdown-item"
              href="#nogo"
              onClick={() => {
                handleDropdownItemClick('Common Kitchen', (i + 1).toString());
                setCommonKitchen((i + 1).toString());
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
              Common Bathroom
            </label>
            <div className="dropdown">
              <button
                className="btn btn-light btn-sm dropdown-toggle text-center"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"
              >
              {getButtonText('Common Bathroom')}
              </button>
              <div className="dropdown-menu">
              {Array.from({ length: 6 }, (_, i) => (
            <a
              key={i}
              className="dropdown-item"
              href="#nogo"
              onClick={() => {
                handleDropdownItemClick('Common Bathroom', (i + 1).toString());
                setCommonBathroom((i + 1).toString());
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
              Common Living Room
            </label>
            <div className="dropdown">
              <button
                className="btn btn-light btn-sm dropdown-toggle text-center"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"
              >
                {getButtonText('Common Living Room')}
              </button>
              <div className="dropdown-menu">
              {Array.from({ length: 6 }, (_, i) => (
            <a
              key={i}
              className="dropdown-item"
              href="#nogo"
              onClick={() => {
                handleDropdownItemClick('Common Living Room', (i + 1).toString());
                setCommonLivingRoom((i + 1).toString());
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
              Bed(s) in the Room
            </label>
            <div />
            <div className="dropdown">
              <button
                className="btn btn-light btn-sm dropdown-toggle text-center"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"
              >
                {getButtonText('Bed(s) in the Room')}
              </button>
              <div className="dropdown-menu">
              {Array.from({ length: 12 }, (_, i) => (
            <a
              key={i}
              className="dropdown-item"
              href="#nogo"
              onClick={() => {
                handleDropdownItemClick('Bed(s) in the Room', (i + 1).toString());
                setBedNumber((i + 1).toString());
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
                    {getButtonText('Guest Limit in Person')}
                  </button>
                  <div className="dropdown-menu">
                  {Array.from({ length: 12 }, (_, i) => (
            <a
              key={i}
              className="dropdown-item"
              href="#nogo"
              onClick={() => {
                handleDropdownItemClick('Guest Limit in Person', (i + 1).toString());
                setGuestLimit((i + 1).toString());
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
                <div>
                  <label
                    className="form-label"
                    style={{
                      fontSize: 25,
                      textAlign: "center",
                      fontWeight: "bold"
                    }}
                  >
                    Guest policy
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-4"
                    />
                    <label className="form-check-label" htmlFor="formCheck-4">
                      Only to families
                    </label>
                  </div>
                  <label className="form-label">
                    <span style={{ color: "var(--bs-body-bg)" }}>Text</span>For
                    family friendly hosts.
                  </label>
                  <label className="form-label" />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-3"
                    />
                    <label className="form-check-label" htmlFor="formCheck-3">
                      No children allowed
                    </label>
                  </div>
                  <label className="form-label">
                    <span style={{ color: "var(--bs-body-bg)" }}>Text</span>For
                    someone, no child = tranquilty.
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-5"
                    />
                    <label className="form-check-label" htmlFor="formCheck-5">
                      No pets allowed
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <label className="form-label">
              <span style={{ color: "var(--bs-body-bg)" }}>Text</span>Pets are
              our best friends, but some people can be allergic to them.
            </label>
            <div />
            <div>
              <label className="form-label" style={{ fontWeight: "bold" }}>
                Room description
              </label>
              <textarea className="form-control" defaultValue={""} />
            </div>
            <span style={{ color: "rgba(33,37,41,0.01)" }}>Text</span>
            <div>
              <label className="form-label" style={{ fontWeight: "bold" }}>
                Upload at least 3 photographs about your room
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
          Please upload at least 3 photographs.
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
            <tr />
          </thead>
          <tbody>
            {cellData.map(({ data: [text, iconClass], selected }, index) => (
              <tr key={index}>
                <td 
                  onClick={() => handleClick(index)}
                  style={selected ? { cursor: 'default', opacity: 0.5 } : { cursor: 'pointer' }}
                >
                  {text}
                  <i className={iconClass} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h4><b>Selected Amenities:</b></h4>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
              <span className="text-white-50">Text</span>
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
