import {  useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
function PastBookingsPage() {
  const navigate = useNavigate();
  const booking = [
    { id:1, sdate: "24/03/2023", edate: "27/03/2023", name: 'Kaş Luxury Villa ',  city:"Antalya",host: 'Timur',guestNum:2},
    { id:2, sdate: "16/01/2022", edate: "20/03/2022",name: 'Bursa 3+1 Flat', city:"Bursa", host: 'Connor', guestNum:4 },
    { id:3, sdate: "20/11/2022", edate: "14/11/2022",name: 'İzmir Beach House ',  city:"İzmir", host: 'Melih',guestNum:5 },
    { id:4, sdate: "2/02/2021", edate: "30/01/2021",name: 'Villa Suites', city:"Muğla", host:'Jenna',guestNum:3 },
  ];

  const goBackToProfile = (event) => {
    event.preventDefault();
    navigate('/ProfilePage');
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
  <link rel="stylesheet" href="assets/css/baguetteBox.min.css" />
  <link rel="stylesheet" href="assets/css/Banner-Heading-Image-images.css" />
  <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
  <NavBar></NavBar>
  <main className="page blog-post-list">
    <section className="clean-block clean-blog-list dark">
      <div
        className="container"
        style={{ marginBottom: "-40px", paddingBottom: 0 }}
      >
        <div
          className="block-heading"
          style={{ paddingBottom: 0, marginTop: "-23px", paddingTop: 22 }}
        >
          <h2
            className="text-start text-danger bs-custom"
            style={{ paddingTop: 13, marginBottom: "-32px" }}
          >
            Previous Bookings
          </h2>
        </div>
        <div
          className="block-content"
          style={{
            paddingLeft: 1,
            marginTop: 3,
            marginBottom: "-1px",
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 1
          }}
        >
          <div
            className="clean-blog-post"
            style={{ marginTop: 1, marginBottom: "-10px", paddingBottom: 9 }}
          >
            <div />
          </div>
          <div
            className="clean-blog-post"
            style={{ paddingLeft: 0, paddingBottom: 68, marginBottom: "-62px" }}
          >
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-danger">Start Date</th>
                    <th className="text-danger">End Date</th>
                    <th className="text-danger">City</th>
                    <th className="text-danger">Rental Name</th>
                    <th className="text-danger">Host</th>
                    <th className="text-danger">Guest Number</th>
                    <th className="text-danger">Add Landmark</th>
                  </tr>
                </thead>
                {booking.map((booking) => (
                <tbody>
                  <tr>
                    <td>{booking.sdate}</td>
                    <td>{booking.edate}</td>
                    <td>{booking.city}</td>
                    <td>{booking.name}</td>
                    <td>{booking.host}</td>
                    <td className="text-center">3</td>
                    <td>
                      <button
                        className="btn btn-danger text-center btn-custom-class"
                        type="button"
                        style={{ marginLeft: 36 }}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
               
                 
              
                </tbody>
                ))}

              </table>
            </div>
          </div>
          <button
            className="btn btn-primary btn btn-custom-class"
            type="button"
            onClick={goBackToProfile}
            style={{
              paddingLeft: 25,
              paddingRight: 32,
              paddingTop: 0,
              marginRight: "-8px",
              marginBottom: "-7px",
              marginTop: "-25px"
            }}
          >
            Back
          </button>
        </div>
      </div>
    </section>
  </main>
</>

    
    );
  }
  // Custom theme code
  
  export default PastBookingsPage;
  
