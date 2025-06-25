import React from "react";

const LocationSection = () => {
  return (
    <div className="my-20 px-6 overflow-hidden md:px-12 lg:px-20 h-[550px]">
      <div className="pb-10">
        <h1 className="text-3xl text-center font-[700]">Our Location?</h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1839490173047!2d-73.98811752524351!3d40.75797873480151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sae!4v1750839228821!5m2!1sen!2sae"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationSection;
