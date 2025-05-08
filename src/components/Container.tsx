"use client";
import { useState } from "react";
import { Radio, FormControlLabel, RadioGroup } from "@mui/material";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import rotateSVG from "../../public/images/rotate.svg";
import supplySVG from "../../public/images/supplySVG.svg";
import wrapProducts from "../../public/images/wrapProducts.svg";
import chevronLeft from "../../public/images/chevron-left.svg";
import currencyRed from "../../public/images/currency-red.svg";
import currency from "../../public/images/currency.svg";
import SamanInsurance from "../../public/images/Saman-Insurance.svg";
import bluSVG from "../../public/images/brands/Blu.svg";
import moneysaSVG from "../../public/images/brands/Moneysa.svg";
import digipaySVG from "../../public/images/brands/Digipay.svg";
import jetvamSVG from "../../public/images/brands/Jetvam.svg";
import advertiseSVG from "../../public/images/advertise-svg.svg";
import market from "../../public/images/market.svg";
import comareSVG from "../../public/images/Compare.svg";
import shareSVG from "../../public/images/share.svg";
import likeSVG from "../../public/images/like.svg";
import checkSVG from "../../public/images/check.svg";
import starSVG from "../../public/images/star.svg";
import checksquareSVG from "../../public/images/tick-square.svg";
import CheckboxGroup from "./CheckboxGroup";

export default function Container() {
  const [selected, setSelected] = useState("insurance");

  return (
    <div className="w-full max-w-[1600px] mx-auto pt-4 pb-6">
      {/* container */}
      <div className="relative md:flex md:gap-5">
        {/* right section */}
        <div className="md:flex-1 overflow-visible">
          {/* product detail */}
          <div className="w-full grid grid-cols-9 pt-6">
            <div className="col-span-4 p-2">
              <div className="flex items-center justify-between">
                <Image
                  src={comareSVG}
                  width={16}
                  height={16}
                  alt="compare icon"
                />
                <Image src={shareSVG} width={16} height={16} alt="share svg" />
                <Image src={likeSVG} width={16} height={16} alt="like svg" />
              </div>
            </div>
            <div className="col-span-5 px-4">
              <p className="text-[#343A40] text-2xl">
                گوشی موبایل اپل مدل iPhone 16 Not Active ظرفیت 128 گیگابایت - رم
                6 گیگابایت
              </p>
              <span className="text-[#868E96] text-xs font-light">
                iPhone 16 Not Active 128/6
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[18px] text-[14px]">
                  <div className="flex items-center gap-2">
                    <span>برند:</span>
                    <span className="text-[#339AF0] ">اپل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>نظرات:</span>
                    <span className="text-[#339AF0] ">بدون نظر</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src={starSVG}
                      width={16}
                      height={16}
                      alt="start svg"
                    />
                    <span>3.4 از 3 رای</span>
                  </div>
                </div>
                <span className="text-xs text-white font-semibold bg-[#20C997] flex items-center gap-2 p-2 rounded-lg">
                  <Image
                    src={checkSVG}
                    width={16}
                    height={16}
                    alt="truth check"
                  />
                  <p>کالای اصل</p>
                </span>
              </div>
              <div className="pt-4">
                <p className="text-[14px] font-semibold pb-4">رنگ:</p>
                <CheckboxGroup />
              </div>
              <div className="pt-4">
                <p className="text-[14px] font-semibold pb-4">گارانتی:</p>
                <div>
                  <div className="w-fit h-[56px] flex items-center gap-2 p-4 bg-[#FFF4E6] border border-[#F76707] rounded-xl">
                    <Image
                      src={checksquareSVG}
                      width={16}
                      height={16}
                      alt="check square"
                    />
                    <span className="text-[#E8590C] text-xs font-medium">
                      گارانتی 24 ماهه سام سرویس
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-[14px] font-semibold pb-4">بیمه:</p>
                <div className="w-full">
                  <label className="flex items-center gap-2 w-full p-0">
                    <div className="w-full flex items-start gap-2 p-4 bg-[#f8f9fa] rounded-2xl border border-solid border-[#f1f3f5]">
                      <input
                        type="radio"
                        name="insurance"
                        value="insurance"
                        className="w-6 h-6 accent-[#ff922b] "
                      />
                      <Image
                        src={logo}
                        width={28}
                        height={28}
                        alt="insurance logo"
                      />
                      <div className="w-full h-[48px] flex justify-between">
                        <div className="space-y-4">
                          <p className="text-xs text-[#343A40] font-semibold">
                            گواهی جبران خسارت زیترو
                          </p>
                          <p className="text-xs text-[#FF922B]">
                            شرایط و توضیحات
                          </p>
                        </div>
                        <div className="w-[146px]">
                          <p className="flex items-center justify-end gap-2">
                            <span className="font-bold">1,080,000</span>
                            <span>
                              <Image
                                src={currency}
                                width={16}
                                height={16}
                                alt="currency toman"
                              />
                            </span>
                          </p>
                          <div className="w-full flex flex-row-reverse items-center justify-between">
                            <span className="text-[14px] text-[#868E96] font-light line-through">
                              1,200,000
                            </span>
                            <span className="w-8 h-6 bg-[#FF6B6B] text-white text-xs font-extrabold px-2 py-1 rounded-lg">
                              ٪۱۰
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              {/* properties */}
              <div className="grid grid-cols-3 gap-4">
                <div className="w-full bg-[#F8F9FA] border border-[#F1F3F5] rounded-xl p-3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* left section */}
        <div>
          <div className="sticky top-[140px] space-y-2">
            {/* top section */}
            <div className="space-y-4 md:bg-[#F8F9FA] md:border md:border-[#CED4DA] md:rounded-2xl p-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-full h-10 flex items-center gap-2 px-4 py-2 bg-white rounded-lg">
                  <Image src={logo} width={16} height={16} alt="logo" />
                  <span className="text-[#343A40] text-xs font-light">
                    فروشنده:
                  </span>
                  <span className="text-xs text-orange-500 font-bold">
                    زیترو
                  </span>
                </div>
                <div className="w-full h-10 flex items-center gap-2 px-4 py-2 bg-[#E7F5FF] border border-[#339AF0] rounded-lg">
                  <Image
                    src={rotateSVG}
                    width={16}
                    height={16}
                    alt="rotateSVG"
                  />
                  <span className="text-[#339AF0] text-[10px] font-light">
                    جهت ثبت درخواست ثبت رجیستری با شماره{" "}
                    <span className="font-extrabold">02172509</span> تماس
                    بگیرید.
                  </span>
                </div>
                <div className="w-full h-10 flex items-center gap-2 px-4 py-3 bg-white rounded-lg">
                  <Image
                    src={supplySVG}
                    width={16}
                    height={16}
                    alt="supplySVG"
                  />
                  <span className="text-[#343A40] text-xs font-light">
                    تامین حرفه ای کالای دیجیتال
                  </span>
                </div>
                <div className="w-full h-10 flex items-center justify-between px-4 py-3 bg-white rounded-lg">
                  <div className="flex items-center gap-2">
                    <Image
                      src={wrapProducts}
                      width={16}
                      height={16}
                      alt="supplySVG"
                    />
                    <span className="text-[#343A40] text-xs font-light">
                      بسته بندی و ارسال کالا
                    </span>
                  </div>
                  <Image
                    src={chevronLeft}
                    width={16}
                    height={16}
                    alt="chevron-Left"
                  />
                </div>
              </div>
              {/* price section */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="w-8 h-6 bg-[#FF6B6B] text-white text-xs font-extrabold px-2 py-1 my-1 rounded-lg">
                    ٪۱۰
                  </span>
                  <div className="h-[32px] flex items-center gap-2 text-base p-2 text-[#FF6B6B]">
                    <span className="line-through">71,000,000</span>
                    <Image
                      src={currencyRed}
                      width={16}
                      height={16}
                      alt="currency-toman"
                    />
                  </div>
                </div>
                <div className="h-[48px] flex items-center justify-end gap-2 p-2">
                  <span className="text-[32px]">63,000,000</span>
                  <Image
                    src={currency}
                    width={24}
                    height={24}
                    alt="currency-toman"
                  />
                </div>
              </div>
              {/* insurance section */}
              <div className="p-4 bg-white border border-[#DEE2E6] rounded-2xl">
                <div className="flex items-center gap-2">
                  <Image
                    src={SamanInsurance}
                    width={24}
                    height={24}
                    alt="insurance image"
                  />
                  <p className="text-xs text-[#343A40] font-bold">
                    بیمه تجهیزات دیجیتال - بیمه سامان
                  </p>
                </div>
                <div className="flex flex-row-reverse items-center gap-2">
                  <div className="flex items-center gap-[10px]">
                    <span className="line-through text-xs text-[#FF6B6B]">
                      1,000,000
                    </span>
                    <span className="font-bold">900,000</span>
                    <Image
                      src={currency}
                      width={16}
                      height={16}
                      alt="currency-toman"
                    />
                  </div>
                  <span className="w-8 h-6 bg-[#FF6B6B] text-white text-xs font-extrabold px-2 py-1 my-1 rounded-lg">
                    ٪۱۰
                  </span>
                </div>
              </div>
              {/* cash purchase */}
              <div className="space-y-4">
                <button className="w-full h-[56px] bg-[#12B886] text-white font-bold rounded-[20px]">
                  خرید نقدی
                </button>
                <button className="w-full h-[48px] bg-[#228BE6] text-white text-[14px] rounded-[20px]">
                  خرید اقساطی
                </button>
              </div>
              {/* brands */}
              <div className="w-full flex items-center justify-between">
                <div>
                  <Image
                    src={bluSVG}
                    width={58}
                    height={58}
                    alt="brand blu image"
                  />
                </div>
                <div className="flex items-center gap-[15px]">
                  <Image
                    src={moneysaSVG}
                    width={58}
                    height={58}
                    alt="brand Moneysa image"
                  />
                  <Image
                    src={digipaySVG}
                    width={58}
                    height={58}
                    alt="brand Digipay image"
                  />
                  <Image
                    src={jetvamSVG}
                    width={58}
                    height={58}
                    alt="brand Jetvam image"
                  />
                </div>
              </div>
            </div>
            {/* buttom section (advertise) */}
            <div className="space-y-4 md:bg-[#F8F9FA] md:border md:border-[#CED4DA] md:rounded-2xl p-4">
              <div
                className="w-full h-[64px] rounded-2xl"
                style={{
                  backgroundRepeat: "no-repeat",
                  objectFit: "fill",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${advertiseSVG.src})`,
                }}
              ></div>
              <div className="w-full flex items-center gap-2 bg-[#FFF4E6] border border-[#F76707] text-[#F76707] px-4 py-2 rounded-xl">
                <Image src={market} width={24} height={24} alt="market svg" />
                <p className="text-xs font-light">
                  امکان تحویل حضوری در شعب زیترو
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Similar products */}
      <div></div>
    </div>
  );
}
