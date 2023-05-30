import React from 'react'
import "./ExperienceCardStyles.css"
import ExperienceCard from './ExperienceCard'
import ExperienceData from './ExperienceData'

const Experience = () => 
{
  return (
    <div className='word-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        {ExperienceData.map((val, ind) => {
            return(
                <ExperienceCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
        })}
      </div>    
    </div>
  )
}
export default Experience