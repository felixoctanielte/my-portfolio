import React from "react";

const SingleSkills = ({imgSvg, text}) => {
  return (
    <div className="hover:-translate-y-10  transition-all duration-500  relative z-10">
        <div className="flex flex-col items-center gap-2 relative">
            <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-4xl border-4 border-orange"
            >{imgSvg}</div>
            <p className="text-white font-bold">{text}</p>
        </div>
        <div></div>
    </div>
  );
};

export default SingleSkills;