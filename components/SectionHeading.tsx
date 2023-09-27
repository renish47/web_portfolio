import { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-10 cursor-default text-center text-3xl font-medium capitalize">
      {children}
    </h2>
  );
}
