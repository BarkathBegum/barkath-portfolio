import "./HeroImgStyles.css"
import React from 'react'
import myPhoto from "../../assets/myPhoto.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
    <img className="myPhoto" src={myPhoto} alt="myPhoto"/>
    </div>
    <div className="content">
      <p> Hi, I am a Full Stack Developer.</p>
      <h1>Spring Developer.</h1>
      <div>
        <Link to="/project" className="btn">
        Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
        Contact
        </Link>
      </div>
    </div>
    </div>
  )
}

export default HeroImg