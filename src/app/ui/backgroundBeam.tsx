"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn"; // Ensure you have this utility function

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    rotation: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
    >
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute inset-0 opacity-20"
          style={{
            rotate: beam.rotation,
            scale: beam.scale,
            opacity: beam.opacity,
          }}
          animate={{
            opacity: [beam.opacity, beam.opacity * 1.5, beam.opacity],
            scale: [beam.scale, beam.scale * 1.2, beam.scale],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
};