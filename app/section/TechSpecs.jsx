"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
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
          <div className="md:px-12 px-4">
            {" "}
            <div className=" h-[28px] overflow-hidden relative z-20 ">
              <h1 className="txt text-black  uppercase md:text-[3.375rem] text-[2rem] leading-[1.2] font-bold mt-[2px] ">
                Tech Specs
              </h1>
            </div>
            <h1 className="text-[#DDDDDD] uppercase md:text-[3.375rem] text-[2rem] leading-[1.2] font-bold ">
              Tech Specs
            </h1>
          </div>
          <div className="text-white  relative  mt-[100px]  z-10 ">
            <div className="w-full h-[112px] border-t border-b border-[#F4FAFC]/20  flex items-center md:px-12 px-4  ">
              <h4 className="text-[20px] font-[family-name:var(--font-roboto-mono)] bg-black w-full h-full flex justify-between items-center ">
                Specifications
              </h4>
              <div className="w-[54px] md:h-[52px] h-[54px] rounded-full border border-[#F4FAFC]/20 flex items-center justify-center">
                <FiPlus className="text-[28px]" />
              </div>
            </div>
          </div>
          <div className="text-white  relative z-[20]">
            <div className="w-full h-[112px] border-t border-b border-[#F4FAFC]/20  flex justify-between items-center md:px-12 px-4">
              <h4 className="text-[20px] font-[family-name:var(--font-roboto-mono)] bg-black w-full h-full flex items-center  ">
                Accessories
              </h4>
              <div className="w-[54px] md:h-[52px] h-[54px] rounded-full border border-[#F4FAFC]/20 flex items-center justify-center">
                <FiPlus className="text-[28px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[200px]  ">
          {" "}
          <div className="text-center font-[family-name:var(--font-neue)">
            <div className=" h-[28px] overflow-hidden relative z-20 ">
              <h1 className="txt text-black  uppercase md:text-[3.375rem] text-[2rem] leading-[1.2] font-bold mt-[2px] ">
                Get news & Updates
              </h1>
            </div>
            <h1 className="text-[#DDDDDD] uppercase md:text-[3.375rem] text-[2rem] leading-[1.2] font-bold ">
              Get news & Updates
            </h1>
          </div>
          <div className="flex justify-center mt-20 relative z-[10]">
            <div className="md:px-[7.5rem] py-[4rem] bg-[#0a0c0a] flex items-center">
              <div>
                <div className="flex justify-between">
                  <input
                    className="w-[540px]  bg-transparent placeholder:text-[#858685] font-[family-name:var(--font-roboto-mono)] pb-4 text-[18px] outline-none font-medium"
                    placeholder="example@email.com"
                  />
                  <div className="w-[42px] h-[42px] flex justify-center items-center rounded-full border border-[#67e9cb]">
                    <Image
                      src="arrowright.svg"
                      alt="arrow-right"
                      width={20}
                      height={14}
                    />
                  </div>
                </div>

                <div className="md:w-[582px] w-full h-[1px] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC] mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
