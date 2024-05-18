import React from 'react'

const Portal = () => {
  return (
    <div>
       

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20 ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 font-extrabold">
                    SUPPLIER NAME
                </th>
                <th scope="col" className="px-6 py-3 font-extrabold">
                    SHIPMENT ID
                </th>
                <th scope="col" className="px-6 py-3 font-extrabold">
                    Status 
                </th>
                <th scope="col" className="px-6 py-3 font-extrabold">
                    Address
                </th>
              
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900  even:bg-lime-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ABC
                </th>
                <td className="px-6 py-4">
                    132214xzcs
                </td>
                <td className="px-6 py-4">
                    Arrived
                </td>
                <td className="px-6 py-4">
                   Karachi,Pakistan
                </td>
                
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-lime-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
              
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-lime-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-lime-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
               
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                    Red
                </td>
                <td className="px-6 py-4">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
           
            </tr>
        </tbody>
    </table>
</div>
 
    </div>
  )
}

export default Portal