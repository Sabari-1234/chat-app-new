import React from "react";
import InteractiveItemWrapper from "./InteractiveItemWrapper";
import { Text } from "./Text";
import SectionWrapper from "./SectionWrapper";

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
  const leftTextClassName = "truncate me-2";
  const rightTextClassName = "shrink-0 me-2";

  return (
    <InteractiveItemWrapper
      className={className}
      onClick={onClick}
      hoverEffectNeeded={hoverEffectNeeded}
    >
      {icon && <div className="shrink-0 text-icon-foreground">{icon}</div>}
      <SectionWrapper className="w-full overflow-hidden">
        <SectionWrapper variant={"row_Between"}>
          <Text variant={"h4-2"} className={leftTextClassName}>
            {title}
          </Text>
          {rightContent && (
            <Text as="div" className={rightTextClassName}>
              {rightContent}
            </Text>
          )}
        </SectionWrapper>
        <SectionWrapper variant={"row_Between"}>
          {subtitle && <Text className={leftTextClassName}>{subtitle}</Text>}
          {subTitleRightContent && (
            <Text className={rightTextClassName}>{subTitleRightContent}</Text>
          )}
        </SectionWrapper>
      </SectionWrapper>
    </InteractiveItemWrapper>
  );
};

export default IconTextRow;
