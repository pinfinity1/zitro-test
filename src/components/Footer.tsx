"use client";
import Image from "next/image";
import { useState } from "react";
import Fulllogo from "../../public/images/footer/Full-Logo.svg";
import WhatsApp from "../../public/images/footer/whatsapp.svg";
import Telegram from "../../public/images/footer/telegram.svg";
import Instagram from "../../public/images/footer/instagram.svg";
import Enemad from "../../public/images/footer/enemad.svg";
import samandehi from "../../public/images/footer/samandehi.svg";
import tehransanat from "../../public/images/footer/tehransanat.svg";
import iso from "../../public/images/footer/iso.svg";
import torob from "../../public/images/footer/torob.svg";

const accordionData = [
  {
    title: "فروشگاه",
    items: [
      "گوشی موبایل",
      "تبلت",
      "کنسول بازی",
      "لوازم جانبی",
      "لپ تاپ",
      "لوازم کامپیوتر",
    ],
  },
  {
    title: "راهنما",
    items: [
      "سوالات متداول",
      "روش‌های حمل و ارسال",
      "راهنمای خرید",
      "راهنمای بازگشت وجه",
      "راهنمای خرید اقساطی",
    ],
  },
  {
    title: "زیترو",
    items: ["تماس با ما", "درباره زیترو", "حریم خصوصی", "بلاگ"],
  },
  {
    title: "خدمات مشتریان",
    items: ["حریم خصوصی", "قوانین و مقررات", "شرایط گارانتی"],
  },
  {
    title: "درخواست تسهیلات",
    items: ["وام زیترو", "وام ویژه بازنشستگان", "درخواست نمایندگی"],
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-[#F8F9FA] w-full max-w-[1600px] px-4 py-5 mt-5 mb-3 rounded-4xl text-gray-800">
      <div className="overflow-x-auto w-full">
        <div className="min-w-max bg-white px-4 py-6 rounded-4xl">
          <div className="flex items-center gap-4 max-w-6xl mx-auto text-center lg:justify-between scroll-mx-4">
            {[
              { title: "خرید اقساطی", icon: "/images/Footer/callender.svg" },
              { title: "پشتیبانی", icon: "/images/Footer/life-buoy-01.svg" },
              { title: "شرایط گارانتی", icon: "/images/Footer/shield-zap.svg" },
              { title: "روش‌های پرداخت", icon: "/images/Footer/moneys.svg" },
              { title: "روش‌های ارسال", icon: "/images/Footer/group.svg" },
              {
                title: "بازگشت کالا",
                icon: "/images/Footer/convert-3d-cube.svg",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="min-w-[110px] flex-shrink-0 flex flex-col items-center hover:text-orange-600 cursor-pointer transition-all"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                />
                <p className="mt-5 text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-sm mt-8">
        <div className="space-y-4 text-center lg:text-right flex flex-col items-center lg:items-start">
          <Image
            src={Fulllogo}
            alt="زیترو"
            width={350}
            height={85.33}
            priority
          />
          <p className="font-medium max-w-full">
            فروشگاه اینترنتی زیترو فروش کالای دیجیتال و لوازم خانگی
          </p>

          <div className="flex justify-center w-full flex-wrap gap-3 mt-4">
            {[Enemad, samandehi, tehransanat, iso, torob].map((icon, idx) => (
              <Image key={idx} src={icon} alt="badge" width={53} height={53} />
            ))}
          </div>

          <div className="flex justify-center w-full gap-4 mt-4">
            {[
              { icon: WhatsApp, name: "واتساپ" },
              { icon: Telegram, name: "تلگرام" },
              { icon: Instagram, name: "اینستاگرام" },
            ].map((social) => (
              <div
                key={social.name}
                className="w-9 h-9 flex items-center justify-center border border-[#EBEFF6] rounded-[12px] cursor-pointer"
                aria-label={`رفتن به ${social.name}`}
              >
                <Image
                  src={social.icon}
                  alt={`آیکون شبکه اجتماعی برای ${social.name}`}
                  width={22}
                  height={22}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-5 gap-6">
          {accordionData.map((section, idx) => (
            <div key={section.title} className="space-y-4">
              <div className="md:hidden">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="lg:hidden w-full flex justify-between items-center font-bold text-base"
                  aria-expanded={openIndex === idx}
                  aria-controls={`accordion-content-${idx}`}
                  id={`accordion-header-${idx}`}
                >
                  {section.title}
                  <div
                    className={`transition-transform ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  >
                    <Image
                      src="/images/Footer/arrow-down.svg"
                      alt="toggle"
                      width={16}
                      height={16}
                      className="footer-widget-responsive-accordion-icon"
                    />
                  </div>
                </button>
                <ul
                  id={`accordion-content-${idx}`}
                  aria-labelledby={`accordion-header-${idx}`}
                  className={`space-y-2 mt-2 lg:mt-0 ${
                    openIndex === idx ? "block" : "hidden"
                  } lg:block`}
                >
                  {section.items.map((item, subIdx) => (
                    <li key={subIdx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="hidden md:block">
                <h4 className="font-bold text-base">{section.title}</h4>
                <ul className="space-y-2 mt-2">
                  {section.items.map((item, subIdx) => (
                    <li key={subIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-right leading-8">
          <h3 className="font-bold text-base">آدرس :</h3>
          <address>
            <p>
              فروشگاه: خیابان جمهوری، تقاطع حافظ، پاساژ چارسو، طبقه منفی یک،
              غرفه ۸۶۲
            </p>
            <p>خدمات پس از فروش: همان آدرس، غرفه ۸۳۲</p>
            <p>
              تلفن:{" "}
              <a href="tel:02112345678" className="ltr hover:underline">
                02112345678
              </a>
            </p>
            <p>
              ایمیل:{" "}
              <a href="mailto:info@zitro.ir" className="ltr hover:underline">
                info@zitro.ir
              </a>
            </p>
            <p>
              کد پستی: <span className="ltr">1516745402</span>
            </p>
          </address>
        </div>
      </div>

      <div className="mt-8 px-4 py-4 bg-[#F76707] text-white text-sm rounded-2xl text-center">
        حقوق مادی وب سایت زیترون متعلق به شرکت همراه تحلیل پایتخت می‌باشد
      </div>
    </footer>
  );
};

export default Footer;
