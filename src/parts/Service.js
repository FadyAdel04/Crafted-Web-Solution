/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import { Fade } from "react-awesome-reveal";

export default function Service({ data }) {
  return (
    <div className="bg-gray-50" dir="rtl">
      <div className="container mx-auto pt-20 pb-28">
        <Fade direction="up" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            خدماتنا
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            نحن نحول أفكارك إلى منتجات رقمية حقيقية — ذكية، عصرية، وجاهزة للتألق.
          </p>
        </Fade>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item) => (
            <Fade
              direction={item.animation}
              delay={500}
              key={item.id || item.title} // 👈 استخدم id أو العنوان كـ key
              triggerOnce
            >
              <div>
                <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                  <img
                    src={item.imageUrl}
                    alt="خدمة"
                    className="rounded-t-2xl p-5"
                  />
                  <h2 className="text-theme-blue text-center text-xl py-7 rounded-b-2xl">
                    {item.title}
                  </h2>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
