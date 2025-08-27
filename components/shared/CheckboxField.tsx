import React from "react";
import { Checkbox } from "../ui/checkbox";
import InteractiveItemWrapper from "./InteractiveItemWrapper";
import SectionWrapper from "./SectionWrapper";
import { Text } from "./Text";

interface CheckboxFieldProps {
  id: string;
  checked?: boolean;
  onCheckedChange?: () => void;
  title: string;
  description?: string;
  showEnabledStatus?: boolean;
  className?: string;
  hoverEffectNeeded?: boolean;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  checked,
  onCheckedChange,
  title,
  description,
  showEnabledStatus = false,
  hoverEffectNeeded = true,
  className,
}) => {
  const getStatusText = () => {
    if (showEnabledStatus) {
      return checked ? "Enabled" : "Disabled";
    }
    return description;
  };

  const getStatusClass = () => {
    if (showEnabledStatus) {
      return `text-sm ${
        checked ? "text-primary" : "text-muted-foreground font-semibold"
      }`;
    }
    return "text-sm text-muted-foreground font-semibold";
  };

  return (
    <InteractiveItemWrapper
      hoverEffectNeeded={hoverEffectNeeded}
      className={className}
    >
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <SectionWrapper>
        <Text variant={"label"}>{title}</Text>
        {(description || showEnabledStatus) && (
          <span className={getStatusClass()}>{getStatusText()}</span>
        )}
      </SectionWrapper>
    </InteractiveItemWrapper>
  );
};

export default CheckboxField;
