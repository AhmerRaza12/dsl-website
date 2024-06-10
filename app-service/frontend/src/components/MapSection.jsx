import React from 'react';

const MapSection = () => {
  return (
    <div className='mt-2 w-full'>
        <hr className="h-1 mb-4 bg-green-300 border-0 dark:bg-gray-700 w-3/4 mx-auto"/>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1584293315623!2d67.0105371758677!3d24.858438045337547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f117c4206a5%3A0x7247dd1d15b2f697!2sDSL%20Courier!5e0!3m2!1sen!2s!4v1714664735780!5m2!1sen!2s"
        style={{ border: "none", width: "100%", height: "350px"}}
        allowFullScreen="true"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <hr className="h-1 mt-4 mb-4 bg-green-300 border-0 dark:bg-gray-700 w-3/4 mx-auto"/>
    </div>
  );
};

export default MapSection;
