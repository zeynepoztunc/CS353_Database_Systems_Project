import React, { useState } from "react";
import "./adminAssets/bootstrap/css/bootstrap.min.css";
import "./adminAssets/css/vanilla-zoom.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";



export const AdminReport = () => {
  
  const [oldestReport, setOldestReport] = useState(false);
  const [newestReport, setNewestReport] = useState(false);
  const [highestUserCount, setHighestUserCount] = useState(false);
  const [highestHostCount, setHighestHostCount] = useState(false);
  const [highestPostingsCount, setHighestPostingsCount] = useState(false);
  const [date, setDate] = useState("");
  
  
  
  function handleSearch() {
    if (document.getElementById("formCheck-1").checked) {
      console.log("is checked 1");
      setOldestReport(true);
    }
    if (document.getElementById("formCheck-2").checked) {
      console.log("is checked 2");
      setNewestReport(true);
    }
    if (document.getElementById("formCheck-3").checked) {
      console.log("is checked 3");
      setHighestUserCount(true);
    }
    if (document.getElementById("formCheck-4").checked) {
      console.log("is checked 4");
      setHighestHostCount(true);
    }
    if (document.getElementById("formCheck-5").checked) {
      console.log("is checked 5");
      setHighestPostingsCount(true);
    }
   
    var inputDate = document.getElementById("date");
    if (inputDate) {
      setDate(inputDate.value);
      console.log(inputDate);
    }
  }
  

  const reportValues = [
    {
      date: "15.05.2023",
      reportID: "123345",
      userCount: 4,
      hostCount: 435,
      postingCount: 32,
      bookingCount: 23,
      victimCountHost: 3,
      victimCountUser: 23,
      superhostCount: 32,
      userReportingCount: 234,
      postReportingCount: 23,
    },
    {
      date: "15.05.2023",
      reportID: "123345",
      userCount: 4,
      hostCount: 435,
      postingCount: 32,
      bookingCount: 23,
      victimCountHost: 3,
      victimCountUser: 23,
      superhostCount: 32,
      userReportingCount: 234,
      postReportingCount: 23,
    },
  ];
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
      <Navbar />
      <main className="page faq-page">
        <section className="clean-block clean-faq dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Analytics Page</h2>
              <p>The current analytics are given below.</p>
            </div>

            <p>Select search inputs</p>
            <div>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-1"
                  />
                  <label className="form-check-label" htmlFor="formCheck-1">
                    Oldest Report
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-2"
                  />
                  <label className="form-check-label" htmlFor="formCheck-2">
                    Newest Report
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-3"
                  />
                  <label className="form-check-label" htmlFor="formCheck-3">
                    Highest User Count
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-4"
                  />
                  <label className="form-check-label" htmlFor="formCheck-4">
                    Highest Host Count
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-5"
                  />
                  <label className="form-check-label" htmlFor="formCheck-5">
                    Highest Postings Count
                  </label>
                </div>

                <div className="faq-item">
                  <div className="row">
                    <p>Date:</p>

                    <div className="col">
                      <input type="date" id="date" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="block-content">
              {reportValues.map((item, index) => (
                <div className="faq-item">
                  <h6 className="question" style={{ fontSize: 20 }}>
                    Update Date
                  </h6>
                  <div className="answer">
                    <p>{item.date}</p>
                  </div>
                  <h1 className="question" style={{ fontSize: 20 }}>
                    Report ID
                  </h1>
                  <div className="answer">
                    <p>{item.reportID}</p>
                  </div>
                  <h4 className="question">User Count</h4>
                  <div className="answer">
                    <p>{item.userCount}</p>
                  </div>
                  <h4 className="question">Host Count</h4>
                  <div className="answer">
                    <p>{item.hostCount}</p>
                  </div>
                  <h4 className="question">Postings Count</h4>
                  <div className="answer">
                    <p>{item.postingCount}</p>
                  </div>
                  <h4 className="question">Booking Count</h4>
                  <div className="answer">
                    <p>{item.bookingCount}</p>
                  </div>
                  <h4 className="question">Earthquake Victim Count - Host</h4>
                  <div className="answer">
                    <p>{item.victimCountHost}</p>
                  </div>
                  <h4 className="question">
                    <strong>Earthquake Victim Count - User</strong>
                  </h4>
                  <div className="answer">
                    <p>{item.victimCountUser}</p>
                  </div>
                  <h4 className="question">Superhost Count</h4>
                  <div className="answer">
                    <p>{item.superhostCount}</p>
                  </div>
                  <h4 className="question">Total User Reporting</h4>
                  <div className="answer">
                    <p>{item.userReportingCount}</p>
                  </div>
                  <h4 className="question">Total Post Reporting</h4>
                  <div className="answer">
                    <p>{item.postReportingCount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default AdminReport;
