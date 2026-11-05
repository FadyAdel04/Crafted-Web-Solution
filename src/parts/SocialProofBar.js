/* eslint-disable */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function SocialProofBar() {
  const proofItems = [
    {
      label: 'منصات حية في سوق العمل',
      value: '+50 مشروع منجز',
      subtext: 'مواقع وأنظمة تعمل بكفاءة 100%',
    },
    {
      label: 'رضا وثقة الشركاء',
      value: '4.9 / 5.0 ⭐',
      subtext: 'تقييم العملاء وأصحاب الأعمال',
    },
    {
      label: 'سرعة استجابة المنصات',
      value: '99.9% Uptime',
      subtext: 'بنية تحتية سحابية فائقة الأمان',
    },
    {
      label: 'توفير وقت المهام اليدوية',
      value: '70% أتمتة',
      subtext: 'ربط فوري مع واتساب وبوابات الدفع',
    },
  ];

  const clientBadges = [
    { name: 'Leidenschaft Klub', category: 'منصة تعليمية دولية' },
    { name: 'Andalusia Marine', category: 'صيانة وبناء سفن' },
    { name: 'Desktop POS & Ledger', category: 'أنظمة إدارة مالية' },
    { name: 'E-Commerce Brands', category: 'متاجر تجزئة وجملة' },
  ];

  return (
    <section className="relative -mt-6 sm:-mt-10 z-30 mb-12 sm:mb-20" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="up" triggerOnce delay={100}>
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#111322]/95 backdrop-blur-xl border border-white/[0.1] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            {/* Top ambient highlight line */}
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            {/* Badges Bar Header */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
              <div className="text-center lg:text-right">
                <span className="text-xs uppercase tracking-wider text-purple-400 font-bold block mb-1">
                  Trusted by Shipped Production Clients
                </span>
                <p className="text-sm sm:text-base text-slate-300 font-medium">
                  موثوق به من رواد الأعمال والشركات التي انتقلت بنجاح إلى العصر الرقمي
                </p>
              </div>

              {/* Shipped Client Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {clientBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-purple-500/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">{badge.name}</span>
                    <span className="text-[11px] text-slate-400">({badge.category})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Numerical Proof Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {proofItems.map((item, idx) => (
                <div key={idx} className="text-center md:text-right">
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5">{item.label}</div>
                  <div className="text-xs text-slate-400">{item.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

