import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface ChatListItemProps {
  avatar: {
    src: string;
    alt: string;
  };
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  onClick?: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  avatar,
  name,
  lastMessage,
  timestamp,
  unreadCount,
  onClick,
}) => {
  return (
    <React.Fragment>
      <div className="flex items-center gap-2 w-full overflow-hidden" onClick={onClick}>
        <Image
          src={avatar.src}
          alt={avatar.alt}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="max-w-full overflow-hidden flex-shrink min-w-0 flex flex-col gap-1">
          <div className="flex gap-2 justify-between">
            <h4 className=" font-semibold tracking-tight overflow-hidden text-ellipsis whitespace-nowrap">
              {name}
            </h4>
            <p className="text-muted-foreground text-sm block whitespace-nowrap">
              {timestamp}
            </p>
          </div>
          <div className="flex gap-2 justify-between">
            <p className="text-muted-foreground text-sm overflow-hidden text-ellipsis whitespace-nowrap">
              {lastMessage}
            </p>
            {unreadCount && (
              <p className="text-sm font-semibold text-highlight-foreground">
                {unreadCount}
              </p>
            )}
          </div>
        </div>
      </div>
      <Separator className="my-4" />
    </React.Fragment>
  );
};

export default ChatListItem;