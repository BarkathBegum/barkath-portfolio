import React from 'react'
import Experience from '../components/experienceCard/Experience'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/heroImg2/HeroImg2'
import NavBar from '../components/navbar/Navbar'
import PricingCard from '../components/pricingCard/PricingCard'

const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Experience/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project