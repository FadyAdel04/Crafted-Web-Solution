/* eslint-disable */
import React from "react";
import Button from "elements/Button";
import BrandLogo from "parts/BrandLogo";
import NotFound from "assets/images/NotFound.png";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#0A0B14] text-slate-300 py-8 px-4 overflow-hidden" dir="rtl">
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      {/* Top Nav Brand */}
      <div className="container mx-auto px-4 flex justify-center">
        <BrandLogo size="md" />
      </div>

      {/* Main 404 Body */}
      <div className="container mx-auto max-w-lg text-center my-auto p-8 rounded-3xl bg-[#111322] border border-white/[0.08] shadow-2xl">
        <img
          src={NotFound}
          alt="404 Page Not Found"
          className="w-56 h-auto mx-auto mb-6 opacity-85"
        />
        
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 mb-4 font-mono">
          خطأ 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          يبدو أنك وصلت لصفحة غير موجودة!
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          الصفحة التي تبحث عنها ربما تم تغيير مسارها أو حُذفت، يمكنك العودة للصفحة الرئيسية وتصفح كافة الخدمات.
        </p>

        <Button
          href="/"
          type="link"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all no-underline shadow-[0_0_25px_rgba(139,92,246,0.35)]"
        >
          <span>العودة للصفحة الرئيسية</span>
          <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>

      {/* Footer copyright */}
      <div className="text-center text-xs text-slate-600 pt-8">
        © {new Date().getFullYear()} Crafted Web Solutions. All rights reserved.
      </div>
    </div>
  );
}
