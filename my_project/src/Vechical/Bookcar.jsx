import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectedCar from "./SelectedCar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Ratingpage from "../RatingPage/Ratingpage";
import { cars } from './CarsDataMain';
import Footer from "../Footer/Footer";


export default function Bookcar(props) {
  const { id } = useParams();
  const selectedVehicle = cars.find((a) => a.brand === id);

  const booknow = () => {
    alert("Booked Successfully" + "" + ` Model:${selectedVehicle.model}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Inline styles for centering content
  const centerAlignStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // This ensures the content is vertically centered on the page
  };

  // Style for the button to increase its width
  const buttonStyle = {
    width: '300px', // Set your desired width here
    marginTop: '20px', // Optional: Add some space above the button
  };

  return (
    <div style={{textAlign:"center"}}>
      <SelectedCar
        image={selectedVehicle.image}
        image2={selectedVehicle.image2}
        image3={selectedVehicle.image3}
        price={selectedVehicle.price}
      />
      <div style={{fontFamily:"expanded"}}>
         <h3> <b>Model:</b>{selectedVehicle.model}</h3>
      <br />
      <h3>
        <b>Brand:</b>{selectedVehicle.BrandName}</h3>
      <br />
      <h3><b>Price:</b>{selectedVehicle.price}</h3>
      <br />
      <h3><b>Type:</b>{selectedVehicle.type}</h3>
      </div>
     
      <Link to={`/carrents/booking/${selectedVehicle.brand}`} style={{ textDecoration: "none" }}>
        <Button variant="primary" style={buttonStyle}>Book Now!</Button>
      </Link>
      <Ratingpage />
      <Footer/>
    </div>
  );
}