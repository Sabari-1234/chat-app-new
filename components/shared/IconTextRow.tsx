import React from "react";
import InteractiveItemWrapper from "./InteractiveItemWrapper";

interface IconTextRowProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  rightContent?: React.ReactNode;
  subTitleRightContent?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffectNeeded?: boolean;
}

const IconTextRow: React.FC<IconTextRowProps> = ({
  icon,
  title,
  subtitle,
  rightContent,
  subTitleRightContent,
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
      <div className="flex flex-col  w-full overflow-hidden">
        <div className="flex-1 flex justify-between text-left">
          <p className="text-[16px] truncate text-left overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </p>
          {rightContent && (
            <div className="shrink-0 text-muted-foreground ">
              {rightContent}
            </div>
          )}
        </div>
        <div className="flex-1 flex justify-between text-left">
          {subtitle && (
            <p className="text-muted-foreground text-sm truncate text-left">
              {subtitle}
            </p>
          )}
          {subTitleRightContent && (
            <p className="shrink-0 text-muted-foreground text-sm truncate ">
              {subTitleRightContent}
            </p>
          )}
        </div>
      </div>
    </InteractiveItemWrapper>
  );
};

export default IconTextRow;
