import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { MoreDropdownMenu } from "@/components/MoreDropdownMenu";
import ChatListItem from "./ChatListItem";
import { cn } from "@/lib/utils";

interface ChatData {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  avatar: {
    src: string;
    alt: string;
  };
}

interface ChatSidebarProps {
  chats: ChatData[];
  onChatSelect?: (chatId: string) => void;
  searchPlaceholder?: string;
  className?: string;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  chats,
  onChatSelect,
  searchPlaceholder = "Search",
  className,
}) => {
  return (
    <div
      className={cn(
        "h-full items-center justify-center p-6 min-w-[260px]",
        className
      )}
    >
      <div>
        <div className="flex w-full justify-between pb-3 gap-2">
          <MoreDropdownMenu />
          <Input type="text" placeholder={searchPlaceholder} />
        </div>
      </div>
      <Separator />
      <ScrollArea className="h-[95%]  rounded-md pt-4">
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            avatar={chat.avatar}
            name={chat.name}
            lastMessage={chat.lastMessage}
            timestamp={chat.timestamp}
            unreadCount={chat.unreadCount}
            onClick={() => onChatSelect?.(chat.id)}
          />
        ))}
      </ScrollArea>
    </div>
  );
};

export default ChatSidebar;
