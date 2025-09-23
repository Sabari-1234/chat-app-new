import React from "react";
import { Separator } from "./ui/separator";
import { Icon } from "./shared/Icon";
import IconTextRow from "./shared/IconTextRow";
import PageWrapper from "./shared/PageWrapper";
import SectionWrapper from "./shared/SectionWrapper";
import { useLeftPanel } from "@/contexts/LeftPanelContext";
import UserInfo from "./shared/UserInfo";

const Settings = () => {
  const { setLeftPanel } = useLeftPanel();

  return (
    <PageWrapper
      title="Settings"
      variant="between"
      showEditButton={true}
      onBack={() => setLeftPanel("chatSidebar")}
      onEdit={() => setLeftPanel("profileEdit")}
    >
      <UserInfo />
      <Separator />
      <SectionWrapper>
        <IconTextRow
          icon={<Icon name="GearSix" />}
          title="General Settings"
          onClick={() => setLeftPanel("generalSettings")}
        />
        <IconTextRow
          icon={<Icon name="Planet" />}
          title="Animation and Performance"
          onClick={() => setLeftPanel("animationSettings")}
        />
        <IconTextRow
          icon={<Icon name="Bell" />}
          title="Notification"
          onClick={() => setLeftPanel("notificationSettings")}
        />
        <IconTextRow
          icon={<Icon name="Database" />}
          title="Data and Storage"
          onClick={() => setLeftPanel("dataAndStorageSettings")}
        />
        <IconTextRow
          icon={<Icon name="LockSimple" />}
          title="Privacy and Security"
          onClick={() => setLeftPanel("privacyAndSecurity")}
        />
        <IconTextRow
          icon={<Icon name="Folders" />}
          title="Chat Folders"
          onClick={() => setLeftPanel("chatFolder")}
        />
        <IconTextRow
          icon={<Icon name="DeviceMobile" />}
          title="Active Sessions"
          rightContent={<span className="text-[16px]">5</span>}
          onClick={() => setLeftPanel("devicesSettings")}
        />
        <IconTextRow
          icon={<Icon name="Translate" />}
          title="Languages"
          rightContent={<span className="text-[16px]">English</span>}
          onClick={() => setLeftPanel("languageSettings")}
        />
        <IconTextRow
          icon={<Icon name="Sticker" />}
          title="Stickers and Emoji"
          onClick={() => setLeftPanel("stickerAndEmoji")}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Settings;
