import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className={cn("text-lg font-semibold text-muted-foreground p-2")}>
      {children}
    </div>
  );
};

export default SectionTitle;
