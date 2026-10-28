/* eslint-disable */
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";

export default function Service({ data }) {
  // Service feature details mapping to enrich the bento grid cards
  const serviceFeatures = {
    "تصميم وتطوير المواقع": [
      "مواقع شركات ومؤسسات راقية",
      "صفحات تعريفية تسويقية عالية التحويل",
      "متاجر إلكترونية متكاملة مع بوابات الدفع",
      "أداء فائق مع تحسين محركات البحث SEO",
    ],
    "حلول رقمية للفعاليات والعلامة التجارية الشخصية": [
      "دعوات زفاف رقمية تفاعلية مع نظام RSVP",
      "بورتفوليو وسير ذاتية رقمية للمبدعين والمهنيين",
      "قوائم طعام ذكية (Digital QR Menus) للمطاعم",
      "صفحات أحداث وفعاليات مخصصة مع عداد تنازلي",
    ],
    "خدمات رقمية إبداعية": [
      "تصميم واجهات وتجربة مستخدم UI/UX متقدمة",
      "هويات بصرية رقمية وأيقونات مخصصة",
      "حلول وتكاملات تقنية مع أدوات الذكاء الاصطناعي",
      "دعم فني مستمر واستضافة سحابية عالية الأمان",
    ],
  };

  return (
    <section className="relative py-20 lg:py-28" dir="rtl" id="services">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
              <span>💎 خدمات رقمية متكاملة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
              حلول مصممة لتحقيق <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">نمو استثنائي</span>
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              نحن نحول أفكارك إلى منتجات رقمية حقيقية — فائقة السرعة، متقنة الجماليات، وجاهزة للتألق والمنافسة في السوق.
            </p>
          </Fade>
        </div>

        {/* Bento Grid Services Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => {
            const features = serviceFeatures[item.title] || [
              "تصاميم فريدة وعصرية",
              "سرعة وأداء لا يضاهى",
              "تجربة استخدام متوافقة مع كل الأجهزة",
            ];

            return (
              <Fade
                direction="up"
                delay={200 * index}
                key={item.id || item.title}
                triggerOnce
              >
                <div className="group relative h-full flex flex-col justify-between rounded-2xl bg-[#111322] border border-white/[0.08] hover:border-purple-500/40 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.25)] overflow-hidden">
                  
                  {/* Subtle top card gradient line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    {/* Visual / Image Showcase Container */}
                    <div className="relative mb-6 rounded-xl bg-[#16192E] border border-white/[0.06] p-4 flex items-center justify-center overflow-hidden group-hover:bg-[#1a1e38] transition-colors duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="relative z-10 w-full h-44 object-contain transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all duration-200">
                      {item.title}
                    </h3>

                    {/* Feature Highlights List */}
                    <ul className="space-y-2.5 mb-8">
                      {features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mt-0.5">
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <Button
                      href="/discuss-project"
                      type="link"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors no-underline group/link"
                    >
                      <span>طلب الخدمة</span>
                      <svg
                        className="w-4 h-4 transform rotate-180 group-hover/link:-translate-x-1 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
