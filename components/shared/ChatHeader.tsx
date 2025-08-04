import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

interface ChatHeaderProps {
  avatar: {
    src?: string;
    alt?: string;
    fallback: string;
  };
  name: string;
  actions?: React.ReactNode;
  className?: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  avatar,
  name,
  actions,
  className,
}) => {
  return (
    <div
      className={cn(
        "min-h-16 w-full flex items-center justify-between md:mt-5",
        className
      )}
    >
      <div className="flex items-center w-[calc(100%-2.8rem)]">
        <Avatar>
          <AvatarImage
            src={avatar.src}
            alt={avatar.alt}
            className="md:size-12 size-10 rounded-full md:min-w-12 md:min-h-12 min-w-10 min-h-10"
          />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
        <p className="ms-2 overflow-hidden text-ellipsis whitespace-nowrap text-lg inline">
          {name}
        </p>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
};

export default ChatHeader;
