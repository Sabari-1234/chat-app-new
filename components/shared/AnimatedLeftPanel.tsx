"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLeftPanel } from "@/contexts/LeftPanelContext";

interface AnimatedLeftPanelProps {
  children: React.ReactNode;
  panelKey: string;
}

const AnimatedLeftPanel: React.FC<AnimatedLeftPanelProps> = ({
  children,
  panelKey,
}) => {
  const { navigationDirection } = useLeftPanel();

  const variants = {
    initial: (direction: string) => ({
      x: direction === "forward" ? "100%" : "-100%",
      opacity: 1,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === "forward" ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  return (
    <AnimatePresence initial={false} custom={navigationDirection}>
      <motion.div
        key={panelKey}
        custom={navigationDirection}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          type: "tween",
          ease: [0.25, 0.1, 0.25, 1],
          duration: 0.35,
        }}
        className="w-full h-full absolute inset-0 bg-background"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedLeftPanel;
