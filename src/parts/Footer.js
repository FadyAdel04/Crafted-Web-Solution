/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import BrandIcon from "./BrandIcon";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <div className="border-t border-gray-800 pb-6" dir="rtl">
      <div className="container flex-col mx-auto px-4">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          {/* الشعار والوصف */}
          <div className="w-full sm:w-1/3 flex-col mb-6 sm:mb-0 sm:mr-16 sm:ml-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light mt-2">
              حلول ويب إبداعية، ميسورة التكلفة، ومحلية
              <br />
              مصممة خصيصًا من أجلك.
            </p>
          </div>

          {/* معلومات التواصل */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 sm:mr-0 sm:ml-5">
            <h1 className="text-lg text-white pt-4 pb-2 font-semibold">
              تواصل معنا
            </h1>
            <p className="text-lg text-gray-400 font-light">
              craftedwebsolution@gmail.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              الإسكندرية، مصر
            </p>
          </div>

          {/* وسائل التواصل الاجتماعي */}
          <div className="w-full sm:w-1/3 sm:mr-0">
            <h1 className="text-lg text-white pt-4 pb-2 font-semibold">
              تابعنا
            </h1>
            <Button
              href="https://www.facebook.com/profile.php?id=61575214027590"
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              فيسبوك
            </Button>
            <Button
              href="https://wa.me/201501108024"
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              واتساب
            </Button>
          </div>
        </div>

        {/* أسفل الفوتر */}
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-500 font-light">
            © {new Date().getFullYear()} Crafted Webs Solution — جميع الحقوق محفوظة
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-500 font-light">
              تصميم 💜 بواسطة&nbsp;
            </p>
            <Button
              href="https://fadyadel-fady-adels-projects.vercel.app/"
              type="link"
              target="_blank"
              className="text-lg text-purple-400 font-light hover:underline"
              isExternal
            >
              فادي عادل
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
