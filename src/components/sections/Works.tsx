import React from "react";
import Tilt from "react-parallax-tilt";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import videoDemo from "../../assets/videoDemo.png"; 

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  videoDemoLink,
}) => {
  return (
    <div className="w-full max-w-[300px] mx-auto">
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="peach-gradient shadow-card w-full rounded-2xl p-[1px]">
          <div className="bg-[#1a1a1a]/80 backdrop-blur-sm w-full rounded-2xl p-5">
            <div className="relative h-[230px] w-full">
              <img
                src={image}
                alt={name}
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="card-img_hover absolute inset-0 m-3 flex flex-col justify-start items-end">
                <div
                  onClick={() => window.open(sourceCodeLink, "_blank")}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
                {videoDemoLink && (
                  <div
                    onClick={() => window.open(videoDemoLink, "_blank")}
                    className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full mt-2"
                  >
                    <img
                      src={videoDemo}
                      alt="video demo"
                      className="h-1/2 w-1/2 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-[24px] font-bold text-white">{name}</h3>
              <p className="text-secondary mt-2 text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <p className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]">
          {config.sections.works.content}
        </p>
      </div>

      {/* 1col on mobile (centered), 2 on sm, 3 on lg */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center sm:justify-items-stretch gap-x-8 gap-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
