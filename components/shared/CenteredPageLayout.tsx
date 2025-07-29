import React from "react";
import { cn } from "@/lib/utils";

interface CenteredPageLayoutProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  minWidth?: string;
}

const CenteredPageLayout: React.FC<CenteredPageLayoutProps> = ({
  children,
  className,
  contentClassName,
  minWidth = "400px",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center h-[100dvh]",
        className
      )}
    >
      <div
        className={cn("flex flex-col justify-center items-center", contentClassName)}
        style={{ minWidth }}
      >
        {children}
      </div>
    </div>
  );
};

export default CenteredPageLayout;