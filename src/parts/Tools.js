/* eslint-disable */
import React from "react";
import { Fade } from "react-awesome-reveal";

// Import tool logos
import hostingerLogo from "../assets/images/tools/hostinger.jpg";
import wordpressLogo from "../assets/images/tools/wordpress.png";
import nextjsLogo from "../assets/images/tools/nextjs.avif";
import reactLogo from "../assets/images/tools/react.png";
import phpLogo from "../assets/images/tools/php.png";
import mysqlLogo from "../assets/images/tools/mysql.png";
import supabaseLogo from "../assets/images/tools/supabase.png";
import tailwindLogo from "../assets/images/tools/tailwind.jpg";

const tools = [
  { id: 1, name: "Next.js", logo: nextjsLogo, category: "Framework" },
  { id: 2, name: "React", logo: reactLogo, category: "UI Library" },
  { id: 3, name: "Tailwind CSS", logo: tailwindLogo, category: "Styling" },
  { id: 4, name: "Supabase", logo: supabaseLogo, category: "Backend / Auth" },
  { id: 5, name: "MySQL", logo: mysqlLogo, category: "Database" },
  { id: 6, name: "PHP", logo: phpLogo, category: "Backend" },
  { id: 7, name: "WordPress", logo: wordpressLogo, category: "CMS" },
  { id: 8, name: "Hostinger", logo: hostingerLogo, category: "Cloud Hosting" },
];

export default function Tools() {
  return (
    <section className="relative py-20 overflow-hidden" dir="rtl">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="up" triggerOnce>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
              <span>⚡ أحدث حزم التقنيات العالمية</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              التقنيات الحديثة <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">التي نعتمد عليها</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal">
              نختار بعناية أفضل الأدوات وأكثرها استقرارًا لبناء حلول رقمية فائقة السرعة، متجاوبة، وقابلة للتوسع.
            </p>
          </div>
        </Fade>

        {/* Marquee with side masks */}
        <div className="relative overflow-hidden py-4">
          {/* Edge fade masks */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0A0B14] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0A0B14] to-transparent z-20 pointer-events-none" />

          {/* Marquee Container */}
          <div className="flex animate-marquee-smooth gap-6" dir="ltr">
            {/* Loop set 1 */}
            {tools.map((tool) => (
              <div
                key={`t1-${tool.id}`}
                className="flex-shrink-0 flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-[#111322] border border-white/[0.08] hover:border-purple-500/40 shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#16192E] p-1.5 flex items-center justify-center overflow-hidden border border-white/[0.06]">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-contain filter"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white leading-tight">{tool.name}</div>
                  <div className="text-[11px] text-slate-400">{tool.category}</div>
                </div>
              </div>
            ))}

            {/* Loop set 2 */}
            {tools.map((tool) => (
              <div
                key={`t2-${tool.id}`}
                className="flex-shrink-0 flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-[#111322] border border-white/[0.08] hover:border-purple-500/40 shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#16192E] p-1.5 flex items-center justify-center overflow-hidden border border-white/[0.06]">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-contain filter"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white leading-tight">{tool.name}</div>
                  <div className="text-[11px] text-slate-400">{tool.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marqueeSmooth {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-smooth {
          display: flex;
          width: max-content;
          animation: marqueeSmooth 25s linear infinite;
        }
        .animate-marquee-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
