import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.svg";

export default function Navbar() {
  return (
    <div className="w-full font-[family-name:var(--font-roboto-mono)] bg-custom-gradient  md:h-[88px] h-[70px] relative flex justify-between items-center">
      <span className="absolute bottom-0 left-0 h-[1px] w-[100%] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
      <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center md:px-6 px-4 ">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <h4 className="text-sm text-[#FFF]/80 pl-[140px] md:block hidden">
          Product
        </h4>
        <nav className="md:flex hidden gap-[31px] items-center text-sm text-[#FFF]/80">
          <h5>Tech Specs</h5>
          <h5>Contact us</h5>
          <div className="relative ">
            <button className="btn text-sm uppercase h-[44px] w-[154px]   font-[family-name:var(--font-roboto-mono)] border-[2px] border-[#FCFF80]/20">
              Buy Now
            </button>
            <div className="corner-1" />
            <div className="corner-2" />
            <div className="corner-3" />
            <div className="corner-4" />
            <div className="corner-5" />
            <div className="corner-6" />
            <div className="corner-7" />
            <div className="corner-8" />
          </div>
        </nav>
        <div className="md:hidden flex items-center">
          <div className="mr-[15px]">
            <div className="relative text-white ">
              <button className="btn text-[13px] uppercase h-[38px] w-[110px]    font-[family-name:var(--font-roboto-mono)] border-[2px] border-[#FCFF80]/20">
                Buy Now
              </button>
              <div className="corner-1" />
              <div className="corner-2" />
              <div className="corner-3" />
              <div className="corner-4" />
              <div className="corner-5" />
              <div className="corner-6" />
              <div className="corner-7" />
              <div className="corner-8" />
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-[6px] px-[6px]">
              <span className="w-[26px] h-[2px]   bg-[#ffffff] transition-transform ease-in-out"></span>
              <span className="w-[26px] h-[2px]   bg-[#ffffff] transition-all duration-500 ease-in-out"></span>
              <span className="w-[26px] h-[2px]   bg-[#ffffff] transition-transform ease-in-out "></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
