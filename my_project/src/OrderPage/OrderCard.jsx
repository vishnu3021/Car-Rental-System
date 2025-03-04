import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom"; // useNavigate for programmatic navigation
import { cars } from "../Vechical/CarsDataMain";
import "../Vechical/Card.css";

function OrderCard({ image, BrandName, price, brand }) {
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to handle form submission
  const navigate = useNavigate(); // Hook for programmatic navigation

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "20px",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  };

  const cardStyle = {
    width: "100vh",
    height: "42rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "10px",
    borderRadius: "15px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHoverStyle = {
    transform: "scale(1.02)",
    boxShadow: "0 8px 15px rgba(30, 30, 29, 0.6), 0 10px 20px rgba(173, 216, 230, 0.6), 0 12px 25px rgba(24, 25, 24, 0.6), 0 14px 30px rgba(6, 6, 6, 0.6)",
    height: "48rem",
  };

  const cardBodyStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const imageStyle = {
    height: "200px",
    objectFit: "cover",
    transition: "height 0.3s ease",
  };

  const imageHoverStyle = {
    height: "250px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  };

  const submitButtonStyle = {
    backgroundColor: "#007bff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    marginTop: "-15px",
    width: "45vw",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Set form as submitted to show the popup/modal

    // Show the modal and navigate after 1 second
    setTimeout(() => {
      setShowModal(false); // Hide the modal after 1 second
      navigate("/"); // Navigate to home page
    }, 5000);
   
  };

  const { id } = useParams();
  const selectedVehicle = cars.find((a) => a.brand === id);

  return (
    <div style={cardContainerStyle} className="position-relative">
      <Card
        style={{ ...cardStyle, ...(hover ? cardHoverStyle : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Card.Img
          variant="top"
          className="image"
          src={image}
          style={{ ...imageStyle, ...(hover ? imageHoverStyle : {}) }}
        />
        <Card.Body style={cardBodyStyle}>
          <Card.Title style={{ fontSize: "24px", fontWeight: "bold" }}>
            Booking Car
          </Card.Title>
          <Card.Text style={{ fontSize: "16px", color: "#555" }}>
            Brand Name: <b>{BrandName}</b>
            <br />
            Price: <b>{price}</b>
            <br />
            {/* Brand: {brand} */}
          </Card.Text>

          <Form onSubmit={handleSubmit} style={formStyle}>
            <Form.Group controlId="fromDate">
              <Form.Label>From:</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Form.Group controlId="toDate">
              <Form.Label>To:</Form.Label>
              <Form.Control type="date" required />
              <Form.Control as="select" required style={{ marginTop: "10px" }}>
                <option value="">-- Choose Payment Method --</option>
                <option value="option1">Pay offline</option>
                <option value="option2" disabled>
                  UPI (Coming Soon)
                </option>
              </Form.Control>
              <Form.Check
                type="checkbox"
                label={
                  <>
                    <span className="text-danger">*</span> I understand that
                    once booked, it cannot be canceled.
                  </>
                }
                required
                style={{ marginTop: "10px" }}
              />
            </Form.Group>

            <Button
              type="submit"
              style={submitButtonStyle}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Popup modal */}
      {formSubmitted && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0, 0, 0, 0.8)",
            padding: "20px",
            borderRadius: "10px",
            color: "white",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          <h4>Your booking is confirmed!</h4>
          <p>Redirecting...</p>
        </div>
      )}
    </div>
  );
}

export default OrderCard;
