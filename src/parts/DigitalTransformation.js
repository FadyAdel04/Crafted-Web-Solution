/* eslint-disable */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';

export default function DigitalTransformation() {
  const comparisonItems = [
    {
      criteria: 'استقبال العملاء والمبيعات',
      traditional: 'تتوقف بمجرد انتهاء ساعات العمل؛ وتخسر العملاء ليلاً وفي العطلات.',
      crafted: 'منظومة آلية تعمل 24/7 تستقبل الطلبات والمدفوعات حتى أثناء نومك.',
    },
    {
      criteria: 'سرعة تحويل الزائر إلى مشترٍ',
      traditional: 'انتظار طويل للرد في الشات؛ 60% من الزوار يغادرون ويشترون من المنافس الأسرع.',
      crafted: 'سلة شراء وحجز بضغطة زر واحدة ودفع إلكتروني فوري مع تأكيد لحظي عبر واتساب.',
    },
    {
      criteria: 'الملكية والأمان والاستقلالية',
      traditional: 'تحت رحمة خوارزميات السوشيال ميديا؛ وإذا أُغلق الحساب يتوقف عملك تماماً.',
      crafted: 'أصل رقمي مستقل ملكك 100% بنطاقك الخاص وقاعدة بياناتك المحمية التي لا يفقدها أحد.',
    },
    {
      criteria: 'إدارة العمليات وتكلفة الوقت',
      traditional: 'إهدار عشرات الساعات أسبوعياً في تسجيل الفواتير اليدوية والرد على نفس الأسئلة.',
      crafted: 'أتمتة الفواتير، الإشعارات، وتحديث المخزون بنقرة واحدة وتوفير أكثر من 70% من وقت فريقك.',
    },
    {
      criteria: 'الانطباع الأول وهيبة العلامة',
      traditional: 'مظهر متواضع يجعلك تبدو كنشاط صغير ويفقدك الصفقات والعقود الكبرى.',
      crafted: 'واجهة فاخرة فائقة السرعة تُجبر كبار العملاء والشركات على احترام علامتك والوثوق بها فوراً.',
    },
  ];

  const suggestions = [
    {
      sector: 'المتاجر والبراندات التجارية',
      icon: '🛍️',
      title: 'متجر فائق السرعة + ربط الدفع والشحن',
      idea: 'ودّع عبارة "السعر إنبوكس"؛ اعرض منتجاتك باحترافية، استقبل أموالك عبر فودافون كاش وبطاقات الدفع، وسلّم شركة الشحن طلباتك آلياً.',
      impact: 'زيادة المبيعات بنسبة تفوق 40% وتوفير موظفي خدمة عملاء.',
    },
    {
      sector: 'الشركات الخدمية والمكاتب الهندسية',
      icon: '🏢',
      title: 'موقع مؤسسي رسمي ثنائي اللغة (B2B)',
      idea: 'قدّم سابقة أعمالك وفريقك بهيبة تليق بمشروعك (مثل منصة أندلسية مارين)، واجعل الشركات والمستثمرين يتعاملون معك كثقل معتمد في مجالك.',
      impact: 'اقتناص صفقات وعقود كبرى بأسعار احترافية بدون فصال.',
    },
    {
      sector: 'المراكز التعليمية والمدربون',
      icon: '🎓',
      title: 'منصة كورسات وحجز مسارات ذكية',
      idea: 'احمِ محتواك التعليمي من التسريب، ونظّم اشتراكات الطلاب واختباراتهم ونظام الدفع تلقائياً (كما نفذنا لـ Leidenschaft Klub).',
      impact: 'توسيع نطاق طلابك لأي دولة بدون قيود مكانية أو تكاليف قاعات.',
    },
    {
      sector: 'المحلات ونقاط البيع والعيادات',
      icon: '📊',
      title: 'أنظمة إدارة نقاط البيع (POS) والحجوزات',
      idea: 'نظام مكتبي أو سحابي يعمل حتى بدون إنترنت؛ لإصدار الفواتير، مراقبة الخزينة، وتتبع المبيعات اليومية بدقة محاسبية مطلقة.',
      impact: 'القضاء على عجز الخزينة وسرقة المخزون والارتباك الإداري.',
    },
  ];

  const trustGuarantees = [
    {
      title: 'عقد رسمي وتسليم بمواعيد صارمة',
      desc: 'جدول زمني محدد للمشروع وشفافية تامة، دون تأخير أو تكاليف مخفية مفاجئة.',
      icon: '🤝',
    },
    {
      title: 'تدريب كامل بالفيديو لك ولفريقك',
      desc: 'نسلمك لوحة تحكم باللغة العربية مع شروحات مسجلة لتعديل كل شيء بنفسك خلال دقائق وبدون الحاجة لمبرمج.',
      icon: '🎥',
    },
    {
      title: 'ضمان السرعة والأداء Google 95%+',
      desc: 'نضمن لك سرعة تحميل استثنائية وأداء خالياً من الأخطاء لتضمن تجربة مثالية لكل زائر.',
      icon: '⚡',
    },
    {
      title: 'دعم فني مستمر بعد الإطلاق',
      desc: 'لا تنتهي علاقتنا بمجرد تسليم الموقع؛ نبقى في ظهرك للدعم والتحديثات لضمان استقرار ونمو أعمالك.',
      icon: '🛡️',
    },
  ];

  return (
    <section id="why-digital" className="relative py-20 lg:py-28 overflow-hidden scroll-mt-20 sm:scroll-mt-24" dir="rtl">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-4">
              <span>💡 دليلك لاتخاذ القرار الصحيح لمستقبل عملك</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
              لماذا لا يمكنك الانتظار أكثر؟ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                تكلفة عدم التحرك الرقمي وخسارة الفرص
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              في عالم اليوم، عدم امتلاك موقع ونظام رقمي ليس مجرد غياب أداة؛ بل هو نزيف يومي مستمر في مبيعاتك وثقة عملائك لصالح المنافسين الذين سبقوك بخطوة.
            </p>
          </Fade>
        </div>

        {/* 1. Comparison Matrix: Traditional vs Crafted Web Solutions */}
        <div className="mb-20">
          <Fade direction="up" triggerOnce delay={100}>
            <div className="rounded-3xl bg-[#111322] border border-white/[0.1] shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 bg-[#16192E] p-4 sm:p-6 border-b border-white/[0.08] text-center font-bold text-sm sm:text-base">
                <div className="md:col-span-4 text-slate-400 text-right pr-2">معيار المقارنة الجوهري</div>
                <div className="md:col-span-4 text-rose-400 flex items-center justify-center gap-2">
                  <span>❌ العمل بالأسلوب التقليدي / السوشيال فقط</span>
                </div>
                <div className="md:col-span-4 text-emerald-400 flex items-center justify-center gap-2">
                  <span>✅ منظومة Crafted Web Solutions الرقمية</span>
                </div>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {comparisonItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 items-center hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="md:col-span-4 text-white font-bold text-sm sm:text-base">
                      {item.criteria}
                    </div>
                    <div className="md:col-span-4 text-slate-400 text-xs sm:text-sm bg-rose-950/20 md:bg-transparent p-3 md:p-0 rounded-xl border border-rose-500/20 md:border-none leading-relaxed">
                      {item.traditional}
                    </div>
                    <div className="md:col-span-4 text-slate-200 text-xs sm:text-sm font-medium bg-emerald-950/20 md:bg-transparent p-3 md:p-0 rounded-xl border border-emerald-500/20 md:border-none leading-relaxed">
                      {item.crafted}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>

        {/* 2. Industry-Specific Recommendations */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              اقتراحات مخصصة لقطاع عملك
            </h3>
            <p className="text-sm sm:text-base text-slate-400">
              مهما كان مجالك، لدينا خطة عمل مجربة تضمن تحقيق أقصى عائد على استثمارك الرقمي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {suggestions.map((sug, idx) => (
              <Fade key={idx} direction="up" triggerOnce delay={120 * idx}>
                <div className="h-full rounded-2xl sm:rounded-3xl bg-[#111322] border border-white/[0.08] hover:border-purple-500/40 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl p-2.5 rounded-2xl bg-[#16192E] border border-white/[0.08]">
                        {sug.icon}
                      </span>
                      <div>
                        <span className="text-xs text-purple-400 font-semibold block">{sug.sector}</span>
                        <h4 className="text-lg sm:text-xl font-bold text-white">{sug.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 font-normal leading-relaxed mb-5">
                      {sug.idea}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 w-full text-center sm:text-right">
                      🚀 الأثر المالي: {sug.impact}
                    </span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        {/* 3. Risk-Reversal Trust Guarantees */}
        <div>
          <div className="rounded-3xl bg-gradient-to-br from-[#16192E] via-[#111322] to-[#0A0B14] border border-white/[0.1] p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-wider text-blue-400 font-bold block mb-2">
                100% Risk Reversal & Trust Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                لماذا يمكنك بدء العمل معنا بكل طمأنينة وراحة بال؟
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustGuarantees.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5 hover:border-white/[0.15] transition-colors"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-right">
                <div className="text-white font-bold text-sm sm:text-base">جاهز لمناقشة فكرتك دون أي التزام مالي؟</div>
                <div className="text-xs text-slate-400">نقدم لك استشارة تحليلية مجانية لمدة 30 دقيقة نوضح فيها احتياجات مشروعك بالضبط.</div>
              </div>
              <Button
                href="/discuss-project"
                type="link"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg no-underline whitespace-nowrap"
              >
                <span>احجز استشارتك المجانية الآن</span>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

