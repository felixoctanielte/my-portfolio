import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaRust } from "react-icons/fa6";
import SingleSkills from "./SingleSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variant";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: SiCss3,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "Rust",
    icon: FaRust,
  },
  {
    skill: "MongoDB",
    icon: FaDatabase,
  },
  {
    skill: "Git",
    icon: FaGitAlt,
  },
  {
    skill: "GitHub",
    icon: FaGithub,
  },
  {
    skill: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Bootstrap",
    icon: FaBootstrap,
  },

  {
    skill: "Figma",
    icon: FaFigma,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "PHP",
    icon: FaPhp,
  },
  {
    skill: "Laravel",
    icon: FaLaravel,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
];

const AllSkillSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillSM;
