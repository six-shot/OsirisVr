
import React from "react";
import Navbar from "../global/Navbar";

export default function Hero() {
  return (
    <div className="overflow-hidden relative w-full h-[100vh] ">
      <div className="absolute inset w-full h-full z-10 flex justify-center items-center ">
        <video
          className="w-full h-full object-cover"
          src="https://uce320bf6ee4cbcd718b94bcc045.dl.dropboxusercontent.com/cd/0/inline/CeAT075b83KrsSQ_FBjUnGzMXlajM_jnZ_Hn08OyRsBJummc73xdNqOqmV27MNiBLcno4cTsJNmUcYzTi1Coj9-KDzky2e5GxhOlbl2J8MXszTOxBIdsslxzPw0Wt2WS5NKz_O8HCMUJ7dTHC_nhf5tN/file#" // Replace with your video URL or path
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="absolute top-0 left-0 w-full z-[50]">
        <Navbar />
      </div>
    </div>
  );
}
