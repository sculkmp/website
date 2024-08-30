"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRotateProps {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
}

export default function TextRotate({
                                     words,
                                     duration = 2500,
                                     framerProps = {
                                       initial: { opacity: 0, y: -50 },
                                       animate: { opacity: 1, y: 0 },
                                       exit: { opacity: 0, y: 50 },
                                       transition: { duration: 0.25, ease: "easeOut" },
                                     },
                                     className,
                                   }: TextRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2 relative w-full">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(
            className,
            "text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text"
          )}
          {...framerProps}
          style={{ whiteSpace: 'normal', overflow: 'visible' }}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
