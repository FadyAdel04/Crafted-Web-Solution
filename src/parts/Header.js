/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";

import Button from "../elements/Button";
import BrandLogo from "./BrandLogo";

export default function Header({ isHeroOverlay = false, className = "" }) {
  const [isCollapse, setIsCollapse] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsCollapse(false);
  }, [location]);

  const overlayClasses = scrolled
    ? "fixed top-0 left-0 right-0 z-50 bg-[#0A0B14]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3.5"
    : "absolute top-0 left-0 right-0 z-30 bg-transparent border-b border-white/[0.08] py-5";

  const standardClasses = scrolled
    ? "sticky top-0 z-50 w-full bg-[#0A0B14]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
    : "sticky top-0 z-50 w-full bg-[#0A0B14]/60 backdrop-blur-md border-b border-white/[0.05] py-4";

  return (
    <header
      className={`${isHeroOverlay ? overlayClasses : standardClasses} transition-all duration-300 ${className}`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <BrandLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                path === "/"
                  ? "text-white bg-white/[0.06] shadow-inner"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
              }`}
              type="link"
              href="/"
            >
              الرئيسية
            </Button>

            <Button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                path === "/project"
                  ? "text-white bg-white/[0.06] shadow-inner"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
              }`}
              type="link"
              href="/project"
            >
              الخدمات والمشاريع
            </Button>
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              className="relative group inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white rounded-full transition-all duration-300 overflow-hidden no-underline shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.55)] hover:scale-105 active:scale-95"
              type="link"
              href="/discuss-project"
            >
              {/* Button gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-purple-500 transition-all duration-300" />
              <span className="relative flex items-center gap-2">
                <span>ناقش مشروعك</span>
                <svg
                  className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsCollapse(!isCollapse)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition duration-200 focus:outline-none"
              aria-label="القائمة"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isCollapse ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Transition
        show={isCollapse}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <div className="lg:hidden border-b border-white/[0.08] bg-[#0A0B14]/95 backdrop-blur-2xl px-5 pt-4 pb-6 space-y-3 shadow-2xl">
          <Button
            className={`block w-full text-right px-4 py-3 rounded-xl text-base font-medium transition duration-200 no-underline ${
              path === "/" ? "text-white bg-blue-600/20 border border-blue-500/30" : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
            }`}
            type="link"
            href="/"
          >
            الرئيسية
          </Button>

          <Button
            className={`block w-full text-right px-4 py-3 rounded-xl text-base font-medium transition duration-200 no-underline ${
              path === "/project" ? "text-white bg-blue-600/20 border border-blue-500/30" : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
            }`}
            type="link"
            href="/project"
          >
            الخدمات والمشاريع
          </Button>

          <div className="pt-2">
            <Button
              className="flex w-full items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_25px_rgba(139,92,246,0.4)] no-underline transition duration-300"
              type="link"
              href="/discuss-project"
            >
              <span>ناقش مشروعك الآن</span>
              <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </div>
      </Transition>
    </header>
  );
}
