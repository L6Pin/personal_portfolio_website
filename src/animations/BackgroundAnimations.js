//Mountain
export const mountainVariant = {
  in: { scale: 2, height: "200%", filter: "grayscale(0%)" },
  set: {
    scale: 1,
    height: "100%",
    filter: "grayscale(100%)",
  },
};
export const mountainTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.8,
  delay: 0.1,
};

//Background Content
export const bgContentVariant = {
  in: { y: "100%" },
  set: { y: "0" },
};
export const bgContentTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.5,
  delay: 0.4,
};

//Main title container
export const nameContainerVariant = {
  in: { x: "-101%" },
  set: { x: "0%" },
};
export const nameContainerTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.3,
  delay: 1,
};

//Before and after (or "ba")
export const beforeVariant = {
  in: { y: " 100%", x: "100", opacity: 0 },
  set: { y: "-15px", x: 0, opacity: 1 },
};

export const afterVariant = {
  in: { y: "-100%", x: "-100", opacity: 0 },
  set: { y: "15px", x: 0, opacity: 1 },
};

export const baTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
  delay: 1.6,
};

//Cta arrows
export const ctaArrowsTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
  delay: 2,
};
