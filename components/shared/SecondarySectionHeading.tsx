import React from "react";
import { Text } from "./Text";

interface SecondarySectionHeadingProps {
  children: React.ReactNode;
}

const SecondarySectionHeading: React.FC<SecondarySectionHeadingProps> = ({
  children,
}) => {
  return <Text className="p-2">{children}</Text>;
};

export default SecondarySectionHeading;
