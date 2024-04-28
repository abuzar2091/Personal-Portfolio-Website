"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";
import CircularProgressBar from "./CircularProgressBar";
import LinearProgress from "./LinearProgress";

const content = [
  {
    title: "HTML",
    description: (
      <div className="h-[200px]">
        <CircularProgressBar percentage={80} />
      </div>
    ),

    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/html.png"
          width={150}
          height={150}
          className="object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "TAILWIND CSS",
    description: (
      <div className="h-[200px]">
        <CircularProgressBar percentage={80} />
      </div>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/tailwindcss.png"
          width={150}
          height={150}
          className="object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "JAVASCRIPT",
    description: (
      <div className="h-[200px]">
        <CircularProgressBar percentage={90} />
      </div>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/javascript.png"
          width={150}
          height={150}
          className="object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "REACT JS",
    description: (
      <div className="h-[200px]">
        <CircularProgressBar percentage={70} />
      </div>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/reactjs.png"
          width={150}
          height={150}
          className="object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "NEXT JS",
    description: (
      <div className="h-[200px]">
        <CircularProgressBar percentage={70} />
      </div>
    ),
    content: (
      <div className="flex flex-col h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] items-center justify-center text-white">
        <Image
          src="/nextjs.png"
          width={100}
          height={80}
          className="object-cover"
          alt="linear board demo"
        />
        <Image
          src="/nextjs2.png"
          width={100}
          height={100}
          className="object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "CSS",
    description: (
      <div className="h-[200px]">
        <CircularProgressBar percentage={70} />
      </div>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/css.png"
          width={150}
          height={150}
          className="object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function MySkills() {
  const [activeCard, setActiveCard] = React.useState(0);
  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className=" flex flex-col justify-center relative space-x-10 rounded-md p-10"
    >
      <div className="">
        <h1 className=" text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center mb-8">
          My Skills
        </h1>
        <p className="mt-20 md:mt-0   bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center mb-8">
          The skills I have learned so far are given below.
        </p>
        <StickyScroll content={content} />

        <div className="flex flex-col">
          <h1 className="mt-10  text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center mb-8">
            More Skills
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gradient-to-br from-teal-500 to-cyan-500  rounded-md p-4 w-[30%]">
              <p>MongoDB</p>
              <LinearProgress percentage={70} />
           
            </div>

            <div className=" relative bg-gradient-to-br from-teal-500 to-cyan-500  rounded-md p-4 w-[30%]">
              <p>TypeScript</p>
              <LinearProgress percentage={80} />
           
            </div>
            <div className=" relative bg-gradient-to-br from-teal-500 to-cyan-500  rounded-md p-4 w-[30%]">
              <p>Java</p>
              <LinearProgress percentage={50} />
             
            </div>

            <div className=" relative bg-gradient-to-br from-teal-500 to-cyan-500  rounded-md p-4 w-[30%]">
              <p>C++</p>
              <LinearProgress percentage={80} />
             
            </div>
            <div className="  bg-gradient-to-br from-teal-500 to-cyan-500  rounded-md p-4 w-[30%]">
              <p>OOPs</p>
            </div>
            <div className=" bg-gradient-to-br from-teal-500 to-cyan-500  rounded-md p-4 w-[30%]">
              <p>Data Structure And Algorithms</p>
            </div>
            <div className="  bg-gradient-to-br from-teal-500 to-cyan-500 rounded-md p-4 w-[30%]">
              <p>Git and GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
