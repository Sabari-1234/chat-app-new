import React from "react";
import { Text } from "./Text";
import SectionWrapper from "./SectionWrapper";
import { Icon } from "./Icon";
import * as PhosphorIcons from "phosphor-react";

interface SectionTitleProps {
  children: React.ReactNode;
  rightIconName?: keyof typeof PhosphorIcons;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  rightIconName,
}) => {
  return (
    <SectionWrapper variant={"rowCenterBetween"} className="p-2">
      <Text variant="lg">{children}</Text>
      {rightIconName && <Icon name={rightIconName} size={20} />}
    </SectionWrapper>
  );
};

export default SectionTitle;
