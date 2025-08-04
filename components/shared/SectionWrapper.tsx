import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
}) => {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
};

export default SectionWrapper;
