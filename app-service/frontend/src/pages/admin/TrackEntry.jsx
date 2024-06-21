import axios from 'axios';
import React, { useState } from 'react';

const TrackEntry = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dsl_cn = e.target.dsl_cn.value;

    try {
      const response = await axios.get(`http://127.0.0.1:5000/admin/get_booking_details`, {
        params: { dsl_cn },
        withCredentials: true,
      });

      if (response.status === 200) {
        setBookingDetails(response.data);
        setError('');
      } else {
        setBookingDetails(null);
        setError('No booking details found.');
      }
    } catch (error) {
      console.error('Error fetching booking details:', error);
      setBookingDetails(null);
      setError('An error occurred while fetching booking details.');
    }
  };

  const statusSteps = [
    {
    status: "confirmed",
    data :"Confirmed"
    },
    {
        status: "onitsway",
        data :"On its way"
    },
    {
        status:"outfordelivery",
        data :"Out for delivery"
    },
    {
        status: "delivered",
        data :"Delivered"
    }
  ];

  return (
    <section className='margin'>
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold text-black">
          Track <span className="text-lime-500">Entry</span>
        </h2>
      </div>
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <form onSubmit={handleSubmit} className="mt-5 sm:flex sm:items-center">
            <input
              id="dsl_cn"
              name="dsl_cn"
              className="text-gray-500 inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-lime-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm"
              placeholder="Enter your DSL CN"
              type="search"
            />
            <button className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-lime-500 px-4 py-2 font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Search
            </button>
          </form>
          {error && <p className="text-red-500 mt-3">{error}</p>}
          {bookingDetails && (
            <div className="mt-6">
              <h3 className="text-xl font-bold">Booking Details</h3>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-4">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Order #{bookingDetails.DSL_CN}</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Thank you {bookingDetails.Shpr_Name}!</p>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Status</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bookingDetails.Status}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Consignee Address</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bookingDetails.Cngs_Addr}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Consignee Name</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bookingDetails.Cngs_Name}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Content</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bookingDetails.Content}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Payment Mode</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bookingDetails.PayMode}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Shipper Address</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bookingDetails.Shpr_Addr}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Delivery Status</h3>
                <div className="flex items-center justify-between mt-4">
                  {statusSteps.map((step, index) => (
                    <div key={index} className="flex-1">
                      <div className={`w-full border-t-4 transition duration-500 ease-in-out ${bookingDetails.Status === step.status ? 'border-lime-500' : 'border-gray-300'}`}></div>
                      <div className={`mt-2 text-center ${bookingDetails.Status === step.status ? 'text-lime-500 font-bold' : 'text-gray-500'}`}>{step.data}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackEntry;
