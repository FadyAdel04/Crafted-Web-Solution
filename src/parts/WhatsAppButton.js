// src/parts/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '201501108024'; 
  const message = 'Hello, I have a question about your service';

  return (
    <a
      href={`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}&app_absent=1`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
