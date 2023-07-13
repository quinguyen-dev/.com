"use client";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import type {
  AnimationScope,
  Variants,
  SVGAttributesAsMotionValues,
} from "framer-motion";

const v: Variants = {
  initial: {
    height: 0,
    overflow: "hidden",
    position: "absolute",
    y: 100,
  },
  target: {
    height: "90px",
    position: "relative",
    y: 0,
  },
};

function useHeaderAnimation(): AnimationScope {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [scope.current, { width: "640px" }, { at: 0.5, type: "spring" }],
      ["h1", { paddingBottom: "16px" }],
      ["#a", { height: "90px", position: "relative", y: 0 }, { at: "<" }],
      ["#b", { height: "90px", position: "relative", y: 0 }],
      ["#c", { height: "90px", position: "relative", y: 0 }],
    ]);
  }, []);

  return scope;
}

export default function IntroPage() {
  const scope = useHeaderAnimation();

  return (
    <div className="flex max-w-[640px] flex-col justify-center px-6">
      <motion.div layout ref={scope}>
        <motion.h1 layout className="whitespace-nowrap text-2xl font-bold">
          hi, i'm qui
          <span className="pl-2">👋</span>
        </motion.h1>
        <motion.p id="a" initial="initial" variants={v}>
          I’m a frontend developer with a passion to create amazing user
          experiences. I am currently finishing up the last year of my BS/MS in
          CS at Worcester Polytechnic Institute.
        </motion.p>
        <motion.p id="b" initial="initial" variants={v}>
          I’m a frontend developer with a passion to create amazing user
          experiences. I am currently finishing up the last year of my BS/MS in
          CS at Worcester Polytechnic Institute.
        </motion.p>
        <motion.p id="c" initial="initial" variants={v}>
          I’m a frontend developer with a passion to create amazing user
          experiences. I am currently finishing up the last year of my BS/MS in
          CS at Worcester Polytechnic Institute.
        </motion.p>
      </motion.div>
    </div>
  );
}
