"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

import Project from "../Project";
import SectionHeading from "../SectionHeading";

export default function Projects() {
  const ref = useSectionInView({
    sectionName: "Projects",
    threshold: 0.2,
  });

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28 ">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
}
