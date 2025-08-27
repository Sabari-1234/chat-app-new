import React from "react";
import Image from "next/image";
import IconTextRow from "./shared/IconTextRow";
import { ChatData } from "@/utils/ChatData";

// import IconTextRow from "./shared/IconTextRow";

interface ChatListItemProps {
  chat: ChatData;
  onClick?: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chat, onClick }) => {
  return (
    // <React.Fragment>
    //   <div
    //     className="flex items-center gap-2 w-full overflow-hidden cursor-pointer"
    //     onClick={onClick}
    //   >
    //     <Image
    //       src={avatar.src}
    //       alt={avatar.alt}
    //       width={40}
    //       height={40}
    //       className="rounded-full"
    //     />
    //     <div className="max-w-full overflow-hidden flex-shrink min-w-0 flex flex-col gap-1">
    //       <div className="flex gap-2 justify-between">
    //         <h4 className=" font-semibold tracking-tight overflow-hidden text-ellipsis whitespace-nowrap">
    //           {name}
    //         </h4>
    //         <p className="text-muted-foreground text-sm block whitespace-nowrap">
    //           {timestamp}
    //         </p>
    //       </div>
    //       <div className="flex gap-2 justify-between">
    //         <p className="text-muted-foreground text-sm overflow-hidden text-ellipsis whitespace-nowrap">
    //           {lastMessage}
    //         </p>
    //         {unreadCount && (
    //           <p className="text-sm font-semibold text-highlight-foreground">
    //             {unreadCount}
    //           </p>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // <IconTextRow  icon={ <Image
    //     src={avatar.src}
    //     alt={avatar.alt}
    //     width={40}
    //     height={40}
    //     className="rounded-full"
    //   />} title={name} rightContent={timestamp} subtitle={lastMessage} subTitleRightContent={unreadCount}/>
    //   <Separator className="my-4" />
    // </React.Fragment>

    <div key={chat.id}>
      <IconTextRow
        icon={
          <Image
            src={chat.avatar.src}
            alt={chat.avatar.alt}
            width={40}
            height={40}
            className="rounded-full"
          />
        }
        title={chat.name}
        rightContent={chat.timestamp}
        subtitle={chat.lastMessage}
        subTitleRightContent={chat.unreadCount}
        onClick={onClick}
      />
    </div>
  );
};

export default ChatListItem;
