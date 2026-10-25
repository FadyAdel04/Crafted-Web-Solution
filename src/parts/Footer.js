/* eslint-disable */
import React from "react";
import BrandLogo from "./BrandLogo";
import Button from "../elements/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-12 border-t border-white/[0.08] bg-[#080910]" dir="rtl">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Info (Col 1 to 5) */}
          <div className="lg:col-span-5 text-right">
            <div className="mb-4">
              <BrandLogo size="lg" />
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm mb-6 font-normal">
              وكالة برمجية متخصصة في ابتكار حلول وتطبيقات ويب عصرية تجمع بين الفن التقني، سرعة الأداء، والتصميم الاستثنائي لخدمة رواد الأعمال والشركات.
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                متاحون للمشاريع الجديدة
              </span>
            </div>
          </div>

          {/* Quick Sitemap Links (Col 6 to 8) */}
          <div className="lg:col-span-3 text-right">
            <h4 className="text-base font-bold text-white mb-4 tracking-wide">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Button href="/" type="link" className="hover:text-purple-400 transition-colors no-underline">
                  الصفحة الرئيسية
                </Button>
              </li>
              <li>
                <Button href="/project" type="link" className="hover:text-purple-400 transition-colors no-underline">
                  الخدمات وسابقة الأعمال
                </Button>
              </li>
              <li>
                <Button href="/discuss-project" type="link" className="hover:text-purple-400 transition-colors no-underline">
                  طلب استشارة ومناقشة مشروع
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Socials (Col 9 to 12) */}
          <div className="lg:col-span-4 text-right">
            <h4 className="text-base font-bold text-white mb-4 tracking-wide">
              تواصل معنا
            </h4>
            
            <div className="space-y-3 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:craftedwebsolution@gmail.com" className="hover:text-white transition-colors" dir="ltr">
                  craftedwebsolution@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="https://wa.me/201501108024" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" dir="ltr">
                  +20 150 110 8024
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>الإسكندرية، مصر</span>
              </div>
            </div>

            {/* Social Icons with Gradient Hover States */}
            <div className="flex items-center gap-3">
              <Button
                href="https://wa.me/201501108024"
                type="link"
                target="_blank"
                isExternal
                className="w-10 h-10 rounded-xl bg-[#111322] border border-white/[0.08] text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-600/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="واتساب"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                </svg>
              </Button>

              <Button
                href="https://www.facebook.com/profile.php?id=61575214027590"
                type="link"
                target="_blank"
                isExternal
                className="w-10 h-10 rounded-xl bg-[#111322] border border-white/[0.08] text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="فيسبوك"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Design Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 gap-4">
          <p>© {currentYear} Crafted Web Solutions — جميع الحقوق محفوظة</p>
          <div className="flex items-center gap-1.5">
            <span>صُنع بشغف 💜 بواسطة</span>
            <Button
              href="https://fadyadel-fady-adels-projects.vercel.app/"
              type="link"
              target="_blank"
              isExternal
              className="text-purple-400 hover:text-purple-300 font-semibold no-underline transition-colors"
            >
              فادي عادل
            </Button>
          </div>
        </div>

      </div>
    </footer>
  );
}
