import React from 'react'

const AboutSection = () => {
  return (
    <>
    <section className="about-us-banner">
  <div className="absolute inset-0 bg-black opacity-60"></div>
  <p className="about-us-text ">About <span className="text-lime-500 font-medium">Us</span></p>
</section>
<section>

</section>
<section className="margin about-sections">
    
    <div className="z-20 bg-white p-8 max-md:bg-white">
      <h1 className="about-sections-heading">DSL International & Domestic <span className=" font-semibold text-lime-500">Courier, Cargo & Cod</span> Service</h1>
      <p className="mt-4 text-gray-600 max-md:text-center">
        DSL is a complete courier service provider, offering lightning-fast and cost-effective courier services, without compromising quality.
        <span className="mt-4 block">DSL Courier brings the best rates for commercial and online business entrepreneurs. We have an experienced team for technology and professionally handle all kinds of shipments.</span>
      </p>
    </div>
    
    <div className="about-sections-second-div">
      <img className="about-sections-second-div-img" 
      src="https://plus.unsplash.com/premium_photo-1678283974882-a00a67c542a9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Placeholder" />
      
      
    </div>
  </section>
</>
  )
}

export default AboutSection