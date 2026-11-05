/* eslint-disable */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'الاستشارة والتحليل الرقمي',
      sub: '30 دقيقة مجاناً دون أي التزام',
      desc: 'نستمع لأهدافك بدقة، ونحلل منافسيك، ونحدد الخلل الذي يضيع مبيعاتك لوضع خارطة طريق تقنية واضحة ومحددة التكاليف والمدة.',
      badge: 'الخطوة الأولى',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'التصميم والهندسة المخصصة',
      sub: 'تصميم مبهر وكود فائق السرعة',
      desc: 'نبني واجهة وتجربة مستخدم عصرية تخطف الأنظار مع كود برمجي فائق السرعة (Next.js / React) بأعلى معايير الأمان وقواعد البيانات المستقرة.',
      badge: 'الخطوة الثانية',
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'الإطلاق، الربط، والتدريب',
      sub: 'استقبال أول عميل في بيئة حية',
      desc: 'نربط بوابات الدفع وواتساب وGoogle Analytics، ونسلمك لوحة التحكم مع تدريب كامل لك ولفريقك لتصبح متحكماً بكل تفصيلة بسهولة تامة.',
      badge: 'الخطوة الثالثة',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 bg-[#0A0B14] scroll-mt-20 sm:scroll-mt-24" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-semibold mb-4">
              <span>🗺️ رحلة واضحة بدون تعقيد</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              كيف ننقل عملك إلى القمة في{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                3 خطوات ميسرة؟
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              إجراءات عمل شفافة تضمن لك الجودة والالتزام بالمواعيد دون أي تشويش أو مفاجآت تقنية.
            </p>
          </Fade>
        </div>

        {/* 3 Step Cards with connecting line on desktop */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <Fade key={idx} direction="up" triggerOnce delay={150 * idx}>
              <div className="relative h-full rounded-3xl bg-[#111322] border border-white/[0.08] hover:border-purple-500/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between">
                
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#16192E] border border-white/[0.1] flex items-center justify-center shadow-inner">
                      {s.icon}
                    </div>
                    <span className="text-3xl font-black text-white/20">{s.num}</span>
                  </div>

                  <span className="text-xs font-bold text-purple-400 block mb-2">{s.badge}</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug">{s.title}</h3>
                  <div className="text-xs font-semibold text-blue-400 mb-4">{s.sub}</div>

                  <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-xs text-slate-400 flex items-center justify-between">
                  <span>مرحلة مؤمنة 100%</span>
                  <span className="text-emerald-400 font-semibold">ضمان الجودة ✓</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 text-center">
          <Button
            href="/discuss-project"
            type="link"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/30 transition-all no-underline"
          >
            <span>ابدأ الخطوة الأولى الآن (استشارة مجانية)</span>
            <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>

      </div>
    </section>
  );
}

