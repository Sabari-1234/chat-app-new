import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      sm: "text-muted-foreground text-sm",
      lg: "text-lg font-semibold text-muted-foreground",
      "4xl": "text-4xl font-extrabold tracking-tight text-balance",
      "3xl": "text-3xl font-semibold tracking-tight m-0 w-full text-center",
    },
  },
  defaultVariants: {
    variant: "sm",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
  children: React.ReactNode;
  as?: React.ElementType;
}

function Text({
  className,
  variant,
  as = "p",
  asChild = false,
  children,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : as;

  return (
    <Comp className={cn(textVariants({ variant, className }))} {...props}>
      {children}
    </Comp>
  );
}

export { Text, textVariants };
