import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CircularIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: "outline" | "default" | "destructive" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const CircularIconButton = React.forwardRef<HTMLButtonElement, CircularIconButtonProps>(({
  icon,
  variant = "outline",
  size = "icon",
  className,
  ...props
}, ref) => {
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("rounded-full", className)}
      {...props}
    >
      {icon}
    </Button>
  );
});

CircularIconButton.displayName = "CircularIconButton";

export default CircularIconButton;