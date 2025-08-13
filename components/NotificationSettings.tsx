import React, { useState } from "react";
import { Separator } from "./ui/separator";
import CheckboxField from "./shared/CheckboxField";
import SectionTitle from "./shared/SectionTitle";
import { Slider } from "./ui/slider";
import PageWrapper from "./shared/PageWrapper";
import SectionWrapper from "./shared/SectionWrapper";
import SliderSetting from "./shared/SliderSetting";
import { useLeftPanel } from "@/contexts/LeftPanelContext";

interface NotificationSettingsState {
  webNotifications: boolean;
  offlineNotifications: boolean;
  privateChatsNotifications: boolean;
  privateChatMessagePreview: boolean;
  groupNotifications: boolean;
  groupMessagePreview: boolean;
  channelNotifications: boolean;
  channelMessagePreview: boolean;
  contactJoinedTelegram: boolean;
}

const NotificationSettings: React.FC = () => {
  const { setLeftPanel } = useLeftPanel();
  const [soundVolume, setSoundVolume] = useState<number[]>([5]);

  const [settings, setSettings] = useState<NotificationSettingsState>({
    webNotifications: true,
    offlineNotifications: false,
    privateChatsNotifications: false,
    privateChatMessagePreview: false,
    groupNotifications: false,
    groupMessagePreview: false,
    channelNotifications: false,
    channelMessagePreview: false,
    contactJoinedTelegram: true,
  });

  const handleSettingChange = (setting: keyof NotificationSettingsState) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  return (
    <PageWrapper title="Notifications" variant="full-width" onBack={() => setLeftPanel("settings")}>
      {/* Web Notifications Section */}
      <SectionWrapper>
        <SectionTitle>Web Notifications</SectionTitle>

        <CheckboxField
          id="webNotifications"
          checked={settings.webNotifications}
          onCheckedChange={() => handleSettingChange("webNotifications")}
          title="Web Notifications"
          showEnabledStatus={true}
        />

        <CheckboxField
          id="offlineNotifications"
          checked={settings.offlineNotifications}
          onCheckedChange={() => handleSettingChange("offlineNotifications")}
          title="Offline Notifications"
          showEnabledStatus={true}
        />

        {/* Sound Volume Section */}
        <SliderSetting
          label="Sound volume"
          value={soundVolume[0]}
          min={0}
          max={10}
          step={1}
          onChange={setSoundVolume}
        />
      </SectionWrapper>

      <Separator />

      {/* Private Chats Section */}
      <SectionWrapper>
        <SectionTitle>Private Chats</SectionTitle>

        <CheckboxField
          id="privateChatsNotifications"
          checked={settings.privateChatsNotifications}
          onCheckedChange={() =>
            handleSettingChange("privateChatsNotifications")
          }
          title="Notifications for private chats"
          showEnabledStatus={true}
        />

        <CheckboxField
          id="privateChatMessagePreview"
          checked={settings.privateChatMessagePreview}
          onCheckedChange={() =>
            handleSettingChange("privateChatMessagePreview")
          }
          title="Message Preview"
          showEnabledStatus={true}
        />
      </SectionWrapper>

      <Separator />

      {/* Groups Section */}
      <SectionWrapper>
        <SectionTitle>Groups</SectionTitle>

        <CheckboxField
          id="groupNotifications"
          checked={settings.groupNotifications}
          onCheckedChange={() => handleSettingChange("groupNotifications")}
          title="Notifications for groups"
          showEnabledStatus={true}
        />

        <CheckboxField
          id="groupMessagePreview"
          checked={settings.groupMessagePreview}
          onCheckedChange={() => handleSettingChange("groupMessagePreview")}
          title="Message Preview"
          showEnabledStatus={true}
        />
      </SectionWrapper>

      <Separator />

      {/* Channels Section */}
      <SectionWrapper>
        <SectionTitle>Channels</SectionTitle>

        <CheckboxField
          id="channelNotifications"
          checked={settings.channelNotifications}
          onCheckedChange={() => handleSettingChange("channelNotifications")}
          title="Notifications for channels"
          showEnabledStatus={true}
        />

        <CheckboxField
          id="channelMessagePreview"
          checked={settings.channelMessagePreview}
          onCheckedChange={() => handleSettingChange("channelMessagePreview")}
          title="Message Preview"
          showEnabledStatus={true}
        />
      </SectionWrapper>

      <Separator />

      {/* Other Section */}
      <SectionWrapper>
        <SectionTitle>Other</SectionTitle>

        <CheckboxField
          id="contactJoinedTelegram"
          checked={settings.contactJoinedTelegram}
          onCheckedChange={() => handleSettingChange("contactJoinedTelegram")}
          title="Contact joined Telegram"
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default NotificationSettings;
