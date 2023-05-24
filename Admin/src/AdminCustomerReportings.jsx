import React, { useState } from "react";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/vanilla-zoom.min.css";
import { Navbar } from "./Navbar";
export const AdminCustomerReportings = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const customerReportings = [
    {
      flatName: "Stylish flat in Muratpaşa",
      reportType: "Post Reporting",
      date: "Jan 16, 2022",
      userName: "John Smith",
      email: "johnsmith@gmail.com",
      content:
        "The pictures looked nothing like the actual house. The house also had heating problems and the host ignored our calls.",
      pictureLink:
        "assets/img/scenery/3222a878-4e0e-46b8-92d2-90fee6a9caa4.webp",
    },
    {
      flatName: "Stylish flat in Muratpaşa",
      reportType: "Post Reporting",
      date: "Jan 16, 2022",
      userName: "John Smith",
      email: "johnsmith@gmail.com",
      content:
        "The pictures looked nothing like the actual house. The house also had heating problems and the host ignored our calls.",
      pictureLink:
        "assets/img/scenery/3222a878-4e0e-46b8-92d2-90fee6a9caa4.webp",
    },
  ];

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
              <h2 className="text-info">Customer Reportings</h2>
              <p>All post and user reports made by users.</p>
            </div>
            <div className="block-content">
              <div className="clean-blog-post">
                <div className="row">
                  <div className="col-lg-5">
                    <h1>
                      <span style={{ backgroundColor: "rgb(246, 246, 246)" }}>
                        Stylish flat in Muratpaşa
                      </span>
                    </h1>
                    <img
                      className="rounded img-fluid"
                      src="assets/img/scenery/3222a878-4e0e-46b8-92d2-90fee6a9caa4.webp"
                    />
                  </div>
                  <div className="col-lg-7">
                    <h3>Post Reporting</h3>
                    <div className="info">
                      <span className="text-muted">
                        Jan 16, 2022 by&nbsp;
                        <a href="#">John Smith johnsmith@gmail.com</a>
                      </span>
                    </div>
                    <p>
                      The pictures looked nothing like the actual house. The
                      house also had heating problems and the host ignored our
                      calls.
                    </p>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      type="button"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              
              {customerReportings.map((item, index) => (
                <div className="clean-blog-post" key={index}>
                <div className="row">
                  <div className="col-lg-5">
                    <h1>
                      <span style={{ backgroundColor: "rgb(246, 246, 246)" }}>
                        {item.flatName}
                      </span>
                    </h1>
                    <img
                      className="rounded img-fluid"
                      src={item.pictureLink}
                    />
                  </div>
                  <div className="col-lg-7">
                    <h3>
                      <strong>{item.reportType}</strong>
                    </h3>
                    <div className="info">
                      <span className="text-muted">
                        {item.date}
                        <a href="#">{item.userName} {item.date}</a>
                      </span>
                    </div>
                    <p>
                      {item.content}
                    </p>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      type="button"
                    >
                      <span
                        style={{
                          color: "rgb(13, 110, 253)",
                          backgroundColor: "rgb(255, 255, 255)",
                        }}
                      >
                        View Details
                      </span>
                    </button>
                  </div>
                </div>
              </div>
                
                
                
              ))}
              
              
              
              
              <div className="clean-blog-post">
                <div className="row">
                  <div className="col-lg-5">
                    <h1>
                      <span style={{ backgroundColor: "rgb(246, 246, 246)" }}>
                        Luxury condo in Efes
                      </span>
                    </h1>
                    <img
                      className="rounded img-fluid"
                      src="assets/img/scenery/bcf9680c-1812-4f29-83ee-0ba8e22afb2c.webp"
                    />
                  </div>
                  <div className="col-lg-7">
                    <h3>Post Reporting</h3>
                    <div className="info">
                      <span className="text-muted">
                        April 16, 2023 by&nbsp;<a href="#">Mustafa Ayna</a>
                      </span>
                    </div>
                    <p>
                      There was a missing bed and the wardrobes were broken.
                      Majority of amenities were missing.
                    </p>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      type="button"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default AdminCustomerReportings;
