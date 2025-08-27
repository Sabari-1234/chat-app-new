import { cn } from "@/lib/utils";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const directions = {
  row: "flex flex-row",
  column: "flex flex-col",
};

const aligns = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifies = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const combos: Record<string, string> = {};

for (const [dirKey, dirClass] of Object.entries(directions)) {
  combos[dirKey] = dirClass; // just direction

  for (const [alignKey, alignClass] of Object.entries(aligns)) {
    const nameAlign = `${dirKey}${
      alignKey[0].toUpperCase() + alignKey.slice(1)
    }`;
    combos[nameAlign] = `${dirClass} ${alignClass}`; // direction + align

    for (const [justifyKey, justifyClass] of Object.entries(justifies)) {
      const nameFull = `${nameAlign}${
        justifyKey[0].toUpperCase() + justifyKey.slice(1)
      }`;
      combos[nameFull] = `${dirClass} ${alignClass} ${justifyClass}`; // full combination
    }
  }

  for (const [justifyKey, justifyClass] of Object.entries(justifies)) {
    const nameJustify = `${dirKey}_${
      justifyKey[0].toUpperCase() + justifyKey.slice(1)
    }`;
    combos[nameJustify] = `${dirClass} ${justifyClass}`; // direction + justify
  }
}

export const sectionWrapperVariants = cva("", {
  variants: {
    variant: {
      ...combos,
    },
  },
  defaultVariants: {
    variant: "column", // now default is simple "column"
  },
});

interface SectionWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionWrapperVariants> {
  children: React.ReactNode;
  as?: React.ElementType;
}

type SectionWrapperPropsWithAs<T extends React.ElementType> = SectionWrapperProps & 
  Omit<React.ComponentPropsWithoutRef<T>, keyof SectionWrapperProps> & {
    as: T;
  };

function SectionWrapper<T extends React.ElementType = "div">({
  children,
  className,
  variant,
  as,
  ...props
}: T extends "div" ? SectionWrapperProps : SectionWrapperPropsWithAs<T>) {
  const Component = as || "div";
  return (
    <Component
      className={cn(sectionWrapperVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default SectionWrapper;
