import React from 'react'

export default function Building() {
  return (
    <div className="md:h-[120vh] h-full md:pb-0 pb-[100px] relative  w-full border-b border-[#F4FAFC]/20">
      <video
        className="md:hidden flex w-[425px] h-[425px] object-cover  z-10"
        src={"/building.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="md:flex hidden absolute left-0 top-1/2 transform -translate-y-1/2 md:w-[700px] md:h-[550px] w-[425px] h-[425px] object-cover  z-10"
        src={"/building.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="h-full max-w-[1440px] mx-auto  relative ">
        <span className="absolute top-0 left-0 w-[1px] h-[100vh] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
        <span className="absolute top-0 right-0 w-[1px] h-[100vh] bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-[#F4FAFC]/20 shadow-[0px_4px_24px_#F4FAFC]"></span>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center h-full md:px-0 px-4">
          <div className="col-span-1 relative"></div>
          <div className="col-span-1 md:pl-[85px] ">
            <div className="flex flex-col font-[family-name:var(--font-neue)]">
              <div className=" h-[28px] overflow-hidden relative z-20 ">
                <h1 className="txt  uppercase md:text-[3.375rem] text-[2rem] leading-[1.2] font-bold mt-[2px] ">
                  Building your
                </h1>
              </div>
              <h1 className="text-[#DDDDDD] uppercase md:text-[3.375rem] text-[2rem] leading-[1.2] font-bold ">
                Building your <br /> World Now
              </h1>
            </div>
            <div className="mt-20 flex flex-col gap-4 font-[family-name:var(--font-roboto-mono)] text-[#DDDDDD]">
              <div className="flex  md:gap-12 gap-6 items-start">
                <div className="flex gap-2 flex-col items-center">
                  <h5>01</h5>
                  <div className="w-[2px] h-[150px] bg-line"></div>
                </div>
                <div className="flex flex-col gap-4">
                  <h5>Play Together</h5>
                  <p className="md:w-[396px] w-full text-[#dddddd]">
                    Makes it easy to meet friends in VR. Share your adventures
                    with friends and let them join the game as player two
                  </p>
                </div>
              </div>
              <div className="flex gap-6 md:gap-12 items-start">
                <div className="flex gap-2 flex-col items-center">
                  <h5>02</h5>
                  <div className="w-[2px] h-[50px] bg-white/50"></div>
                </div>
                <div className="flex flex-col gap-4">
                  <h5>Exercise and beat yout own records</h5>
                </div>
              </div>
              <div className="flex  md:gap-12 gap-6 items-start">
                <div className="flex gap-2 flex-col items-center">
                  <h5>03</h5>
                  <div className="w-[2px] h-[50px] bg-white/50"></div>
                </div>
                <div className="flex flex-col gap-4">
                  <h5>Explore The World</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
