// src/parts/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '201501108024'; // International format (Egypt)
  const message = 'Hello, I would like to ask about your services';

  // Check if user is on mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Set the appropriate URL based on device
  const whatsappUrl = isMobile
    ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}&app_absent=1`;

  return (
    <a
      href={whatsappUrl}
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
