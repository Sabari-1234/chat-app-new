import React from "react";

interface SecondarySectionHeadingProps {
  children: React.ReactNode;
}

const SecondarySectionHeading: React.FC<SecondarySectionHeadingProps> = ({
  children,
}) => {
  return <p className="text-muted-foreground text-sm p-2">{children}</p>;
};

export default SecondarySectionHeading;
