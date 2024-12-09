import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";

export default function TechSpecs() {
  return (
    <div>
      <div className="relative  w-full h-full flex flex-col items-center max-w-[1440px] mx-auto ">
        <span className="absolute top-0 left-0 w-[1px] h-[100vh] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
        <span className="absolute bottom-[6%] left-0 w-[2px] rounded-full h-[55px] bg-[#FCFF80ed] blur-[2px]"></span>
        <span className="absolute bottom-[20%] right-0 w-[2px] rounded-full h-[55px] bg-[#FCFF80ed] blur-[2px]"></span>
        <span className="absolute top-0 right-0 w-[1px] h-[100vh] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
        <span className="absolute z-1 top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
        <span className="absolute z-1 top-[19%] left-1/2 transform -translate-x-1/2 w-[2px] rounded-full h-[55px] bg-[#FCFF80ed] blur-[2px]"></span>

        <div className="flex flex-col font-[family-name:var(--font-neue)] mt-[210px]  w-full">
          <div className="px-12">
            {" "}
            <div className=" h-[28px] overflow-hidden relative z-20 ">
              <h1 className="txt text-black  uppercase text-[3.375rem] leading-[1.2] font-bold mt-[2px] ">
                Tech Specs
              </h1>
            </div>
            <h1 className="text-[#DDDDDD] uppercase text-[3.375rem] leading-[1.2] font-bold ">
              Tech Specs
            </h1>
          </div>
          <div className="text-white  relative  mt-[100px]  z-10 ">
            <div className="w-full h-[112px] border-t border-b border-[#F4FAFC]/20  flex items-center px-12  ">
              <h4 className="text-[20px] font-roboto_mono bg-black w-full h-full flex justify-between items-center ">
                Specifications
              </h4>
              <div className="w-[54px] h-[52px] rounded-full border border-[#F4FAFC]/20 flex items-center justify-center">
                <FiPlus className="text-[28px]" />
              </div>
            </div>
          </div>
          <div className="text-white  relative z-[20]">
            <div className="w-full h-[112px] border-t border-b border-[#F4FAFC]/20  flex justify-between items-center px-12">
              <h4 className="text-[20px] font-roboto_mono bg-black w-full h-full flex items-center  ">
                Accessories
              </h4>
              <div className="w-[54px] h-[52px] rounded-full border border-[#F4FAFC]/20 flex items-center justify-center">
                <FiPlus className="text-[28px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[200px]">
          {" "}
          <div className=" h-[28px] overflow-hidden relative z-20 ">
            <h1 className="txt text-black  uppercase text-[3.375rem] leading-[1.2] font-bold mt-[2px] ">
              Get news & Updates
            </h1>
          </div>
          <h1 className="text-[#DDDDDD] uppercase text-[3.375rem] leading-[1.2] font-bold ">
            Get news & Updates
          </h1>
          <div className="flex justify-center mt-20 relative z-[10]">
            <div className="px-[7.5rem] py-[4rem] bg-[#0a0c0a]">
              <input
                className="w-[540px] border-b border-[#F4FAFC]/20 bg-transparent placeholder:text-[#858685] font-roboto_mono pb-4 text-[18px] outline-none font-medium"
                placeholder="example@email.com"
              />
              <div className="w-[540px] h-[1px] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
