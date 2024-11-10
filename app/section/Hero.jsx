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
    
    </div>
  );
}
