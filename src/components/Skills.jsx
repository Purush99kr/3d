import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { skill } from "../constants";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const SkillsCard = ({ skill }) => {
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff"
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        iconStyle={{ background: skill.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>

          </div>
        }
      >
        <div>
          <h3 className='text-white text-[28px] font-bold'>{skill.title}</h3>
          <br />
        </div>
      </VerticalTimelineElement>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="initial" animate="animate">
        <h2 className={`${styles.sectionHeadText} text-center`}>Philosophies</h2>
      </motion.div>

      <div className='mt-20'>
        <div className="flex flex-col">
          <VerticalTimeline>
            {skill.map((skill, index) => (
              <SkillsCard key={index} skill={skill} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
