/* eslint-disable */
import React from "react";
import { Fade } from "react-awesome-reveal";
import NotFound from "assets/images/NotFound.png";
import Button from "elements/Button";

export default function PortfolioDetail({ data }) {
  if (!data || data.length === 0) {
    return (
      <section className="relative py-24 min-h-[70vh] flex items-center justify-center" dir="rtl">
        <Fade direction="up" triggerOnce>
          <div className="flex flex-col items-center text-center max-w-md mx-auto p-8 rounded-3xl bg-[#111322] border border-white/[0.08] shadow-2xl">
            <img
              src={NotFound}
              alt="المشروع غير موجود"
              className="w-48 h-auto mb-6 opacity-80"
            />
            <h1 className="text-2xl font-bold text-white mb-3">
              المشروع غير متوفر
            </h1>
            <p className="text-sm text-slate-400 mb-6">
              عذراً، لم نتمكن من العثور على المشروع المطلوب أو ربما تم نقله.
            </p>
            <Button
              href="/project"
              type="link"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all no-underline shadow-lg"
            >
              <span>العودة لكافة المشاريع</span>
              <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </Fade>
      </section>
    );
  }

  const project = data[0];

  return (
    <section className="relative py-12 lg:py-20" dir="rtl">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Back Link */}
        <Fade direction="down" triggerOnce>
          <div className="mb-8">
            <Button
              type="link"
              href="/project"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors no-underline group"
            >
              <svg className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>العودة إلى معرض المشاريع</span>
            </Button>
          </div>
        </Fade>

        {/* Project Header */}
        <Fade direction="up" triggerOnce>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4">
              <span>{project.type}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              {project.description}
            </p>
          </div>
        </Fade>

        {/* High-Resolution Project Showcase Frame */}
        <Fade direction="up" triggerOnce delay={200}>
          <div className="relative rounded-3xl bg-[#111322] border border-white/[0.1] p-3 sm:p-5 shadow-2xl mb-14 overflow-hidden">
            {/* Top Browser Dots for Mockup Feel */}
            <div className="flex items-center gap-2 mb-3 px-3 py-1" dir="ltr">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-xs text-slate-500 font-mono ml-2 truncate">
                {project.credit || project.title}
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[#16192E]">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto max-h-[650px] object-cover object-top mx-auto"
              />
            </div>
          </div>
        </Fade>

        {/* Details & Specs Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content (Col 1 to 8) */}
          <div className="lg:col-span-8 space-y-8">
            <Fade direction="up" triggerOnce delay={300}>
              <div className="rounded-2xl bg-[#111322] border border-white/[0.08] p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span>تفاصيل ومميزات المشروع</span>
                </h2>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  {project.description} تم بناء وتطوير هذا المشروع مع مراعاة أعلى معايير سرعة الاستجابة، سهولة التصفح، وتحسين محركات البحث. يهدف التصميم إلى عكس هوية العلامة التجارية بأعلى مستويات الجاذبية البصرية والتفاعل السلس.
                </p>
              </div>
            </Fade>

            {project.responsibility && project.responsibility.length > 0 && (
              <Fade direction="up" triggerOnce delay={400}>
                <div className="rounded-2xl bg-[#111322] border border-white/[0.08] p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    <span>المهام والمخرجات التقنية</span>
                  </h2>

                  <div className="flex flex-wrap gap-3">
                    {project.responsibility.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-[#16192E] text-slate-200 border border-purple-500/30 shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            )}
          </div>

          {/* Sidebar Info Card (Col 9 to 12) */}
          <div className="lg:col-span-4">
            <Fade direction="up" triggerOnce delay={350}>
              <div className="rounded-2xl bg-[#111322] border border-white/[0.08] p-6 sm:p-8 space-y-6">
                <h3 className="text-lg font-bold text-white pb-3 border-b border-white/[0.08]">
                  معلومات المشروع
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">نوع المشروع</span>
                    <span className="font-semibold text-white">{project.type}</span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block mb-1">التسليم والتنفيذ</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      مكتمل ومنشور بنجاح
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block mb-1">الجهة المطورة</span>
                    <span className="font-semibold text-white">Crafted Web Solutions</span>
                  </div>
                </div>

                {project.credit && (
                  <div className="pt-4 border-t border-white/[0.08]">
                    <Button
                      href={project.credit}
                      type="link"
                      target="_blank"
                      isExternal
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all no-underline shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                    >
                      <span>زيارة الموقع المباشر</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Button>
                  </div>
                )}
              </div>
            </Fade>
          </div>

        </div>

      </div>
    </section>
  );
}
