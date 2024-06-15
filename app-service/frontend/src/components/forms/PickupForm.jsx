import React from 'react'
import { CiCircleInfo } from "react-icons/ci";

const PickupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // get all the values from the form
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const fromCity = document.getElementById('fromCity').value;
    const address = document.getElementById('address').value;
    const floating_weight = document.getElementById('floating_weight').value;
    const floating_pcs_qty = document.getElementById('floating_pcs_qty').value;
    const floating_length = document.getElementById('floating_length').value;
    const floating_width = document.getElementById('floating_width').value;
    const floating_height = document.getElementById('floating_height').value;
    let floating_date = document.getElementById('floating_date').value;
    let floating_time = document.getElementById('floating_time').value;


    console.log(name, contact, email, fromCity, address, floating_weight, floating_pcs_qty, floating_length, floating_width, floating_height, floating_date, floating_time);
    let time = floating_time.split(':');
    if (parseInt(time[0], 10) >= 20) {

      const date = new Date(floating_date);
      date.setDate(date.getDate() + 1);
      const day = date.getDate();
      const month = date.getMonth() + 1; 
      const year = date.getFullYear();
      // change the time to 8 AM
      floating_date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      floating_time = '08:00';
    }
    console.log(floating_date, floating_time);
  };

  return (
     <form onSubmit={handleSubmit}>
      <section className='mx-5 my-5'>

      
      <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-5 group">
        {/* Full Name */}
      <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
      {/* Contact No with only numbers like 0 to 9*/}
      </div>
      <div className="relative z-0 w-full mb-5 group">
      <input type="tel" name="contact" id="contact" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
      <label htmlFor="contact" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact No.</label>
      </div>
      </div>
      {/* Email */}
      <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
      </div>
      {/* From City */}
      <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="fromCity" id="fromCity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
      <label htmlFor="fromCity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">From City</label>
      </div>
      {/* Address */}
      <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
      <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
    {/* Weight in KG required */}
    <div className="relative z-0 w-full mb-8 group">
        <input type="number" name="floating_weight" id="floating_weight" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label htmlFor="floating_weight" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Weight (KG)</label>
    </div>
     {/* Pcs Qty */}
    <div className="relative z-0 w-full mb-8 group">
        <input type="number" name="floating_pcs_qty" id="floating_pcs_qty" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label htmlFor="floating_pcs_qty" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pcs Qty</label>
        </div>
  </div>
  <h1 className='text-center font-bold mb-8 text-xl text-lime-500 uppercase '>Dimensions</h1>
  

  <div className="grid md:grid-cols-3 md:gap-4">
    {/* Length */}
    <div className="relative z-0 w-full mb-5 group">
        <input type="number" name="floating_length" id="floating_length" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label htmlFor="floating_length" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Length</label>
        </div>
    {/* Width */}
    <div className="relative z-0 w-full mb-5 group">
        <input type="number" name="floating_width" id="floating_width" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label htmlFor="floating_width" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Width</label>
        </div>
    {/* Height */}
    <div className="relative z-0 w-full mb-5 group">
        <input type="number" name="floating_height" id="floating_height" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label htmlFor="floating_height" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Height</label>
        </div>
        
  </div>
  <hr className="h-1 mt-4 mb-5 bg-lime-500 border-0 dark:bg-gray-700 w-3/4 mx-auto"/>
  {/* Date and Time Selectors */}
  <div className="grid md:grid-cols-2 md:gap-6">
    {/* Date by Calendar */}
    <div className="relative z-0 w-full mb-8 group">
        <input type="date" name="floating_date" id="floating_date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label htmlFor="floating_date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
        </div>
    {/* Time by Clock */}
    <div className="relative z-0 w-full mb-8 group">
        <input type="time" name="floating_time" id="floating_time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label htmlFor="floating_time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-lime-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Time</label>
        </div>
  </div>
  {/* A disclaimer with light lime bg and info icon and round bordered good ui saying that selecting date => 8 PM would be selected on the day after */}
  <div className="bg-lime-100 p-4 rounded-lg mb-5">
    <div className="flex items-center">
      <div className="inline-block rounded-md bg-lime-300 p-4 text-primary ring-1 ring-black">
        <CiCircleInfo size={20}/>
      </div>
      <div className="ml-3">
        <p className="mb-1 font-bold ">
          Note
        </p>
        <p className="text-sm text-neutral-500">
          Selecting a date after 8 PM will be considered for the next day.
        </p>
      </div>
    </div>
  </div>
  {/* Submit Button */}
  <button type="submit" className="mb-6 w-full rounded bg-lime-600 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
    Submit
  </button>

      </section>
    </form>
  )
}

export default PickupForm