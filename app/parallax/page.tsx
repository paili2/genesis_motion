"use client";

import ClipPath from "@/src/clipPath/ClipPath";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { useRef } from "react";

const Page = () => {
  const container = useRef<HTMLDivElement>(null);
  const imgContainer = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const useImageY = (start: number, end: number): MotionValue => {
    const { scrollYProgress } = useScroll({
      target: imgContainer,
      offset: ["start start", "end end"],
    });
    return useTransform(scrollYProgress, [start, end], ["0px", "-1000px"]);
  };

  return (
    <div ref={container} className="w-full h-fit relative">
      <motion.div className="sticky top-0 left-0 right-0 w-full h-[800vh] bg-amber-300 z-0 ">
        <ClipPath></ClipPath>
      </motion.div>
      <motion.div
        ref={imgContainer}
        className="sticky top-0 left-0 right-0 w-full h-[600vh] bg-transparent z-1"
      >
        <motion.div
          style={{ y: useImageY(0.5, 1) }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
        >
          <img className="object-cover" src="img1.jpg" alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
