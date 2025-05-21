"use client";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";

import ClipPath from "@/src/clipPath/ClipPath";
import { useRef } from "react";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const imgContainer = useRef<HTMLDivElement>(null);

  const y = (start: number, end: number): MotionValue => {
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["center start", "end end"],
    });
    return useTransform(scrollYProgress, [start, end], ["0px", "-1000px"]);
  };

  const useImageY = (start: number, end: number): MotionValue => {
    const { scrollYProgress } = useScroll({
      target: imgContainer,
      offset: ["center start", "end end"],
    });
    return useTransform(scrollYProgress, [start, end], ["0px", "-1000px"]);
  };

  return (
    <div ref={container} className="w-full h-fit bg-black relative">
      <ClipPath></ClipPath>
      <motion.section className="h-[600vh] bg-transparent sticky top-0 right-0 left-0">
        <motion.div ref={imgContainer} className="top-0 h-screen relative">
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
