import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import InteractiveItemWrapper from "./InteractiveItemWrapper";

interface RadioOption {
  value: string;
  label: string;
  subtitle?: string;
  id: string;
}

interface RadioGroupSettingProps {
  options: RadioOption[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  onValueChange?: (value: string) => void;
}

const RadioGroupSetting: React.FC<RadioGroupSettingProps> = ({
  options,
  defaultValue,
  value,
  onChange,
  onValueChange,
}) => {
  const handleValueChange = onValueChange || onChange;

  return (
    <RadioGroup
      defaultValue={defaultValue}
      value={value}
      onValueChange={handleValueChange}
      className="flex flex-col"
    >
      {options.map((option) => (
        <InteractiveItemWrapper key={option.value}>
          <RadioGroupItem
            value={option.value}
            id={option.id}
            className=" cursor-pointer"
          />

          <div>
            <Label htmlFor={option.id} className="text-[16px] cursor-pointer">
              {option.label}
            </Label>
            {option.subtitle && (
              <p className="text-muted-foreground text-sm">{option.subtitle}</p>
            )}
          </div>
        </InteractiveItemWrapper>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupSetting;
