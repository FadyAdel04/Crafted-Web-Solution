/* eslint-disable */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function IntegrationsSection() {
  const integrations = [
    {
      name: 'WhatsApp Business API',
      category: 'التواصل والإشعارات اللحظية',
      desc: 'إرسال الفواتير وتأكيد الحجوزات والطلبات لحظياً على هاتف العميل عبر واتساب.',
      badge: 'إشعارات آلية',
      iconText: 'WA',
      color: 'from-emerald-500 to-green-600',
    },
    {
      name: 'Paymob & Fawry & Stripe',
      category: 'بوابات الدفع الإلكتروني',
      desc: 'قبول البطاقات البنكية، فودافون كاش، المحافظ الإلكترونية، ونظم التقسيط بأعلى معايير الأمان.',
      badge: 'دفع فوري آمن',
      iconText: 'PAY',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      name: 'Google Analytics & Search Console',
      category: 'التحليلات وتصدر نتائج البحث',
      desc: 'تتبع حركة الزوار، سلوك المشترين، والظهور المستمر في الصفحة الأولى لمحركات البحث.',
      badge: 'أرشفة قوية',
      iconText: 'SEO',
      color: 'from-amber-500 to-orange-600',
    },
    {
      name: 'Meta & TikTok Pixels',
      category: 'تتبع الإعلانات وإعادة الاستهداف',
      desc: 'قياس دقيق لنتائج حملاتك الإعلانية وإعادة استهداف من تصفح المنتجات ولم يكمل الشراء.',
      badge: 'عائد إعلاني أعلى',
      iconText: 'ADS',
      color: 'from-purple-500 to-pink-600',
    },
    {
      name: 'Cloudflare CDN & SSL',
      category: 'الأمان والسرعة العالمية',
      desc: 'تشفير تام للبيانات، حماية ضد هجمات الـ DDoS، وسرعة فائقة من أقرب خادم لعميلك.',
      badge: 'حماية 100%',
      iconText: 'SEC',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'POS & Accounting Systems',
      category: 'مزامنة المخزون والمحاسبة',
      desc: 'ربط متجرك أو موقعك مع برامج نقاط البيع والمخازن لتحديث الكميات تلقائياً وبلا تضارب.',
      badge: 'مزامنة ذكية',
      iconText: 'ERP',
      color: 'from-rose-500 to-red-600',
    },
  ];

  return (
    <section id="integrations" className="relative py-20 lg:py-28 bg-[#0B0C16]" dir="rtl">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-64 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
              <span>🔌 تكامل ذكي مع أدواتك المفضلة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              تكامل سلس مع جميع{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                المنصات والخدمات التي تدير بها تجارتك
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              لا داعي لتغيير طريقة عملك المفضلة؛ منصاتنا ترتبط بسلاسة مع بوابات الدفع، وسائل التواصل، وأنظمة الإعلانات والمحاسبة.
            </p>
          </Fade>
        </div>

        {/* 6-Grid Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {integrations.map((item, idx) => (
            <Fade key={idx} direction="up" triggerOnce delay={100 * idx}>
              <div className="h-full rounded-2xl sm:rounded-3xl bg-[#111322] border border-white/[0.08] hover:border-purple-500/40 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-black text-sm shadow-md`}
                    >
                      {item.iconText}
                    </div>
                    <span className="text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">{item.name}</h3>
                  <div className="text-xs font-semibold text-purple-400 mb-3">{item.category}</div>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>تكامل تلقائي مدعوم بالكامل (Instant API Sync)</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}

