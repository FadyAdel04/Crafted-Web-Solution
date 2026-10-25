/* eslint-disable */
import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '201501108024';
  const message = 'مرحباً، أود الاستفسار عن خدمات وحلول Crafted Web Solutions لمشروعي.';

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    typeof navigator !== 'undefined' ? navigator.userAgent : ''
  );

  const whatsappUrl = isMobile
    ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}&app_absent=1`;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:block absolute right-16 px-3.5 py-1.5 rounded-xl bg-[#111322]/95 border border-white/[0.12] text-xs font-medium text-white shadow-2xl backdrop-blur-md whitespace-nowrap transition-all duration-200 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
        dir="rtl"
      >
        <span>💬 تحدث معنا مباشرة على واتساب</span>
      </div>

      <a
        href={whatsappUrl}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
      >
        <svg
          className="whatsapp-icon fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
