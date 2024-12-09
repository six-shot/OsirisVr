import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Experience() {
  return (
    <div className="text-[#d7d7d7] ">
      <div className=" border-t border-[#F4FAFC]/20 h-[134px] flex items-center">
        <Marquee className="mq" direction="left" speed={100}>
          <div className="flex gap-20 items-center h-full">
            <h2 className="text-[54px] font-[family-name:var(--font-neue)]">
              BLOCKBUSTER ADVENTURES
            </h2>
            <h2 className="text-[54px] font-[family-name:var(--font-neue)]">
              VR EXPERIENCES
            </h2>
            <div className="relative ">
              <button className="btn text-sm uppercase h-[44px] w-[9.62rem] text-white   font-roboto_mono border-[2px] border-[#67e9cb]/20">
                Try it now
              </button>
              <div className="cornerr-1" />
              <div className="cornerr-2" />
              <div className="cornerr-3" />
              <div className="cornerr-4" />
              <div className="cornerr-5" />
              <div className="cornerr-6" />
              <div className="cornerr-7" />
              <div className="cornerr-8" />
            </div>
          </div>
        </Marquee>
      </div>
      <Image
        src="/experience.webp"
        width={2000}
        height={800}
        unoptimized
        alt="experience"
      />
    </div>
  );
}
