import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">Email: support@example.com</p>
        <p className="footer-text">Customer Support: +91800000000</p>
        <p className="footer-text">Address: 123 Main St, Hyderabad, Telangana</p>
        <div className="social-icons">
          <a href="https://facebook.com" className="social-icon" title="FaceBook"><FaFacebook  size={30} style={{ color: '#3b5998' }} /></a>
          <a href="https://twitter.com" className="social-icon" title="Twitter"><FaTwitter size={30} style={{ color: '#1da1f2' }} /></a>
          <a href="https://instagram.com" className="social-icon" title="Instagram"><FaInstagram  size={30} style={{ color: '#c13584' }}/></a>
          <a href="https://linkedin.com" className="social-icon" title="LinkedIn"><FaLinkedin size={30} style={{ color: '#0077b5' }} /></a>
        </div>
        © {new Date().getFullYear()} vishnu pvt. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
