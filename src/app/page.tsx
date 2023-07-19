"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Link from "next/link";
import { useInitialIntroAnimation } from "@/hooks/useInitialIntroAnimation";

export default function IntroPage() {
  const scope = useInitialIntroAnimation();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={scope}
        className="flex min-w-[150px] flex-col justify-center px-4 sm:px-0 [&>p]:mt-6"
      >
        <h1 className="whitespace-nowrap text-2xl font-bold opacity-0">
          hi, i'm qui
          <span className="pl-2">👋</span>
        </h1>
        <p className="max-h-0 overflow-hidden opacity-0">
          I’m a frontend developer with a passion to create amazing user
          experiences. I am currently finishing up the last year of my BS/MS in
          CS at WPI.
        </p>
        <p className="max-h-0 overflow-hidden opacity-0">
          I am currently working on building my software engineering skills
          through agile-based work. I have proudly developed for Brigham &
          Women's Hospital, as well as Polar Park and the Worcester Red Sox.
        </p>
        <p className="max-h-0 overflow-hidden opacity-0">
          Outside of programming, I am an avid music enjoyer, enjoy reading
          manga, and love playing games with my friends.
        </p>
        <div className="flex space-x-4 opacity-0">
          <Link href="https://www.linkedin.com/in/quingocnguyen/">
            linkedin
          </Link>
          <Link href="https://github.com/quinguyen-dev">github</Link>
        </div>
      </m.div>
    </LazyMotion>
  );
}
