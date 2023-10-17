"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { githubProfile, linkedinProfile } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const ref = useSectionInView({
    sectionName: "Home",
    threshold: 0.5,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      ref={ref}
      className="max-w-[50rem] cursor-default scroll-mt-[100rem] text-center"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/image.jpg"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Renishkar,</span> a{" "}
        <span className="font-bold">full-stack developer</span> who enjoys
        building <span className="">sites & apps</span> and I&apos;m a{" "}
        <span className="underline">React (Next.js)</span> fanboy
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-5 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white shadow-md shadow-black/[0.05] outline-none transition  hover:scale-110 hover:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 shadow-md shadow-black/[0.05] outline-none transition hover:scale-110 active:scale-105 dark:bg-white/10"
          href="https://drive.google.com/file/d/1vlnPbv3IaozJfBVF90-zlKSg5wzhPCeX/view?usp=sharing"
          target="_blank"
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-x-1" />
        </a>

        <div className="flex gap-5 ">
          <a
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/20 bg-white p-4 text-gray-700 shadow-md shadow-black/[0.05] transition hover:scale-[1.15] hover:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/80"
            href={linkedinProfile}
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/20 bg-white p-4 text-gray-700 shadow-md shadow-black/[0.05] transition hover:scale-[1.15] hover:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/80"
            href={githubProfile}
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
