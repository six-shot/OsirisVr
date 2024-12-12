import Image from 'next/image';
import React from 'react'

export default function Virtual() {
  return (
    <div className="relative  w-full h-full flex flex-col  max-w-[1440px] mx-auto pb-[100px]">
      <span className="absolute top-0 left-0 w-[1px] h-[100vh] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
      <span className="absolute bottom-[6%] left-0 w-[2px] rounded-full h-[55px] bg-[#FCFF80ed] blur-[2px]"></span>
      <span className="absolute bottom-[20%] right-0 w-[2px] rounded-full h-[55px] bg-[#FCFF80ed] blur-[2px]"></span>
      <span className="absolute top-0 right-0 w-[1px] h-[100vh] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
      <span className="absolute z-1 top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
      <span className="absolute z-1 top-[19%] left-1/2 transform -translate-x-1/2 w-[2px] rounded-full h-[55px] bg-[#FCFF80ed] blur-[2px]"></span>

      <div className="grid grid-cols-2  items-center">
        <div className="col-span-1">
          <div className=" font-[family-name:var(--font-neue)] px-[74px]">
            <div className=" h-[28px] overflow-hidden relative z-20 ">
              <h1 className="txt text-black  uppercase text-[3.375rem] leading-[1.2] font-bold mt-[2px] ">
                DISCOVER THE
              </h1>
            </div>
            <h1 className="text-[#DDDDDD] uppercase text-[3.375rem] leading-[1.2] font-bold ">
              DISCOVER THE
            </h1>
            <h1 className="text-[#DDDDDD] uppercase text-[3.375rem] leading-[1.2] font-bold ">
              Possibilities
            </h1>
            <h1 className="text-[#DDDDDD] uppercase text-[3.375rem] leading-[1.2] font-bold ">
              of Vr
            </h1>
          </div>
          <div className="px-10 mt-20">
            <p className="w-[400px] text-white/70 font-[family-name:var(--font-roboto-mono)]  mb-[100px] ">
              Discover new games and entertainment every day! Put yourself at
              the center of an extraordinary gaming universe powered by the VR
            </p>
            <div className="relative w-[540px]">
              <Image src="/vr.webp" width={540} height={360} alt="vr" />
              <div className="absolute -bottom-4 right-[20px]">
                <div className="relative w-[145px]  ">
                  <button className="btn text-sm uppercase h-[38px] w-[145px] text-white bg-[#142824]  font-[family-name:var(--font-roboto-mono)]">
                    Beat Staber
                  </button>
                  <div className="cornerrr-1" />
                  <div className="cornerrr-2" />
                  <div className="cornerrr-3" />
                  <div className="cornerrr-4" />
                  <div className="cornerrr-5" />
                  <div className="cornerrr-6" />
                  <div className="cornerrr-7" />
                  <div className="cornerrr-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 px-[100px]">
          <div className='relative w-[429px]'>
            <Image src="/vr1.webp" width={420} height={532} alt="vr" />
            <div className="absolute -bottom-5 right-[40px]">
              <div className="relative w-[145px]  ">
                <button className="btn text-sm uppercase h-[38px] w-[145px] text-white bg-[#142824]  font-[family-name:var(--font-roboto-mono)]">
                  Echo Arena
                </button>
                <div className="cornerrr-1" />
                <div className="cornerrr-2" />
                <div className="cornerrr-3" />
                <div className="cornerrr-4" />
                <div className="cornerrr-5" />
                <div className="cornerrr-6" />
                <div className="cornerrr-7" />
                <div className="cornerrr-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
