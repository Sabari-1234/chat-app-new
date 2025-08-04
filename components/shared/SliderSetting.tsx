import React from "react";
import { Slider } from "@/components/ui/slider";
import IconTextRow from "./IconTextRow";
import SectionWrapper from "./SectionWrapper";

interface SliderSettingProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  defaultValue?: number[];
  onChange?: (value: number[]) => void;
  className?: string;
  labels?: string[];
  thresholds?: number[];
}

const SliderSetting: React.FC<SliderSettingProps> = ({
  label,
  value,
  min,
  max,
  step = 1,
  defaultValue = [50],
  onChange,
  labels,
  thresholds = [40, 80],
}) => {
  const getActiveLabel = (currentValue: number) => {
    if (!labels) return -1;
    for (let i = 0; i < thresholds.length; i++) {
      if (currentValue < thresholds[i]) return i;
    }
    return thresholds.length;
  };

  return (
    <SectionWrapper className="gap-2 p-2">
      <IconTextRow
        title={label}
        rightContent={value}
        hoverEffectNeeded={false}
        className="-p-2 "
      />
      <Slider
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onValueChange={onChange}
        className="w-[100%] cursor-pointer"
      />
      {labels && (
        <div className="flex justify-between text-sm">
          {labels.map((label, index) => (
            <span
              key={label}
              className={
                getActiveLabel(value) === index
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
};

export default SliderSetting;
