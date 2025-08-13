import React from "react";
import { Text } from "./Text";

interface SecondarySectionHeadingProps {
  children: React.ReactNode;
}

const SecondarySectionHeading: React.FC<SecondarySectionHeadingProps> = ({
  children,
}) => {
  return <Text variant="sm" className="p-2">{children}</Text>;
};

export default SecondarySectionHeading;
