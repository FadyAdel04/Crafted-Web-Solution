/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import { Portfolios } from "json/landingPageData";

// Core High-Converting Landing Page Components
import Hero from "parts/Hero";
import SolutionShowcase from "parts/SolutionShowcase";
import DigitalTransformation from "parts/DigitalTransformation";
import KeyFeatures from "parts/KeyFeatures";
import Portfolio from "parts/Portfolio";
import HowItWorks from "parts/HowItWorks";
import FaqAccordion from "parts/FaqAccordion";
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  componentDidMount() {
    // If there is an anchor hash in the URL, scroll smoothly to it with offset
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <main className="bg-[#0A0B14] min-h-screen text-slate-100 selection:bg-purple-600 selection:text-white" role="main">
        {/* 1. الرئيسية: Hero Section */}
        <Hero />

        {/* 2. الحلول: Interactive Solution Showcase with Real Sites & Links */}
        <SolutionShowcase />

        {/* 3. لماذا التحول الرقمي؟: Comparison Matrix, Sector Suggestions & Guarantees */}
        <DigitalTransformation />

        {/* 4. المميزات: Key Features (3 Core SaaS Pillars) */}
        <KeyFeatures />

        {/* 5. المشاريع: Full Interactive Portfolio Carousel */}
        <Portfolio data={Portfolios} />

        {/* 6. كيف نعمل: 3 Easy Steps to Onboarding */}
        <HowItWorks />

        {/* 7. الأسئلة الشائعة: FAQ Accordion */}
        <FaqAccordion />

        {/* الدعوة للإجراء والفوتر */}
        <Discuss />
        <Footer />
      </main>
    );
  }
}
