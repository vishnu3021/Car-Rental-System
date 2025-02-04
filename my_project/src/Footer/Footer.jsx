import React from "react";
import "./Footer.css";
import instagramLogo from "./instagramLogo.png"
 function Footer(){
return(

        <div className="Footer">
    <span>For Booking Contact:+91123654789</span>
    <br/>
    <span>Customer Support:1008155155</span>
    <br/>
    <span>E-Mail:carrental@carrental.com</span>
    <br/>
    <span>Address:ACB Street at Manikonda , Hyderbad </span>
    <br/>
    <span>&copy;
    Copy Right :vishnu@gmail.com</span>
    <br />
    {/* <div className="SocialMedia"> */}
    <span>Follow us :</span>
    <br/>
   
    <span><span> <image src={instagramLogo} alt="insta"/> </span>@carRental_123</span>

    {/* </div> */}
   
    <span></span>
   </div>
)
 }
 export default Footer;