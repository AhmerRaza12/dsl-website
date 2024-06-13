import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import ContactSection from '../sections/ContactSection'
const Contact = () => {
  return (
    <>
        <Topbar />
        <Navbar />
        <ContactSection />
        <Footer/>
    </>
  )
}

export default Contact