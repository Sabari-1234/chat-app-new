import React, { useState } from "react";
import { Image } from "phosphor-react";
import { Separator } from "./ui/separator";
import { Slider } from "./ui/slider";
import RadioGroupSetting from "./shared/RadioGroupSetting";
import IconTextRow from "./shared/IconTextRow";
import SectionTitle from "./shared/SectionTitle";
import PageWrapper from "./shared/PageWrapper";
import SectionWrapper from "./shared/SectionWrapper";
import SliderSetting from "./shared/SliderSetting";
import { useLeftPanel } from "@/contexts/LeftPanelContext";

interface GeneralSettingsState {
  messageFontSize: number[];
  theme: string;
  timeFormat: string;
  keyboardShortcut: string;
}

const GeneralSettings: React.FC = () => {
  const { setLeftPanel } = useLeftPanel();
  const [settings, setSettings] = useState<GeneralSettingsState>({
    messageFontSize: [15],
    theme: "comfortable",
    timeFormat: "comfortable",
    keyboardShortcut: "comfortable",
  });

  const handleSliderChange = (value: number[]) => {
    setSettings((prev) => ({ ...prev, messageFontSize: value }));
  };

  const handleThemeChange = (value: string) => {
    setSettings((prev) => ({ ...prev, theme: value }));
  };

  const handleTimeFormatChange = (value: string) => {
    setSettings((prev) => ({ ...prev, timeFormat: value }));
  };

  const handleKeyboardChange = (value: string) => {
    setSettings((prev) => ({ ...prev, keyboardShortcut: value }));
  };

  return (
    <PageWrapper
      title="General Settings"
      variant="full-width"
      onBack={() => setLeftPanel("settings")}
    >
      {/* Settings Section */}
      <SectionWrapper>
        <SectionTitle>Wallpaper</SectionTitle>
        {/* General Settings Row */}
        <IconTextRow
          icon={<Image size={24} strokeWidth={1.5} alt="" />}
          title="Change Chat Wallpaper"
          onClick={() => console.log("General Settings clicked")}
        />
      </SectionWrapper>
      <Separator />
      {/* Theme Section */}
      <SectionWrapper>
        <SectionTitle>Theme</SectionTitle>
        <RadioGroupSetting
          value={settings.theme}
          onValueChange={handleThemeChange}
          options={[
            {
              value: "default",
              label: "Light Mode",
              // subtitle: "Recommended for day use",
              id: "theme-light",
            },
            {
              value: "comfortable",
              label: "Dark Mode",
              // subtitle: "Recommended for Night use",
              id: "theme-dark",
            },
            {
              value: "compact",
              label: "System Default",
              // subtitle: "Based on system theme",
              id: "theme-system",
            },
          ]}
        />
      </SectionWrapper>

      <Separator />

      {/* Time Format Section */}
      <SectionWrapper>
        <SectionTitle>Time Format</SectionTitle>
        <RadioGroupSetting
          value={settings.timeFormat}
          onValueChange={handleTimeFormatChange}
          options={[
            {
              value: "default",
              label: "12 Hours time Format",
              subtitle: "Eg., 12 : 40 PM",
              id: "time-12",
            },
            {
              value: "comfortable",
              label: "24 Hours time Format",
              subtitle: "Eg., 19 : 56",
              id: "time-24",
            },
          ]}
        />
      </SectionWrapper>

      <Separator />

      {/* Keyboard Section */}
      <SectionWrapper>
        <SectionTitle>Keyboard</SectionTitle>
        <RadioGroupSetting
          value={settings.keyboardShortcut}
          onValueChange={handleKeyboardChange}
          options={[
            {
              value: "default",
              label: "Send with Enter",
              subtitle: "Press Shift+Enter for New line",
              id: "keyboard-enter",
            },
            {
              value: "comfortable",
              label: "Send with Cmd+Enter",
              subtitle: "Press Enter for New line",
              id: "keyboard-cmd",
            },
          ]}
        />
      </SectionWrapper>

      <Separator />

      {/* Message Font Size */}
      <SectionWrapper>
        <SectionTitle>Font Size</SectionTitle>
        <SliderSetting
          label="Message Font Size"
          value={settings.messageFontSize[0]}
          onChange={handleSliderChange}
          min={12}
          max={20}
          step={1}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default GeneralSettings;
