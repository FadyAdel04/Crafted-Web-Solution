/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";
import { FeaturedRealProjects } from "json/landingPageData";

export default function FeaturedProjects({ data = FeaturedRealProjects }) {
  const projects = data && data.length > 0 ? data : FeaturedRealProjects;
  const webProjects = projects.filter((p) => !p.isDesktop);
  const desktopProjects = projects.filter((p) => p.isDesktop);

  return (
    <section
      id="featured-real-projects"
      className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0B14] border-t border-b border-white/[0.06]"
      dir="rtl"
    >
      {/* Background Ambient Lighting Blobs */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>أعمال حقيقية تم إطلاقها للعملاء · Shipped Client Production</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              مشاريع حقيقية على أرض الواقع <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                تُحدث فارقاً ملموساً لشركائنا
              </span>
            </h2>
          </Fade>

          <Fade direction="up" triggerOnce delay={150}>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              أنظمة ومنصات رقمية متكاملة طوّرها فريقنا وتعمل حالياً بكفاءة عالية في بيئات الإنتاج الحية.
              تجمع بين سرعة الأداء، التصميم الحصري، والموثوقية التقنية التامة.
            </p>
          </Fade>
        </div>

        {/* ========================================================
            Part 1: Web Production Projects Grid (Leidenschaft & Andalusia)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {webProjects.map((project, index) => (
            <Fade key={project.id} direction="up" triggerOnce delay={200 * index}>
              <div className="group h-full flex flex-col justify-between rounded-3xl bg-[#111322] border border-white/[0.1] hover:border-purple-500/40 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-15px_rgba(139,92,246,0.3)] overflow-hidden">
                
                <div>
                  {/* Browser Chrome Mockup Header */}
                  <div className="rounded-2xl bg-[#16192E] border border-white/[0.08] overflow-hidden mb-6 shadow-xl">
                    <div className="flex items-center justify-between px-4 py-3 bg-[#1A1E38]/90 border-b border-white/[0.06]" dir="ltr">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                      </div>
                      
                      {/* URL Bar */}
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/40 border border-white/[0.06] text-[11px] sm:text-xs text-slate-300 font-mono max-w-[280px] sm:max-w-xs truncate">
                        <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="truncate">{project.credit}</span>
                      </div>

                      {/* Live Indicator */}
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="hidden sm:inline">LIVE</span>
                      </div>
                    </div>

                    {/* Screenshot Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111322] via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Project Info Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {project.logoUrl && (
                          <img
                            src={project.logoUrl}
                            alt=""
                            className="w-7 h-7 rounded-lg object-contain bg-white/10 p-1 border border-white/10"
                          />
                        )}
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                          {project.badge || project.type}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          مشروع حي
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm font-medium text-slate-300 mb-3 text-purple-300/90">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed font-normal mb-5">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  {project.highlights && (
                    <div className="space-y-2 mb-6 p-4 rounded-xl bg-[#16192E]/60 border border-white/[0.06]">
                      <div className="text-xs font-bold text-slate-300 mb-2">أبرز المخرجات والمميزات:</div>
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Verified Tech Stack Tags */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                      التقنيات المستخدمة (Verified Tech Stack):
                    </div>
                    <div className="flex flex-wrap gap-1.5" dir="ltr">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#16192E] text-blue-300 border border-blue-500/25 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-wrap sm:flex-nowrap items-center gap-3">
                  {project.credit && (
                    <Button
                      href={project.credit}
                      type="link"
                      target="_blank"
                      isExternal
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(139,92,246,0.55)] no-underline"
                    >
                      <span>معاينة حية للمشروع</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Button>
                  )}

                  <Button
                    href={`/project/${project.id}`}
                    type="link"
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:text-white transition-all no-underline"
                  >
                    <span>تفاصيل المشروع</span>
                    <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </div>

              </div>
            </Fade>
          ))}
        </div>

        {/* ========================================================
            Part 2: Desktop Enterprise Software (Financial Tracker & POS)
           ======================================================== */}
        {desktopProjects.map((desktopProject) => (
          <Fade key={desktopProject.id} direction="up" triggerOnce delay={300}>
            <div className="rounded-3xl bg-gradient-to-br from-[#16192E] via-[#111322] to-[#0A0B14] border border-purple-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Decorative top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Desktop Native Window Frame Showcase */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="rounded-2xl bg-[#0D0F1B] border border-white/[0.12] shadow-2xl overflow-hidden">
                    
                    {/* Desktop Application Window Title Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#1A1E38] border-b border-white/[0.08]" dir="ltr">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-purple-600/40 flex items-center justify-center text-[9px] text-purple-300 font-bold border border-purple-400/40">
                          POS
                        </div>
                        <span className="text-xs font-mono text-slate-300 font-semibold truncate">
                          FinancialTracker_POS.exe — System Console
                        </span>
                      </div>

                      {/* Windows Control Icons */}
                      <div className="flex items-center gap-3 text-slate-400 text-xs">
                        <span className="cursor-default hover:text-white">🗕</span>
                        <span className="cursor-default hover:text-white">🗖</span>
                        <span className="cursor-default hover:text-red-400">✕</span>
                      </div>
                    </div>

                    {/* Window Status Ribbon */}
                    <div className="px-4 py-2 bg-[#111322] border-b border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400" dir="ltr">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 font-semibold">ENGINE: ONLINE</span>
                        <span className="text-slate-600">|</span>
                        <span>OFFLINE-FIRST STORAGE</span>
                      </div>
                      <span className="text-purple-300">v2.1 STABLE</span>
                    </div>

                    {/* Desktop UI Architecture Wireframe / Visualization */}
                    <div className="p-5 sm:p-6 space-y-4 text-right bg-[#090A12]/95" dir="rtl">
                      
                      {/* Metric Widgets Preview */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 rounded-xl bg-[#16192E] border border-white/[0.06]">
                          <div className="text-[10px] text-slate-400 mb-1">المعاملات اليومية</div>
                          <div className="text-sm sm:text-base font-extrabold text-white font-mono">1,480+</div>
                          <div className="text-[9px] text-emerald-400 font-semibold mt-0.5">● نشط ومسجل</div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#16192E] border border-white/[0.06]">
                          <div className="text-[10px] text-slate-400 mb-1">سرعة المعالجة</div>
                          <div className="text-sm sm:text-base font-extrabold text-purple-300 font-mono">&lt; 15ms</div>
                          <div className="text-[9px] text-purple-400 mt-0.5">محرك محلي فائق</div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#16192E] border border-white/[0.06]">
                          <div className="text-[10px] text-slate-400 mb-1">حالة الاتصال</div>
                          <div className="text-sm sm:text-base font-extrabold text-blue-300 font-mono">Autonomous</div>
                          <div className="text-[9px] text-blue-400 mt-0.5">100% دون إنترنت</div>
                        </div>
                      </div>

                      {/* Simulated POS Invoice Register Table */}
                      <div className="rounded-xl p-3.5 bg-[#131627] border border-white/[0.06] text-xs font-mono">
                        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[11px] text-slate-400">
                          <span>رقم الفاتورة / العملية</span>
                          <span>المبلغ</span>
                          <span>طريقة الدفع</span>
                          <span>الحالة</span>
                        </div>
                        <div className="space-y-2 pt-2 text-[11px]">
                          <div className="flex items-center justify-between text-slate-300">
                            <span className="text-purple-300">#INV-2026-891</span>
                            <span className="font-bold text-white">4,250.00 EGP</span>
                            <span className="text-slate-400">نقدي / Cash</span>
                            <span className="text-emerald-400">مكتملة ✓</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-300">
                            <span className="text-purple-300">#INV-2026-892</span>
                            <span className="font-bold text-white">12,800.00 EGP</span>
                            <span className="text-slate-400">بطاقة / POS</span>
                            <span className="text-emerald-400">مكتملة ✓</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-300">
                            <span className="text-purple-300">#INV-2026-893</span>
                            <span className="font-bold text-white">1,600.00 EGP</span>
                            <span className="text-slate-400">تحويل / Transfer</span>
                            <span className="text-emerald-400">مكتملة ✓</span>
                          </div>
                        </div>
                      </div>

                      {/* Notice Banner */}
                      <div className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-500/20 text-[11px] text-purple-300 flex items-center gap-2">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400" />
                        <span>معمارية النظام: محرك محاسبي مخصص لنقاط البيع مع تشفير محلي للبيانات.</span>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Desktop Info & Value Proposition */}
                <div className="lg:col-span-6 order-1 lg:order-2 text-right">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      🖥️ {desktopProject.badge || "برمجية سطح مكتب"}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      نظام مستقل معتمد
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                    {desktopProject.title}
                  </h3>

                  <p className="text-sm font-semibold text-purple-300 mb-4">
                    {desktopProject.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                    {desktopProject.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 mb-6">
                    {desktopProject.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                        <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Verified Tech Stack */}
                  <div className="mb-8">
                    <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                      التقنيات ومعمارية النظام (System Architecture):
                    </div>
                    <div className="flex flex-wrap gap-2" dir="ltr">
                      {desktopProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#16192E] text-purple-300 border border-purple-500/30 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      href="/discuss-project"
                      type="link"
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] no-underline whitespace-nowrap"
                    >
                      <span>طلب ديمو تجريبي (Request Demo)</span>
                      <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Button>

                    <Button
                      href="https://wa.me/201501108024?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%B9%D8%B1%D8%B6%20%D8%AA%D9%88%D8%B6%D9%8A%D8%AD%D9%8A%20(Demo)%20%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%AF%D9%8A%D8%B3%D9%83%D8%AA%D9%88%D8%A8%20Financial%20Tracker%20%26%20POS"
                      type="link"
                      target="_blank"
                      isExternal
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all no-underline"
                    >
                      <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                      </svg>
                      <span>واتساب مباشر</span>
                    </Button>

                    <Button
                      href={`/project/${desktopProject.id}`}
                      type="link"
                      className="inline-flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all no-underline"
                    >
                      <span>التفاصيل</span>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </Fade>
        ))}

      </div>
    </section>
  );
}
