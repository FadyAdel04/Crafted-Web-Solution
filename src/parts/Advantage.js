/* eslint-disable */
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Advantage({ data }) {
  // Flatten the advantages array if it's nested
  const advantagesList = Array.isArray(data[0])
    ? [...data[0], ...data[1]]
    : data;

  const processSteps = [
    {
      step: "01",
      title: "الاستكشاف والتخطيط",
      enTitle: "Discovery & Strategy",
      desc: "نستمع بعناية لأهدافك، ونحلل متطلبات مشروعك والجمهور المستهدف لوضع خارطة طريق رقمية واضحة ودقيقة.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "تصميم واجهة وتجربة المستخدم",
      enTitle: "UI/UX Design",
      desc: "نبني نماذج وتصميمات بصرية فائقة الأناقة والعصرية، لضمان تجربة مستخدم سلسة واستثنائية تبهر زوارك.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "التطوير البرمجي المتقدم",
      enTitle: "Modern Development",
      desc: "نحوّل التصاميم إلى كود برمجي نظيف وسريع معتمد على أحدث التقنيات مثل React و Next.js بأعلى معايير الأمان.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "الاختبار والإطلاق الرسمي",
      enTitle: "Testing & Launch",
      desc: "نجري اختبارات شاملة للأداء والتوافق على كل الشاشات قبل الإطلاق، مع توفير دعم فني وتدريب متواصل.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 lg:py-28" dir="rtl" id="why-us">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Why Choose Us Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
              <span>⭐ معايير الجودة والاحترافية</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
              لماذا تختار <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Crafted Web Solutions</span>؟
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              نلتزم بتقديم حلول برمجية تفوق التوقعات تجمع بين الدقة الفنية، والتصميم المبتكر، وسرعة التنفيذ.
            </p>
          </Fade>
        </div>

        {/* Why Choose Us Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-28">
          {advantagesList.map((item, index) => (
            <Fade
              direction="up"
              triggerOnce
              delay={150 * index}
              key={index}
            >
              <div className="group h-full flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 sm:p-8 rounded-2xl bg-[#111322] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.2)]">
                
                {/* Visual Icon Container */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/[0.08] flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="text-center sm:text-right">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

              </div>
            </Fade>
          ))}
        </div>

        {/* Section 2: Step-by-Step Workflow Process Timeline */}
        <div className="pt-8 border-t border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Fade direction="up" triggerOnce>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4">
                <span>🔄 منهجية العمل المعتمدة</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                كيف نحول <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">فكرتك إلى واقع</span>
              </h3>
              <p className="text-slate-400 text-sm sm:text-base">
                خطوات واضحة ومدروسة تضمن أعلى درجات الدقة والالتزام بالمواعيد
              </p>
            </Fade>
          </div>

          {/* Timeline Grid with Connecting Progress Line */}
          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 -translate-y-12 z-0 opacity-40" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((stepItem, idx) => (
                <Fade
                  direction="up"
                  triggerOnce
                  delay={150 * idx}
                  key={idx}
                >
                  <div className="relative group flex flex-col h-full rounded-2xl bg-[#111322] border border-white/[0.08] hover:border-purple-500/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.3)]">
                    
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:scale-110 transition-transform duration-300">
                        {stepItem.icon}
                      </div>
                      <span className="text-3xl font-extrabold text-white/20 font-mono group-hover:text-purple-400/40 transition-colors">
                        {stepItem.step}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1">
                      {stepItem.title}
                    </h4>
                    <span className="text-[11px] font-mono text-purple-400 mb-3 block" dir="ltr">
                      {stepItem.enTitle}
                    </span>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mt-auto">
                      {stepItem.desc}
                    </p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
