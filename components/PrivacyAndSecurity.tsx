import React, { useState } from "react";
import { UserMinus, Key, ShieldCheck } from "phosphor-react";
import { Separator } from "./ui/separator";
import CheckboxField from "./shared/CheckboxField";
import SectionTitle from "./shared/SectionTitle";
import IconTextRow from "./shared/IconTextRow";
import PageWrapper from "./shared/PageWrapper";
import SectionWrapper from "./shared/SectionWrapper";
import { useLeftPanel } from "@/contexts/LeftPanelContext";

interface PrivacySettingsState {
  show18PlusContent: boolean;
  showChatName: boolean;
}

const PrivacyAndSecurity: React.FC = () => {
  const { setLeftPanel } = useLeftPanel();
  const [settings, setSettings] = useState<PrivacySettingsState>({
    show18PlusContent: true,
    showChatName: true,
  });

  const handleSettingChange = (setting: keyof PrivacySettingsState) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  // const SettingItem: React.FC<{
  //   icon: React.ReactNode;
  //   title: string;
  //   subtitle: string;
  //   onClick?: () => void;
  // }> = ({ icon, title, subtitle, onClick }) => (
  //   <div
  //     className="flex items-center gap-4 py-3 cursor-pointer hover:bg-muted/50 px-2 rounded-md transition-colors"
  //     onClick={onClick}
  //   >
  //     <div className="flex-shrink-0 text-muted-foreground">{icon}</div>
  //     <div className="flex-1">
  //       <div className="text-[16px] font-medium">{title}</div>
  //       <div className="text-sm text-muted-foreground">{subtitle}</div>
  //     </div>
  //   </div>
  // );

  // const PrivacySettingItem: React.FC<{
  //   title: string;
  //   subtitle: string;
  //   onClick?: () => void;
  // }> = ({ title, subtitle, onClick }) => (
  //   <div
  //     className="flex flex-col gap-1 py-3 cursor-pointer hover:bg-muted/50  rounded-md transition-colors"
  //     onClick={onClick}
  //   >
  //     <div className="text-[16px] font-medium">{title}</div>
  //     <div className="text-sm text-muted-foreground">{subtitle}</div>
  //   </div>
  // );

  return (
    <PageWrapper
      title="Privacy and Security"
      variant="full-width"
      onBack={() => setLeftPanel("settings")}
    >
      {/* Security Section */}
      <SectionWrapper>
        <IconTextRow
          icon={<UserMinus size={24} />}
          title="Blocked Users"
          subtitle="5"
        />

        <IconTextRow
          icon={<Key size={24} />}
          title="Passcode Lock"
          subtitle="Off"
        />

        <IconTextRow
          icon={<ShieldCheck size={24} />}
          title="Two-Step Verification"
          subtitle="On"
        />
      </SectionWrapper>

      <Separator />

      {/* Privacy Section */}
      <SectionWrapper>
        <SectionTitle>Privacy</SectionTitle>

        <IconTextRow
          title="Who can see my phone number?"
          subtitle="My Contacts"
        />

        <IconTextRow
          title="Who can see my last seen time?"
          subtitle="My Contacts"
        />

        <IconTextRow
          title="Who can see my profile photos?"
          subtitle="My Contacts -1"
        />

        <IconTextRow title="Bio" subtitle="Everybody" />

        <IconTextRow title="Date of Birth" subtitle="My Contacts" />

        <IconTextRow title="Gifts" subtitle="Mini Apps" />

        <IconTextRow
          title="Who can add a link to my account when forwarding my messages?"
          subtitle="Everybody"
        />

        <IconTextRow title="Who can call me?" subtitle="Everybody" />

        <IconTextRow
          title="Who can send me voice or video messages?"
          subtitle="Everybody"
        />

        <IconTextRow title="Who can send me messages?" subtitle="Everybody" />

        <IconTextRow
          title="Who can add me to group chats?"
          subtitle="My Contacts"
        />
      </SectionWrapper>

      <Separator />

      {/* Sensitive Content Section */}
      <SectionWrapper>
        <SectionTitle>Sensitive content</SectionTitle>

        <CheckboxField
          id="show18PlusContent"
          checked={settings.show18PlusContent}
          onCheckedChange={() => handleSettingChange("show18PlusContent")}
          title="Show 18+ Content"
          description="Do not hide media that contains content suitable only for adults."
        />
      </SectionWrapper>

      <Separator />

      {/* Window Title Bar Section */}
      <SectionWrapper>
        <SectionTitle>Window title bar</SectionTitle>

        <CheckboxField
          id="showChatName"
          checked={settings.showChatName}
          onCheckedChange={() => handleSettingChange("showChatName")}
          title="Show chat name"
        />
      </SectionWrapper>

      <Separator />

      {/* Delete Account Section */}
      <SectionWrapper>
        <SectionTitle>Delete my account</SectionTitle>
        <IconTextRow title="If away for" rightContent="12 month" />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default PrivacyAndSecurity;
