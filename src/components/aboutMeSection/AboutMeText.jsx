import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left  sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className="text-white">Hello, my name is Felix. I am a 2nd-year Informatics student at Multimedia Nusantara University with a strong interest in data analysis and artificial intelligence. With a background in programming and algorithmic thinking, I focus on developing solutions that are not only functional but also intelligent and adaptable to real-world needs. For me, AI is not just a technology, but a transformative tool that reshapes how we understand, process, and utilize information efficiently in this ever-evolving digital era.</p>
        <button className="border border-orange rounded-full  py-2 px-4 text-lg flex  items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white  hover:text-cyan">My Projects</button>
    </div>
  )
}

export default AboutMeText;