import React,{useState} from 'react'

const AccountForm = () => {
  const [cnic, setCnic] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const cname = document.getElementById('cname').value
    const ntn = document.getElementById('ntn').value
    const stn = document.getElementById('stn').value
    console.log(name,cname,ntn,stn)
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data)
  }
  const handleChange = (e) => {
    const value = e.target.value
    if (value.length <= 13) {
      setCnic(value)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <section className='mx-5 my-5'>
      <div className="grid md:grid-cols-2 md:gap-6">
        {/* Company Name Required */}
      <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="cname" id="cname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
      <label htmlFor="cname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
      </div>
      {/* Your Name Required */}
      <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
      </div>
        
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        {/* NTN Number */}
        <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="ntn" id="ntn" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " />
        <label htmlFor="ntn" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NTN Number</label>
        </div>
        {/* Sales Tax Number */}
        <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="stn" id="stn" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " />
        <label htmlFor="stn" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sales Tax Number</label>
        </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        {/* Landline Number */}
        <div className="relative z-0 w-full mb-5 group">
        <input type="number"  name="landline" id="landline" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " />
        <label htmlFor="landline" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Landline Number</label>
        </div>
        {/* Company Phone Number */}
        <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="cphone" id="cphone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " />
        <label htmlFor="cphone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Phone Number</label>
        </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        {/* Mobile Number */}
        <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="mobile" id="mobile" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " />
        <label htmlFor="mobile" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>
        </div>
        {/* Your Email */}
        <div className="relative z-0 w-full mb-5 group">
        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
        </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        {/* CNIC Number required */}
        <div className="relative z-0 w-full mb-5 group">
        <input type="number" value={cnic} maxLength={13} onChange={handleChange} name="cnic" id="cnic" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label htmlFor="cnic" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CNIC Number</label>
        </div>
        {/* Company/Facebook Url*/}
        <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="fburl" id="fburl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " />
        <label htmlFor="fburl" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company/Facebook Url</label>
        </div>
        </div>
        {/* PickUp Address full width textbox 2 rows */}
        <div className="relative z-0 w-full mb-5 group">
        <textarea name="address" id="address" rows="2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " />
        <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PickUp Address</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        {/* City Required*/}
        <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
        <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
        </div>
        {/* Nature Of Business*/}
        <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="nob" id="nob" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " />
        <label htmlFor="nob" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nature Of Business</label>
        </div>
        </div>
        {/* Number of months into business with radio button options [Nil, Less than 6 months, less than a year, more than a year] */}
        <fieldset className="mb-5">
        <legend className="text-base font-medium text-gray-900 dark:text-gray-100">Number of months into business</legend>
        <div className="mt-4 space-y-4">
        <div className="flex items-center">
        <input type="radio" name="months" id="nil" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
        <label htmlFor="nil" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Nil</label>
        </div>
        <div className="flex items-center">
        <input type="radio" name="months" id="lt6" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
        <label htmlFor="lt6" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Less than 6 months</label>
        </div>
        <div className="flex items-center">
        <input type="radio" name="months" id="lt12" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
        <label htmlFor="lt12" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Less than a year</label>
        </div>
        <div className="flex items-center">
        <input type="radio" name="months" id="gt12" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
        <label htmlFor="gt12" className="ml-3 text-sm text-gray-900 dark:text-gray-100">More than a year</label>
        </div>
        </div>
        </fieldset>
        {/* Shipment per week with radio button options [Nil, Below 25, Above 25] */}
        <fieldset className="mb-5">
        <legend className="text-base font-medium text-gray-900 dark:text-gray-100">Shipment per week</legend>
        <div className="mt-4 space-y-4">
        <div className="flex items-center">
        <input type="radio" name="shipment" id="nil" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
        <label htmlFor="nil" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Nil</label>
        </div>
        <div className="flex items-center">
        <input type="radio" name="shipment" id="lt25" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
        <label htmlFor="lt25" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Below 25</label>
        </div>
        <div className="flex items-center">
        <input type="radio" name="shipment" id="gt25" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
        <label htmlFor="gt25" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Above 25</label>
        </div>
        </div>
        </fieldset>
        {/* Product Range with checkboxes of options [Clothing,Books,Perfumes and Cosmetics,Watches,Home Decor,Sports,Home Appliances,Health and Fitness,Mobile and Tablets(PTA Approved),Computer Peripherals and Accessories] and others checkbox with the input field to type in category */}
        {/* I need to have checkboxes inlined for 4 in a row in lg screens in md screens 2 and in sm 1 in row */}

        <fieldset className="mb-5">
  <legend className="text-base font-medium text-gray-900 dark:text-gray-100">Product Range</legend>
  <div className="mt-4 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4">
    <div className="flex items-center">
      <input type="checkbox" name="product" id="clothing" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
      <label htmlFor="clothing" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Clothing</label>
    </div>
    <div className="flex items-center">
      <input type="checkbox" name="product" id="books" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
      <label htmlFor="books" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Books</label>
    </div>
    <div className="flex items-center">
      <input type="checkbox" name="product" id="perfumes" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
      <label htmlFor="perfumes" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Perfumes and Cosmetics</label>
    </div>
    <div className="flex items-center">
      <input type="checkbox" name="product" id="watches" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
      <label htmlFor="watches" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Watches</label>
    </div>
    <div className="flex items-center">
      <input type="checkbox" name="product" id="homedecor" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
      <label htmlFor="homedecor" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Home Decor</label>
    </div>
    <div className="flex items-center">
      <input type="checkbox" name="product" id="sports" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
      <label htmlFor="sports" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Sports</label>
    </div>
    <div className="flex items-center">
      <input type="checkbox" name="product" id="homeappliances" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
      <label htmlFor="homeappliances" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Home Appliances</label>
    </div>
    <div className="flex items-center">
      <input type="checkbox" name="product" id="healthfitness" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
      <label htmlFor="healthfitness" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Health and Fitness</label>
    </div>
    <div className="flex items-center">
      <input type="checkbox" name="product" id="mobiletablets" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
      <label htmlFor="mobiletablets" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Mobile and Tablets(PTA Approved)</label>
    </div>
    <div className="flex items-center">
      <input type="checkbox" name="product" id="computerperipherals" className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600" />
      <label htmlFor="computerperipherals" className="ml-3 text-sm text-gray-900 dark:text-gray-100">Computer Peripherals and Accessories</label>
    </div>
    <div className="flex items-center">
  <input
    type="checkbox"
    name="product"
    id="others-checkbox"
    className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-600"
  />
  <label
    htmlFor="others-checkbox"
    className="ml-3 text-sm text-gray-900 dark:text-gray-100"
  >
    Others
  </label>
  <input
    type="text"
    name="others"
    id="others-input"
    className="block py-2.5 px-3 w-64 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lime-600"
    placeholder=" "
  />
</div>

  </div>
</fieldset>



        
         {/* Submit Button */}
  <button type="submit" className="mb-6 w-full rounded bg-lime-600 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
    Submit
  </button>

      </section>

    </form>
  )
}

export default AccountForm