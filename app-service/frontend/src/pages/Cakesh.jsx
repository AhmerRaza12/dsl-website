import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import CakeshSection from '../sections/CakeshSection'
import Footer from '../components/Footer'
const Cakesh = () => {
  return (
    <div>
        <Topbar />
        <Navbar />
        <CakeshSection/>
        <Footer/>
    </div>
  )
}

export default Cakesh