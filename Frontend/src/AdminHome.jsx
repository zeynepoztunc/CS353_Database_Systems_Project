import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminAssets/bootstrap/css/bootstrap.min.css";
import "./adminAssets/css/vanilla-zoom.min.css";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import AdminReport from "./AdminReport";
import { PDFDocument, rgb } from "pdf-lib";
import axios from 'axios';

export const AdminHome = () => {
    //get the latest version of the report
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
  ];

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/HostRentingProperty");
  };

  const handleDownload = async () => {};

  const GeneratePDFButton = async () => {
    try {
      const reportResponse = await axios.get('http://localhost:8080/adminHome');
      console.log(reportResponse.data);
      console.log(reportResponse.data.length);
      if (reportResponse.data.length > 0) {
        reportValues[0].date = reportResponse.data.date;
        reportValues[0].reportID = reportResponse.data.reportId;
        reportValues[0].userCount = reportResponse.data.userCnt;
        reportValues[0].hostCount = reportResponse.data.hostCnt;
        reportValues[0].postingCount = reportResponse.data.postingsCnt;
        reportValues[0].bookingCount = reportResponse.data.bookingCnt;
        reportValues[0].victimCountUser = reportResponse.data.userEarthquakeVictimCnt;
        reportValues[0].victimCountHost = reportResponse.data.hostEarthquakeVictimCnt;
        reportValues[0].superhostCount = reportResponse.data.superhostCnt;
        reportValues[0].userReportingCount = reportResponse.data.userReportingCnt;
        reportValues[0].postReportingCount = reportResponse.data.postReportingCnt;

        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();

        const fontSize = 12;
        const textColor = rgb(0, 0, 0);

        const drawText = (text, x, y) => {
          page.drawText(text, {
            x,
            y,
            size: fontSize,
            color: textColor,
          });
        };

        let x = 50;
        let y = page.getHeight() - 50;

        drawText("Date: " + reportValues[0].date, x, y);
        y -= 20;
        drawText("Report ID: " + reportValues[0].reportID, x, y);
        y -= 20;
        drawText("User Count: " + reportValues[0].userCount, x, y);
        y -= 20;
        drawText("Host Count: " + reportValues[0].hostCount, x, y);
        y -= 20;
        drawText("Posting Count: " + reportValues[0].postingCount, x, y);
        y -= 20;
        drawText("Booking Count: " + reportValues[0].bookingCount, x, y);
        y -= 20;
        drawText("Earthquake Victim Count (Host): " + reportValues[0].victimCountHost, x, y);
        y -= 20;
        drawText("Earthquake Victim Count (User): " + reportValues[0].victimCountUser, x, y);
        y -= 20;
        drawText("Superhost Count: " + reportValues[0].superhostCount, x, y);
        y -= 20;
        drawText(
            "User Reporting Count: " + reportValues[0].userReportingCount,
            x,
            y
        );
        y -= 20;
        drawText(
            "Post Reporting Count: " + reportValues[0].postReportingCount,
            x,
            y
        );

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: "application/pdf" });

        // Download the PDF
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "report.pdf";
        link.click();
      }
      else{
        alert("The report is not up to date!");
      }

    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Blog - Brand</title>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
      />
      <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.css"
      />
      <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
      <Navbar />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Welcome, Admin</h2>
              <p />
            </div>
            <div className="d-flex flex-column" id="content-wrapper">
              <div id="content">
                <div className="container-fluid">
                  <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">Dashboard</h3>
                    <Link
                      to="/AdminReport"
                      className="btn btn-primary btn-sm d-none d-sm-inline-block"
                      role="button"
                    >
                      View Report
                    </Link>
                    <a
                      className="btn btn-primary btn-sm d-none d-sm-inline-block"
                      id="downloadReport"
                      role="button"
                      href={AdminReport.name}
                      download="Report.pdf"
                      onClick={GeneratePDFButton}
                    >
                      <i className="fas fa-download fa-sm text-white-50" />
                      &nbsp;Download Report
                    </a>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <Link to="/AdminCustomerReportings" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div className="card text-white bg-primary shadow">
                            <div className="card-body">
                              <p className="m-0">Customer Reporting</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <Link to="/AdminManageUsers" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div className="card text-white bg-success shadow">
                            <div className="card-body">
                              <p className="m-0">Manage Users</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <Link to="/AdminManagePosts" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div className="card text-white bg-info shadow">
                            <div className="card-body">
                              <p className="m-0">Manage Posts</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <Link to="/AdminLandmarkSuggestions" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div className="card text-white bg-warning shadow">
                            <div className="card-body">
                              <p className="m-0">Landmark Postings</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <Link to="/AdminReviews" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div className="card text-white bg-danger shadow">
                            <div className="card-body">
                              <p className="m-0">Reviews</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <Link to="/AdminMaintenanceForm" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div className="card text-white bg-secondary shadow">
                            <div className="card-body">
                              <p className="m-0">Maintenance Mode</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="bg-white sticky-footer">
                <div className="container my-auto">
                  <div className="text-center my-auto copyright">
                    <span />
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default AdminHome;
