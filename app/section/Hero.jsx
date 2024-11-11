import React from "react";
import Navbar from "../global/Navbar";

export default function Hero() {
  return (
    <div className="overflow-hidden relative w-full h-[100vh] ">
      <div className="fixed right-0 top-0  h-full z-10">
        <video
          className="w-full h-full object-cover"
          src={"/hero.mp4"}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="absolute top-0 left-0 w-full z-[50]">
        <Navbar />
      </div>
      <div className="">
        <div className="absolute inset-0 flex justify-start  h-[100vh] w-full items-center z-[20] font-[family-name:var(--font-neue)] px-[5.5%]">
          <div className="relative max-w-7xl mx-auto w-full h-screen ">
            <span className="absolute top-0 left-0 w-[1px] h-[100vh] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
            <span className="absolute top-0 right-0 w-[1px] h-[100vh] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
            <div className="flex flex-col  mt-[200px] px-[5%]">
              <div className="relative">
                <div className=" h-[50px] overflow-hidden absolute bottom-[43px] -z-[60] ">
                  <h1 className="txt1  uppercase text-[4.5rem] leading-[1.2] font-bold mt-[12px] ">
                    create your
                  </h1>
                </div>
                <div className=" h-[50px] overflow-hidden relative z-20 ">
                  <h1 className="txt  uppercase text-[4.5rem] leading-[1.2] font-bold mt-[2px] ">
                    create your
                  </h1>
                </div>
              </div>
              <h1 className="text-[#DDDDDD] uppercase text-[4.5rem] leading-[1.2] font-bold ">
                create your <br /> own vr <br /> reality
              </h1>

              <p className="font-[family-name:var(--font-roboto-mono)] w-[328px] ml-[3rem] text-[1rem] font-light text-[#DDDDDD]  mt-[50px]">
                Immersee yourself in increadinle virtual reality and expetieces
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
