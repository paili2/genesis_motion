"use client";

import { motion, MotionValue } from "motion/react";

type clipPathTextProps = {
  useClipPath: MotionValue<string>;
  text: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const ClipPathText = ({
  useClipPath,
  text,
  top,
  bottom,
  left,
  right,
}: clipPathTextProps) => {
  return (
    <motion.h1
      className="fixed text-center text-5xl text-white"
      style={{
        clipPath: useClipPath,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
      }}
    >
      {text}
    </motion.h1>
  );
};

export default ClipPathText;
