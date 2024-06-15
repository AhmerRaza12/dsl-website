import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiLocationOn, CiMobile2 } from "react-icons/ci";




const ContactSection = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('on submit')
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)
    console.log(name)
    console.log(email)
    console.log(message)
    console.log(formData)
  }
  return (
    <>
    <section className="contact-us-banner">
  <div className="absolute inset-0 bg-black opacity-80"></div>
  <p className="about-us-text ">Contact <span className="text-lime-500 font-medium">Us</span></p>
</section>
<section className='margin'>
<div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115869.36176310733!2d66.95171655460504!3d24.83249291610325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d30bb42bd67%3A0x8832a3cd448860a1!2sDSL%20Courier%20(HeadOffice%20Clifton%20Branch)!5e0!3m2!1sen!2s!4v1718381579717!5m2!1sen!2s" width="100%" height="450" style={{border:"none"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div className="container px-6 md:px-12">
    <div
      className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
      <div className="flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <form onSubmit={handleSubmit}>
            <div className="relative mb-6" data-te-input-wrapper-init>
            <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
            <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
            <textarea name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required rows={4}></textarea>
            <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
            </div>
            
            <button type="submit"
                className="mb-6 w-full rounded bg-lime-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                Send
              </button>
          </form>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-lime-200 p-4 text-primary">
                    <CiMail size={30}/>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">
                    Email Address
                  </p>
                  <a className="text-sm block text-neutral-500 hover:text-lime-500" href='mailto:cs@dslcourier.com'>
                  cs@dslcourier.com
                  </a>
                  <a className='text-sm block text-neutral-500 hover:text-lime-500' href='mailto:pickup@dslcourier.com'>
                  pickup@dslcourier.com
                  </a>
                  <a className='text-sm block text-neutral-500 hover:text-lime-500' href='mailto:cakesh@dslcourier.com'>
                  cakesh@dslcourier.com
                  </a>
                  <a className='text-sm block text-neutral-500 hover:text-lime-500' href='mailto:feelings@dslcourier.com'>
                  feelings@dslcourier.com
                  </a>
                  <a className='text-sm block text-neutral-500 hover:text-lime-500' href='mailto:billing@dslcourier.com'>
                  billing@dslcourier.com
                  </a>
                  <a className='text-sm block text-neutral-500 hover:text-lime-500' href='mailto:sales@dslcourier.com'>
                  sales@dslcourier.com
                  </a>
                  <a className='text-sm block text-neutral-500 hover:text-lime-500' href='mailto:info@dslcourier.com'>
                  info@dslcourier.coms
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="srink-0">
                  <div className="inline-block rounded-md bg-lime-200 p-4 text-primary">
                    <CiLocationOn size={30} />
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">
                    Addresses
                  </p>
                  <p className="text-sm text-neutral-500">
                  Shop GF-41/22 Lavish Mall, near Teen Talwar, Block 8 Clifton, Karachi, 75000
                  </p>
                  <p className="text-sm text-neutral-500">
                  Shop G-66 New Jama Mall, M.A Jinnah Rd, Karachi, 75000
                  </p>
                  <p className="text-sm text-neutral-500">
                  Shop GF-41/22 Lavish Mall, near Teen Talwar, Block 8 Clifton, Karachi, 75000
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-lime-200 p-4 text-primary">
                    <CiMobile2 size={30} />
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">Mobile</p>
                  <p className="text-neutral-500"> 0304-1114401
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default ContactSection