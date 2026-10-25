/* eslint-disable */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';

export default function Discuss() {
  return (
    <section className="relative py-16 lg:py-24" dir="rtl">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="up" triggerOnce>
          <div className="relative rounded-3xl bg-gradient-to-br from-[#16192E] via-[#111322] to-[#0D0F1B] border border-white/[0.12] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
            
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
            
            {/* Subtle background motif */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 text-right">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4">
                  <span>🚀 شراكة حقيقية نحو النجاح</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                  هل لديك فكرة مشروع واعدة في ذهنك؟
                </h2>
                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                  لنتحدث عن رؤيتك ونحوّلها إلى منتج رقمي سريع، جذاب، ومحكم البناء بأحدث التقنيات وأفضل عائد استثماري.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-4">
                <Button
                  href="/discuss-project"
                  type="link"
                  className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:shadow-[0_0_40px_rgba(139,92,246,0.65)] transition-all duration-300 hover:-translate-y-0.5 no-underline"
                >
                  <span>ابدأ مناقشة مشروعك</span>
                  <svg
                    className="w-5 h-5 transform rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>

                <Button
                  href="https://wa.me/201501108024"
                  type="link"
                  target="_blank"
                  isExternal
                  className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-400 rounded-2xl bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-500/30 transition-all duration-200 no-underline"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                  </svg>
                  <span>تواصل مباشر عبر واتساب</span>
                </Button>
              </div>

            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
