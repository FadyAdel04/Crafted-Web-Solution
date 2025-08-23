/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

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
  {
    id: 1,
    name: "Hostinger",
    logo: hostingerLogo,
    alt: "Hostinger",
  },
  {
    id: 2,
    name: "WordPress",
    logo: wordpressLogo,
    alt: "WordPress",
  },
  {
    id: 3,
    name: "Next.js",
    logo: nextjsLogo,
    alt: "Next.js",
  },
  {
    id: 4,
    name: "React",
    logo: reactLogo,
    alt: "React",
  },
  {
    id: 5,
    name: "PHP",
    logo: phpLogo,
    alt: "PHP",
  },
  {
    id: 6,
    name: "MySQL",
    logo: mysqlLogo,
    alt: "MySQL",
  },
  {
    id: 7,
    name: "Supabase",
    logo: supabaseLogo,
    alt: "Supabase",
  },
  {
    id: 8,
    name: "Tailwind CSS",
    logo: tailwindLogo,
    alt: "Tailwind CSS",
  },
];

export default function Tools() {
  return (
    <div className="bg-white py-20 mb-24 sm:mb-18 xl:mb-16" dir="rtl">
      <div className="container mx-auto">
        <Fade bottom triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold mb-4">
            التقنيات التي نستخدمها
          </h1>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            نستخدم أحدث التقنيات والأدوات لبناء حلول رقمية متطورة ومتجاوبة
          </p>
        </Fade>

        {/* Slider */}
        <Fade bottom triggerOnce delay={300}>
          <div className="relative overflow-hidden py-4">
            {/* Slider Container */}
            <div className="flex">
              {/* First set of logos */}
              <div className="flex animate-marquee gap-12 pr-12">
                {tools.map((tool) => (
                  <div
                    key={`first-${tool.id}`}
                    className="flex items-center justify-center min-w-[120px]"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.alt}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless looping */}
              <div className="flex animate-marquee gap-12 pr-12">
                {tools.map((tool) => (
                  <div
                    key={`second-${tool.id}`}
                    className="flex items-center justify-center min-w-[120px]"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.alt}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Third set for continuous flow */}
              <div className="flex animate-marquee gap-12 pr-12">
                {tools.map((tool) => (
                  <div
                    key={`third-${tool.id}`}
                    className="flex items-center justify-center min-w-[120px]"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.alt}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
