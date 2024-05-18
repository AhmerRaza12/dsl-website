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
                    TCS
                </th>
                <td className="px-6 py-4">
                    DSLCXWE232
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
                    Leopards Courier
                </th>
                <td className="px-6 py-4">
                    CSXWBX2312
                </td>
                <td className="px-6 py-4">
                    Dispatched
                </td>
                <td className="px-6 py-4">
                    Lahore,Pakistan
                </td>
              
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-lime-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    TCS
                </th>
                <td className="px-6 py-4">
                    CSXEWDF213
                </td>
                <td className="px-6 py-4">
                    Arrived
                </td>
                <td className="px-6 py-4">
                    Rawalpindi,Pakistan
                </td>
                
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-lime-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Fedex Express
                </th>
                <td className="px-6 py-4">
                    CGXDSRD231
                </td>
                <td className="px-6 py-4">
                    Dispatched
                </td>
                <td className="px-6 py-4">
                    Karachi,Pakistan
                </td>
               
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    DHL
                </th>
                <td className="px-6 py-4">
                    XDSXCG545
                </td>
                <td className="px-6 py-4">
                    Received
                </td>
                <td className="px-6 py-4">
                    Islamabad,Pakistan
                </td>
           
            </tr>
        </tbody>
    </table>
</div>


    </div>
  )
}

export default Portal