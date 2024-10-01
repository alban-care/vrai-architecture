"use client";

import { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { appKeywords } from "@/lib/config";
import { cn } from "@/lib/utils";

interface PreloaderProps {
  color?: string;
  bgColor?: string;
  size?: string;
}

const DELAY_INIT = 1000;
const DELAY_SUB = 150;
const defaultWords = appKeywords || [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

const animationConfig = {
  opacity: {
    initial: { opacity: 0 },
    enter: {
      opacity: 0.75,
      transition: { duration: 1, delay: 0.2 },
    },
  },
  slideUp: {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  },
  curve: (initPath: string, targetPath: string) => ({
    initial: {
      d: initPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  }),
};

export function Preloader({
  color = "text-white",
  bgColor = "bg-white",
  size = "text-4xl",
}: PreloaderProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  /* Effect to manage the end of the preloading after 2 seconds */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  /* Effect to update the screen dimensions */
  useEffect(() => {
    const updateDimensions = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  /* Effect to scroll the words at regular intervals */
  useEffect(() => {
    if (index >= defaultWords.length - 1) return;

    const delay = index === 0 ? DELAY_INIT : DELAY_SUB;
    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [index]);

  /* Memo to avoid unnecessary calculations of SVG paths */
  const initialPath = useMemo(() => {
    return `M0 0 L${dimension.width} 0 L${dimension.width} ${
      dimension.height
    } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
      dimension.height
    } L0 0`;
  }, [dimension]);

  const targetPath = useMemo(() => {
    return `M0 0 L${dimension.width} 0 L${dimension.width} ${
      dimension.height
    } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;
  }, [dimension]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={animationConfig.slideUp}
          initial="initial"
          exit="exit"
          className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center z-50"
        >
          {dimension.width > 0 && (
            <div className="w-full h-full flex justify-center items-center">
              <motion.p
                className={cn("flex items-center absolute z-10", color, size)}
                variants={animationConfig.opacity}
                initial="initial"
                animate="enter"
              >
                {defaultWords[index]}
              </motion.p>
              <svg
                className={cn(
                  "absolute top-0 w-full h-[calc(100%+300px)]",
                  bgColor
                )}
              >
                <motion.path
                  variants={animationConfig.curve(initialPath, targetPath)}
                  initial="initial"
                  exit="exit"
                />
              </svg>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
