import React from "react";
import ChatHeader from "./shared/ChatHeader";
import MoreOptions from "./chatPage/MoreOptions";
import { Separator } from "./ui/separator";
import CircularIconButton from "./shared/CircularIconButton";
import { BsEmojiWink, BsSend } from "react-icons/bs";
import { Textarea } from "./ui/textarea";
import Attachments from "./chatPage/Attachments";

const ChatPage = () => {
  return (
    <div className="flex flex-col items-center w-[95%]  md:w-[80%]  min-w-[350px] max-h-[100dvh]">
      <ChatHeader
        avatar={{
          src: "https://github.com/shadcn.png",
          alt: "@shadcn",
          fallback: "CN",
        }}
        name="sabarinathanhsdghsdgsdbnsvdhdsvbvdfvdghvfhdvfhdvfhvdbfhdsbfhbdshfgh"
        actions={<MoreOptions />}
      />
      <Separator />
      <div className="transition-all duration-300 w-full overflow-y-auto pt-4 h-[85vh]">
        <div className=" w-full flex flex-col items-start">
          <p className="text-left border w-fit p-2 rounded-lg">
            hello how are you
          </p>
          <div className=" border-l h-3 transform rotate-300 origin-top-left"></div>
        </div>
        <div className=" w-full flex flex-col items-end">
          <p className="text-right border w-fit p-2 rounded-lg">
            hello how are you
          </p>
          <div className=" border-l h-3 transform rotate-60 origin-top-right"></div>
        </div>
      </div>

      <Separator />
      <div className="w-full relative flex items-center">
        <CircularIconButton
          icon={<BsEmojiWink />}
          className="absolute md:bottom-[3.3rem] bottom-[1.7rem] left-2"
        />
        <Textarea
          placeholder="Type your message here."
          className=" max-h-40 resize-none md:mb-11 mb-5 mt-2 md:py-4 py-3 px-12 w-[calc(100%-2.8rem)]"
        />
        {/* <CircularIconButton
                icon={<RiAttachment2 />}
                className="absolute md:bottom-[3.4rem] bottom-[1.7rem] right-13"
              /> */}
        <Attachments />
        <CircularIconButton
          icon={<BsSend />}
          className="absolute right-0 md:bottom-[3.3rem] bottom-[1.7rem]"
        />
      </div>
    </div>
  );
};

export default ChatPage;
