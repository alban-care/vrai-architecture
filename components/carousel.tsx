import { useEffect, useState } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";

const autoplay_interval = 5000;

const animation = {
  initial: { opacity: 0, scale: 1.05, filter: "blur(1em)" },
  animate: {
    opacity: 1,
    scale: 1.1,
    filter: "blur(0px)",
    transition: {
      opacity: { duration: 0.5, ease: "easeInOut" },
      filter: { duration: 0.5, ease: "easeInOut" },
      scale: { duration: 3, ease: "easeInOut" },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(1em)",
    transition: {
      opacity: { duration: 0.5, ease: "easeInOut" },
      filter: { duration: 0.5, ease: "easeInOut" },
      scale: { duration: 0.5, ease: "easeInOut" },
    },
  },
};

type CarouselProps = {
  children: React.ReactElement[] | React.ReactElement;
  initialIndex?: number;
};

export function Carousel({ children, initialIndex = 0 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  /* Ensure children is an array */
  if (!Array.isArray(children)) children = [children];

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  useEffect(() => {
    const interval = setInterval(next, autoplay_interval);
    return () => clearInterval(interval);
  }, [children.length]);

  return (
    <div className="relative w-full h-full top-0 left-0 flex flex-col justify-center items-center">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>
          {children.map((child, index) =>
            index === currentIndex ? (
              <motion.div
                key={index}
                {...animation}
                className="absolute w-full h-full flex justify-center items-center"
              >
                {child}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
