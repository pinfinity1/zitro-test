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
import chevronDownSVG from "../../public/images/chevrondown.svg";
import homeSVG from "../../public/images/home.svg";
import headphonesSVG from "../../public/images/headphones.svg";
import fastDeliverySVG from "../../public/images/fast-delivery.svg";
import checkListSVG from "../../public/images/checklist.svg";
import productsSVG from "../../public/images/products.svg";
import CheckboxGroup from "./CheckboxGroup";
import ImageSlider from "./ImageSlider";

export default function Container() {
  return (
    <div className="w-full max-w-[1600px] mx-auto md:pt-4 md:pb-6">
      {/* container */}
      <div className="relative md:flex md:gap-5">
        {/* right section */}
        <div className="md:flex-1 overflow-visible">
          {/* product detail */}
          <div className="w-full grid grid-cols-9 md:p-6">
            <div className="w-full col-span-9 md:col-span-4 p-2">
              <div className="hidden md:flex items-center justify-between p-3">
                <Image
                  src={comareSVG}
                  width={16}
                  height={16}
                  alt="compare icon"
                />
                <Image src={shareSVG} width={16} height={16} alt="share svg" />
                <Image src={likeSVG} width={16} height={16} alt="like svg" />
              </div>
              <ImageSlider />
            </div>
            <div className=" w-full col-span-9 md:col-span-5 md:px-4">
              <div className="flex items-center justify-between md:hidden">
                <div className="flex items-center gap-2 text-xs md:text-base">
                  <span>برند:</span>
                  <span className="text-[#339AF0] ">اپل</span>
                </div>
                <div className="flex items-center gap-6">
                  <Image src={likeSVG} width={24} height={24} alt="like svg" />
                  <Image
                    src={comareSVG}
                    width={24}
                    height={24}
                    alt="compare icon"
                  />
                  <Image
                    src={shareSVG}
                    width={24}
                    height={24}
                    alt="share svg"
                  />
                </div>
              </div>
              <p className="text-[#343A40] pt-2 md:p-0 md:text-2xl text-justify">
                گوشی موبایل اپل مدل iPhone 16 Not Active ظرفیت 128 گیگابایت - رم
                6 گیگابایت
              </p>
              <p className="text-[#868E96] text-xs font-light text-left md:text-right pt-1 md:p-0">
                iPhone 16 Not Active 128/6
              </p>
              <div className="flex md:hidden items-center justify-between py-4">
                <span className="text-xs text-white font-semibold bg-[#20C997] flex items-center gap-2 p-2 rounded-lg">
                  کالای اصل
                </span>
                <span className="text-xs text-[#343A40] font-semibold bg-[#DEE2E6] flex items-center gap-2 p-2 rounded-lg">
                  4.5 امتیاز
                </span>
                <span className="text-xs text-[#1C7ED6] font-semibold bg-[#D0EBFF] flex items-center gap-2 p-2 rounded-lg">
                  کالای اصل
                </span>
              </div>
              <div className="hidden md:flex items-center justify-between my-6 md:my-0">
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
                  <div className="w-full md:w-fit h-[56px] flex items-center gap-2 p-4 bg-[#FFF4E6] border border-[#F76707] rounded-xl">
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
                        <div className="w-1/3">
                          <p className="flex items-center justify-end gap-1 md:gap-2">
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
                          <div className="w-full flex md:flex-row-reverse items-center justify-between gap-1 md:gap-0">
                            <span className="text-xs md:text-[14px] text-[#FF6B6B] md:text-[#868E96] font-light line-through">
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
              {/* feature */}
              <div className="gap-4 pt-4">
                <div className="w-full flex items-center justify-between md:hidden py-4">
                  <span className="text-xs font-semibold">ویژگی‌های کالا</span>
                  <a
                    href="#"
                    className="text-[10px] text-[#339AF0] font-medium "
                  >
                    نمایش تمام ویژگی‌ها
                  </a>
                </div>
                <div className="w-full flex items-center gap-2 overflow-x-auto md:grid grid-cols-3 md:gap-4">
                  <div className="w-fit md:h-[68px] bg-[#F8F9FA] border border-[#F1F3F5] rounded-xl p-3 space-y-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Image src={wrapProducts} width={16} height={16} alt="" />
                      <span className="text-[10px] font-normal text-[#343A40]">
                        فناوری صفحه‌ نمایش
                      </span>
                    </div>
                    <div className="w-fit text-[10px] text-[#343A40] font-semibold line-clamp-1">
                      LTPO Super Retina XDR OLED
                    </div>
                  </div>
                  <div className="w-fit md:h-[68px] bg-[#F8F9FA] border border-[#F1F3F5] rounded-xl p-3 space-y-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Image src={wrapProducts} width={16} height={16} alt="" />
                      <span className="text-[10px] font-normal text-[#343A40]">
                        فناوری صفحه‌ نمایش
                      </span>
                    </div>
                    <div className="w-fit text-[10px] text-[#343A40] font-semibold line-clamp-1">
                      LTPO Super Retina XDR OLED
                    </div>
                  </div>
                  <div className="w-fit md:h-[68px] bg-[#F8F9FA] border border-[#F1F3F5] rounded-xl p-3 space-y-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Image src={wrapProducts} width={16} height={16} alt="" />
                      <span className="text-[10px] font-normal text-[#343A40]">
                        فناوری صفحه‌ نمایش
                      </span>
                    </div>
                    <div className="w-fit text-[10px] text-[#343A40] font-semibold line-clamp-1">
                      LTPO Super Retina XDR OLED
                    </div>
                  </div>
                  <div className="w-fit md:h-[68px] bg-[#F8F9FA] border border-[#F1F3F5] rounded-xl p-3 space-y-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Image src={wrapProducts} width={16} height={16} alt="" />
                      <span className="text-[10px] font-normal text-[#343A40]">
                        فناوری صفحه‌ نمایش
                      </span>
                    </div>
                    <div className="w-fit text-[10px] text-[#343A40] font-semibold line-clamp-1">
                      LTPO Super Retina XDR OLED
                    </div>
                  </div>
                </div>
              </div>
              {/* show other features */}
              <a
                href="#"
                className="hidden my-2 py-2 text-center md:flex items-center justify-center gap-4 text-xs text-[#339AF0] font-normal"
              >
                نمایش تمام ویژگی‌ها
                <Image
                  src={chevronDownSVG}
                  width={8}
                  height={8}
                  alt="chevron down"
                />
              </a>
              <p className="hidden md:block text-xs font-normal text-[#343A40] leading-6 text-justify">
                درخواست بازگشت کالا در دسته نمایشگر (موبایل) در فروشگاه آی‌تی
                هوم تنها با دلیل "انصراف از خرید" و در صورتی پذیرفته می‌شود که
                کالا در شرایط اولیه خود باشد (در صورت پلمپ بودن، نباید باز شده
                باشد). مانیتور با تعداد بالای 3 پیکسل سوخته فقط شامل ضمانت
                بازگشت می‌شود.
              </p>
            </div>
          </div>
          {/* facilities */}
          <div className="w-ful flex items-center md:justify-evenly mt-4 p-4 overflow-x-auto">
            <div className="w-[160px] md:w-fit whitespace-nowrap flex flex-col items-center gap-2 p-4">
              <Image src={homeSVG} width={38} height={38} alt="" />
              <span className="text-xs text-[#868E96] font-semibold">
                خرید حضوری
              </span>
            </div>
            <div className="w-[160px] md:w-fit whitespace-nowrap flex flex-col items-center gap-2 p-4">
              <Image src={headphonesSVG} width={38} height={38} alt="" />
              <span className="text-xs text-[#868E96] font-semibold">
                پشتیبانی 10:30 تا 17
              </span>
            </div>
            <div className="w-[160px] md:w-fit whitespace-nowrap flex flex-col items-center gap-2 p-4">
              <Image src={checkListSVG} width={38} height={38} alt="" />
              <span className="text-xs text-[#868E96] font-semibold">
                تضمین اصالت کالا
              </span>
            </div>
            <div className="w-[160px] md:w-fit whitespace-nowrap flex flex-col items-center gap-2 p-4">
              <Image src={fastDeliverySVG} width={38} height={38} alt="" />
              <span className="text-xs text-[#868E96] font-semibold">
                ارسال فوری در تهران
              </span>
            </div>
            <div className=" w-[160px] md:w-fit whitespace-nowrap flex flex-col items-center gap-2 p-4">
              <Image src={productsSVG} width={38} height={38} alt="" />
              <span className="text-xs text-[#868E96] font-semibold">
                تامین حرفه‌ای کالا
              </span>
            </div>
          </div>
          {/* divider */}
          <div className="relative w-full h-[1px] bg-[#DEE2E6] mt-4 mb-3">
            <span className="absolute -top-5 right-0 bg-white p-2 text-[14px] font-bold text-[#343A40]">
              نیازت میشه
            </span>
          </div>
        </div>
        {/* left section */}
        <div>
          <div className="sticky top-[170px] space-y-2">
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
