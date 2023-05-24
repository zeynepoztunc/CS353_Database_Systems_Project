import React, { useState } from "react";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/vanilla-zoom.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const AdminReport = () => {
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
