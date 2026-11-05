/* eslint-disable */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function BentoBenefits() {
  const benefits = [
    {
      colSpan: 'lg:col-span-7',
      tag: 'ماكينة مبيعات متواصلة',
      title: 'استقبال مبيعات وحجوزات 24/7 دون توقف حتى أثناء نومك',
      description:
        'المتجر أو الموقع لا يأخذ إجازات ولا ينام. عندما يتصفح عملاؤك موقعك في منتصف الليل أو العطلات، سيتمكنون من الشراء، الدفع، وتأكيد الحجز فورياً دون انتظار أحد، مما يرفع حجم أرباحك الصافية تلقائياً.',
      accent: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      borderColor: 'hover:border-blue-500/40',
      badgeClass: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlightNumber: '24/7',
      highlightLabel: 'جاهزية استقبال الأموال والطلبات',
    },
    {
      colSpan: 'lg:col-span-5',
      tag: 'هيبة وموثوقية فورية',
      title: 'بناء هيبة ومصداقية تقتنص الصفقات الكبرى دون فصال',
      description:
        'الشركات الكبرى والمشترون الجادون لا يتعاملون مع من لا يملك منصة رسمية معتمدة. موقعك الاحترافي ينقل علامتك من فئة "البائع العشوائي" إلى فئة "المؤسسة المرموقة" التي تستحق أعلى الأسعار.',
      accent: 'from-purple-500/20 via-pink-500/10 to-transparent',
      borderColor: 'hover:border-purple-500/40',
      badgeClass: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      highlightNumber: '100%',
      highlightLabel: 'انطباع أول واثق واحترافي',
    },
    {
      colSpan: 'lg:col-span-5',
      tag: 'توفير التكاليف والإرهاق',
      title: 'أتمتة الفواتير والإشعارات وتوفير مئات ساعات العمل المرهقة',
      description:
        'تخلص نهائياً من الرد على نفس الأسئلة: "كام السعر؟"، "إيه التفاصيل؟"، "الفاتورة فين؟". المنظومة ترسل الفاتورة لعميلك عبر واتساب والبريد فورياً وتحدث المخزون دون أي تدخل يدوي.',
      accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderColor: 'hover:border-emerald-500/40',
      badgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
      icon: (
        <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlightNumber: '-70%',
      highlightLabel: 'تقليل إهدار الوقت اليدوي',
    },
    {
      colSpan: 'lg:col-span-7',
      tag: 'ملكية واستقلالية تامة',
      title: 'أصل تجاري مستقل ملكك 100% محمي من تقلبات وحظر السوشيال ميديا',
      description:
        'الاعتماد فقط على فيسبوك وإنستجرام هو بمثابة بناء قصر على أرض مستأجرة؛ تحديث خوارزمية واحد أو حظر حساب قد يدمر عملك بين ليلة وضحاها. موقعك ملكك بالكامل وقاعدة بيانات عملائك في حوزتك دائماً.',
      accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
      borderColor: 'hover:border-amber-500/40',
      badgeClass: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
      icon: (
        <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      highlightNumber: '0%',
      highlightLabel: 'مخاطر حظر أو تحكم خارجي',
    },
  ];

  return (
    <section id="benefits" className="relative py-20 lg:py-28" dir="rtl">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-4">
              <span>💎 الميزات تشرح، لكن الفوائد الملموسة هي ما يُباع</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              ماذا تجني شركتك فعلياً{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                عند امتلاك منظومة Crafted الرقمية؟
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              ركّزنا على النتائج التي تنعكس مباشرة في حسابك البنكي، راحة بالك، ونمو مشروعك المستمر.
            </p>
          </Fade>
        </div>

        {/* 2x2 Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {benefits.map((b, idx) => (
            <div key={idx} className={`${b.colSpan} h-full`}>
              <Fade direction="up" triggerOnce delay={120 * idx}>
                <div
                  className={`group relative h-full rounded-3xl bg-[#111322] border border-white/[0.08] ${b.borderColor} p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden flex flex-col justify-between`}
                >
                  {/* Subtle Top Gradient Flare */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${b.accent} opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`}
                  />

                  <div className="relative z-10">
                    {/* Badge & Icon Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#16192E] border border-white/[0.1] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                        {b.icon}
                      </div>
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${b.badgeClass}`}>
                        {b.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4 leading-snug">
                      {b.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
                      {b.description}
                    </p>
                  </div>

                  {/* Micro Outcome Highlight Footer */}
                  <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">{b.highlightLabel}</span>
                    <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                      {b.highlightNumber}
                    </span>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

