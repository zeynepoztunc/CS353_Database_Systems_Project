import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import NavBar from './NavBar.js';

const colors = 
{
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

function LeaveRating() 
{
  const [cleanlinessValue, setCleanlinessValue] = useState(0);
  const [communicationValue, setCommunicationValue] = useState(0);
  const [checkInValue, setCheckInValue] = useState(0);
  const [accuracyValue, setAccuracyValue] = useState(0);
  const [locationValue, setLocationValue] = useState(0);
  const [valueValue, setValueValue] = useState(0);
  const [hoverValue, setHoverValue] = useState({});

  const handleClick = (value, ratingType) => 
  {
    switch (ratingType) 
    {
      case 'cleanliness':
        setCleanlinessValue(value);
        break;
      case 'communication':
        setCommunicationValue(value);
        break;
      case 'checkIn':
        setCheckInValue(value);
        break;
      case 'accuracy':
        setAccuracyValue(value);
        break;
      case 'location':
        setLocationValue(value);
        break;
      case 'value':
        setValueValue(value);
        break;
      default:
        break;
    }
  };

  const handleMouseOver = (value, ratingType) => 
  {
    setHoverValue((prevHoverValue) => ({
      ...prevHoverValue,
      [ratingType]: value
    }));
  };

  const handleMouseLeave = (ratingType) => 
  {
    setHoverValue((prevHoverValue) => ({
      ...prevHoverValue,
      [ratingType]: 0
    }));
  };

  const renderStars = (ratingValue, ratingType) => 
  {
    return Array(5).fill(0).map((_, index) => {
      const rating = index + 1;
      return (
        <FaStar
          key={index}
          size={24}
          onClick={() => handleClick(rating, ratingType)}
          onMouseOver={() => handleMouseOver(rating, ratingType)}
          onMouseLeave={() => handleMouseLeave(ratingType)}
          color={(hoverValue[ratingType] || ratingValue) >= rating ? colors.orange : colors.grey}
          style={{ marginRight: 10, cursor: "pointer" }}
        />
      );
    });
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Contact Us - Brand</title>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&display=swap"
      />
      <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
      <link rel="stylesheet" href="assets/css/baguetteBox.min.css" />
      <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css" />
      
      <NavBar />

      <main className="page contact-us-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Rate Your Experience</h2>
            </div>
            <form>
              <div className="mb-3">
                <div>
                  <label className="form-label" htmlFor="name">
                    Cleanliness
                  </label>
                  <div style={styles.stars}>
                    {renderStars(cleanlinessValue, 'cleanliness')}
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="name">
                    Communication
                  </label>
                  <div style={styles.stars}>
                    {renderStars(communicationValue, 'communication')}
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="name">
                    Check-in
                  </label>
                  <div style={styles.stars}>
                    {renderStars(checkInValue, 'checkIn')}
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="name">
                    Accuracy
                  </label>
                  <div style={styles.stars}>
                    {renderStars(accuracyValue, 'accuracy')}
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="name">
                    Location
                  </label>
                  <div style={styles.stars}>
                    {renderStars(locationValue, 'location')}
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="name">
                    Value
                  </label>
                  <div style={styles.stars}>
                    {renderStars(valueValue, 'value')}
                  </div>
                </div>

                <div className="rating" />
              </div>
              <div className="mb-3" />
              <div className="mb-3" />
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Comments
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  defaultValue={""}
                />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck-1"
                  />
                  <label className="form-check-label" htmlFor="formCheck-1">
                    Remain Anonymous
                  </label>
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ marginTop: 10 }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = {
  container: 
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: 
  {
    display: "flex",
    flexDirection: "row",
  },
  textarea: 
  {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: 
  {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }
};

export default LeaveRating;