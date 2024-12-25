"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Opacity and scale transformations for each text
  const text1Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.25],
    [0, 1, 0]
  );
  const text1Scale = useTransform(scrollYProgress, [0.1, 0.2], [0.8, 1]);

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.45],
    [0, 1, 0]
  );
  const text2Scale = useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1]);

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.65],
    [0, 1, 0]
  );
  const text3Scale = useTransform(scrollYProgress, [0.5, 0.6], [0.8, 1]);

  return (
    <div ref={targetRef} className="relative z-[]">
      <div className="sticky top-0 text-white">
        {/* Text 1 */}
        <motion.div
          style={{
            opacity: text1Opacity,
            scale: text1Scale,
            position: "absolute", // Overlap all texts in the same position
          }}
          className="text-[#ddd] font-extralight font-[family-name:var(--font-roboto-mono)] text-[1.5rem] w-[400px]"
        >
          Sit back and immerse yourself with a range of stunning virtual reality
          experiences, from scaling Mount Everest to exploring the ocean floor.{" "}
        </motion.div>

        {/* Text 2 */}
        <motion.div
          style={{
            opacity: text2Opacity,
            scale: text2Scale,
            position: "absolute", // Overlap all texts in the same position
          }}
          className="text-[#ddd] font-extralight font-[family-name:var(--font-roboto-mono)] text-[1.5rem] w-[400px]"
        >
          Sit back and immerse yourself with a range of stunning virtual reality
          experiences, from scaling Mount Everest to exploring the ocean floor.{" "}
        </motion.div>

        {/* Text 3 */}
        <motion.div
          style={{
            opacity: text3Opacity,
            scale: text3Scale,
            position: "absolute", // Overlap all texts in the same position
          }}
          className="text-[#ddd] font-extralight font-[family-name:var(--font-roboto-mono)] text-[1.5rem] w-[400px]"
        >
          Sit back and immerse yourself with a range of stunning virtual reality
          experiences, from scaling Mount Everest to exploring the ocean floor.{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
