"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const animationRunning = useRef(false);

  useEffect(() => {
    const wordAnimationDuration = 1.5;
    const wordAnimationDelay = 0.1;
    const resetDelay = 1.5;

    const runAnimation = () => {
      if (animationRunning.current) return;
      animationRunning.current = true;
      animate(
        "span",
        { opacity: [0, 1], scale: [1, 1.5, 1] },
        { duration: wordAnimationDuration, delay: stagger(wordAnimationDelay) }
      ).then(() => {
        setTimeout(() => {
          animate("span", { opacity: 0, scale: 1 }, { duration: 0 });
          animationRunning.current = false;
          runAnimation();
        }, resetDelay * 1000);
      });
    };

    runAnimation();
    return () => {
      animationRunning.current = false;
    };
  }, [animate, scope]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span key={word + idx} className="opacity-0">
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return <div className={cn(className)}>{renderWords()}</div>;
};
