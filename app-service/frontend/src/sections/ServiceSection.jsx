import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { MdDirectionsBike } from "react-icons/md";
import { GiCargoShip } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import CakeshImg from "../assets/CAKESH LOGO .png"
import FeelingsImg from "../assets/FEELINGS LOGO.png"
import FarmaishImg from "../assets/FARMAISH LOGO.png"
import {Link} from "react-router-dom";

const ServiceSection = () => {
  return (
    <>
    <section className="services-banner">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <p className="about-us-text ">Our <span className="text-lime-500 font-medium">Services</span></p>
    </section>
    <section className='margin'>
    <div className="bg-white py-12">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
      <h2 className="text-base font-semibold leading-7 text-black bg-lime-400 px-3 rounded-lg uppercase mb-4 lg:mb-8">
      Swift Services</h2>
      <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">Enhanced
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-600 to-gray-900">Shipping Solutions</span>
      </h1>
      <p className="mt-6 text-md text-gray-600 max-w-lg text-center">Your one-stop solution for seamless logistics, courier, cargo, and COD needs. With our dedicated team and extensive network, we ensure timely and reliable deliveries every time,making your experience swift and hassle-free.</p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400">
                <CiDeliveryTruck className=" h-8 w-8 text-black"/>
                </div>Logistics
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">As a global solutions provider DSL provides fulfillment and logistics services throughout our network including collecting, packing, labeling and processing shipments to residential or commercial customers.</dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400">
                <MdDirectionsBike className=" h-8 w-8 text-black"/>
              </div>Courier
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">Our passion of delivering excellence makes us a great choice to cater to your domestic courier needs. With a self-owned employees, vans, bikes and offices across Pakistan, we deliver it all so well.
          </dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400">
                <GiCargoShip className=" h-8 w-8 text-black"/>
              </div>Cargo
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">When time is not an issue and you have heavy weight shipments our 5 to 7 day door to door heavy weight shipment delivery service can get your cargo delivered door to door at considerable savings.</dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400">
                <BsCashCoin className=" h-8 w-8 text-black"/>
              </div>COD
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">The most in demand and hot service nowadays. Online shopping trends are growing and so are the needs for safe and secure deliveries of shopped items at the buyer’s doorstep.Flexible payment options daily Cash or bank transfer.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

    </section>
    <section className='margin'>
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold leading-8 tracking-tight text-lime-500">DSL- Service Options</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</p>
          <p className="mt-4 text-base leading-7 text-gray-600">At DSL, we offer a comprehensive range of services designed to meet all your logistics, courier, cargo, and COD needs. Our all-in-one platform simplifies the process, ensuring that you have access to the best solutions tailored to your specific requirements. Whether you need efficient global logistics, reliable domestic courier services, cost-effective cargo shipping, or secure cash-on-delivery options, DSL has you covered.</p>
        </div>
        <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg className="absolute top-1 left-0 h-5 w-5 text-lime-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
</svg>
Flexible Delivery
              </dt>
              <dd className="mt-2">Various Delivery option ranges from 24 hours to 108 hours.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg className="absolute top-1 left-0 h-5 w-5 text-lime-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
</svg>
            Custom Deliveries
              </dt>
              <dd className="mt-2">All kind deliveries option available according to the customer{`'`}s need and budget.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg className="absolute top-1 left-0 h-5 w-5 text-lime-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
</svg>
        Transparent Pricing
              </dt>
              <dd className="mt-2">No hidden and labor charges for loading and unloading. By Air, By Road movements.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg className="absolute top-1 left-0 h-5 w-5 text-lime-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
</svg>
Extensive Reach
              </dt>
              <dd className="mt-2">Delivery in more than 2500 + cities.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg className="absolute top-1 left-0 h-5 w-5 text-lime-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
</svg>
Assured Savings
              </dt>
              <dd className="mt-2">Minimum 20% guaranteed discounted rates.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg className="absolute top-1 left-0 h-5 w-5 text-lime-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
</svg>
Document Assistance
              </dt>
              <dd className="mt-2">Provide assistance to arrange require documents for commercial shipments.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg className="absolute top-1 left-0 h-5 w-5 text-lime-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
</svg>
Customized Packing.
              </dt>
              <dd className="mt-2">Tailored packing solutions to safeguard your items during transit, ensuring they arrive safely and intact at their destination.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <svg className="absolute top-1 left-0 h-5 w-5 text-lime-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
</svg>
Stationery Providers.
              </dt>
              <dd className="mt-2">Your one-stop destination for all your stationery needs, offering a wide range of high-quality products to keep your office or school running smoothly.</dd>
            </div>
          
        </dl>
      </div>
    </div>
  </div>
    </section>
    <section className='margin'>
    <h1 className="my-5 lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-600 to-gray-900">Other Services</span>
      </h1>
    <div className="flex gap-8 flex-wrap justify-center">
    <Link to='/feelings'>
<div className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105  flex flex-col justify-center items-center">
    <img src={FeelingsImg} className='h-24 w-24 sm:h-40 sm:w-40' alt="Cakesh img" />
    <span className="font-bold text-lime-500 mt-1 uppercase">Gift Service</span>
</div>
</Link>
<Link to='/cakesh'>
<div className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105  flex flex-col justify-center items-center">
    <img src={CakeshImg} className='h-24 w-24 sm:h-40 sm:w-40' alt="Cakesh img" />
    <span className="font-bold text-lime-500 mt-1 uppercase">Cake Service</span>
</div>
</Link>

<div className=" cursor-pointer transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105  flex flex-col justify-center items-center">
    <img src={FarmaishImg} className='h-24 w-24 sm:h-40 sm:w-40' alt="Cakesh img" />
    <span className="font-bold text-lime-500 mt-1 uppercase">Farmaish Service</span>
</div>

</div>
    </section>
    </>
  )
}

export default ServiceSection