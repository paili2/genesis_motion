"use client";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";

import ClipPath from "@/src/clipPath/ClipPath";
import { useRef } from "react";

export default function Home() {
  const container = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const useImageY = (start: number, end: number): MotionValue => {
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["center start", "end end"],
    });
    return useTransform(scrollYProgress, [start, end], ["0px", "-1000px"]);
  };

  return (
    <div ref={bodyRef} className="w-full h-fit bg-black">
      <ClipPath></ClipPath>
      <motion.section
        ref={container}
        className="h-[600vh] relative bg-transparent"
      >
        <motion.div className="sticky top-0 h-screen">
          <motion.div
            style={{ y: useImageY(0, 0.2) }}
            className="absolute w-[300px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <img className="object-cover" src="img1.jpg" alt="" />
          </motion.div>
          <motion.div
            style={{ y: useImageY(0.2, 0.4) }}
            className="absolute w-[300px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-9"
          >
            <img src="img2.jpg" alt="" />
          </motion.div>
          <motion.div
            style={{ y: useImageY(0.4, 0.6) }}
            className="absolute w-[300px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-8"
          >
            <img src="img3.jpg" alt="" />
          </motion.div>
          <motion.div
            style={{ y: useImageY(0.6, 0.8) }}
            className="absolute w-[300px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-7"
          >
            <img src="img4.jpg" alt="" />
          </motion.div>
          <motion.div
            style={{ y: useImageY(0.8, 1) }}
            className="absolute w-[300px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-6"
          >
            <img src="img5.jpg" alt="" />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
