import React from "react";
import PageWrapper from "./shared/PageWrapper";
import { useLeftPanel } from "@/contexts/LeftPanelContext";
import UserInfo from "./shared/UserInfo";
import IconTextRow from "./shared/IconTextRow";
import { Icon } from "./shared/Icon";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import Tabs from "./Tabs";

const ChatInfo = () => {
  const { setLeftPanel } = useLeftPanel();
  return (
    <PageWrapper
      title="User Info"
      variant="between"
      showEditButton={true}
      onBack={() => setLeftPanel("chatSidebar")}
      onEdit={() => setLeftPanel("profileEdit")}
    >
      <UserInfo />
      <Separator />
      <IconTextRow
        icon={<Icon name="Bell" />}
        title="Notification"
        rightIcon={<Switch />}
      />
      <Separator />

      <Tabs />
    </PageWrapper>
  );
};

export default ChatInfo;
