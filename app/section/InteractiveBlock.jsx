"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ImageSequencePage from "./ImageSequence";

export default function InteractiveBlocks() {
  return (
    <div className="relative">
      {/* This wrapper provides the scroll space */}
      <div className="h-[200vh]">
        {/* This is the sticky container */}
        <div className="sticky top-0 w-full h-screen flex items-center">
          <div className="w-full relative flex items-center max-w-[1440px] mx-auto md:px-[100px] px-4">
            <div className="w-[50%] h-[600px] bg-blue-500 flex items-center justify-center">
              <h2 className="text-2xl text-white">Left Content</h2>
            </div>
            <div className="w-[50%] h-[600px] relative flex items-center justify-center">
              <ImageSequencePage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
