"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Testimonial from "./test";

export default function InteractiveBlocks() {
  const blockContainerRef = useRef(null);
  const blockSize = 40;

  useEffect(() => {
    const blockContainer = blockContainerRef.current;
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

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

   const text1Opacity = useTransform(
     scrollYProgress,
     [0, 0.32, 0.33], // Very quick fade at exactly 33%
     [1, 1, 0]
   );

   const text2Opacity = useTransform(
     scrollYProgress,
     [0.32, 0.33, 0.39, 0.40], // Instant appear at 33%, gone at 66%
     [0, 1,1,  0]
   );

   const text3Opacity = useTransform(
     scrollYProgress,
     [0.39, 0.40, 1], // Instant appear at 66%
     [0, 1, 1]
   );
  return (
    <div
      className="relative h-[400vh] "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-1/2 transform -translate-y-1/2 h-[600px] w-full ">
        <div id="blocks" ref={blockContainerRef}></div>
        <div className="w-full  relative flex items-center max-w-[1440px] mx-auto px-[240px] ">
          <div className="content mt-[150px] w-full h-full relative flex items-center bg-red-500 text-white ">
            <div className="sticky  text-white">
              {/* Text 1 */}
              <motion.div
                style={{
                  opacity: text1Opacity,

                  position: "absolute", // Overlap all texts in the same position
                }}
                className="text-[#ddd] font-extralight font-[family-name:var(--font-roboto-mono)] text-[1.5rem] w-[400px]"
              >
                Sit back and immerse yourself with a range of stunning virtual
                reality experiences, from scaling Mount Everest to exploring the
                ocean floor.{" "}
              </motion.div>

              {/* Text 2 */}
              <motion.div
                style={{
                  opacity: text2Opacity,

                  position: "absolute", // Overlap all texts in the same position
                }}
                className="text-[#ddd] font-extralight font-[family-name:var(--font-roboto-mono)] text-[1.5rem] w-[400px]"
              >
                Sit back and immerse yourself with a range of stunning virtual
                reality experiences, from scaling Mount Everest to exploring the
                ocean floor.{" "}
              </motion.div>

              {/* Text 3 */}
              <motion.div
                style={{
                  opacity: text3Opacity,

                  position: "absolute", // Overlap all texts in the same position
                }}
                className="text-[#ddd] font-extralight font-[family-name:var(--font-roboto-mono)] text-[1.5rem] w-[400px]"
              >
                Sit back and immerse yourself with a range of stunning virtual
                reality experiences, from scaling Mount Everest to exploring the
                ocean floor.{" "}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
