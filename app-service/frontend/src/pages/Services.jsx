import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import ServiceSection from '../sections/ServiceSection'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
        <Topbar />
        <Navbar />
        <ServiceSection />
        <Footer/>
    </div>
  )
}

export default Services