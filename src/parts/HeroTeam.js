/* eslint-disable */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Team from 'assets/images/hero/team.png';

export default function HeroTeam() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden" dir="rtl">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 text-right">
            <Fade direction="up" triggerOnce>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4">
                <span>👥 الكفاءات والخبرات</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                فريق من المبدعين <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  لصناعة حلول استثنائية
                </span>
              </h1>
            </Fade>

            <Fade direction="up" delay={200} triggerOnce>
              <p className="font-normal text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                يضم فريقنا نخبة من المطورين والمصممين الشغوفين، متكاتفون لتحويل أفكارك البرمجية وتطلعاتك الرقمية إلى واقع ملموس يحقق أعلى مستويات التميز والنجاح.
              </p>
            </Fade>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <Fade direction="up" triggerOnce delay={300}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-xl opacity-75" />
                <img
                  src={Team}
                  alt="فريق العمل"
                  className="relative z-10 w-full max-w-md rounded-2xl filter drop-shadow-2xl"
                />
              </div>
            </Fade>
          </div>

        </div>
      </div>
    </section>
  );
}
