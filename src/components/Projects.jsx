import React from "react";
import { LuExternalLink } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { projectOptions } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";

const Projects = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {projectOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="border border-neutral-700 shadow-md shadow-orange-50 rounded-lg hover:-translate-y-1">
              
                <p className="text-2xl p-4 bg-gradient-to-r from-orange-800 to-red-500 text-transparent bg-clip-text">
                  {option.title}</p>
                <p className="bg-neutral-900 rounded-lg  text-sm font-thin pt-0 mt-0 p-1">
                  {option.text}</p>

                <NavLink target="_blank" to={option.url}
                className="inline-flex justify-center items-center text-center font-medium w-full h-12 p-5 mt-2 text-xl hover:bg-orange-500 hover:text-black border border-orange-900 rounded-lg transition duration-200 tracking-wide hover:-translate-y-1 cursor-pointer">
                 Live Demo <LuExternalLink className="ml-4" /> </NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
