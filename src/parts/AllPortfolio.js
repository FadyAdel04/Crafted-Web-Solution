/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

export default function AllPortfolio({ data }) {
  const categories = [
    { key: "All", label: "الكل" },
    { key: "Desktop Application", label: "أنظمة سطح المكتب" },
    { key: "Business Website", label: "مواقع أعمال وشركات" },
    { key: "E-Learning", label: "منصات تعليمية" },
    { key: "Landing Page", label: "صفحات هبوط" },
    { key: "Invitation", label: "دعوات رقمية" },
    { key: "Portfolio", label: "بورتفوليو وسير ذاتية" },
    { key: "Digital Menu", label: "قوائم طعام ذكية" },
    { key: "E-commerce", label: "متاجر إلكترونية" },
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All"
    ? data
    : data.filter((item) => item.type === activeTab);

  return (
    <section className="relative py-12 pb-24" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none" dir="rtl">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-purple-400/40"
                    : "bg-[#111322] text-slate-300 hover:text-white hover:bg-[#16192E] border border-white/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 text-xs sm:text-sm text-slate-400 border-b border-white/[0.06] pb-4">
          <span>يتم عرض {filteredItems.length} مشروع</span>
          <span className="font-mono text-purple-400">{activeTab}</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-400 text-base">لا توجد مشاريع مضافة حالياً في هذا القسم.</p>
          </div>
        )}

      </div>
    </section>
  );
}

function PortfolioItem({ item, index }) {
  const getTechStack = (type) => {
    if (item.techStack && item.techStack.length > 0) return item.techStack;
    switch (type) {
      case "Desktop Application":
        return ["Desktop App", "POS", "Offline-First"];
      case "E-commerce":
        return ["Next.js", "Tailwind CSS", "Stripe API"];
      case "Invitation":
        return ["React", "Tailwind CSS", "Supabase"];
      case "Landing Page":
        return ["React", "Tailwind CSS", "Vite"];
      case "Business Website":
        return ["Next.js", "Tailwind CSS", "SEO"];
      case "Digital Menu":
        return ["React", "Tailwind CSS", "QR System"];
      case "E-Learning":
        return ["Next.js", "Video LMS", "Tailwind CSS"];
      case "Portfolio":
      default:
        return ["React", "Tailwind CSS", "UI/UX"];
    }
  };

  const techStack = getTechStack(item.type);

  return (
    <Fade triggerOnce direction="up" delay={Math.min(100 * (index % 6), 500)}>
      <div className="group h-full flex flex-col justify-between rounded-2xl bg-[#111322] border border-white/[0.08] hover:border-purple-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.25)]">
        
        <div>
          {/* Thumbnail Container */}
          <div className="relative h-56 w-full overflow-hidden bg-[#16192E]">
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#16192E] to-[#0A0B14] text-center border-b border-purple-500/20">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-2 text-2xl font-mono">
                  🖥️
                </div>
                <div className="text-sm font-bold text-white mb-0.5">Desktop Application</div>
                <div className="text-xs text-purple-300 font-mono">Financial Tracker & POS</div>
              </div>
            )}
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111322] via-transparent to-transparent opacity-80" />

            {/* Badges */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0A0B14]/80 backdrop-blur-md text-slate-200 border border-white/10">
                {item.badge || item.type}
              </span>
              {item.isShippedClientWork && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                  عميل حقيقي
                </span>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {item.title}
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-4 font-normal">
              {item.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 mb-2" dir="ltr">
              {techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-blue-950/40 text-blue-300 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-0 mt-auto flex items-center justify-between gap-3 border-t border-white/[0.06]">
          {item.credit ? (
            <Button
              href={item.credit}
              type="link"
              target="_blank"
              isExternal
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all no-underline shadow-sm"
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
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all no-underline shadow-sm"
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
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] hover:text-white border border-white/[0.08] transition-all no-underline"
          >
            <span>التفاصيل</span>
            <svg className="w-3.5 h-3.5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>

      </div>
    </Fade>
  );
}
