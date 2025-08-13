import React, { useState } from "react";
import { Separator } from "./ui/separator";
import CheckboxField from "./shared/CheckboxField";
import SectionTitle from "./shared/SectionTitle";
import PageWrapper from "./shared/PageWrapper";
import SectionWrapper from "./shared/SectionWrapper";
import SliderSetting from "./shared/SliderSetting";
import { useLeftPanel } from "@/contexts/LeftPanelContext";

interface DataAndStorageSettingsState {
  autoDownloadPhotos: {
    contacts: boolean;
    otherPrivateChats: boolean;
    groupChats: boolean;
    channels: boolean;
  };
  autoDownloadVideosAndGifs: {
    contacts: boolean;
    otherPrivateChats: boolean;
    groupChats: boolean;
    channels: boolean;
  };
  autoDownloadFiles: {
    contacts: boolean;
    otherPrivateChats: boolean;
    groupChats: boolean;
    channels: boolean;
  };
}

const DataAndStorageSettings: React.FC = () => {
  const { setLeftPanel } = useLeftPanel();
  const [maximumFileSize, setMaximumFileSize] = useState<number[]>([10]);

  const [settings, setSettings] = useState<DataAndStorageSettingsState>({
    autoDownloadPhotos: {
      contacts: false,
      otherPrivateChats: false,
      groupChats: false,
      channels: false,
    },
    autoDownloadVideosAndGifs: {
      contacts: false,
      otherPrivateChats: false,
      groupChats: false,
      channels: false,
    },
    autoDownloadFiles: {
      contacts: false,
      otherPrivateChats: false,
      groupChats: false,
      channels: false,
    },
  });

  const handleSettingChange = (
    category: keyof DataAndStorageSettingsState,
    setting: string
  ) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]:
          !prev[category][setting as keyof (typeof prev)[typeof category]],
      },
    }));
  };

  const getFileSizeText = (size: number) => {
    return `up to ${size} MB`;
  };

  return (
    <PageWrapper title="Data and Storage" variant="full-width" onBack={() => setLeftPanel("settings")}>
      {/* Auto-download photos Section */}
      <SectionWrapper>
        <SectionTitle>Auto-download photos</SectionTitle>

        <CheckboxField
          id="contacts-photos"
          checked={settings.autoDownloadPhotos.contacts}
          onCheckedChange={() =>
            handleSettingChange("autoDownloadPhotos", "contacts")
          }
          title="Contacts"
        />

        <CheckboxField
          id="other-private-chats-photos"
          checked={settings.autoDownloadPhotos.otherPrivateChats}
          onCheckedChange={() =>
            handleSettingChange("autoDownloadPhotos", "otherPrivateChats")
          }
          title="Other Private Chats"
        />

        <CheckboxField
          id="group-chats-photos"
          checked={settings.autoDownloadPhotos.groupChats}
          onCheckedChange={() =>
            handleSettingChange("autoDownloadPhotos", "groupChats")
          }
          title="Group Chats"
        />

        <CheckboxField
          id="channels-photos"
          checked={settings.autoDownloadPhotos.channels}
          onCheckedChange={() =>
            handleSettingChange("autoDownloadPhotos", "channels")
          }
          title="Channels"
        />
      </SectionWrapper>

      <Separator />

      {/* Auto-download videos and GIFs Section */}
      <SectionWrapper>
        <SectionTitle>Auto-download videos and GIFs</SectionTitle>

        <CheckboxField
          id="contacts-videos"
          checked={settings.autoDownloadVideosAndGifs.contacts}
          onCheckedChange={() =>
            handleSettingChange("autoDownloadVideosAndGifs", "contacts")
          }
          title="Contacts"
        />

        <CheckboxField
          id="other-private-chats-videos"
          checked={settings.autoDownloadVideosAndGifs.otherPrivateChats}
          onCheckedChange={() =>
            handleSettingChange(
              "autoDownloadVideosAndGifs",
              "otherPrivateChats"
            )
          }
          title="Other Private Chats"
        />

        <CheckboxField
          id="group-chats-videos"
          checked={settings.autoDownloadVideosAndGifs.groupChats}
          onCheckedChange={() =>
            handleSettingChange("autoDownloadVideosAndGifs", "groupChats")
          }
          title="Group Chats"
        />

        <CheckboxField
          id="channels-videos"
          checked={settings.autoDownloadVideosAndGifs.channels}
          onCheckedChange={() =>
            handleSettingChange("autoDownloadVideosAndGifs", "channels")
          }
          title="Channels"
        />
      </SectionWrapper>

      <Separator />

      {/* Auto-download files Section */}
      <SectionWrapper>
        <SectionTitle>Auto-download files</SectionTitle>

        <CheckboxField
          id="contacts-files"
          checked={settings.autoDownloadFiles.contacts}
          onCheckedChange={() =>
            handleSettingChange("autoDownloadFiles", "contacts")
          }
          title="Contacts"
        />

        <CheckboxField
          id="other-private-chats-files"
          checked={settings.autoDownloadFiles.otherPrivateChats}
          onCheckedChange={() =>
            handleSettingChange("autoDownloadFiles", "otherPrivateChats")
          }
          title="Other Private Chats"
        />

        <CheckboxField
          id="group-chats-files"
          checked={settings.autoDownloadFiles.groupChats}
          onCheckedChange={() =>
            handleSettingChange("autoDownloadFiles", "groupChats")
          }
          title="Group Chats"
        />

        <CheckboxField
          id="channels-files"
          checked={settings.autoDownloadFiles.channels}
          onCheckedChange={() =>
            handleSettingChange("autoDownloadFiles", "channels")
          }
          title="Channels"
        />
      </SectionWrapper>

      <Separator />

      {/* Maximum file size Section */}
      <SliderSetting
        label="Maximum file size"
        value={maximumFileSize[0]}
        onChange={setMaximumFileSize}
        min={1}
        max={100}
        step={1}
      />
    </PageWrapper>
  );
};

export default DataAndStorageSettings;
