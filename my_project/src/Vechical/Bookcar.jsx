import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectedCar from "./SelectedCar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Ratingpage from "../RatingPage/Ratingpage";
import { cars } from './CarsDataMain';
import Footer from "../Footer/Footer";
import CarGif from './CarGif.gif';
import './Card.css'


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
    marginTop: '20px', // Optional: Add some space above the button.
    
  };

  return (
    <div style={{textAlign:"center"}}>
      <SelectedCar
        image={selectedVehicle.image}
        image2={selectedVehicle.image2}
        image3={selectedVehicle.image3}
        price={selectedVehicle.price}
      />
    <div 
  style={{
    fontFamily: "expanded", 
  }} 
  className="Gifdiv"
>
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTMxMTU1MWFqbzA4MmhybTh5ZjU4eHpiejlvdm5veWYybmlpcjd2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h0HZqEoF1GzQY/giphy.gif" alt="gif" className="gifClass"/>

<span style={{filter:"blur('10px')", color:"black"}}>
   <h3><b>Model:</b>{selectedVehicle.model}</h3>
  <br />
  <h3><b>Brand:</b>{selectedVehicle.BrandName}</h3>
  <br />
  <h3><b>Price:</b>{selectedVehicle.price}</h3>
  <br />
  <h3><b>Type:</b>{selectedVehicle.type}</h3>
  <Link to={`/carrents/booking/${selectedVehicle.brand}`} style={{ textDecoration: "none" }}>
        <Button variant="primary" style={buttonStyle}>Book Now!</Button>
      </Link>
  </span>
  
 
</div>
      <Ratingpage />
      <Footer/>
    </div>
  );
}