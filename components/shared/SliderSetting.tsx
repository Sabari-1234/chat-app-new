import React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface SliderSettingProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  defaultValue?: number[];
  onChange?: (value: number[]) => void;
  className?: string;
}

const SliderSetting: React.FC<SliderSettingProps> = ({
  label,
  value,
  min,
  max,
  step = 1,
  defaultValue = [50],
  onChange,
  className,
}) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex justify-between">
        <p className="text-[16px]">{label}</p>
        <p className="text-[16px]">{value}</p>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onValueChange={onChange}
        className="w-[100%] cursor-pointer"
      />
    </div>
  );
};

export default SliderSetting;