import React from "react";
import ProjectText from "./ProjectText";
import SingelProject from "./SingelProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variant";

const projects = [
  {
    name: "Project 1",
    year: "March 2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Project 2",
    year: "November 2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Project 3",
    year: "Desember 2025",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Project 4",
    year: "February 2025 - Present",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12]">
        {projects.map((item, index) => {
          return (
            <SingelProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
