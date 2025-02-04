import React from 'react'
import CarsData from '../Vechical/CarsData'
import Homes from '../Home';
import Ratingpage from '../RatingPage/Ratingpage';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div >
      <div id="home">
        <Homes/>
        <CarsData/>
        <Ratingpage/>
        <Footer/>
      </div>
      
    
    </div>
  )
}

export default Home
