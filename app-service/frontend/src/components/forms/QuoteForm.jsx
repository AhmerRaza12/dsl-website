import React from 'react'
const QuoteForm = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };
  return (
    
<form onSubmit={handleSubmit} className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_full_name" id="floating_full_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="floating_full_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
  </div>
  {/* Email */}
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    {/* From City */}
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_from_city" id="floating_from_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="floating_from_city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">From City</label>
  </div>
  {/* To City */}
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_to_city" id="floating_to_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="floating_to_city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">To City</label>
      </div>
  </div>
  {/* Shipment type selection with options [Parcel,document] */}
  <div className="relative z-0 w-full mb-8 group">
      <select name="floating_shipment_type" id="floating_shipment_type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" required>
          <option value="">Select Shipment Type</option>
          <option value="Parcel">Parcel</option>
          <option value="Document">Document</option>
      </select>
      <label htmlFor="floating_shipment_type" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Shipment Type</label>
  </div>
  {/* Product type selection with options [COD,NON COD] */}
  <div className="relative z-0 w-full mb-8 group">
      <select name="floating_product_type" id="floating_product_type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" required>
          <option value="">Select Product Type</option>
          <option value="COD">COD</option>
          <option value="NON COD">NON COD</option>
      </select>
      <label htmlFor="floating_product_type" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Type</label>
  </div>
{/* Service type selection with options [Karachi Worldwide,Dubai Worldwide,UK Worldwide,Import Worldwide(Air,Duty Paid Worldwide,Student Worldwide,Customs Clearance)] */}
  <div className="relative z-0 w-full mb-8 group">
      <select name="floating_service_type" id="floating_service_type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" required>
          <option value="">Select Service Type</option>
          <option value="Karachi Worldwide">Karachi Worldwide</option>
          <option value="Dubai Worldwide">Dubai Worldwide</option>
          <option value="UK Worldwide">UK Worldwide</option>
          <option value="Import Worldwide">Import Worldwide</option>
          <option value="Air">Air</option>
          <option value="Duty Paid Worldwide">Duty Paid Worldwide</option>
          <option value="Student Worldwide">Student Worldwide</option>
          <option value="Customs Clearance">Customs Clearance</option>
      </select>
      <label htmlFor="floating_service_type" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Type</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    {/* Weight in KG required */}
    <div className="relative z-0 w-full mb-8 group">
        <input type="number" name="floating_weight" id="floating_weight" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="floating_weight" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Weight (KG)</label>
    </div>
     {/* Pcs Qty */}
    <div className="relative z-0 w-full mb-8 group">
        <input type="number" name="floating_pcs_qty" id="floating_pcs_qty" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="floating_pcs_qty" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pcs Qty</label>
        </div>
  </div>
  <h1 className='text-center font-bold mb-8 text-xl text-green-800'>Dimensions</h1>
  <div className="grid md:grid-cols-3 md:gap-4">
    {/* Length */}
    <div className="relative z-0 w-full mb-8 group">
        <input type="number" name="floating_length" id="floating_length" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="floating_length" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Length</label>
        </div>
    {/* Width */}
    <div className="relative z-0 w-full mb-8 group">
        <input type="number" name="floating_width" id="floating_width" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="floating_width" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Width</label>
        </div>
    {/* Height */}
    <div className="relative z-0 w-full mb-8 group">
        <input type="number" name="floating_height" id="floating_height" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="floating_height" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Height</label>
        </div>
  </div>
  <button type="submit" className=" flex mx-auto text-green-500 bg-green-300 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

  )
}

export default QuoteForm