import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bookMyDocImg from "@/public/projectsImage/bookMyDoc.jpg";
import teesForYouImg from "@/public/projectsImage/teesForYou.jpg";
import urlSmImg from "@/public/projectsImage/urlSm.jpg";
import webPortfolioImg from "@/public/projectsImage/webPortfolio.jpg";
import zenclassDashboardImg from "@/public/projectsImage/zenclassDashboard.jpg";
import whatsappCloneImg from "@/public/projectsImage/whatsappClone.jpg";

export const githubProfile = "https://github.com/renish47";
export const linkedinProfile = "https://www.linkedin.com/in/renishkar-j/";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Whatsapp Clone",
    description:
      "A Responsive full stack realtime messaging app using web-sockets, developed cloning the whatsapp's design and it's functionalities with Next.js as core stack.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: whatsappCloneImg,
    githubLink: "https://github.com/renish47/whatsapp_clone",
  },
  {
    title: "Zenclass Dashboard",
    description:
      "A Responsive Bootcamp Dashboard for student. This is my capstone project from the Web dev bootcamp I attended.",
    tags: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    imageUrl: zenclassDashboardImg,
    githubLink: "https://github.com/renish47/zenclass_dashboard",
  },
  {
    title: "url-sm",
    description:
      "A URL shortening website, which also implements the flow of processes like signin, signup, forget password along with OTP verification. This is one of my Mini project.",
    tags: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    imageUrl: urlSmImg,
    githubLink: "https://github.com/renish47/url-sm",
  },
  {
    title: "Window95 Portfolio",
    description:
      "My web portfolio whose design is inspired based on popular Windows-95 operating system's look.",
    tags: ["React", "Tailwind CSS"],
    imageUrl: webPortfolioImg,
    githubLink: "https://github.com/renish47/windows95_portfolio",
  },

  {
    title: "Book My Doc",
    description:
      "A Doctor appointment booking app which provides functionalities to book and manage appointments. This is my first Full-Stack project.",
    tags: ["React", "bootstrap", "Express.js", "MongoDB"],
    imageUrl: bookMyDocImg,
    githubLink: "https://github.com/renish47/BookMyDoc",
  },
  {
    title: "Tees For You",
    description:
      "An E-Commerce website with modern UI to buy T-Shirts. This is my first complete website project. (This isn't designed for mobile view yet)",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: teesForYouImg,
    githubLink: "https://github.com/renish47/TeesForYou",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind css",
  "Bootstrap",
  "MongoDB",
  "SQL",
  "Prisma",
  "Redux",
  "Express.js",
  "Framer Motion",
] as const;
