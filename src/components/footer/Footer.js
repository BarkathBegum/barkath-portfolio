import React from "react";
import "./FooterStyles.css";
import { FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color:"#fff", marginRight: "2rem" }}/>
          <div>
            <p>56/2, South Coovam River Road,</p>
            <p>Pudupet,</p>
            <p>Chennai - 600002.</p>
          </div>
          </div>
          <div className="phone">
            <h4>
          <FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }}/>
          +91 9789822132</h4>
          </div>

          <div className="email">
            <h4>
          <FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem" }}/>
          barkathbegum@gmail.com</h4>
          </div>
        </div>
        <div className="right"></div>
        <h4>About the Experience</h4>
        <p>This is me Parakath Begam. Fullstack Developer with AWS cloud services. I enjoy discussing new projects and coding challenges</p>
        <div className="social">
        <FaFacebook size={20} style={{ color:"#fff", marginRight: "1rem" }}/>
        <FaTwitter size={20} style={{ color:"#fff", marginRight: "1rem" }}/>
        <FaLinkedin size={20} style={{ color:"#fff", marginRight: "1rem" }}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
