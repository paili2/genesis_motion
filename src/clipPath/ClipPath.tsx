"use client";

import ClipPathText from "@/src/clipPath/ClipPathText";
import { useScroll, useTransform, motion } from "motion/react";

const ClipPath = () => {
  const useClipPath = (start: number, end: number) => {
    const { scrollYProgress } = useScroll();
    return useTransform(
      scrollYProgress,
      [start, end],
      ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
    );
  };

  return (
    <div className="h-[300vh] bg-black relative">
      <ClipPathText
        text={"다양한 편의 시설과"}
        useClipPath={useClipPath(0, 0.2)}
        top={"200px"}
        left={"200px"}
      ></ClipPathText>
      <ClipPathText
        text={"맞춤 공간에서"}
        useClipPath={useClipPath(0.2, 0.4)}
        top={"270px"}
        left={"200px"}
      ></ClipPathText>
      <ClipPathText
        text={"제네시스의 감성을"}
        useClipPath={useClipPath(0.4, 0.6)}
        bottom={"270px"}
        right={"200px"}
      ></ClipPathText>
      <ClipPathText
        text={"경험하세요"}
        useClipPath={useClipPath(0.6, 0.8)}
        bottom={"200px"}
        right={"200px"}
      ></ClipPathText>
    </div>
  );
};

export default ClipPath;
