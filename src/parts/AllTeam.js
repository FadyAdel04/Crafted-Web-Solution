/* eslint-disable */
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function AllTeam({ data }) {
  return (
    <section className="relative py-12 pb-28" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.map((item, index) => (
            <Fade
              direction="up"
              triggerOnce
              delay={150 * index}
              key={item.name || index}
            >
              <div className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-[#111322] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.25)] overflow-hidden">
                
                {/* Top ambient card glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Avatar with Radiant Gradient Ring */}
                <div className="relative mb-6">
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-300" />
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="relative w-32 h-32 rounded-full object-cover border-2 border-white/20 shadow-xl"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.name}
                </h3>
                
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
                  {item.position}
                </span>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  ملتزم بتقديم أعلى درجات الإتقان والجودة التقنية لدعم نمو مشاريع عملائنا وتحقيق أهدافهم.
                </p>

              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
