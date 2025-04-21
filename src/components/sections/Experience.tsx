import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255, 218, 185, 0.3)" }}
      date={experience.date}
      iconStyle={{ 
        background: "rgba(255, 218, 185, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 218, 185, 0.2)",
        transition: "all 0.3s ease"
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      }
    >
      <div className="group relative bg-gradient-to-br from-[#1a1a1a]/40 to-[#1a1a1a]/20 backdrop-blur-lg rounded-[20px] p-8 border border-[#FFDAB9]/10 hover:border-[#FFDAB9]/20 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFDAB9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFDAB9]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        <div className="relative">
          <h3 className="text-[24px] font-bold text-white group-hover:text-[#FFDAB9] transition-colors duration-300">{experience.title}</h3>
          <p
            className="text-[#FFDAB9] text-[16px] font-semibold group-hover:translate-x-2 transition-transform duration-300"
            style={{ margin: 0 }}
          >
            {experience.companyName}
          </p>
        </div>

        <ul className="ml-5 mt-5 list-disc space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 pl-1 text-[14px] tracking-wider group-hover:translate-x-1 transition-transform duration-300"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
