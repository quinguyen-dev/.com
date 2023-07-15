import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
import type { AnimationScope } from "framer-motion";

export function useInitialIntroAnimation(): AnimationScope {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "h1",
        { opacity: [0, 1], marginTop: "72px" },
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
        { maxHeight: "150px", y: [100, 0], opacity: 1 },
        {
          delay: stagger(0.2),
          duration: 0.45,
          opacity: { duration: 0 },
        },
      ],
    ]);
  }, []);

  return scope;
}
