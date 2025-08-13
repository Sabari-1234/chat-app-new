import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import InteractiveItemWrapper from "./InteractiveItemWrapper";

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
      return `text-sm ${checked ? "text-primary" : "text-muted-foreground"}`;
    }
    return "text-sm text-muted-foreground";
  };

  return (
    <InteractiveItemWrapper
      hoverEffectNeeded={hoverEffectNeeded}
      className={className}
    >
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <div className="flex flex-col">
        <Label htmlFor={id} className="text-[16px] cursor-pointer font-medium">
          {title}
        </Label>
        {(description || showEnabledStatus) && (
          <span className={getStatusClass()}>{getStatusText()}</span>
        )}
      </div>
    </InteractiveItemWrapper>
  );
};

export default CheckboxField;
