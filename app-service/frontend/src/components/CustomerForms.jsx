
import React from "react";
import PropTypes from "prop-types";
import AccountForm from "./forms/AccountForm";
import PickupForm from "./forms/PickupForm";
import QuoteForm from "./forms/QuoteForm";
import { IoMdClose } from "react-icons/io";

const FormButton = ({ label, form, modalId  }) => {
  return (
    <>
      <div className="relative mt-20 mb-10">
      <button
          data-modal-target={modalId}
          data-modal-toggle={modalId}
          className="font-bold bg-green-400 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          style={{ fontSize: "1.2rem" }}
        >
          {label}
        </button>

      </div>
      {/* <!-- Main modal --> */}
      <div
        id={modalId}
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {label}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <IoMdClose className="w-4 h-4" aria-hidden="true" />
                
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {form}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FormButton.propTypes = {
  label: PropTypes.string.isRequired,
  form: PropTypes.element.isRequired,
  modalId: PropTypes.string.isRequired,
};
const CustomerForms = () => {
  return (
    <div className="flex justify-center space-x-8 mb-20">
      <FormButton label="GET QUOTE" form={<QuoteForm />} modalId="quote-modal" />
      <FormButton label="REQUEST A PICKUP" form={<PickupForm />} modalId="pickup-modal" />
      <FormButton label="OPEN AN ACCOUNT" form={<AccountForm />} modalId="account-modal" />
    </div>
  );
};

export default CustomerForms;
