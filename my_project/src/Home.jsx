import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import React from 'react';
import CarSlide1 from './CarSlide1.jpg'
import CarSlide2 from './CarSlide.jpg'

function Home() {
  return (
    <div >
    <Carousel data-bs-theme="primary" className='carousel'>
      <Carousel.Item>
        <img
          className='d-block   img'
          // src="https://media.autoexpress.co.uk/image/private/s--dsad6H7D--/v1562247060/autoexpress/2018/11/2twin.jpg"
          src={CarSlide1}
          alt="First slide" 
        />
        <Carousel.Caption>
          {/* <h5>Bentley Continental GT</h5>
          <p className='carintro'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className='d-block   img'
        
          // src="https://www.motortrend.com/uploads/2022/11/2024-audi-q8-sportback-front-three-quarter.jpg"
          // src="https://s1.cdn.autoevolution.com/images/news/gallery/audi-announces-us-spec-competition-models-a6-starts-at-67600_1.jpg"
          src={CarSlide2} 
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Audi e-tron GT Concept</h5>
          <p className='carintro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className='d-block img'
          src="https://www.teslarati.com/wp-content/uploads/2022/09/Tiago-EV-Charging-scaled.jpg"
          alt="Third slide" 
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    </div>
  );
}

export default Home;