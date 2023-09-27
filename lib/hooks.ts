import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useEffect } from "react";
import { SectionName } from "./types";

type UseSectionInViewProps = {
  threshold?: number;
  sectionName: SectionName;
};

export function useSectionInView({
  threshold = 0.75,
  sectionName,
}: UseSectionInViewProps) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return ref;
}
