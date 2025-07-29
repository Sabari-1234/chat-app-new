import React from "react";
import { cn } from "@/lib/utils";

interface IconTextRowProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  rightContent?: React.ReactNode;
  className?: string;
  iconSize?: number;
  onClick?: () => void;
}

const IconTextRow: React.FC<IconTextRowProps> = ({
  icon,
  title,
  subtitle,
  rightContent,
  className,
  iconSize = 30,
  onClick,
}) => {
  const Component = onClick ? "button" : "div";
  
  return (
    <Component
      className={cn(
        "flex items-center gap-7 w-full",
        onClick && "hover:bg-accent/50 transition-colors cursor-pointer p-2 -mx-2 rounded-md",
        className
      )}
      onClick={onClick}
    >
      <div className="shrink-0 text-icon-foreground" style={{ fontSize: iconSize }}>
        {icon}
      </div>
      <div className="flex-1 min-w-0 text-left">
        <p className="text-[16px] truncate text-left">{title}</p>
        {subtitle && (
          <p className="text-muted-foreground text-sm truncate text-left">{subtitle}</p>
        )}
      </div>
      {rightContent && (
        <div className="shrink-0 text-muted-foreground me-4">
          {rightContent}
        </div>
      )}
    </Component>
  );
};

export default IconTextRow;