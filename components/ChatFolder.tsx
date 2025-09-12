import React from "react";
import PageWrapper from "./shared/PageWrapper";
import { useLeftPanel } from "@/contexts/LeftPanelContext";
import SectionWrapper from "./shared/SectionWrapper";
import SectionTitle from "./shared/SectionTitle";
import SecondarySectionHeading from "./shared/SecondarySectionHeading";
import IconTextRow from "./shared/IconTextRow";
import { Icon } from "./shared/Icon";

const ChatFolder = () => {
  const { setLeftPanel } = useLeftPanel();
  const folders = [
    {
      id: 1,
      title: "All Chats",
      subtitle: "Includes all your chats",
    },
    {
      id: 2,
      title: "All Chats",
      subtitle: "Includes all your chats",
    },
    {
      id: 3,
      title: "All Chats",
      subtitle: "Includes all your chats",
    },
    {
      id: 4,
      title: "All Chats",
      subtitle: "Includes all your chats",
    },
    {
      id: 5,
      title: "All Chats",
      subtitle: "Includes all your chats",
    },
  ];
  return (
    <PageWrapper
      title="Chat Folders"
      variant="full-width"
      onBack={() => setLeftPanel("settings")}
    >
      <SectionWrapper>
        <SectionTitle rightIconName="Plus">Folders</SectionTitle>
        <SecondarySectionHeading>
          Create folders for different groups of chats and quickly switch
          between them.
        </SecondarySectionHeading>
        {folders.map((folder) => (
          <IconTextRow
            key={folder.id}
            title={folder.title}
            subtitle={folder.subtitle}
            rightIcon={<Icon name="DotsThreeVertical" />}
          />
        ))}
      </SectionWrapper>
      {/* <Separator />
      <SectionWrapper>
        <IconTextRow icon={<Icon name="Plus" />} title={"Create New Folder"} />
      </SectionWrapper> */}
    </PageWrapper>
  );
};

export default ChatFolder;
