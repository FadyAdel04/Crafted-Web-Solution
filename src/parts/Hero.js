/* eslint-disable */
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-32" dir="rtl">
      {/* Ambient Lighting Spotlights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-right">
            {/* Pill Badge */}
            <Fade direction="down" triggerOnce>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-6 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-300">
                  ✨ الجيل القادم من الحلول الرقمية | Next-Gen Digital Craftsmanship
                </span>
              </div>
            </Fade>

            {/* Main Headline */}
            <Fade direction="up" triggerOnce delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-6">
                حلول ويب مبتكرة <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                  مصممة خصيصًا لرؤيتك
                </span>
              </h1>
            </Fade>

            {/* Value Proposition Description */}
            <Fade direction="up" triggerOnce delay={350}>
              <p className="font-normal text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                نصنع تجارب ومواقع ويب استثنائية متوافقة مع جميع متطلبات عملك: صفحات هبوط تسويقية،
                بورتفوليو احترافي، دعوات رقمية تفاعلية، مواقع شركات، قوائم طعام ذكية (Digital Menus)،
                متاجر إلكترونية متكاملة، منصات دورات، وتطبيقات ويب سريعة وآمنة.
              </p>
            </Fade>

            {/* Dual CTAs */}
            <Fade direction="up" triggerOnce delay={500}>
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary CTA */}
                <Button
                  href="/discuss-project"
                  type="link"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all duration-300 hover:-translate-y-0.5 no-underline"
                >
                  <span>ناقش مشروعك الآن</span>
                  <svg
                    className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1.5 transition-transform duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>

                {/* Secondary CTA */}
                <Button
                  href="/project"
                  type="link"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base sm:text-lg font-medium text-slate-200 rounded-xl bg-slate-900/60 hover:bg-white/[0.08] border border-white/[0.12] hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 no-underline"
                >
                  <span>استعرض أعمالنا</span>
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Button>
              </div>
            </Fade>

            {/* Quick Metrics Bar */}
            <Fade direction="up" triggerOnce delay={650}>
              <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/[0.08] max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">25+</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">مشروع منجز بنجاح</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">99%</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">درجة الأداء وسرعة التحميل</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">100%</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">رضا العملاء والدعم</div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Visual Showcase - 3D Tilted Interactive Browser Mockup */}
          <div className="lg:col-span-5 relative">
            <Fade direction="up" triggerOnce delay={400}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Glow ring behind browser */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-xl opacity-75" />

                {/* Browser Mockup Window */}
                <div className="relative rounded-2xl bg-[#111322] border border-white/[0.12] shadow-2xl overflow-hidden backdrop-blur-2xl">
                  
                  {/* Browser Header Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#16192E] border-b border-white/[0.08]" dir="ltr">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.05] border border-white/[0.06] text-xs text-slate-400 font-mono">
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>crafted-web-solutions.vercel.app</span>
                    </div>
                    <div className="w-12 text-right">
                      <span className="text-[10px] text-slate-500 font-mono">v2.4</span>
                    </div>
                  </div>

                  {/* Browser Mockup Content Preview */}
                  <div className="p-5 sm:p-6 space-y-4 text-right">
                    {/* Simulated Mini Hero */}
                    <div className="rounded-xl p-4 bg-gradient-to-br from-blue-950/40 via-purple-950/20 to-transparent border border-white/[0.08]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          Live Architecture
                        </span>
                        <div className="flex gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                          <span className="w-2 h-2 rounded-full bg-purple-400" />
                        </div>
                      </div>
                      <div className="h-4 w-3/4 rounded bg-white/20 mb-2" />
                      <div className="h-3 w-1/2 rounded bg-white/10" />
                    </div>

                    {/* Bento Mini Feature Grid inside mockup */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#16192E]/90 border border-white/[0.06]">
                        <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 mb-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="text-xs font-bold text-white mb-0.5">أداء فائق</div>
                        <div className="text-[11px] text-slate-400">تحميل في أجزاء من الثانية</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#16192E]/90 border border-white/[0.06]">
                        <div className="w-7 h-7 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 mb-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-xs font-bold text-white mb-0.5">تصميم متجاوب</div>
                        <div className="text-[11px] text-slate-400">متوافق 100% مع الجوال</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge 1 (Top Left) */}
                <div className="absolute -top-6 -left-4 sm:-left-6 p-3 sm:p-4 rounded-xl bg-[#16192E]/95 border border-white/[0.12] shadow-2xl backdrop-blur-xl animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Lighthouse Score</div>
                      <div className="text-sm font-extrabold text-white">99% Performance</div>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge 2 (Bottom Right) */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 p-3 sm:p-4 rounded-xl bg-[#16192E]/95 border border-purple-500/30 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Digital Craft</div>
                      <div className="text-sm font-extrabold text-white">تصميم مخصص 100%</div>
                    </div>
                  </div>
                </div>

              </div>
            </Fade>
          </div>

        </div>
      </div>
    </section>
  );
}
