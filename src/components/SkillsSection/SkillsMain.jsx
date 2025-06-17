import React from "react";
import SkilllText from "./SkilllText";
import AllSkills from "./AllSkills";
import AllSkillSM from "./AllSkillSM";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variant";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative oveflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkilllText />
        </motion.div>
        <div className="buttom-[50%] absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] lg:block sm:hidden">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
