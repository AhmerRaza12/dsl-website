import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import AccountForm from './forms/AccountForm';
import PickupForm from './forms/PickupForm';
import QuoteForm from './forms/QuoteForm';
import { Modal, Button , Box} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const FormButton = ({ label, form }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="relative mt-20 mb-10">
        <button onClick={handleOpen} className="font-bold bg-green-400 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none" style={{ fontSize: '1.2rem' }}>
          {label}
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="fixed inset-0 flex items-center justify-center"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: '12px',
            boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.5)',
            p: 4,
            maxHeight: '500px',
            overflowY: 'auto',
          }}
        >
          <Button onClick={handleClose} className="text-black absolute top-2 right-2 focus:outline-none">
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          {form}
        </Box>
      </Modal>
    </>
  );
};

FormButton.propTypes = {
  label: PropTypes.string.isRequired,
  form: PropTypes.element.isRequired,
};
const CustomerForms = () => {
  return (
    <div className="flex justify-center space-x-8 mb-20">
      <FormButton
        label="GET QUOTE"
        form={<QuoteForm />}
      />
      <FormButton
        label="REQUEST A PICKUP"
        form={<PickupForm />}
      />
      <FormButton
        label="OPEN AN ACCOUNT"
        form={<AccountForm />}
      />
    </div>
  );
};

export default CustomerForms;
