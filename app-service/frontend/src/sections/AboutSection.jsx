import React, {useRef} from 'react'
import serviceImage from '../assets/DSL_MAN_WITH_SERVICE_POINTS.png'
import useScrollTriggeredCountUp from '../utilities/CustomHooks'
import ClientsImage from '../assets/CORP.png'
import BrandsImage from '../assets/new.png'
import CountriesImage from '../assets/INTL.png'
import VehiclesImage from '../assets/VEH.png'
const AboutSection = () => {
  const [branchRef, clientRef,countriesRef,vehiclesRef] = [useRef(null), useRef(null),useRef(null),useRef(null)];

const [clientcount,countriescount,vehiclescount] = [useScrollTriggeredCountUp(clientRef, 80),useScrollTriggeredCountUp(countriesRef, 220),useScrollTriggeredCountUp(vehiclesRef, 100)]
 const count = useScrollTriggeredCountUp(branchRef, 3)

  return (
    <>
    <section className="about-us-banner">
  <div className="absolute inset-0 bg-black opacity-60"></div>
  <p className="about-us-text ">About <span className="text-lime-500 font-medium">Us</span></p>
</section>
<section>

</section>
<section className="margin about-sections ">
    
    <div className="z-20 bg-white p-8 max-md:bg-white max-md:p-3">
      <h1 className="about-sections-heading">DSL International & Domestic <span className=" font-semibold text-lime-500">Courier, Cargo & Cod</span> Service</h1>
      <p className="mt-4 text-gray-600 max-md:text-balance max-md:text-left max-md:text-sm ">
        DSL is a complete courier service provider, offering lightning-fast and cost-effective courier services, without compromising quality.
        <span className="mt-4 block">DSL Courier brings the best rates for commercial and online business entrepreneurs. We have an experienced team for technology and professionally handle all kinds of shipments.</span>
      </p>
    </div>
    <div className="about-sections-second-div">
      <img className="about-sections-second-div-img" 
      src={serviceImage} 
      alt="Placeholder" />
    </div>
  </section>
  
  <section className=" margin mb-40">
    <div className="p-3"> 
      <h1 className="text-black p-2 fotn-bold text-3xl  ">Company <span className="text-lime-500 font-medium bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-green-800">Overview</span></h1>
      <p className="p-3 text-gray-500 text-balance text-left">Daily Swipe Logistics Pvt Ltd (DSL) was established in the year 2018.It is conceived with an idea to offer affordable and swift courier service throughout the world. Its head office is based in Karachi, Pakistan. DSL is registered brand under Securities and Exchange Commission of Pakistan (SECP) & Federal Board of Revenue (FBR) REG. No. 8127623, INC. No. 0148845, NTN No. 51023676. DSL focuses on providing high-quality service, customer satisfaction and through professionalism & fast service strategy that strives to exceed customer{`'`}s expectations.Every customer that DSL deals with is treated as a partner and not as a customer; it{`'`}s this approach that has led DSL to become a unique courier company.</p>
    </div>
    <div className=''>

    </div>
    <section className='margin'>
    <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-2">
      <div className=" w-full flex flex-col ">
        <img src={BrandsImage} alt="Brands" className='h-[100px]  pl-5 object-contain' />
        <p ref={branchRef} className="text-lime-500 text-3xl text-center font-medium">{count}+</p>
        <p className="counter-section-p">Branches</p>
        
      </div>
      <div className="w-full flex flex-col">
        <img src={ClientsImage} alt="Clients" className='h-[100px]  pl-2 object-contain' />
        <p ref={clientRef} className="text-lime-500 text-3xl text-center font-medium">{clientcount}+</p>
        <p className="counter-section-p">Clients</p>
      </div>
      <div className="w-full flex flex-col">
        <img src={CountriesImage} alt="Countries" className='h-[100px]  pl-1 object-contain' />
        <p ref={countriesRef} className="text-lime-500 text-3xl text-center font-medium">{countriescount}+</p>
        <p className="counter-section-p">Countries Worldwide</p>
      </div>
      <div className="w-full flex flex-col">
        <img src={VehiclesImage} alt="Vehicles" className='h-[100px]  pl-1 object-contain' />
        <p ref={vehiclesRef} className="text-lime-500 text-3xl text-center font-medium">{vehiclescount}+</p>
        <p className="counter-section-p">Vehicles</p>
      </div>
      

    </div>

    </section>
  </section>
</>
  )
}

export default AboutSection