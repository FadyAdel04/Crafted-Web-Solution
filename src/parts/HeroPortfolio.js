/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

import heroPortfolio from "assets/images/hero/portfolioHero.png";

export default function HeroPortfolio() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row" dir="rtl">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
            الخدمات التي نقدمها
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            في <span className="font-semibold">Crafted Webs Solution</span> نحن متخصصون في إنشاء مواقع ويب عصرية،
            وتصاميم UI/UX مذهلة مصممة خصيصًا لتلبية أهدافك.
            من المحافظ الشخصية ودعوات الزفاف إلى مواقع الشركات،
            منصات التعليم الإلكتروني، صفحات الهبوط وصفحات الفعاليات — 
            نحول الأفكار إلى تجارب رقمية عالية الأداء.
          </p>
        </Fade>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12">
        <Fade direction="up" triggerOnce>
          <img src={heroPortfolio} alt="الخدمات" />
        </Fade>
      </div>
    </section>
  );
}
