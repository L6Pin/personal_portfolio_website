import "../assets/styles/components/CtaArrow.scss";

import { motion } from "framer-motion";

import { ctaArrowsTransition } from "../animations/BackgroundAnimations";
import { fadeIn } from "../animations/GeneralAnimations";

const CtaArrow = () => {
  return (
    <motion.div
      class="scroll-down"
      variants={fadeIn}
      initial="in"
      animate="set"
      transition={ctaArrowsTransition}
    >
      <p>PORTFOLIO</p>
      <div className="arrow-container">
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </motion.div>
  );
};

export default CtaArrow;
