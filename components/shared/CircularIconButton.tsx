import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CircularIconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: "outline" | "default" | "destructive" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
}

const CircularIconButton: React.FC<CircularIconButtonProps> = ({
  icon,
  onClick,
  variant = "outline",
  size = "icon",
  className,
  disabled = false,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("rounded-full", className)}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </Button>
  );
};

export default CircularIconButton;