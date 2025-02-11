import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { cars } from "../Vechical/CarsDataMain";
import { useParams } from "react-router-dom";
import "../Vechical/Card.css";
import Modalcom from "./Model";
// import './OrderCard.css'

function OrderCard(props) {

  const [showmodal,setShowmodal]=useState(false)
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
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow in normal state
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth animation
  };

  const cardHoverStyle = {
    transform: "scale(1.02)", // Slightly enlarges on hover
    boxShadow: `0 8px 15px rgba(30, 30, 29, 0.6), 
                0 10px 20px rgba(173, 216, 230, 0.6), 
                0 12px 25px rgba(24, 25, 24, 0.6), 
                0 14px 30px rgba(6, 6, 6, 0.6)`, // Vibrant box shadow on hover
    // width:"70vh",
    height: "48rem",
    
  };

  const cardBodyStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const imageStyle = {
    height: "200px", // Default height
    objectFit: "cover",
    transition: "height 0.3s ease", // Smooth height animation
  };

  const imageHoverStyle = {
    height: "250px", // Height on hover
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
    marginTop:"-15px"
  };

  const submitButtonHoverStyle = {
    backgroundColor: "#007bff",
  };

  const [hover, setHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Successfully booked " + props.BrandName);
  };

  const { id } = useParams();
  const selectedVehicle = cars.find((a) => a.brand === id);

  return (
    <div style={cardContainerStyle} className="position-relative">
      <Card 
        style={{ ...cardStyle, ...(hover ? cardHoverStyle : {}) }}
        onMouseEnter={() => setHover(true)} // Activate hover effect
        onMouseLeave={() => setHover(false)} // Deactivate hover effect
      >
        <Card.Img
          variant="top" className="image"
          src={props.image}
          style={{ ...imageStyle, ...(hover ? imageHoverStyle : {}) }} // Adjust image height on hover
        />
        <Card.Body style={cardBodyStyle}>
          <Card.Title style={{ fontSize: "24px", fontWeight: "bold" }}>
            Booking Car
          </Card.Title>
          <Card.Text style={{ fontSize: "16px", color: "#555" }}>
            Brand Name: <b>{props.BrandName}</b>
            <br />
            Price: <b>{props.price}</b>
            <br />
            Brand: {props.brand}
          </Card.Text>

          <Form onSubmit={handleSubmit} style={formStyle}>
            <Form.Group controlId="fromDate">
              <Form.Label>From:</Form.Label>
              <Form.Control type="date" required/>
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
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = submitButtonHoverStyle.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = submitButtonStyle.backgroundColor;
              }}
            >
             <Modalcom image={props.image}/>
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OrderCard;
