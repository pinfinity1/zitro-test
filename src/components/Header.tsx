"use client";
import Image from "next/image";
import arrowIcon from "../../public/images/header/arrow-right.svg";
import shoppingBagIcon from "../../public/images/header/bag.svg";
import largeLogoIcon from "../../public/images/header/largeLogo.png";
import moreIcon from "../../public/images/header/more-square.svg";
import notifIcon from "../../public/images/header/notification.svg";
import searchIcon from "../../public/images/header/search-normal.svg";
import inputSearchIcon from "../../public/images/header/searchInput.svg";
import smallLogoIcon from "../../public/images/header/smallLogo.png";
import userIcon from "../../public/images/header/user.svg";
import Menu from "./Menu";
import useStickyMenu from "@/hooks/useStickyMenu";

export default function Header() {
  const menuVisibility = useStickyMenu();

  return (
    <div
      className={`sticky top-0 bg-white z-50 border-b border-b-[#CED4DA] w-full`}
    >
      <div className="w-full max-w-[1600px] mx-auto flex justify-between items-center p-4 md:py-6">
        <div className="flex gap-4">
          <Image
            src={largeLogoIcon}
            width={120}
            height={40}
            alt="large logo"
            className="hidden md:block md:w-auto md:max-w-[120px] md:h-[40px] cursor-pointer"
          />
          <Image
            src={arrowIcon}
            width={16}
            height={16}
            alt="arrow icon"
            className="md:hidden cursor-pointer"
          />
          <Image
            src={smallLogoIcon}
            width={64}
            height={24}
            alt="small logo"
            className="md:hidden cursor-pointer"
          />
        </div>

        <div className="hidden md:flex justify-between items-center bg-[#F8F9FA] p-4 border border-[#CED4DA] focus:border-[#FF6B6B] rounded-xl w-full max-w-2/5 h-12">
          <input
            className="focus:outline-hidden w-full"
            placeholder="جست و جو"
            dir="rtl"
            type="text"
          />
          <Image
            src={inputSearchIcon}
            width={16}
            height={16}
            alt="search icon"
          />
        </div>

        <div className="flex gap-4 md:gap-8">
          <Image
            src={moreIcon}
            width={24}
            height={24}
            alt="more icon"
            className="md:hidden cursor-pointer"
          />
          <Image
            src={searchIcon}
            width={24}
            height={24}
            alt="search icon"
            className="md:hidden cursor-pointer"
          />
          <Image
            src={notifIcon}
            width={24}
            height={24}
            alt="notification icon"
            className="hidden md:block cursor-pointer"
          />
          <Image
            src={userIcon}
            width={24}
            height={24}
            alt="user icon"
            className="hidden md:block cursor-pointer"
          />
          <Image
            src={shoppingBagIcon}
            width={24}
            height={24}
            alt="shopping icon"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`transition-all duration-300 ${
          menuVisibility === "hidden"
            ? "max-h-0 opacity-0 overflow-hidden"
            : "max-h-[200px] opacity-100"
        }`}
      >
        <Menu />
      </div>
    </div>
  );
}
