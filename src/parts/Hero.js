/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import BuildWebsite from "../assets/images/hero/BuildWebsite.png";

export default function Hero() {
  return (
    <section className="hero" dir="rtl">
      <div className="w-full lg:w-1/2 xl:pr-12 sm:pl-2 mt-8 text-right">
        <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
          حلول ويب مصممة <br />
          خصيصًا لرؤيتك
        </h1>

        <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
          نقوم بإنشاء مواقع ويب مذهلة لتلبية جميع الاحتياجات: صفحات هبوط،
          بورتفوليو، دعوات، مواقع أعمال، قوائم طعام رقمية، متاجر إلكترونية،
          صفحات فعاليات، منصات دورات، مدونات، سير ذاتية، والمزيد.
        </p>
        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/project"
            type="link"
            className="flex w-71 h-18 items-center justify-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
          >
            شاهد أعمالنا
            <svg
              className="mr-2 w-7 h-7 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>
        </Fade>
      </div>
      <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/3">
        <Fade direction="up" triggerOnce>
          <img className="" src={BuildWebsite} alt="إنشاء موقع ويب" />
        </Fade>
      </div>
    </section>
  );
}
