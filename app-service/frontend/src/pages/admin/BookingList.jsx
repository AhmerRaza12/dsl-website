import React, { useState, useEffect } from 'react';

const BookingList = () => {
  // State variables for start date, end date, and bookings data
  const [startDate, setStartDate] = useState(getTodayDateString());
  const [endDate, setEndDate] = useState(getTodayDateString());
  const [bookings, setBookings] = useState([]);

  // Function to get today's date in the format "YYYY-MM-DD"
  function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Function to fetch bookings data
  const fetchBookings = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/admin/all_bookings');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setBookings(data.records);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchBookings();
  }, []); 
  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    if (newStartDate > endDate) {
      alert('Start date cannot be later than end date');
      return;
    }
    setStartDate(newStartDate);
  };
  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    if (startDate > newEndDate) {
      alert('End date cannot be earlier than start date');
      return;
    }
    setEndDate(newEndDate);
  };

  return (
    <section className="container mx-auto p-4">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold text-black">
          Booking <span className="text-lime-500">List</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <label htmlFor="booking-to" className="text-lg font-semibold text-gray-800">
            Start Date
          </label>
          <input
            type="date"
            id="booking-to"
            className="w-full py-2 px-3 text-gray-800 border-gray-400 focus:outline-none focus:border-lime-500 rounded-md"
            value={startDate}
            onChange={handleStartDateChange}
            max={endDate} 
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <label htmlFor="booking-from" className="text-lg font-semibold text-gray-800">
            End Date
          </label>
          <input
            type="date"
            id="booking-from"
            className="w-full py-2 px-3 text-gray-800 border-gray-400 focus:outline-none focus:border-lime-500 rounded-md"
            value={endDate}
            onChange={handleEndDateChange}
            min={startDate} // Minimum selectable date is the start date
          />
        </div>
        {/* Records Limit Select */}
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <label htmlFor="records-limit" className="text-lg font-semibold text-gray-800">
            Records Limit
          </label>
          <select
            id="records-limit"
            className="w-full py-2 px-3 text-gray-800 border-gray-400 focus:outline-none focus:border-lime-500 rounded-md"
          >
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Sr. No
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Consignment Name
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Consignment Phone
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Content
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Destination Code
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Origin Code
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Payment Mode
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Product
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Partner Code
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Service
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Shipper Mobile
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Shipper Name
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Booking ID
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{booking.Cngs_Name}</td>
                <td className="px-6 py-4">{booking.Cngs_Phone || '-'}</td>
                <td className="px-6 py-4">{booking.Content}</td>
                <td className="px-6 py-4">{booking.Dstn_Code}</td>
                <td className="px-6 py-4">{booking.Orgn_Code}</td>
                <td className="px-6 py-4">{booking.PayMode}</td>
                <td className="px-6 py-4">{booking.Product}</td>
                <td className="px-6 py-4">{booking.Ptnr_Code}</td>
                <td className="px-6 py-4">{booking.Service}</td>
                <td className="px-6 py-4">{booking.Shpr_Mobile}</td>
                <td className="px-6 py-4">{booking.Shpr_Name}</td>
                <td className="px-6 py-4">{booking.idbooking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BookingList;
