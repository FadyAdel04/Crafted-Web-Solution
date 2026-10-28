/* eslint-disable */
import React, { useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";
import Header from "./Header";
import backgroundVideo from "../assets/background2.mp4";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playVideo = () => {
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {
            // Autoplay policy fallback
          });
        }
      };
      playVideo();
      video.addEventListener("loadeddata", playVideo);
      return () => {
        video.removeEventListener("loadeddata", playVideo);
      };
    }
  }, []);

  return (
    <section 
      className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col justify-between" 
      dir="rtl"
    >
      {/* 1. Edge-to-Edge Autoplaying, Looping, Muted Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        <source src="/background2.mp4" type="video/mp4" />
      </video>

      {/* 2. Layered Dimming & Ambient Gradients for Depth */}
      <div className="absolute inset-0 bg-[#07080E]/60 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 via-transparent to-black/80 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07080E]/80 via-transparent to-[#07080E] z-10 pointer-events-none" />

      {/* 3. Top Navigation Overlay */}
      <Header isHeroOverlay={true} />

      {/* 4. Center-Aligned Content Stack (Shifted slightly upward) */}
      <div className="relative z-20 w-full mb-12 container mx-auto px-4 sm:px-6 lg:px-8 my-auto transform -translate-y-6 sm:-translate-y-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Eyebrow / Feature Badge */}
          <Fade direction="up" triggerOnce delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-md mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                متاح لاستقبال مشاريع جديدة
              </span>
            </div>
          </Fade>

          {/* Main Headline */}
          <Fade direction="up" triggerOnce delay={200}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.25] sm:leading-[1.18] tracking-tight mb-5 drop-shadow-xl">
              حلول ويب مبتكرة{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                مصممة خصيصًا لرؤيتك
              </span>
            </h1>
          </Fade>

          {/* Subtitle / Paragraph */}
          <Fade direction="up" triggerOnce delay={300}>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300/90 leading-relaxed font-normal max-w-2xl sm:max-w-3xl mb-8 sm:mb-10 drop-shadow-md">
              نصنع تجارب ومواقع استثنائية تواكب نمو أعمالك: صفحات تعريفية تسويقية،
              مواقع شركات، متاجر إلكترونية متكاملة، وقوائم رقمية ذكية بتصاميم حديثة وأداء فائق السرعة.
            </p>
          </Fade>

          {/* Call-to-Action Row */}
          <Fade direction="up" triggerOnce delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto" dir="rtl">
              {/* Primary Action Button */}
              <Button
                href="/discuss-project"
                type="link"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transition-all duration-300 hover:-translate-y-0.5 no-underline w-full sm:w-auto"
              >
                <span>ناقش مشروعك الآن</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-180 group-hover:-translate-x-1 transition-transform duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>

              {/* Secondary Action Button */}
              <Button
                href="/project"
                type="link"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-slate-200 hover:text-white rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.15] hover:border-white/[0.3] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 no-underline w-full sm:w-auto shadow-sm"
              >
                <span>استعرض أعمالنا</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </Button>
            </div>
          </Fade>

        </div>
      </div>

      {/* 5. Bottom Anchor Spacer (Preserves clean spacing for scroll cue) */}
      <div className="relative z-20 pb-6 hidden sm:flex justify-center items-center opacity-40 hover:opacity-100 transition-opacity">
        <div className="w-5 h-9 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}