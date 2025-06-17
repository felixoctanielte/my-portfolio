import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variant";

const experiences = [
  {
    job: "Frontend Developer",
    project: "Website Pariwisata",
    date: "2023",
    responsibilities: [
      "Developed responsive web applications using React and Tailwind CSS.",
      "Collaborated with designers to implement user-friendly interfaces.",
      "Optimized web performance and ensured cross-browser compatibility.",
    ],
  },
  {
    job: "Full Stack Developer",
    project: "event halloween",
    date: "2023",
    responsibilities: [
      "Designed and developed a full-stack web application using Php, JavaScript, and MongoDB.",
      "Implemented RESTful APIs for data retrieval and manipulation.",
      "Integrated third-party services for payment processing and user authentication.",
    ],
  },
  {
    job: "Project Manager",
    project: "Website Starlight 2025",
    date: "2025 - Present",
    responsibilities: [
      "Led a team of developers to create a dynamic website for Starlight 2025.",
      "Coordinated project timelines and ensured timely delivery of milestones.",
      "Managed client communications and gathered requirements for project specifications.",
    ],
  },
];

const AllExperience = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="flex md:flex-row sm:flex-col items-center justify-between"
    >
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
            ) : (
              ""
            )}
          </>
        );
      })}
    </motion.div>
  );
};

export default AllExperience;
