"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";
import { AboutMeLampEffect } from "./ui/lamp-effect";


export function AboutMe() {
  const [activeCard, setActiveCard] = React.useState(0);
  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  return (
    <motion.div id="about-me"
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="flex flex-col justify-center relative space-x-10 rounded-md p-10"
    >
      <div>
        <h1 className="mt-10 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center sm:mb-8 ">
          About me
        </h1>
        <AboutMeLampEffect />
      </div>
    </motion.div>
  );
}
