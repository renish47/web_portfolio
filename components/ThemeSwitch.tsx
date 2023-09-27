"use client";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-black border-opacity-10 bg-white bg-opacity-80  shadow-lg backdrop-blur-[0.5rem]  transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
}
