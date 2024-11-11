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
      <div className="absolute inset-0 flex justify-start  h-[100vh] items-center z-[20]  font-[family-name:var(--font-neue)]">
        <div className="flex flex-col  mt-[150px] px-[4%]">
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
  );
}
