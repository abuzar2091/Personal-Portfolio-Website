import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TypewriterEffect } from "./ui/Typewriter-effect.jsx";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  const words = [
    {
      text: "And",
    },
    {
      text: "I'm",
    },
    {
      text: "a",
    },
    {
      text: "Full ",
    },
    {
      text: "Stack",
    },
    {
      text: "Web",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-teal-600",
    },
  ];
  return (
    <div id="home" className="flex w-full pt-20">
      <Spotlight className="lg:top-40 lg:left-80 left-50" fill="white" />
      <div className="flex w-full md:px-22 sm:px-16  px-5 py-32 relative z-10   justify-between">
        <div className="sm:w-[70%] w-[60%]">
          <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Hi, I am{" "}
          </p>

          <p className="mt-2 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Abuzar
          </p>

          <TypewriterEffect words={words} />

          {/* text-teal-300 */}
          <div className="flex  gap-6 sm:gap-16 mt-16">
            <Link
              href={
                "https://res.cloudinary.com/dbjhis6v2/image/upload/personal-portfolio/ko9hdc7dbemuhcxw960q.jpg"
              }
            >
              <Button
                borderRadius="1.75rem"
                duration={3000}
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200
         dark:border-slate-800 text-[17px]
         hover:opacity-60
         "
              >
                Open CV
              </Button>
            </Link>
            <Link href={"#contact-me"}>
              <Button
                borderRadius="1.75rem"
                duration={3000}
                className="bg-white dark:bg-slate-900
         text-black dark:text-white border-neutral-200
          dark:border-slate-800 text-[17px]
          hover:opacity-60"
              >
                Contact me
              </Button>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="border-4  rounded-full">
            <Image
              src="/abuzar-pic.jpg"
              height={52}
              width={52}
              alt="abuzarali"
              className="rounded-full md:h-52 md:w-52 w-40 h-32"
            />
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
