import "../assets/styles/components/HomeBackground.scss";

import { motion } from "framer-motion";

import mountain_bg from "../assets/images/mountain-bg.png";
import sky_bg from "../assets/images/sky-bg.png";
import bg_nodes from "../assets/images/nodes-bg.png";

import { CtaArrow } from ".";

import {
  mountainVariant,
  mountainTransition,
  bgContentVariant,
  bgContentTransition,
  nameContainerVariant,
  nameContainerTransition,
  beforeVariant,
  afterVariant,
  baTransition,
} from "../animations/BackgroundAnimations";

let moveNodes = (e) => {
  let bgNodes = document.querySelector(".bg-nodes");
  let mountain = document.querySelector(".mountain");

  let x = (window.innerHeight - e.pageX * 5) / 100;
  let y = (window.innerHeight - e.pageY * 5) / 100;

  bgNodes.style.transform = `translateX(${x}px) translateY(${y}px)`;

  if (window.innerWidth > 1024) {
    x = (window.innerHeight - e.pageX * 2) / 100;
    y = (window.innerHeight - e.pageY * 2) / 100;

    mountain.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }
};

const HomeBackground = () => {
  return (
    <div className="background" onMouseMove={(e) => moveNodes(e)}>
      <motion.img
        className="mountain"
        src={mountain_bg}
        alt=""
        variants={mountainVariant}
        initial="in"
        animate="set"
        transition={mountainTransition}
      />
      <img className="sky" src={sky_bg} alt="" />
      <motion.div
        className="bg-content"
        variants={bgContentVariant}
        initial="in"
        animate="set"
        transition={bgContentTransition}
      >
        <img src={bg_nodes} alt="" className="bg-nodes" />
        <motion.div className="title">
          <motion.p
            className="before"
            variants={beforeVariant}
            initial="in"
            animate="set"
            transition={baTransition}
          >
            Front-end developer
          </motion.p>
          <motion.div className="name-container">
            <motion.h1
              variants={nameContainerVariant}
              initial="in"
              animate="set"
              transition={nameContainerTransition}
            >
              luka peric
            </motion.h1>
          </motion.div>
          <motion.i
            className="after"
            variants={afterVariant}
            initial="in"
            animate="set"
            transition={baTransition}
          >
            - "Learning is an adventure"
          </motion.i>
        </motion.div>
      </motion.div>
      <CtaArrow />
    </div>
  );
};

export default HomeBackground;
