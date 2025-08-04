import React from "react";
import InteractiveItemWrapper from "./InteractiveItemWrapper";

interface IconTextRowProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  rightContent?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffectNeeded?: boolean;
}

const IconTextRow: React.FC<IconTextRowProps> = ({
  icon,
  title,
  subtitle,
  rightContent,
  className,
  onClick,
  hoverEffectNeeded,
}) => {
  return (
    <InteractiveItemWrapper
      className={className}
      onClick={onClick}
      hoverEffectNeeded={hoverEffectNeeded}
    >
      {icon && <div className="shrink-0 text-icon-foreground">{icon}</div>}
      <div className="flex-1 min-w-0 text-left">
        <p className="text-[16px] truncate text-left">{title}</p>
        {subtitle && (
          <p className="text-muted-foreground text-sm truncate text-left">
            {subtitle}
          </p>
        )}
      </div>
      {rightContent && (
        <div className="shrink-0 text-muted-foreground ">{rightContent}</div>
      )}
    </InteractiveItemWrapper>
  );
};

export default IconTextRow;
