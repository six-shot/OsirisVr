"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Map scroll progress to text values
  const activeText = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["Meeky", "Mouse", "Ricky", "Meeky"] // Loops back to Meeky
  );

  return (
    <div ref={targetRef} className="relative h-[200vh] bg-black">
      <div className=" text-white">
        {/* Dynamically changing text with animation */}
        <motion.div
          style={{
            opacity: 1, // Always visible
            scale: 1, // Fixed size
          }}
          className="text-6xl font-bold"
          animate={{ opacity: 1, scale: 1.2 }}
          initial={{ opacity: 0, scale: 0.8 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            opacity: { duration: 0.5, ease: "easeInOut" },
            scale: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          <motion.span key={activeText} style={{ opacity: 1 }}>
            {activeText}
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
