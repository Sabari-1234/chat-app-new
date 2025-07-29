import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface RadioOption {
  value: string;
  label: string;
  subtitle?: string;
  id: string;
}

interface RadioGroupSettingProps {
  options: RadioOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const RadioGroupSetting: React.FC<RadioGroupSettingProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      onValueChange={onChange}
      className="flex flex-col gap-6"
    >
      {options.map((option) => (
        <div key={option.value} className="flex items-center gap-7">
          <RadioGroupItem
            value={option.value}
            id={option.id}
            className="size-6 cursor-pointer"
          />
          {option.subtitle ? (
            <div>
              <Label htmlFor={option.id} className="text-[16px] cursor-pointer">
                {option.label}
              </Label>
              <p className="text-muted-foreground text-sm">
                {option.subtitle}
              </p>
            </div>
          ) : (
            <Label htmlFor={option.id} className="text-[16px] cursor-pointer">
              {option.label}
            </Label>
          )}
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupSetting;