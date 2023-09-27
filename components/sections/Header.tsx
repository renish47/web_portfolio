"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg  backdrop-blur-[0.15rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-80 xs:top-6 xs:h-[3.25rem] xs:w-[30rem] xs:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{
          y: 0,
          x: "-50%",
          opacity: 1,
        }}
      />
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 xs:top-[1.7rem] xs:h-[initial] xs:py-0 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 xs:w-[initial] xs:flex-nowrap xs:gap-5 ">
          {links.map((link) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={link.hash}
              className="relative flex h-3/4 items-center justify-center"
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:hover:text-white",
                  {
                    "text-gray-950 dark:text-white":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-primary dark:bg-secondary absolute inset-0 
                    -z-10 rounded-full
                    "
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// bg-gradient-to-l from-[#fbe2e3] to-[#dbd7fb]
//bg-[#dbd7fb]
