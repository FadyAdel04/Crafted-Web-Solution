/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BrandLogo({
  className = '',
  size = 'md',
  withText = true,
  href = '/',
}) {
  const iconDimensions = {
    sm: { width: 30, height: 30 },
    md: { width: 38, height: 38 },
    lg: { width: 48, height: 48 },
  }[size] || { width: 38, height: 38 };

  const textSizes = {
    sm: {
      crafted: 'text-lg',
      solutions: 'text-[9px] tracking-[0.2em]',
    },
    md: {
      crafted: 'text-2xl',
      solutions: 'text-[11px] tracking-[0.22em]',
    },
    lg: {
      crafted: 'text-3xl',
      solutions: 'text-xs tracking-[0.25em]',
    },
  }[size] || {
    crafted: 'text-2xl',
    solutions: 'text-[11px] tracking-[0.22em]',
  };

  // Exact Pixelated Geometric "C" Mark from the Brand Identity
  const LogoIcon = (
    <div className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
      {/* Subtle ambient glow behind the logo */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition duration-300 pointer-events-none" />
      
      <svg
        width={iconDimensions.width}
        height={iconDimensions.height}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Exact Pixel Layout Matching Brand Artwork */}
        {/* Row 0 */}
        <rect x="12" y="0" width="6" height="6" fill="#2B66FF" />
        <rect x="18" y="0" width="6" height="6" fill="#8B5CF6" />

        {/* Row 1 */}
        <rect x="6" y="6" width="6" height="6" fill="#2B66FF" />
        <rect x="12" y="6" width="6" height="6" fill="#8B5CF6" />
        <rect x="24" y="6" width="6" height="6" fill="#8B5CF6" />

        {/* Row 2 */}
        <rect x="0" y="12" width="6" height="6" fill="#2B66FF" />
        <rect x="6" y="12" width="6" height="6" fill="#8B5CF6" />
        <rect x="30" y="12" width="6" height="6" fill="#8B5CF6" />

        {/* Row 3 */}
        <rect x="0" y="18" width="6" height="6" fill="#2B66FF" />
        <rect x="6" y="18" width="6" height="6" fill="#8B5CF6" />

        {/* Row 4 */}
        <rect x="6" y="24" width="6" height="6" fill="#2B66FF" />
        <rect x="12" y="24" width="6" height="6" fill="#8B5CF6" />
        <rect x="24" y="24" width="6" height="6" fill="#8B5CF6" />
        <rect x="30" y="24" width="6" height="6" fill="#8B5CF6" />

        {/* Row 5 */}
        <rect x="12" y="30" width="6" height="6" fill="#2B66FF" />
        <rect x="18" y="30" width="6" height="6" fill="#8B5CF6" />
      </svg>
    </div>
  );

  const content = (
    <div className={`group inline-flex items-center gap-3 select-none text-left ${className}`} dir="ltr">
      {LogoIcon}
      {withText && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`font-extrabold tracking-tight text-white ${textSizes.crafted} transition-colors duration-200`}>
            Crafted
          </span>
          <span className={`font-light text-slate-200 mt-1 ${textSizes.solutions}`}>
            Web Solutions
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <NavLink to={href} className="no-underline inline-block focus:outline-none">
        {content}
      </NavLink>
    );
  }

  return content;
}
