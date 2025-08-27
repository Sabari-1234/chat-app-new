import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

const textVariants = cva("", {
  variants: {
    variant: {
      lg: "text-lg font-semibold text-muted-foreground",
      "4xl": "text-4xl font-extrabold tracking-tight text-balance",
      "3xl": "text-3xl font-semibold tracking-tight m-0 w-full text-center",

      muted: "text-muted-foreground text-sm font-semibold",
      small: "text-sm leading-none font-medium",
      large: "text-lg font-semibold",
      lead: "text-muted-foreground text-xl",
      inlineCode:
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h1: "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
      label: "text-[16px] cursor-pointer font-semibold",
      medium: "text-[16px]",
      "h4-2": "font-semibold tracking-tight",
    },
  },
  defaultVariants: {
    variant: "muted",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
  children: React.ReactNode;
  as?: React.ElementType;
  htmlFor?: string;
}

// lookup table for variant → element mapping
const variantToElement: Record<
  NonNullable<TextProps["variant"]>,
  React.ElementType
> = {
  lg: "div",
  "4xl": "h1",
  "3xl": "h2",
  muted: "span",
  small: "small",
  large: "div",
  lead: "p",
  inlineCode: "code",
  blockquote: "blockquote",
  p: "p",
  h4: "h4",
  h3: "h3",
  h2: "h2",
  h1: "h1",
  label: Label,
  medium: "p",
  "h4-2": "h4",
};

function Text({
  className,
  variant,
  as = "p",
  asChild = false,
  children,
  htmlFor,
  ...props
}: TextProps) {
  // pick correct element based on variant, fallback to passed `as`
  const Comp = asChild ? Slot : variant ? variantToElement[variant] ?? as : as;

  return (
    <Comp
      className={cn(textVariants({ variant, className }))}
      {...props}
      htmlFor={htmlFor}
    >
      {children}
    </Comp>
  );
}

export { Text, textVariants };
