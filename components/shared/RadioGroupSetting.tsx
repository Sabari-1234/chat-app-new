import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import InteractiveItemWrapper from "./InteractiveItemWrapper";
import { Text } from "./Text";
import SectionWrapper from "./SectionWrapper";

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
    <SectionWrapper
      as={RadioGroup}
      defaultValue={defaultValue}
      value={value}
      onValueChange={handleValueChange}
    >
      {options.map((option) => (
        <InteractiveItemWrapper key={option.value}>
          <RadioGroupItem
            value={option.value}
            id={option.id}
            className="cursor-pointer"
          />

          <div>
            <Text variant={"label"} htmlFor={option.id}>
              {option.label}
            </Text>
            {option.subtitle && <Text>{option.subtitle}</Text>}
          </div>
        </InteractiveItemWrapper>
      ))}
    </SectionWrapper>
  );
};

export default RadioGroupSetting;
