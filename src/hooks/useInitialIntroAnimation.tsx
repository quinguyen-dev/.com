import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
import type { AnimationScope } from "framer-motion";

export function useInitialIntroAnimation(): AnimationScope {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "h1",
        { opacity: [0, 1], marginTop: "36px" },
        { at: 0.75, duration: 0.5, ease: "easeIn", marginTop: { duration: 0 } },
      ],
      ["h1", { scale: [2, 1], marginTop: "0px" }, { at: "+1" }],
      [
        scope.current,
        { maxWidth: "640px", width: "100%" },
        { ease: "easeOut" },
      ],
      [
        "p",
        { maxHeight: "400px", opacity: 1, y: [50, 0] },
        {
          delay: stagger(0.1),
          maxHeight: { duration: 0.65 },
          opacity: { duration: 0.4 },
          y: { duration: 0.2 },
          ease: "easeIn",
        },
      ],
    ]);
  }, []);

  return scope;
}
