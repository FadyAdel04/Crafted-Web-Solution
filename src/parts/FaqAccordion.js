/* eslint-disable */
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'ليه أحول شغلي لموقع أو نظام رقمي طالما ماشي على السوشيال ميديا والمحل العادي؟',
      a: 'الاعتماد على السوشيال ميديا فقط يجعلك تخسر أكثر من 50% من المبيعات المحتملة لأن عملك يتوقف عند إغلاق المحل أو تأخر الرد في الشات. الموقع يعمل كماكينة مبيعات تستقبل الطلبات والمدفوعات 24/7 دون توقف، بالإضافة إلى أن المنصة الرقمية هي أصل ملكك بالكامل لا يمكن لأي خوارزمية أو قرار حظر مفاجئ أن يؤثر عليه.',
    },
    {
      q: 'كم يستغرق تنفيذ المشروع، وما هي خطة التكلفة؟',
      a: 'تتراوح المدة عادةً بين 7 إلى 21 يوم عمل حسب حجم المشروع وطبيعة متطلباته (سواء كان صفحة هبوط، متجر، منصة تعليمية، أو نظام POS). لا توجد لدينا أي تكاليف خفية أو مفاجئة؛ نحدد الميزانية والجدول الزمني بالتفصيل في العقد قبل بدء العمل.',
    },
    {
      q: 'هل أحتاج لخبرة برمجية أو توظيف مبرمج لإدارة الموقع والمنتجات بعد التسليم؟',
      a: 'إطلاقاً! نسلمك لوحة تحكم عربية بسيطة وسهلة للغاية تمكّنك من إضافة المنتجات، تعديل الأسعار، ومتابعة الطلبات والفواتير بنفسك بضغطة زر. كما نقدم لك فيديوهات تدريبية مسجلة ومخصصة لمشروعك تشرح لك ولفريقك كل خطوة خطوة بخطوة.',
    },
    {
      q: 'ما الذي يضمن لي سرعة المنصة وعدم بطئها أو توقفها عند زيادة الزوار؟',
      a: 'نحن نعتمد على أحدث حزم التقنيات العالمية (Next.js / React / Supabase / Cloudflare)، ولا نستخدم قوالب بطيئة أو إضافات ثقيلة تؤثر على السرعة. نحقق درجات تتجاوز 95%+ في اختبارات Google PageSpeed العالمية لضمان تجربة فورية فائقة السرعة واستقراراً بنسبة 99.9%.',
    },
    {
      q: 'هل تقدمون دعماً فنياً وصيانة بعد إطلاق المشروع؟',
      a: 'نعم بكل تأكيد. لا تنتهي مهمتنا بمجرد تسليم الكود؛ نوفر خطط دعم فني مستمر تشمل النسخ الاحتياطي الدوري، التحديثات الأمنية، وحل أي استفسار فوراً عبر قنوات تواصل سريعة وواتساب لضمان استمرار عملك بأقصى كفاءة.',
    },
    {
      q: 'كيف نبدأ الخطوة الأولى؟ وهل هناك أي التزام مالي في المحادثة المبدئية؟',
      a: 'البداية في غاية البساطة: يمكنك حجز مكالمة استشارية مجانية لمدة 30 دقيقة، نناقش فيها فكرة مشروعك، نحلل الفجوة الرقمية التي تواجهها، ونقدم لك خطة العمل المناسبة دون أي التزام مالي من طرفك.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-[#090A12] border-t border-white/[0.06] scroll-mt-20 sm:scroll-mt-24" dir="rtl">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
              <span>❓ إجابات شفافة ومباشرة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              الأسئلة الأكثر شيوعاً{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                قبل انطلاق مشروعك معنا
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              إليك كل ما تحتاج معرفته عن آليات العمل، التكاليف، والأمان التقني بكل وضوح ودون مصطلحات معقدة.
            </p>
          </Fade>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Fade key={idx} direction="up" triggerOnce delay={100 * idx}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#111322] border-purple-500/50 shadow-lg shadow-purple-500/10'
                      : 'bg-[#111322]/60 border-white/[0.08] hover:border-white/[0.15]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    type="button"
                    className="w-full px-6 py-5 flex items-center justify-between text-right gap-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rotate-180'
                          : 'bg-white/[0.06] text-slate-300'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 font-normal leading-relaxed border-t border-white/[0.04]">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Fade>
            );
          })}
        </div>

        {/* Still have questions? Help Box */}
        <div className="mt-14 max-w-xl mx-auto text-center p-6 rounded-2xl bg-[#111322] border border-white/[0.08]">
          <div className="text-sm font-bold text-white mb-2">هل لديك استفسار محدد لم تجد إجابته هنا؟</div>
          <p className="text-xs text-slate-400 mb-4">فريقنا التقني مستعد للرد على أي استفسار ومساعدتك في اختيار الحل الأمثل لنشاطك.</p>
          <Button
            href="https://wa.me/201501108024"
            type="link"
            target="_blank"
            isExternal
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 rounded-xl transition-all no-underline"
          >
            <span>تحدث مع خبير تقني عبر واتساب مباشرة</span>
          </Button>
        </div>

      </div>
    </section>
  );
}

