"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

import SectionHeading from "../SectionHeading";

export default function About() {
  const ref = useSectionInView({
    sectionName: "About",
  });

  return (
    <motion.section
      ref={ref}
      id="about"
      className=" mb-28 max-w-[45rem] cursor-default scroll-mt-28  text-center leading-8 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-5 dark:text-white/80">
        My journey into the world of programming began after I watched the
        series named{" "}
        <span className="font-semibold dark:text-white">Silicon Valley</span>{" "}
        during lockdown. The show's portrayal of coding like a{" "}
        <span className="me-1 italic underline dark:text-white">
          super power
        </span>{" "}
        fascinated me, igniting a strong attraction towards the world of
        programming. Since then, I have embraced coding as a means to bring
        ideas to life. As a movie buff, I appreciate the{" "}
        <span className="font-semibold dark:text-white">
          {" "}
          art of storytelling
        </span>{" "}
        and enjoy the{" "}
        <span className="font-semibold dark:text-white">
          cinematic experience
        </span>
        , allowing me to combine my technical expertise with my creative vision.
      </p>
      <p className="mb-5 dark:text-white/80">
        My favorite part of programming is the problem-solving aspect.
        <i>
          {" "}
          I love the feeling of finally figuring out a solution to a problem.
        </i>{" "}
        My core stack is{" "}
        <span className="font-semibold dark:text-white">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma, always looking to learn
        new technologies. I am currently looking for a{" "}
        <span className="font-semibold dark:text-white">
          Full-time position
        </span>{" "}
        as a Web developer.
      </p>
    </motion.section>
  );
}
