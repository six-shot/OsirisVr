import React from 'react'

export default function Building() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-2 items-center h-full">
        <div className="col-span-1">
          <video
            className="w-[960px] h-[700px]"
            src={"/building.mp4"}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
}
