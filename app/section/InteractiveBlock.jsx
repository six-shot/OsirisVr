"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Testimonial from "./test";
import ImageSequencePage from "./ImageSequence";

export default function InteractiveBlocks() {
  const blockContainerRef = useRef(null);
  const targetRef = useRef(null);
  const blockSize = 40;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    // Initialize blocks
    const blockContainer = blockContainerRef.current;
    if (!blockContainer) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / blockSize);
    const numRows = Math.ceil(screenHeight / blockSize);
    const numBlocks = numCols * numRows;

    // Create blocks
    for (let i = 0; i < numBlocks; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.dataset.index = i;
      block.addEventListener("mousemove", highlightRandomNeighbors);
      blockContainer.appendChild(block);
    }

    function highlightRandomNeighbors(event) {
      const block = event.target;
      const index = parseInt(block.dataset.index);
      const neighbors = [
        index - 1,
        index + 1,
        index - numCols,
        index + numCols,
        index - numCols - 1,
        index - numCols + 1,
        index + numCols - 1,
        index + numCols + 1,
      ].filter(
        (i) =>
          i >= 0 &&
          i < numBlocks &&
          Math.abs((i % numCols) - (index % numCols)) <= 1
      );

      block.classList.add("highlight");
      setTimeout(() => {
        block.classList.remove("highlight");
      }, 500);

      shuffleArray(neighbors)
        .slice(0, 1)
        .forEach((nIndex) => {
          const neighbor = blockContainer.children[nIndex];
          if (neighbor) {
            neighbor.classList.add("highlight");
            setTimeout(() => {
              neighbor.classList.remove("highlight");
            }, 500);
          }
        });
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    return () => {
      blockContainer.innerHTML = "";
    };
  }, []);

  // Get current scroll progress immediately when component mounts
  useEffect(() => {
    const updateScroll = () => {
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const scrollPercentage = Math.max(
          0,
          Math.min(1, -rect.top / (rect.height - window.innerHeight))
        );
        scrollYProgress.set(scrollPercentage);
      }
    };

    // Update immediately
    updateScroll();

    // Also listen for scroll events
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      ref={targetRef}
      className="relative h-[170vh]  "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className=" ">
        <div className="fixed top-1/2 transform -translate-y-1/2 h-[600px] w-full ">
          <div id="blocks" ref={blockContainerRef}></div>
          <div className="w-full relative flex items-center max-w-[1440px] mx-auto md:px-[240px] px-4 h-full">
            <div className="w-[50%] content h-full relative flex items-center text-white">
              <div className="sticky text-white">
                <h4 className="text-[#ddd] font-extralight font-[family-name:var(--font-roboto-mono)] md:text-[1.5rem] text-[1rem] w-[400px]">
                  Sit back and immerse yourself with a range of stunning virtual
                  reality experiences, from scaling Mount Everest to exploring
                  the ocean floor.{" "}
                </h4>
              </div>
            </div>
            <div className="w-[50%] h-[600px]">
              <ImageSequencePage progress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
