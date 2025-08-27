import React from "react";
import SectionWrapper from "./shared/SectionWrapper";
import PageWrapper from "./shared/PageWrapper";
import ChatListItem from "./ChatListItem";
import { ChatData } from "@/utils/ChatData";

interface ChatSidebarProps {
  chats: ChatData[];
  onChatSelect?: (chatId: string) => void;
  searchPlaceholder?: string;
  className?: string;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ chats, onChatSelect }) => {
  return (
    <PageWrapper title="Chats" variant="full-width" showBackButton={false}>
      <SectionWrapper>
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            onClick={() => onChatSelect?.(chat.id)}
          />
        ))}
      </SectionWrapper>
    </PageWrapper>
  );
};

export default ChatSidebar;
