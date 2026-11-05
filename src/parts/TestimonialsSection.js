/* eslint-disable */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'م. أحمد الشاذلي',
      role: 'المدير التنفيذي · Leidenschaft Klub',
      projectType: 'منصة تعليمية متطورة وحجز كورسات',
      metric: '+210% زيادة الحجوزات الآلية',
      stars: 5,
      avatarInitial: 'أ.ش',
      comment:
        'فريق Crafted Web Solutions نقل مركزنا إلى مستوى آخر تماماً. كنا نعاني من تشتت رسائل الطلاب وتأكيد المواعيد يدوياً، والآن أصبح لدينا منصة رسمية ألمانية كاملة بنظام حجز آلي وإشعارات سريعة. الاحترافية والالتزام بالمواعيد كانا فوق المتوقع!',
    },
    {
      name: 'قبطان / مصطفى العوضي',
      role: 'رئيس مجلس الإدارة · Andalusia Marine',
      projectType: 'موقع مؤسسي رسمي وتجاري B2B',
      metric: 'عقود دولية جديدة وموثوقية فورية',
      stars: 5,
      avatarInitial: 'م.ع',
      comment:
        'موقع شركة أندلسية مارين ساعدنا في تمثيل أعمالنا البحرية وبناء السفن أمام عملاء وشركات دولية من خارج مصر. الموقع ثنائي اللغة، فائق السرعة، ومصمم بهيبة تليق بمشروعنا الهندسي. الدعم الفني بعد الإطلاق ممتاز ومتعاون جداً.',
    },
    {
      name: 'أ. طارق عبد الرحمن',
      role: 'مالك سلسلة متاجر تجزئة',
      projectType: 'نظام كاشير POS ومتجر إلكتروني',
      metric: 'صفر أخطاء في الجرد و40 ساعة موفرة',
      stars: 5,
      avatarInitial: 'ط.ع',
      comment:
        'النظام المكتبي لنقاط البيع الذي صمموه لنا غيّر شكل إدارة الخزينة والمخزن؛ يعمل بدون انقطاع حتى لو فصل النت، وفواتيرنا وحساباتنا اليومية تخرج بضغطة زر. استثمار عاد علينا بأضعاف قيمته في أول شهرين.',
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 lg:py-28" dir="rtl">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-4">
              <span>⭐ تجارب حقيقية ونتائج مقاسة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              ماذا يقول شركاؤنا بعد{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                إطلاق مشاريعهم معنا؟
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              قصص نجاح حقيقية لأصحاب أعمال وثقوا في Crafted Web Solutions وحققوا قفزات نوعية في كفاءة أعمالهم وأرباحهم.
            </p>
          </Fade>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Fade key={idx} direction="up" triggerOnce delay={150 * idx}>
              <div className="h-full rounded-3xl bg-[#111322] border border-white/[0.08] hover:border-purple-500/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between">
                <div>
                  {/* Rating & Metric Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-amber-400 text-sm">
                      {[...Array(t.stars)].map((_, sIdx) => (
                        <span key={sIdx}>★</span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      {t.metric}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                    "{t.comment}"
                  </p>
                </div>

                {/* Author Info Footer */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {t.avatarInitial}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{t.name}</h3>
                    <p className="text-xs text-purple-400">{t.role}</p>
                    <p className="text-[11px] text-slate-400">{t.projectType}</p>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}

