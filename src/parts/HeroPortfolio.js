/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

import heroPortfolio from "assets/images/hero/portfolioHero.png";

export default function HeroPortfolio() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
            Services We Provide
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            At Crafted Webs Solution, we specialize in creating modern websites,
            and stunning UI/UX designs tailored to meet your goals.
            From personal portfolios and wedding invitations to business
            websites, e-learning platforms, landing pages, and event pages — we
            turn ideas into high-performing digital experiences.
          </p>
        </Fade>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12 ">
        <Fade direction="up" triggerOnce>
          <img src={heroPortfolio} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
