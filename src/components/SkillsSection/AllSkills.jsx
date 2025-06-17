import React from "react";
import {
  FaHtml5,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma,
  FaPython,
  FaPhp,
  FaLaravel,
  FaJava,
  FaRust,
} from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkills from "./SingleSkills";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: SiCss3 },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "React", icon: FaReact },
  { skill: "Rust", icon: FaRust },
  { skill: "MongoDB", icon: FaDatabase },
  { skill: "Git", icon: FaGitAlt },
  { skill: "GitHub", icon: FaGithub },
  { skill: "Tailwind", icon: RiTailwindCssFill },
  { skill: "Bootstrap", icon: FaBootstrap },
  { skill: "Figma", icon: FaFigma },
  { skill: "Python", icon: FaPython },
  { skill: "PHP", icon: FaPhp },
  { skill: "Laravel", icon: FaLaravel },
  { skill: "Java", icon: FaJava },
];

const AllSkills = () => {
  return (
    <div className="overflow-visible w-full mt-[350px] space-y-5">
      {/* Baris 1: ke kiri */}
      <div className="flex whitespace-nowrap animate-scrollLeft gap-8 px-4 py-6">
        {[...skills, ...skills].map((item, index) => (
          <div key={`top-${index}`} className="inline-block overflow-visible">
            <SingleSkills text={item.skill} imgSvg={<item.icon />} />
          </div>
        ))}
      </div>

      {/* Baris 2: ke kanan */}
      <div className="flex whitespace-nowrap animate-scrollRight gap-8 px-4 py-6">
        {[...skills, ...skills].map((item, index) => (
          <div
            key={`bottom-${index}`}
            className="inline-block overflow-visible"
          >
            <SingleSkills text={item.skill} imgSvg={<item.icon />} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
