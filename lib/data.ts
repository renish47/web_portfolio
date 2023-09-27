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

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Whatsapp Clone",
    description:
      "A Responsive full stack realtime messaging app using web-sockets, developed cloning the whatsapp's design and it's functionalities with Next.js as core stack.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: whatsappCloneImg,
  },
  {
    title: "Zenclass Dashboard",
    description:
      "A Responsive Bootcamp Dashboard for student. This is my capstone project from the Web dev bootcamp I attended.",
    tags: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    imageUrl: zenclassDashboardImg,
  },
  {
    title: "url-sm",
    description:
      "A URL shortening website, which also implements the flow of processes like signin, signup, forget password along with OTP verification. This is one of my Mini project.",
    tags: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    imageUrl: urlSmImg,
  },
  {
    title: "Portfolio",
    description:
      "My web portfolio whose design is inspired based on popular Windows-95 operating system's look.",
    tags: ["React", "Tailwind CSS"],
    imageUrl: webPortfolioImg,
  },

  {
    title: "Book My Doc",
    description:
      "A Doctor appointment booking app which provides functionalities to book and manage appointments. This is my first Full-Stack project.",
    tags: ["React", "bootstrap", "Express.js", "MongoDB"],
    imageUrl: bookMyDocImg,
  },
  {
    title: "Tees For You",
    description:
      "An E-Commerce website with modern UI to buy T-Shirts. This is my first complete website project. (This isn't designed for mobile view yet)",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: teesForYouImg,
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
