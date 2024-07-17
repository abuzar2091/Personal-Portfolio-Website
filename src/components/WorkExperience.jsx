"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import workExperience from "../data/work_experience.json";

function WorkExperience() {
  
  const workExperiences = workExperience.workExperiences;
  return (
    <div className=" bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className=" text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center mb-8">
            WorkExperience
          </h1>
        </div>

        <div className="w-full mt-10">
          <HoverEffect
            items={workExperiences.map((company) => ({
              name: company.name,
              role: company.role,
              description: company.description,
              url: company.companyLogo,
              link: "/",
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
