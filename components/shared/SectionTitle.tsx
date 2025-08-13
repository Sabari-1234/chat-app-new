import React from "react";
import { Text } from "./Text";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <Text variant="lg" className="p-2">
      {children}
    </Text>
  );
};

export default SectionTitle;
