import { cn } from "@/lib/utils";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const sectionWrapperVariants = cva("", {
  variants: {
    variant: {
      column: "flex flex-col",
      columnCenter: "flex flex-col items-center",
      rowCenter: "flex items-center",
      row: "flex",
    },
  },
  defaultVariants: {
    variant: "column",
  },
});

interface SectionWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionWrapperVariants> {
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <div
      className={cn(sectionWrapperVariants({ variant, className }))}
      {...props}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
