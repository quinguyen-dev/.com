"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import type { AnimationScope } from "framer-motion";

function useContentAnimation(): AnimationScope {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "h1",
        { opacity: [0, 1], marginTop: "32px" },
        { at: 0.5, ease: "easeIn" },
      ],
      [
        "p",
        { maxHeight: "400px", opacity: 1, y: [50, 0] },
        {
          delay: stagger(0.09),
          duration: 0.55,
          ease: "easeIn",
        },
      ],
    ]);
  }, []);

  return scope;
}

export default function IntroPage() {
  const scope = useContentAnimation();

  return (
    <motion.div
      ref={scope}
      className="flex min-w-[150px] max-w-[640px] flex-col justify-center px-4 md:px-0 [&>p]:mt-4"
    >
      <motion.h1 className="whitespace-nowrap text-2xl font-bold opacity-0">
        hi, i'm qui
        <span className="pl-2">👋</span>
      </motion.h1>
      <p className="max-h-0 opacity-0">
        I’m a frontend developer with a passion to create amazing user
        experiences. I am currently finishing up the last year of my BS/MS in CS
        at Worcester Polytechnic Institute.
      </p>
      <p className="max-h-0 opacity-0">
        I am currently working on building my software engineering skills
        through agile-based work. I have proudly developed for Brigham & Women's
        Hospital, as well as Polar Park and the Worcester Red Sox.
      </p>
      <p className="max-h-0 opacity-0">
        Outside of programming, I am an avid music enjoyer, enjoy reading manga,
        and love playing games with my friends.
      </p>
    </motion.div>
  );
}
