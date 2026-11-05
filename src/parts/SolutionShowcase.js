/* eslint-disable */
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';

// استيراد صور المشاريع الحقيقية المنفذة
import andalusiaReal from '../assets/images/Portfolio/andalusia_real.png';
import ecommerceReal from '../assets/images/Portfolio/ecommerce.png';
import businessReal from '../assets/images/Portfolio/Business.png';
import leidenschaftReal from '../assets/images/Portfolio/leidenschaft_real.png';

export default function SolutionShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'corporate',
      title: 'المواقع المؤسسية والشركات',
      shortTitle: 'مواقع الشركات',
      badge: 'هيبة وموثوقية B2B',
      headline: 'واجهة رقمية فخمة تُبرز مكانة شركتك وتقتنص الصفقات الكبرى',
      projectName: 'Andalusia Marine — صيانة محركات وبناء سفن',
      liveUrl: 'https://andalusiaamarine.com/',
      image: andalusiaReal,
      description:
        'موقع رسمي ثنائي اللغة (عربي / إنجليزي)، مزود بالوضع المظلم والفاتح، ومعمارية أمان وSEO صارمة، صممناه خصيصاً لشركة أندلسية مارين لبناء هيبة استثنائية أمام كبار الشركاء الدوليين.',
      outcomes: [
        'بناء هيبة ومصداقية فورية أمام الشركات الكبرى وعملاء B2B',
        'دعم ثنائي اللغة (AR & EN) مع لوحة تحكم سهلة للتعديل',
        'استقبال استفسارات عروض الأسعار فوريًا على البريد والواتساب',
      ],
      metrics: [
        { label: 'سرعة التحميل', val: '0.8s' },
        { label: 'تقييم الأداء', val: '99/100' },
        { label: 'معدل الارتداد', val: '-45%' },
      ],
    },
    {
      id: 'ecommerce',
      title: 'المتاجر الإلكترونية المتكاملة',
      shortTitle: 'المتاجر الإلكترونية',
      badge: 'ماكينة مبيعات 24/7',
      headline: 'متجر سريع يحوّل زوار إعلاناتك إلى مشترين بضغطة زر واحدة',
      projectName: 'Phlox Premium Store — متجر إلكتروني متكامل',
      liveUrl: 'https://fadyadel04.github.io/Phlox/',
      image: ecommerceReal,
      description:
        'تجربة تسوق سلسة خالية من التعقيد، سلة شراء سريعة (1-Click Checkout)، ربط مباشر مع بوابات الدفع الإلكتروني، وتصفح متجاوب فائق الخفة يرفع معدلات الشراء من المرة الأولى.',
      outcomes: [
        'تجربة شراء فورية تضاعف معدل التحويل وتقلل السلات المتروكة',
        'ربط آمن بكل بوابات الدفع والتقسيط وبطاقات الائتمان',
        'إشعارات فورية بكل طلب جديد تصلك مباشرة على هاتفك',
      ],
      metrics: [
        { label: 'تحويل السلات', val: '+38%' },
        { label: 'مبيعات آلية', val: '24/7' },
        { label: 'زمن الدفع', val: '< 30s' },
      ],
    },
    {
      id: 'pos-internal',
      title: 'أنظمة إدارة الأعمال والمطاعم (POS & Operations)',
      shortTitle: 'أنظمة الـ POS والعمليات',
      badge: 'كفاءة وتحكم تجاري تام',
      headline: 'منظومات رقمية تضبط الطلبات، المخزون، والمبيعات اليومية',
      projectName: "Papa John's Egypt — نظام طلبات وإدارة تجارية",
      liveUrl: 'https://fadyadel04.github.io/Papa-John-s/',
      image: businessReal,
      description:
        'منظومة رقمية تفاعلية لإدارة طلبات الفروع وقوائم الطعام والعروض اليومية بدقة وانسيابية تامة، توفر الوقت وتقلل الأخطاء البشرية في تسجيل ومتابعة الطلبات.',
      outcomes: [
        'تسجيل الطلبات وإصدار الفواتير بدون أي تضارب أو أخطاء',
        'تتبع فوري ومحدد لمواقع الفروع وتوزيع الطلبات',
        'تقارير تحليلية ومؤشرات واضحة للمبيعات اليومية',
      ],
      metrics: [
        { label: 'أخطاء الطلبات', val: '0%' },
        { label: 'سرعة التنفيذ', val: 'لحظي' },
        { label: 'الاعتمادية', val: '100% Uptime' },
      ],
    },
    {
      id: 'lms-learning',
      title: 'المنصات التعليمية وحجز المواعيد',
      shortTitle: 'المنصات التعليمية والحجوزات',
      badge: 'أتمتة الحجوزات والطلاب',
      headline: 'منصة تفاعلية تدير الكورسات والاشتراكات والمدفوعات بسهولة',
      projectName: 'Leidenschaft Klub — المنصة الألمانية بالإسكندرية',
      liveUrl: 'https://www.leidenschaftklub.com/',
      image: leidenschaftReal,
      description:
        'المنصة الرسمية الحية لمركز Leidenschaft Klub بالإسكندرية، تضم نظام حجز كورسات تفاعلي، ومسارات تعليمية متعددة المستويات، مع إشعارات فورية وربط مع خدمة الطلاب.',
      outcomes: [
        'نظام حجز وتأكيد مواعيد تلقائي بالتقويم وواتساب',
        'منصة تعليمية لعرض المحتوى وتتبع الطلاب وحساباتهم',
        'تقليل مكالمات الاستفسار اليدوية بنسبة أكثر من 75%',
      ],
      metrics: [
        { label: 'حجوزات آلية', val: '+215%' },
        { label: 'توفير وقت الرد', val: '65h/mo' },
        { label: 'رضا الطلاب', val: '100%' },
      ],
    },
  ];

  const current = tabs[activeTab];

  return (
    <section id="solutions" className="relative py-20 lg:py-28 bg-[#0B0C16] border-t border-b border-white/[0.06] scroll-mt-20 sm:scroll-mt-24" dir="rtl">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-semibold mb-4">
              <span>🎯 سابقة أعمال حية ومنفذة على أرض الواقع</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              معاينة تفاعلية:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                شاهد نماذج حقيقية من منصاتنا المنشورة
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal">
              اختر نوع الحل واستعرض صور وروابط المواقع الفعلية التي طوّرناها وتعمل بكفاءة في بيئة الإنتاج الحية.
            </p>
          </Fade>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-[0_0_25px_rgba(139,92,246,0.5)] scale-105'
                  : 'bg-[#111322] text-slate-300 hover:text-white border-white/[0.08] hover:border-white/[0.2]'
              }`}
            >
              {tab.shortTitle}
            </button>
          ))}
        </div>

        {/* Tab Content Showcase Card */}
        <div className="rounded-3xl bg-[#111322] border border-white/[0.1] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left/Right Text Column */}
            <div className="lg:col-span-6 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold mb-4">
                <span>{current.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                {current.headline}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-4">
                {current.projectName}
              </p>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Tangible Outcomes List */}
              <div className="space-y-3 mb-8">
                {current.outcomes.map((outcome, oIdx) => (
                  <div key={oIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-200">{outcome}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href="/discuss-project"
                  type="link"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/30 transition-all no-underline"
                >
                  <span>طلب هذا الحل لمشروعي</span>
                  <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>

                <a
                  href={current.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.15] hover:border-blue-500/50 transition-all no-underline"
                >
                  <span>زيارة الموقع الحي ↗</span>
                </a>
              </div>
            </div>

            {/* Mockup Preview Column with REAL SITE IMAGE & LIVE LINK */}
            <div className="lg:col-span-6" dir="ltr">
              <div className="rounded-2xl bg-[#16192E] border border-white/[0.12] shadow-2xl overflow-hidden group">
                
                {/* Browser Chrome Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0E101D] border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  
                  {/* Clickable Browser Address Bar */}
                  <a
                    href={current.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 hover:bg-black/60 border border-white/[0.08] hover:border-blue-500/40 text-[11px] font-mono text-slate-300 hover:text-white transition max-w-[240px] truncate no-underline"
                    title="انقر لفتح الرابط في نافذة جديدة"
                  >
                    <span className="text-emerald-400">🔒</span>
                    <span className="truncate">{current.liveUrl}</span>
                  </a>

                  {/* Open Live Site Badge Button */}
                  <a
                    href={current.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 text-[11px] font-semibold text-blue-300 hover:text-white transition no-underline"
                  >
                    <span>Live</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Viewport Frame with Real Website Screenshot */}
                <div className="relative bg-[#0A0B14] overflow-hidden">
                  <a
                    href={current.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden group/img cursor-pointer"
                  >
                    <img
                      src={current.image}
                      alt={current.projectName}
                      className="w-full h-64 sm:h-80 object-cover object-top group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Subtle Overlay Glow & Hover Cue */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E101D] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0E101D]/90 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                        <span>معاينة وتصفح الموقع الحي</span>
                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Status Tag */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none" dir="rtl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111322]/90 border border-white/10 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] font-semibold text-slate-200">
                          منصة منشورة وتعمل في بيئة الإنتاج
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm" dir="ltr">
                        Verified Shipped
                      </span>
                    </div>
                  </a>
                </div>

                {/* Metric Chips Row */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-[#121424] to-[#181B30] border-t border-white/[0.08]">
                  <div className="grid grid-cols-3 gap-3">
                    {current.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="rounded-xl bg-[#0F1120] border border-white/[0.06] p-2.5 text-center">
                        <div className="text-[11px] text-slate-400 mb-0.5">{m.label}</div>
                        <div className="text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                          {m.val}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
