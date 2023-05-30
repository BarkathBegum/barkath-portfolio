import React from 'react'
import AboutContent from '../components/aboutContent/AboutContent'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/heroImg2/HeroImg2'
import NavBar from '../components/navbar/Navbar'

const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="ABOUT." text="I am a Passionate Full Stack Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About