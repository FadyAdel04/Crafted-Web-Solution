/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { DiscussForm } from 'parts/DiscussForm';

import Header from 'parts/Header';
import Footer from 'parts/Footer';

export const DiscussProjectPage = () => {
  const [data, setData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectIdea: '',
  });

  useEffect(() => {
    window.scroll(0, 0);
    // ضبط الاتجاه للـ RTL عند الدخول للصفحة
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectIdea: '',
    });
  };

  return (
    <>
      <Header />
      <div className="text-right font-[Tajawal]">
        <DiscussForm 
          data={data} 
          onChange={onChange} 
          resetForm={resetForm} 
          labels={{
            name: "الاسم الكامل",
            company: "الشركة",
            email: "البريد الإلكتروني",
            phone: "رقم الهاتف",
            projectIdea: "فكرة المشروع",
            submit: "إرسال",
            reset: "إعادة تعيين",
          }}
        />
      </div>
      <Footer />
    </>
  );
};
