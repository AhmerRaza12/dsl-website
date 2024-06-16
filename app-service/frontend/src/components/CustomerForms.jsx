import React from "react";
import PropTypes from "prop-types";
import AccountForm from "./forms/AccountForm";
import PickupForm from "./forms/PickupForm";
import QuoteForm from "./forms/QuoteForm";
import { IoMdClose } from "react-icons/io";

const FormButton = ({ label, form, modalId }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="relative mt-20 mb-10">
        <button
          onClick={openModal}
          className="font-bold bg-green-400 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          style={{ fontSize: "1.2rem" }}
        >
          {label}
        </button>
      </div>
      {isModalOpen && (
        <div
          id={modalId}
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-60 overflow-y-auto"
        >
          <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {label}
              </h3>
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <IoMdClose className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
              {form}
            </div>
          </div>
        </div>
      )}
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
    <div className="flex justify-center mb-20">
      <div className="mx-2">
        <FormButton label="GET QUOTE" form={<QuoteForm />} modalId="quote-modal" />
      </div>
      <div className="mx-2">
        <FormButton label="REQUEST A PICKUP" form={<PickupForm />} modalId="pickup-modal" />
      </div>
      <div className="mx-2">
        <FormButton label="OPEN AN ACCOUNT" form={<AccountForm />} modalId="account-modal" />
      </div>
    </div>
  );
};

export default CustomerForms;
