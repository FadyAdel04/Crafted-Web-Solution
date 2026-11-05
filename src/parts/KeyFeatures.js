/* eslint-disable */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function KeyFeatures() {
  const features = [
    {
      step: '01',
      title: 'سرعة خارقة وأرشفة فورية (SEO)',
      subtitle: 'تحميل في أقل من 1.2 ثانية لتصدر نتائج جوجل',
      description:
        'نبني منصتك بأحدث بنى React و Next.js لضمان أعلى درجات السرعة وتجربة تصفح فورية لا تجعل عميلك ينتظر أبداً، مع تهيئة تامة للظهور في الصفحة الأولى لمحركات البحث.',
      tags: ['Google PageSpeed 95%+', 'SSR & Jamstack', 'أرشفة تلقائية سريعة'],
      icon: (
        <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      glowColor: 'group-hover:border-blue-500/50',
      badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    },
    {
      step: '02',
      title: 'مسارات تحويل ومبيعات مدروسة (CRO)',
      subtitle: 'تصميم علمي يوجّه الزائر للشراء دون تشتيت',
      description:
        'الموقع ليس مجرد شكل جمالي؛ بل ماكينة مبيعات. نصمم كل زر، عنوان، ونموذج بناءً على علم سيكولوجية إقناع المستخدم (CRO) لتحقيق أعلى عائد تحويل لطلبات الشراء والتواصل.',
      tags: ['هندسة إقناع الزائر', 'نماذج طلب مبسطة', 'تحويل الزوار إلى عملاء'],
      icon: (
        <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      glowColor: 'group-hover:border-purple-500/50',
      badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    },
    {
      step: '03',
      title: 'أتمتة العمليات وتكامل الأنظمة',
      subtitle: 'ربط مباشر مع واتساب، بوابات الدفع، وإدارة المخزون',
      description:
        'وفّر مئات الساعات شهرياً: استقبل إشعارات الطلبات فوراً على هاتفك، اسمح للعملاء بالدفع الإلكتروني الآمن، وتابع بياناتك المحاسبية والعملاء من شاشة واحدة متكاملة.',
      tags: ['تكامل واتساب بزنس', 'دفع إلكتروني آمن', 'إدارة مركزية مريحة'],
      icon: (
        <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      glowColor: 'group-hover:border-emerald-500/50',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    },
  ];

  return (
    <section id="features" className="relative py-20 lg:py-28 scroll-mt-20 sm:scroll-mt-24" dir="rtl">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-72 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
              <span>⚡ ركائز التميز الثلاث</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              لماذا حلولنا تمنحك تفوقاً حاسماً{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                على كل منافسيك؟
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              لا نبني مجرد صفحات كلاسيكية، بل نصمم منظومات رقمية ذكية ترفع مبيعاتك وتوفر وقتك وتمنح علامتك هيبة لا تُنافس.
            </p>
          </Fade>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Fade key={idx} direction="up" triggerOnce delay={150 * idx}>
              <div
                className={`group h-full flex flex-col justify-between rounded-3xl bg-[#111322] border border-white/[0.08] ${feature.glowColor} p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]`}
              >
                <div>
                  {/* Top Bar with Icon & Step Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#16192E] border border-white/[0.1] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <span className="text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                      {feature.step}
                    </span>
                  </div>

                  {/* Heading & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <div className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md border mb-4 ${feature.badgeBg}`}>
                    {feature.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Micro tags */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {feature.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[11px] font-medium text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-lg border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

