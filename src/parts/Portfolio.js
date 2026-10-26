/* eslint-disable */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";

export default function Portfolio({ data }) {
  const categories = [
    { key: "All", label: "أبرز الأعمال" },
    { key: "Desktop Application", label: "أنظمة سطح المكتب" },
    { key: "Business Website", label: "مواقع شركات" },
    { key: "E-Learning", label: "منصات تعليمية" },
    { key: "Landing Page", label: "صفحات هبوط" },
    { key: "E-commerce", label: "متاجر إلكترونية" },
    { key: "Invitation", label: "دعوات رقمية" },
    { key: "Portfolio", label: "بورتفوليو" },
    { key: "Digital Menu", label: "قوائم طعام" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Filter items
  const items = activeCategory === "All"
    ? data.slice(0, 9)
    : data.filter((item) => item.type === activeCategory);

  // Active slide index (default center)
  const [active, setActive] = useState(Math.min(2, Math.max(0, Math.floor(items.length / 2))));

  // Touch swipe support
  const touchStartX = useRef(null);
  const stageRef = useRef(null);

  // Reset active index when category changes
  useEffect(() => {
    setActive(Math.min(2, Math.max(0, Math.floor(items.length / 2))));
  }, [activeCategory, items.length]);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // In RTL: ArrowRight moves to previous card, ArrowLeft moves to next card
      if (e.key === "ArrowLeft") {
        handleNext();
      } else if (e.key === "ArrowRight") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped right (in RTL: next / forward)
        handleNext();
      } else {
        // Swiped left
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const activeProject = items[active] || items[0];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" dir="rtl" id="portfolio">
      {/* Aurora Ambient Lighting Blobs */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>🚀 3D Showcase · سابقة الأعمال التفاعلية</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              مشاريع استثنائية <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                تأسر الأنظار وتحقق النتائج
              </span>
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce delay={150}>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              استمتع بتجربة التصفح ثلاثي الأبعاد لمشاريعنا. اسحب أو اضغط على أي بطاقة لعرض تفاصيلها ومعاينتها مباشرة.
            </p>
          </Fade>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" dir="rtl">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-purple-400/40"
                    : "bg-[#111322] text-slate-300 hover:text-white hover:bg-[#16192E] border border-white/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            3D Coverflow Perspective Stage
           ======================================================== */}
        <div
          ref={stageRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="coverflow-stage my-6"
        >
          {items.map((item, index) => {
            const d = index - active;
            let posClass = "cf-hidden";

            if (d === 0) posClass = "cf-pos-0";
            else if (d === 1) posClass = "cf-pos-1";
            else if (d === -1) posClass = "cf-pos-n1";
            else if (d === 2) posClass = "cf-pos-2";
            else if (d === -2) posClass = "cf-pos-n2";
            else if (d === 3) posClass = "cf-pos-3";
            else if (d === -3) posClass = "cf-pos-n3";

            const isActive = d === 0;

            return (
              <div
                key={item.id}
                className={`cf-card ${posClass}`}
                onClick={() => {
                  if (!isActive) setActive(index);
                }}
              >
                {/* Centered Image with Reduced Width */}
                <div className="relative w-[72%] sm:w-[70%] h-full mx-auto overflow-hidden shadow-2xl">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-top filter transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#16192E] to-[#0A0B14] text-center border border-purple-500/20">
                      <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-3 text-2xl font-mono">
                        🖥️
                      </div>
                      <div className="text-sm font-bold text-white mb-1">Desktop Software</div>
                      <div className="text-xs text-purple-300 font-mono">Financial Tracker & POS</div>
                    </div>
                  )}
                  {/* Side Edge Fade Blending seamlessly into dark card */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#111322] to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#111322] to-transparent pointer-events-none" />
                </div>

                {/* Top-Left Radial Sheen */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,0.14), transparent 60%)",
                  }}
                />

                {/* Top Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0A0B14]/85 backdrop-blur-md text-purple-300 border border-purple-500/30 shadow-md">
                    {item.badge || item.type}
                  </span>
                </div>

                {/* Bottom Gradient Label */}
                <div
                  className={`absolute left-0 right-0 bottom-0 p-4 sm:p-5 z-20 text-right transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-t from-[#0A0B14] via-[#0A0B14]/90 to-transparent pt-12"
                      : "bg-gradient-to-t from-[#0A0B14] via-[#0A0B14]/75 to-transparent pt-8"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-mono tracking-wider uppercase text-blue-400 mb-1">
                        {item.type}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight drop-shadow-sm truncate">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-1 leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>

                    {/* Quick Action on Active Card */}
                    {isActive && (
                      <div className="flex items-center gap-2 flex-shrink-0 pt-2 sm:pt-0">
                        {item.credit ? (
                          <Button
                            href={item.credit}
                            type="link"
                            target="_blank"
                            isExternal
                            className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-md no-underline whitespace-nowrap"
                          >
                            <span>معاينة حية</span>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Button>
                        ) : item.isDesktop ? (
                          <Button
                            href="/discuss-project"
                            type="link"
                            className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-md no-underline whitespace-nowrap"
                          >
                            <span>طلب ديمو</span>
                            <svg className="w-3.5 h-3.5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Button>
                        ) : null}

                        <Button
                          href={`/project/${item.id}`}
                          type="link"
                          className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.1] hover:bg-white/[0.18] border border-white/[0.15] transition-all no-underline whitespace-nowrap"
                        >
                          <span>التفاصيل</span>
                          <svg className="w-3.5 h-3.5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            Coverflow Controls (Round Glass Prev / Dots / Next)
           ======================================================== */}
        <div className="flex items-center justify-center gap-6 mt-6">
          {/* Prev Button (In RTL, right arrow moves to prev) */}
          <button
            onClick={handlePrev}
            className="cf-nav-btn"
            aria-label="المشروع السابق"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pill Dots Pagination */}
          <div className="flex items-center gap-2">
            {items.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActive(dotIdx)}
                className={`cf-dot ${active === dotIdx ? "active" : ""}`}
                aria-label={`الانتقال للمشروع ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* Next Button (In RTL, left arrow moves to next) */}
          <button
            onClick={handleNext}
            className="cf-nav-btn"
            aria-label="المشروع التالي"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Selected Project Quick Spec Strip */}
        {activeProject && (
          <div className="max-w-xl mx-auto mt-8 p-4 rounded-2xl bg-[#111322]/80 border border-white/[0.08] backdrop-blur-md flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4" dir="rtl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>المشروع المحدد:</span>
              <span className="font-bold text-white text-sm">{activeProject.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                {active + 1} / {items.length}
              </span>
              <Button
                href={`/project/${activeProject.id}`}
                type="link"
                className="text-purple-400 hover:text-purple-300 font-semibold no-underline"
              >
                دراسة الحالة ←
              </Button>
            </div>
          </div>
        )}

        {/* View All Projects Gallery CTA Button */}
        <div className="flex justify-center mt-12">
          <Button
            href="/project"
            type="link"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-[#111322] hover:bg-[#16192E] border border-purple-500/30 hover:border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 no-underline"
          >
            <span>استعراض كافة المشاريع في المعرض الشامل ({data.length})</span>
            <svg
              className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1.5 transition-transform duration-200 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>

      </div>
    </section>
  );
}
