import React from 'react'
import { MdClear } from "react-icons/md";
import { IoMdPrint } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";


const RetailBooking = () => {
    return (
        <section className='margin'>
            <form className="max-w-6xl p-4 bg-slate-100 shadow-md rounded-lg">
            <div className="flex justify-center">
                <h2 className="text-3xl font-bold text-black" >
                    Retail<span className="text-lime-500 tracking-wide shadow-none"> Booking</span>
                </h2>
            </div>
            <h1 className="font-bold text-2xl text-black relative max-sm:text-center mt-5">
                <span className="border-b-2 border-lime-400 ">Consign</span>ment Details
            </h1>

            <div className="flex  flex-wrap justify-normal items-center gap-4 p-3 mt-2">
                {/* Set CN Checkbox */}
                <div className='space-x-2 flex items-center'>
                    <label htmlFor="setCn" className="text-black font-medium">Set CN</label>
                    <input type="checkbox" name="setCn" id="setCn" className="w-4 h-4 sm:w-6 sm:h-6 text-lime-600 border-gray-300 focus:ring-lime-600" />
                </div>

                {/* Tracking Number */}
                <div className='space-x-2 flex items-center'>
                    <label htmlFor="trackingNumber" className="text-black font-medium">Tracking Number</label>
                    <input type="text" name="trackingNumber" id="trackingNumber" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                </div>

                {/* Keep Partner Checkbox */}
                <div className='space-x-2 flex items-center'>
                    <label htmlFor="keepPartner" className="text-black font-medium">Keep Partner</label>
                    <input type="checkbox" name="keepPartner" id="keepPartner" className="w-4 h-4 sm:w-6 sm:h-6 text-lime-600 border-gray-300 focus:ring-lime-600" />
                </div>

                {/* Select Partner */}
                <div className='space-x-2 flex items-center'>
                    <label htmlFor="selectPartner" className="text-black font-medium">Select Partner</label>
                    <select name="selectPartner" id="selectPartner" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
                        <option value="AMX : Aramex">AMX : Aramex</option>
                        <option value="BLX : BlueEx">BLX : BlueEx</option>
                        <option value="CLC : Call Courier">CLC : Call Courier</option>
                        <option value="DHL : DHL">DHL : DHL</option>
                        <option value="DPD : DPD">DPD : DPD</option>
                        <option value="DPX : DPEX">DPX : DPEX</option>
                        <option value="DSL : DSL">DSL : DSL</option>
                        <option value="DAE : FastEx">DAE : FastEx</option>
                        <option value="FDX : Fedex">FDX : Fedex</option>
                        <option value="LCS : LCS">LCS : LCS</option>
                        <option value="MNP : M&amp;P">MNP : MNP</option>
                        <option value="NTL : NTL">NTL : NTL</option>
                        <option value="PPO : Post Office">PPO : Post Office</option>
                        <option value="SKY : SkyNet">SKY : SkyNet</option>
                        <option value="SPX : SpeedEx">SPX : SpeedEx</option>
                        <option value="TCS : TCS">TCS : TCS</option>
                        <option value="UPS : UPS">UPS : UPS</option>
                    </select>
                </div>

                {/* Reference Number */}
                <div className='space-x-2 flex items-center'>
                    <label htmlFor="referenceNumber" className="text-black font-medium">Reference Number</label>
                    <input type="text" name="referenceNumber" id="referenceNumber" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                </div>
            </div>
            <h1 className="font-bold text-2xl text-black relative max-sm:text-center mt-5">
                <span className="border-b-2 border-lime-400 ">Service</span> Details
            </h1>
            <div className="flex  flex-wrap justify-normal items-center gap-4 p-2 mt-5">
                {/* Product Selector with options */}
                <div className='space-x-2 flex items-center  max-sm:mx-auto '>
                    <label htmlFor="productSelector" className="text-black font-medium">Product Selector</label>
                    <select name="productSelector" id="productSelector" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
                        <option value="1">Product 1</option>
                        <option value="2">Product 2</option>
                        <option value="3">Product 3</option>
                    </select>
                </div>
                {/* Service Selector with options */}
                <div className='space-x-2 flex items-center'>
                    <label htmlFor="serviceSelector" className="text-black font-medium">Service Selector</label>
                    <select name="serviceSelector" id="serviceSelector" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                    </select>
                </div>
                {/* PayMode with Options  */}
                <div className='space-x-2 flex items-center'>
                    <label htmlFor="payMode" className="text-black font-medium">Pay Mode</label>
                    <select name="payMode" id="payMode" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
                        <option value="1">Pay Mode 1</option>
                        <option value="2">Pay Mode 2</option>
                        <option value="3">Pay Mode 3</option>
                    </select>
                </div>
                {/* Account No Input Field */}
                <div className='space-x-2 flex items-center'>
                    <label htmlFor="accountNo" className="text-black font-medium">Account No</label>
                    <input type="text" name="accountNo" id="accountNo" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                </div>
                {/* Pickup Date default value of today */}
                <div className='space-x-2 flex items-center'>
                    <label htmlFor="pickupDate" className="text-black font-medium">Pickup Date</label>
                    <input type="date" name="pickupDate" id="pickupDate" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                </div>
                {/* Booking Date default value of today */}
                <div className='space-x-2 flex items-center'>
                    <label htmlFor="bookingDate" className="text-black font-medium">Booking Date</label>
                    <input type="date" name="bookingDate" id="bookingDate" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5 max-sm:grid-cols-1">
                <div className='w-full '>
                    <h1 className="font-bold text-2xl text-black relative max-sm:text-center ">
                        <span className="border-b-2 border-lime-400 ">Shipper</span> Details
                    </h1>
                    <div className="flex items-center mt-4">
                        <label htmlFor="keepShipper" className="text-black font-medium w-1/5 ">
                            Keep Shipper
                        </label>
                        <input
                            type="checkbox"
                            name="keepShipper"
                            id="keepShipper"
                            className="ml-2 w-4 h-4 sm:w-6 sm:h-6 text-lime-600 border-gray-300 focus:ring-lime-600"
                        />
                    </div>

                    {/* Origin Input field */}
                    <div className="flex items-center mt-4">
                        <label htmlFor="origin" className="text-black font-medium w-1/5">
                            Origin
                        </label>
                        <input
                            type="text"
                            name="origin"
                            id="origin"
                            className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                        />
                    </div>
                    {/* Name Input field */}
                    <div className="flex items-center mt-4">
                        <label htmlFor="name" className="text-black font-medium w-1/5">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                        />
                    </div>

                    {/* Mobile Input field */}
                    <div className="flex items-center mt-4">
                        <label htmlFor="mobile" className="text-black font-medium w-1/5">
                            Mobile
                        </label>
                        <input
                            type="text"
                            name="mobile"
                            id="mobile"
                            className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                        />
                    </div>

                    {/* Number Input field */}
                    <div className="flex items-center mt-4">
                        <label htmlFor="number" className="text-black font-medium w-1/5">
                            Number
                        </label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                        />
                    </div>

                    {/* Address Textarea */}
                    <div className="flex  mt-4">
                        <label htmlFor="address" className="text-black font-medium w-1/5">
                            Address
                        </label>
                        <textarea
                            name="address"
                            id="address"
                            rows="3"
                            className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                        ></textarea>
                    </div>
                </div>
                <div className='w-full'>
                
                    <h1 className="font-bold text-2xl text-black relative max-sm:text-center ">
                        <span className="border-b-2 border-lime-400 ">Consign</span>ee Details
                    </h1>
                    {/* Destination */}
                    <div className="flex items-center mt-4">
                        <label htmlFor="dest" className="text-black font-medium w-1/5">
                            Destination
                        </label>
                        <input
                            type="text"
                            name="dest"
                            id="dest"
                            className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                        />
                    </div>
                    {/* Consignee Name */}
                    <div className="flex items-center mt-4">
                        <label htmlFor="consigneeName" className="text-black font-medium w-1/5">
                            Name
                        </label>
                        <input
                            type="text"
                            name="consigneeName"
                            id="consigneeName"
                            className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                        />
                        </div>
                    {/* Consignee Mobile */}
                    <div className="flex items-center mt-4">
                        <label htmlFor="consigneeMobile" className="text-black font-medium w-1/5">
                            Mobile
                        </label>
                        <input
                            type="text"
                            name="consigneeMobile"
                            id="consigneeMobile"
                            className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                        />
                        </div>
                    {/* Consignee Number */}
                    <div className="flex items-center mt-4">
                        <label htmlFor="consigneeNumber" className="text-black font-medium w-1/5">
                            Number
                        </label>
                        <input
                            type="number"
                            name="consigneeNumber"
                            id="consigneeNumber"
                            className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                        />
                        </div>
                    {/* Consignee Address */}
                    <div className="flex  mt-4">
                        <label htmlFor="consigneeAddress" className="text-black font-medium w-1/5">
                            Address
                        </label>
                        <textarea
                            name="consigneeAddress"
                            id="consigneeAddress"
                            rows="3"
                            className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                        ></textarea>
                        </div>
                </div>
            </div>
            
            <div className="mt-8">
  <h1 className="font-bold text-2xl text-black relative max-sm:text-center">
    <span className="border-b-2 border-lime-400">Shipment</span> Details
  </h1>

  <div className="flex flex-wrap justify-center mt-10 gap-2 max-sm:gap-4">
    {/* Height Input field */}
    <div className="flex items-center mb-2 sm:mb-0">
      <label htmlFor="height" className="text-black font-medium">
        Height
      </label>
      <input
        type="number"
        name="height"
        id="height"
        className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
      />
    </div>

    {/* Width Input field */}
    <div className="flex items-center mb-2 sm:mb-0">
      <label htmlFor="width" className="text-black font-medium">
        Width
      </label>
      <input
        type="number"
        name="width"
        id="width"
        className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
      />
    </div>

    {/* Length Input field */}
    <div className="flex items-center mb-2 sm:mb-0">
      <label htmlFor="length" className="text-black font-medium">
        Length
      </label>
      <input
        type="number"
        name="length"
        id="length"
        className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
      />
    </div>

    {/* Weight Input field */}
    <div className="flex items-center mb-2 sm:mb-0">
      <label htmlFor="weight" className="text-black font-medium">
        Weight
      </label>
      <input
        placeholder='KG'
        type="number"
        step={0.5}
        name="weight"
        id="weight"
        className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
      />
    </div>
  </div>
  <div className="flex flex-wrap justify-center mt-10 gap-2 max-sm:gap-4">
    {/* Pieces Input field */}
    <div className="flex items-center mb-2 sm:mb-0">
      <label htmlFor="pieces" className="text-black font-medium">
        Pieces
      </label>
      <input
        type="number"
        name="pieces"
        id="pieces"
        className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
      />
      </div>
      {/* Content Textarea field */}
        <div className="flex  mb-2 sm:mb-0">
            <label htmlFor="content" className="text-black font-medium">
                Content
            </label>
            <textarea
                name="content"
                id="content"
                rows="2"
                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
            ></textarea>
            </div>
        {/* Remarks Textarea field */}
        <div className="flex  mb-2 sm:mb-0">
            <label htmlFor="remarks" className="text-black font-medium">
                Remarks
            </label>
            <textarea
                name="remarks"
                id="remarks"
                rows="2"
                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
            ></textarea>
            </div>
            {/* Instructions */}
            <div className="flex  mb-2 sm:mb-0">
                <label htmlFor="instructions" className="text-black font-medium">
                    Instructions
                </label>
                <textarea
                    defaultValue="Handle with care"
                    name="instructions"
                    id="instructions"
                    rows="2"
                    className="ml-2 text-gray-500 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                ></textarea>
                </div>
  </div>
  <div className="flex items-center justify-center mt-10">
        {/* Status Selector with options[1.Confirmed. 2.On its way. 3.Out for delivery.] */}
        <div className='space-x-2 flex items-center'>
            <label htmlFor="statusSelector" className="text-black font-medium">Status Selector</label>
            <select name="statusSelector" id="statusSelector" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
                <option value="Confirmed">Confirmed</option>
                <option value="On its way">On its way</option>
                <option value="Out for delivery">Out for delivery</option>
            </select>
        </div>
  </div>
</div>
<div className="mt-8">
    <h1 className="font-bold text-2xl text-black relative max-sm:text-center">
        <span className="border-b-2 border-lime-400">Insur</span>ance Details
    </h1>
    <div className="flex flex-wrap justify-evenly mt-10  ">
        {/* Declared value number field */}
        <div className="flex items-center mb-2 sm:mb-0">
            <label htmlFor="declaredValue" className="text-black font-medium">
                Declared Value
            </label>
            <input
                type="number"
                name="declaredValue"
                id="declaredValue"
                className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
            />
            </div>
            {/* Insurance Charges */}
            <div className="flex items-center mb-2 sm:mb-0">
                <label htmlFor="insuranceCharges" className="text-black font-medium">
                    Insurance Charges
                </label>
                <input
                    type="number"
                    name="insuranceCharges"
                    id="insuranceCharges"
                    className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                />
                </div>
        </div>
</div>
<div className="mt-8">
    <h1 className="font-bold text-2xl text-black relative max-sm:text-center">
        <span className="border-b-2 border-lime-400">Charge</span>s Details
    </h1>
    <div className="flex flex-wrap justify-center items-center mt-10 gap-2 max-sm:gap-4">
  {/* COD Amount Input field */}
  <div className="flex flex-col items-center mb-2 sm:mb-0">
    <label htmlFor="codamount" className="text-black font-medium mb-1">
      COD Amount
    </label>
    <input
      type="number"
      name="codamount"
      id="codamount"
      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
    />
  </div>

  {/* Service Charges Input field */}
  <div className="flex flex-col items-center mb-2 sm:mb-0">
    <label htmlFor="charges" className="text-black font-medium mb-1">
      Service Charges
    </label>
    <input
      type="number"
      name="charges"
      id="charges"
      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
    />
  </div>

  {/* Other Charges Input field */}
  <div className="flex flex-col items-center mb-2 sm:mb-0">
    <label htmlFor="ocharges" className="text-black font-medium mb-1">
      Other Charges
    </label>
    <input
      type="number"
      name="ocharges"
      id="ocharges"
      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
    />
  </div>

  {/* Discount Input field */}
  <div className="flex flex-col items-center mb-2 sm:mb-0">
    <label htmlFor="discount" className="text-black font-medium mb-1">
      Discount
    </label>
    <input
      type="number"
      name="discount"
      id="discount"
      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
    />
  </div>
</div>
    <div className="flex flex-wrap justify-center items-center mt-2 gap-2 max-sm:gap-4">
  {/* COD Amount Input field */}
  <div className="flex flex-col items-center mb-2 sm:mb-0">
    <label htmlFor="tax" className="text-black font-medium mb-1">
      Tax
    </label>
    <input
      type="number"
      name="tax"
      id="tax"
      
      className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
    />
  </div>

  {/* Tax Input Field */}
  <div className="flex flex-col items-center mb-2 sm:mb-0">
    <label htmlFor="total" className="text-black font-medium mb-1">
      Total
    </label>
    <input
      type="number"
      name="total"
      id="total"
      
      className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
    />
  </div>
</div>
</div>
        <div className="flex justify-center mt-10">
            <button className="flex items-center justify-center bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition duration-300 ease-in-out">
                <MdFileUpload className="mr-1" />
                Save
            </button>
            <button className="flex items-center justify-center bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition duration-300 ease-in-out ml-4">
                <IoMdPrint className="mr-1" />
                Print
            </button>
            <button className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out ml-4">
                <MdClear className="mr-1" />
                Clear
            </button>
        </div>
        </form>
        </section>
        
    )
}

export default RetailBooking