import React from "react";
import * as PhosphorIcons from "phosphor-react";

export interface IconComponentProp {
  size?: number;
  color?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
  onClick?: (event: React.MouseEvent<SVGElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<SVGElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<SVGElement>) => void;
  style?: React.CSSProperties;
}

export interface IconProps extends IconComponentProp {
  name: keyof typeof PhosphorIcons;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  weight = "regular",
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  style,
}) => {
  const IconComponent = PhosphorIcons[
    name
  ] as React.ComponentType<IconComponentProp>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in phosphor-react`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      weight={weight}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    />
  );
};
