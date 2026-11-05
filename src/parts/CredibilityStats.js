/* eslint-disable */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function CredibilityStats() {
  const stats = [
    {
      metric: '+280%',
      label: 'زيادة معدل تحويل الزوار لعملاء',
      sub: 'بفضل مسارات تجربة المستخدم وتكتيكات الـ CRO',
      gradient: 'from-blue-400 via-indigo-300 to-blue-500',
      borderGlow: 'hover:border-blue-500/50',
      icon: '📈',
    },
    {
      metric: '< 1.2s',
      label: 'متوسط سرعة تحميل صفحاتنا',
      sub: 'أسرع بـ 3 أضعاف من المواقع التقليدية والمجانية',
      gradient: 'from-purple-400 via-pink-300 to-purple-500',
      borderGlow: 'hover:border-purple-500/50',
      icon: '⚡',
    },
    {
      metric: '+45h',
      label: 'ساعة موفرة شهرياً لكل عميل',
      sub: 'بفضل أتمتة الفواتير وربط الطلبات بواتساب والبريد',
      gradient: 'from-emerald-400 via-teal-300 to-emerald-500',
      borderGlow: 'hover:border-emerald-500/50',
      icon: '⏳',
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-[#090A12]" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <Fade key={idx} direction="up" triggerOnce delay={150 * idx}>
              <div
                className={`group rounded-3xl bg-[#111322] border border-white/[0.08] ${stat.borderGlow} p-8 sm:p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between`}
              >
                <div>
                  <div className="text-3xl mb-4">{stat.icon}</div>
                  <div
                    className={`text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} tracking-tight mb-3`}
                  >
                    {stat.metric}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {stat.label}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-normal pt-4 border-t border-white/[0.06] mt-4">
                  {stat.sub}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

