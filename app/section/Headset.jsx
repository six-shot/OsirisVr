import Image from "next/image";
import React from "react";

export default function Headset() {
  return (
    <div className="relative  w-full h-full flex flex-col  max-w-[1440px] mx-auto ">
      <span className="absolute top-0 left-0 w-[1px] h-[100vh] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
      <span className="absolute bottom-[6%] left-0 w-[2px] rounded-full h-[55px] bg-[#FCFF80ed] blur-[2px]"></span>
      <span className="absolute bottom-[20%] right-0 w-[2px] rounded-full h-[55px] bg-[#FCFF80ed] blur-[2px]"></span>
      <span className="absolute top-0 right-0 w-[1px] h-[100vh] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
      <span className="absolute z-1 top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
      <span className="absolute z-1 top-[19%] left-1/2 transform -translate-x-1/2 w-[2px] rounded-full h-[55px] bg-[#FCFF80ed] blur-[2px]"></span>
      <div className="mt-[200px]">
        {" "}
        <div className="text-center font-[family-name:var(--font-neue)]">
          <div className=" h-[28px] overflow-hidden relative z-20 ">
            <h1 className="txt text-black  uppercase text-[3.375rem] leading-[1.2] font-bold mt-[2px] ">
              The fully
            </h1>
          </div>
          <h1 className="text-[#DDDDDD] uppercase text-[3.375rem] leading-[1.2] font-bold ">
            The fully
          </h1>
          <h1 className="text-[#DDDDDD] uppercase text-[3.375rem] leading-[1.2] font-bold ">
            immersive
          </h1>
          <h1 className="text-[#DDDDDD] uppercase text-[3.375rem] leading-[1.2] font-bold ">
            VR headset
          </h1>
        </div>
      </div>
      <div className="relative mt-[100px]  flex justify-center items-center ">
        <Image
          src="/headset.webp"
          alt="headset"
          className="relative z-[20]"
          width={400}
          height={350}
          unoptimized
        />
        <div className="absolute left-[40px] px-[60px] top-0 text-[#dddddd]/30 font-[family-name:var(--font-roboto-mono)]">
          <div className="flex gap-5 flex-col">
            <div className="w-[56px] h-[56px] rounded-full border border-[#67e9cb]/40 flex items-center justify-center">
              <Image src="/360.svg" alt="360" width={26} height={26} />
            </div>
            <h5 className="text-[20px] ">360-degree Vision</h5>
            <p className="w-[320px] ">
              Watch as a living, breathing game world comes alive all around
              you, with a seamless field of view wherever you turn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
