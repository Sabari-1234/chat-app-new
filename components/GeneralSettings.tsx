import { Image } from "phosphor-react";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import RadioGroupSetting from "./shared/RadioGroupSetting";
import SettingsPageHeader from "./shared/SettingsPageHeader";
import SliderSetting from "./shared/SliderSetting";

const GeneralSettings = () => {
  return (
    <div className="min-w-[350px] my-4">
      <SettingsPageHeader title="General" />
      <ScrollArea className="h-[93dvh]  rounded-md px-6">
        <div className="flex flex-col gap-6 my-4">
          <div className="text-lg font-semibold">Settings</div>
          <SliderSetting
            label="Message Font Size"
            value={15}
            min={12}
            max={20}
            step={1}
            defaultValue={[15]}
          />
          <div className="flex items-center gap-7">
            <Image
              size={30}
              className="text-icon-foreground shrink-0 hover:cursor-pointer"
              strokeWidth={1.5}
              alt=""
            />
            <p className="text-[16px]">General Settings</p>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-6 my-4">
          <div className="text-lg font-semibold">Theme</div>
          <RadioGroupSetting
            defaultValue="comfortable"
            options={[
              { value: "default", label: "Light", id: "theme-light" },
              { value: "comfortable", label: "Dark", id: "theme-dark" },
              { value: "compact", label: "System", id: "theme-system" }
            ]}
          />
        </div>
        <Separator />
        <div className="flex flex-col gap-6 my-4">
          <div className="text-lg font-semibold">Time Format</div>
          <RadioGroupSetting
            defaultValue="comfortable"
            options={[
              { value: "default", label: "12-hour", id: "time-12" },
              { value: "comfortable", label: "24-hour", id: "time-24" }
            ]}
          />
        </div>
        <Separator />
        <div className="flex flex-col gap-6 my-4">
          <div className="text-lg font-semibold ">Keyboard</div>
          <RadioGroupSetting
            defaultValue="comfortable"
            options={[
              { 
                value: "default", 
                label: "Send with Enter", 
                subtitle: "Press Shift+Enter for New line",
                id: "keyboard-enter" 
              },
              { 
                value: "comfortable", 
                label: "Send with Cmd+Enter", 
                subtitle: "Press Enter for New line",
                id: "keyboard-cmd" 
              }
            ]}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default GeneralSettings;
