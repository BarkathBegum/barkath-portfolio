import React from 'react'
import ContactForm from '../components/contactForm/ContactForm'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/heroImg2/HeroImg2'
import NavBar from '../components/navbar/Navbar'

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="CONTACT." text="Lets have a chat"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact