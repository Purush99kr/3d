import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { profile } from "../assets";
import { fadeIn, textVariant, slideIn } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>What drives me?</h2>
      </motion.div>

      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.5] bg-black-100 p-8 rounded-2xl green-pink-gradient"
        >
          <p className='sm:text-[15px] font-bold text-[12px] text-primary uppercase tracking-wider'>Personal Profile</p>
          <div className='text-profile text-[20px] mt-5'>
          <p className='sm:text-[15px] text-[12px] text-primary tracking-wider font-semibold'>
            An Entrepreneur with the followings highlights:
            <ul>
              <li>* Founder of consumer product manufacturing company</li>
              <li>* Founding and exciting a storage & fulfillment company</li>
              <li>*Launching a creator house in the Los Angeles, featuring members from Hype House, Disney Channel, which was featured on Snapchat TV </li>
              <li>*At the time I also created the largest influencer sports league:- Contributing to the meteoric rise of Pudgy Penguines, aiding in achieving over 8 billion views on Giphy. </li>
              <li>*Consulting and marketing for renowned brands such as You.com, Sunrise Brands, Society Brands, and Broke buddy Brands, among others. </li>
            </ul>
          </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] bg-black-100 p-8 rounded-2xl"
        >
          <img src={profile} alt="Karthik R" className="object-fill" />
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="m-auto"
      >
        <h3 className='text-white font-black md:text-[40px] sm:text-[32px] text-[22px] mt-20'>Thoughts.</h3>
        <p className='mt-4 text-secondary sm:text-[20px] leading-[30px] text-[16px] lg:[22px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio quisquam minus, ducimus voluptate molestiae a minima eum rem labore officia officiis praesentium nemo impedit optio hic repudiandae architecto. Molestiae vero ex ab molestias repellat! Velit quas explicabo inventore labore deleniti sapiente repellat provident maiores at repudiandae ipsam, accusantium, rerum obcaecati suscipit ab exercitationem architecto necessitatibus adipisci repellendus quasi dolore aliquid. Pariatur, et? Fugiat quasi, labore quibusdam dolorum iusto pariatur omnis voluptatem expedita rem a odit harum laboriosam sunt ex magni temporibus placeat sit reprehenderit sed ipsum facere, nulla inventore? Incidunt fugit obcaecati animi, expedita minima nemo vero rerum quam!
      </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
