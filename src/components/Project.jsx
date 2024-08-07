"use client";
import Link from "next/link";
import React from "react";
import projectData from "../data/project_info.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

function Project() {
  const featuredProjects = projectData.projects;

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base  text-teal-600 font-semibold tracking-wide uppercase">
         Learn With Project
        </h2>
        {/* <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        FEATURED PROJECT
        </p> */}
        <h1 className=" text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center mb-8">
        FEATURED PROJECT
        </h1>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
          {featuredProjects.map((project) => (
            <div key={project.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <Image
           src={project.image}
          alt="project"
          height="600"
          width="600"
          className="object-contain"
        />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {project.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {project.description}
                  </p>
                  <Link href={`${project.githubLink}`}>View Project</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}

export default Project;
