"use client";

import { useScroll, useTransform, motion } from "motion/react";

import ClipPath from "@/src/clipPath/ClipPath";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full bg-black">
      <ClipPath></ClipPath>
      <motion.section className="h-[100vh] relative bg-transparent">
        <motion.div className="absolute w-[300px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <img className="object-cover" src="img1.jpg" alt="" />
        </motion.div>
        <motion.div className="absolute w-[300px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-9">
          <img src="img2.jpg" alt="" />
        </motion.div>
        <motion.div className="absolute w-[300px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-8">
          <img src="img3.jpg" alt="" />
        </motion.div>
        <motion.div className="absolute w-[300px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-7">
          <img src="img4.jpg" alt="" />
        </motion.div>
        <motion.div className="absolute w-[300px] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-6">
          <img src="img5.jpg" alt="" />
        </motion.div>
      </motion.section>
    </div>
  );
}
