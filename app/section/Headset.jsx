import Image from 'next/image';
import React from 'react'

export default function Headset() {
  return (
    <div className="relative  w-full h-full flex flex-col items-center max-w-[1440px] mx-auto ">
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
      <div className='relative'>
        <Image
          src="/headset.webp"
          alt="headset"
          className="relative z-[20]"
          width={500}
          height={466}
          unoptimized
        />
      </div>
    </div>
  );
}
