import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
type VariantType =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

interface InteractiveItemWrapperProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  hoverEffectNeeded?: boolean;
  variant?: VariantType;
  isButton?: boolean;
}

const InteractiveItemWrapper: React.FC<InteractiveItemWrapperProps> = ({
  children,
  className,
  onClick,
  disabled = false,
  hoverEffectNeeded = true,
  variant = "outline",
  isButton = false,
}) => {
  const Component = isButton ? Button : "div";

  return (
    <Component
      className={cn(
        "flex items-center gap-4 w-full  cursor-pointer px-2 py-2 rounded-md",
        disabled && "opacity-50 cursor-not-allowed",
        hoverEffectNeeded && "hover:bg-accent/50 transition-colors",
        Component === Button && "my-2",
        className
      )}
      onClick={!disabled ? onClick : undefined}
      {...(Component === Button && { variant })}
    >
      {children}
    </Component>
  );
};

export default InteractiveItemWrapper;
