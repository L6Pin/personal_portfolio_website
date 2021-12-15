import "../assets/styles/components/Nav.scss";

import logo from "../assets/images/logo.svg";

import { motion } from "framer-motion";

import {
  navigationAnimation,
  navigationTransition,
} from "../animations/NavigationAnimation";
import { useState } from "react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <motion.div
      className="nav-container"
      variants={navigationAnimation}
      initial="in"
      animate="set"
      transition={navigationTransition}
    >
      <img className="logo" src={logo} alt="" />

      <div className="links-menu">
        <a href="https://github.com/L6Pin" className="link ">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/luka-peric" className="link">
          <i class="fab fa-linkedin-in fa-2x"></i>
        </a>
        <div
          className={openNav ? "nav-btn  nav-btn-open" : "nav-btn"}
          onClick={() => setOpenNav(!openNav)}
        >
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={openNav ? "nav " : "nav nav-closed"}>
        <p>Portfolio</p>
        <p>About & <br /> Contact </p>
        <div className="social-media">
          <a href="https://github.com/L6Pin" className="link ">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/luka-peric" className="link">
            <i class="fab fa-linkedin-in fa-2x"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default Nav;
