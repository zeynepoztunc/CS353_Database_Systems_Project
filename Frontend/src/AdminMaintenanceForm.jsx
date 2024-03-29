import React, { useState } from "react";
import './adminAssets/bootstrap/css/bootstrap.min.css';
import './adminAssets/css/vanilla-zoom.min.css';
import { Navbar } from './Navbar.jsx';
import DatePicker from 'react-datepicker';

export const AdminMaintenanceForm = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>FAQ - Brand</title>
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
  <Navbar/>
  <main className="page faq-page">
    <section className="clean-block clean-faq dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Maintenance Mode</h2>
          <p>Choose time duration for the Maintenance Mode.</p>
        </div>
        <div className="block-content">
          <div className="faq-item">
            <h4 className="question">Choose time</h4>
            <div className="answer">
              <div className="row">
                <div className="col">
                  <h1>Timezone:</h1>
                </div>
                <div className="col">
                  <div className="dropdown" style={{ alignSelf: "center" }}>
                    <button
                      className="btn btn-primary dropdown-toggle"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Timezones&nbsp;
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        GMT +3&nbsp; - Turkiye
                      </a>
                      <a className="dropdown-item" href="#">
                        GMT +1 - UK
                      </a>
                      <a className="dropdown-item" href="#">
                        GMT -4 - NYC
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1>Date:</h1>
                </div>
                <div className="col">
                <DatePicker
                            className="text card-subtitle mb-2"
                              selected={startDate}
                              onChange={(update) => {
                                setDateRange(update);
                              }}
                              startDate={startDate}
                              endDate={endDate}
                              selectsRange
                              dateFormat="yyyy/MM/dd"
                              minDate={new Date()} // disable past dates
                              
                            />
                            </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1>Start time:</h1>
                </div>
                <div className="col">
                  <input type="time" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1>End time:</h1>
                </div>
                <div className="col">
                  <input type="time" />
                </div>
              </div>
              <div className="row">
                <div className="col" style={{ alignSelf: "center" }}>
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={{ marginLeft: 400 }}
                  >
                    Start Maintenance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</>

        
    );

    
}


export default AdminMaintenanceForm;