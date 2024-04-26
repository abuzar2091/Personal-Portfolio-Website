import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="flex w-full pt-20">
      <Spotlight className="top-40 left-80" fill="white" />
      <div className="flex w-full p-32  relative z-10   justify-between">
        <div className="w-[70%]">
          <p className=" text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Hi, I am{" "}
          </p>
          <p className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Abuzar
          </p>
          <p className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  ">
          {/* text-teal-300 */}
           And I'm a Full Stack Web Developer
          </p>
          <div className="flex gap-16 mt-12">
          <Button
        borderRadius="1.75rem"
        duration={3000}
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[17px]"
      >
       Open CV
      </Button>
      <Button
        borderRadius="1.75rem"
        duration={3000}
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[17px]"
      >
        Contact me
      </Button>

          </div>
        </div>
        <div className="">
          <div className="border-4  rounded-full">
          <img src="/abuzar-pic.jpg" className="rounded-full h-52 w-52" />
          </div>
        </div>
      </div>
    </div>

    //     <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    //    <Spotlight
    //     className="-top-40 left-0 md:left-60 md:-top-20"
    //     fill="white"
    //   />
    //   <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
    //     <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
    //       Spotlight <br /> is the new trend.
    //     </h1>
    //     <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
    //       Spotlight effect is a great way to draw attention to a specific part
    //       of the page. Here, we are drawing the attention towards the text
    //       section of the page. I don&apos;t know why but I&apos;m running out of
    //       copy.
    //     </p>
    //   </div>
    //    </div>
  );
}

export default HeroSection;
