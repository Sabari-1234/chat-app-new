import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import SectionWrapper from "./SectionWrapper";
import { Text } from "./Text";

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
    <SectionWrapper
      variant={"rowCenterBetween"}
      className={cn("min-h-16 w-full md:mt-5", className)}
    >
      <SectionWrapper variant={"rowCenter"} className="w-[calc(100%-2.8rem)]">
        <Avatar>
          <AvatarImage
            src={avatar.src}
            alt={avatar.alt}
            className="md:size-12 size-10 rounded-full md:min-w-12 md:min-h-12 min-w-10 min-h-10"
          />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
        <Text variant={"large"} className="ms-2 truncate">
          {name}
        </Text>
      </SectionWrapper>
      {actions && (
        <SectionWrapper variant={"rowCenter"} className="gap-2">
          {actions}
        </SectionWrapper>
      )}
    </SectionWrapper>
  );
};

export default ChatHeader;
