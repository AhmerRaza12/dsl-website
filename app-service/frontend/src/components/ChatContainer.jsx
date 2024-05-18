import React from 'react';
import PropTypes from 'prop-types'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const WhatsappButton = ({ label, link }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between bg-green-400 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        style={{ fontSize: '1.2rem' }}
      >
        <span className=" font-bold tracking-wide mr-2">{label}</span>
        <FontAwesomeIcon icon={faWhatsapp} className="text-white" style={{ fontSize: '1.8rem' }} />
      </a>
    );
  };
  

WhatsappButton.propTypes = {
  label: PropTypes.string.isRequired, 
  link: PropTypes.string.isRequired, 
};

const ChatContainer = () => {
  return (
    <div className="flex justify-center space-x-8 mb-20">
      <WhatsappButton label="Contact Sales" link="https://wa.me/923011133180" />
      <WhatsappButton label="Contact Customer Support" link="https://wa.me/923011133181" />
      <WhatsappButton label="Contact Pickup" link="https://wa.me/923011133182" />
    </div>
  );
};

export default ChatContainer;
