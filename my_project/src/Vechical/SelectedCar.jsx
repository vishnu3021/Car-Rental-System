import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import RightArrow from './RightArrow.png';
import RightArrow from "./RightArrow.png";
import LeftArrow from "./LeftArrow.png";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import {Link } from 'react-router-dom';
import "./SelectedCars.css"

export default function SelectedCar( props ) {
  // console.log(props.image)
    return (
        <div>
            {/* <h2>Selected Car</h2> */}
            <Carousel data-bs-theme="dark" 
  prevIcon={<span className="custom-prev-icon"> <img src={LeftArrow} alt="image"  style={{height:"50px", width:"50px"}}/>  </span>}
  nextIcon={<span className="custom-next-icon"> <img src={RightArrow} alt="image"  style={{height:"50px", width:"50px"}}/> </span>}>
      <Carousel.Item>
        <img 
      className='d-block h-40vh w-100 img'
          // className="d-block h-50vh w-100"
          src={props.image}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p style={{color:"#ff5a36", fontSize:"2em"}}>Out Look  Of The Car</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          // className="d-block w-100"
          className='d-block  h-40vh w-100  img'
          src={props.image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p style={{color:"yellow", fontSize:"2em"}}>Inside Of the Car Image</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          // className="d-block w-100" 
         className='d-block h-40vh w-100  img' 
          src={props.image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p style={{color:"yellow",  fontSize:"2em"}}>
            Car Boot Space 
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    {/* <Link to ={`/carrents/${props.brand}`} style={{textDecoration:"none"}}>  <Button variant="primary">Go somewhere</Button></Link> */}

        </div>
    );
}
