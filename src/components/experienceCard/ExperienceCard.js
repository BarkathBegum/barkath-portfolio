import React from 'react'
import "./ExperienceCardStyles.css"
import pro1 from "../../assets/web_projects.png"
import { NavLink } from 'react-router-dom'

const ExperienceCard = (props) => {
  return ( <div className='project-card'>
          <img src={props.imgsrc} alt="image" />
          <h2 className='project-title'> {props.title}</h2>
          <div className='pro-details'>
            <p> {props.text}</p>
            <div className='pro-btns'>
              <NavLink to={props.view} className="btn">
                View
              </NavLink>
              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
  );
}

export default ExperienceCard