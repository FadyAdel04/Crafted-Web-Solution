/* eslint-disable */
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import * as emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Form } from "elements/Form";
import Button from "elements/Button";

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitEmail = () => {
    const { name, company, email, phone, projectIdea } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: "Crafted Web Solutions",
      message: projectIdea,
    };

    if (
      name && name.trim() !== "" &&
      company && company.trim() !== "" &&
      email && email.trim() !== "" &&
      phone && phone.trim() !== "" &&
      projectIdea && projectIdea.trim() !== ""
    ) {
      setIsSubmitting(true);
      emailjs
        .send(
          "service_fhcsn39",
          "template_vffswgn",
          templateParams,
          "gCwauWGXN-5MmfzhP"
        )
        .then(
          () => {
            setIsSubmitting(false);
            toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك في غضون 24 ساعة.");
            resetForm();
          },
          () => {
            setIsSubmitting(false);
            toast.error("حدث خطأ أثناء الإرسال. يرجى المحاولة عبر واتساب مباشرة.");
          }
        );
    } else {
      toast.error("يرجى ملء كافة الحقول المطلوبة قبل الإرسال.");
    }
  };

  return (
    <section className="relative py-12 lg:py-20" dir="rtl">
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-14">
          <Fade direction="down" triggerOnce>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4">
              <span>💬 استشارة تقنية مجانية</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              لنبدأ مناقشة <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">مشروعك القادم</span>
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal max-w-2xl mx-auto">
              شاركنا تفاصيل فكرتك وتطلعاتك، وسنقوم بالرد عليك في أقل من 24 ساعة لتقديم تحليل مجاني وعرض أسعار مخصص.
            </p>
          </Fade>
        </div>

        {/* Quick Contact Bar */}
        <Fade direction="up" triggerOnce delay={300}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <a
              href="https://wa.me/201501108024"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#111322] border border-white/[0.08] hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                </svg>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">تواصل فوري</div>
                <div className="text-sm font-bold text-white">واتساب مباشر</div>
              </div>
            </a>

            <a
              href="mailto:craftedwebsolution@gmail.com"
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#111322] border border-white/[0.08] hover:border-blue-500/50 hover:bg-blue-950/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">البريد الإلكتروني</div>
                <div className="text-sm font-bold text-white">إرسال رسالة</div>
              </div>
            </a>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#111322] border border-white/[0.08]">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">زمن الاستجابة</div>
                <div className="text-sm font-bold text-white">أقل من 24 ساعة</div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Form Container */}
        <Fade direction="up" triggerOnce delay={400}>
          <div className="rounded-3xl bg-[#111322] border border-white/[0.1] p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <Form
                id="name"
                name="name"
                label="الاسم الكريم *"
                type="text"
                value={data.name}
                placeholder="مثال: محمد أحمد"
                onChange={actions.onChange}
              />
              <Form
                id="company"
                name="company"
                label="اسم الشركة أو النشاط التجاري *"
                type="text"
                value={data.company}
                placeholder="مثال: شركة النور للحلول"
                onChange={actions.onChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <Form
                id="email"
                name="email"
                label="البريد الإلكتروني *"
                type="email"
                value={data.email}
                placeholder="name@example.com"
                onChange={actions.onChange}
              />
              <Form
                id="phone"
                name="phone"
                label="رقم الهاتف / واتساب *"
                type="number"
                value={data.phone}
                placeholder="01xxxxxxxxx"
                onChange={actions.onChange}
              />
            </div>

            <div>
              <Form
                id="projectIdea"
                name="projectIdea"
                label="اشرح لنا فكرة وتفاصيل مشروعك *"
                type="textarea"
                value={data.projectIdea}
                placeholder="اكتب نبذة عن أهداف المشروع، الميزات المطلوبة، وأي روابط أو مراجع مشابهة..."
                onChange={actions.onChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
              <p className="text-xs text-slate-400">
                🔒 خصوصية بياناتك مضمونة بنسبة 100% ولن تتم مشاركتها مع أي جهة.
              </p>
              
              <Button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all duration-300 disabled:opacity-50"
                type="button"
                onClick={submitEmail}
              >
                {isSubmitting ? (
                  <span>جاري الإرسال...</span>
                ) : (
                  <>
                    <span>إرسال تفاصيل المشروع</span>
                    <svg className="w-5 h-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </Button>
            </div>
          </div>
        </Fade>

        <ToastContainer theme="dark" position="bottom-left" />
      </div>
    </section>
  );
};
