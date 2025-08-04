"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import ChatHeader from "@/components/shared/ChatHeader";
import { AiOutlineMore } from "react-icons/ai";
import { BsEmojiWink } from "react-icons/bs";
import { RiAttachment2 } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import ChatSidebar from "@/components/ChatSidebar";
import CircularIconButton from "@/components/shared/CircularIconButton";
import { useMediaQuery } from "usehooks-ts";
import ProfileEdit from "@/components/ProfileEdit";
import Settings from "@/components/Settings";
import GeneralSettings from "@/components/GeneralSettings";
import AnimationSettings from "@/components/AnimationSettings";
import NotificationSettings from "@/components/NotificationSettings";
import DataAndStorageSettings from "@/components/DataAndStorageSettings";
import PrivacyAndSecurity from "@/components/PrivacyAndSecurity";
import ChatFolder from "@/components/ChatFolder";
import DevicesSettings from "@/components/DevicesSettings";

const chatData = Array.from({ length: 50 }).map((_, i) => ({
  id: `chat-${i}`,
  name: `v1.2.0-betasxbsjbdjdjhdjsjdshdjhsjdhsjhdjshdjshdjshdjhsjdhsjhdjshdjshdjshjdh.${
    50 - i
  }`,
  lastMessage: `v1.2.0-betasxbsjbdjdjhdjsjdshdjhsjdhsjhdjshdjshdjshdjhsjdhsjhdjshdjshdjshjdh.${
    50 - i
  }`,
  timestamp: "12:30 AM",
  unreadCount: 127,
  avatar: {
    src: "/images/logo.png",
    alt: "QR Test Image",
  },
}));

const ChatPanel: React.FC = () => {
  const [panelSize, setPanelSize] = useState(0);
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1300px)");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const initialHeightRef = useRef<number | null>(null);

  useEffect(() => {
    let newSize: number | null = null;
    if (isMobile) newSize = 100;
    else if (isTablet) newSize = 38;
    else newSize = 25;
    setPanelSize((prevSize) => (prevSize === newSize ? prevSize : newSize));
  }, [isMobile, isTablet]);

  useEffect(() => {
    // Store the initial viewport height
    initialHeightRef.current = window.visualViewport?.height || null;

    const handleResize = () => {
      const currentHeight = window.visualViewport?.height;
      const initialHeight = initialHeightRef.current;

      if (initialHeight && currentHeight && currentHeight < initialHeight) {
        const kbHeight = initialHeight - currentHeight;
        setKeyboardHeight(kbHeight);
      } else {
        setKeyboardHeight(0); // Keyboard likely hidden
      }
    };

    window.visualViewport?.addEventListener("resize", handleResize);

    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  // Avoid rendering until client-side check is done
  if (panelSize === 0) return null;

  return (
    <div
      className="relative"
      style={{ height: `calc(100dvh - ${keyboardHeight}px)` }}
    >
      <ResizablePanelGroup
        direction="horizontal"
        className=" rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel key={panelSize} defaultSize={panelSize}>
          {/* <ChatSidebar
            chats={chatData}
            onChatSelect={(chatId) => console.log("Selected chat:", chatId)}
          /> */}
          {/* <Settings /> */}
          {/* <ProfileEdit /> */}
          {/* <GeneralSettings /> */}
          {/* <AnimationSettings /> */}
          {/* <NotificationSettings /> */}
          {/* <DataAndStorageSettings /> */}
          {/* <PrivacyAndSecurity /> */}
          {/* <ChatFolder /> */}
          <DevicesSettings />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          defaultSize={100 - panelSize}
          className="flex justify-center"
        >
          <div className="flex flex-col items-center xl:w-[50%] lg:w-[60%] md:w-[80%]  w-[90%] max-h-[100dvh] min-w-[350px]">
            <ChatHeader
              avatar={{
                src: "https://github.com/shadcn.png",
                alt: "@shadcn",
                fallback: "CN",
              }}
              name="sabarinathanhsdghsdgsdbnsvdhdsvbvdfvdghvfhdvfhdvfhvdbfhdsbfhbdshfgh"
              actions={
                <CircularIconButton
                  icon={<AiOutlineMore size={25} strokeWidth={3} />}
                />
              }
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
                className="absolute md:bottom-[3.4rem] bottom-[1.7rem] left-2"
              />
              <Textarea
                placeholder="Type your message here."
                className=" max-h-40 resize-none md:mb-11 mb-5 mt-2 md:py-4 py-3 px-12 w-[calc(100%-2.8rem)]"
              />
              <CircularIconButton
                icon={<RiAttachment2 />}
                className="absolute md:bottom-[3.4rem] bottom-[1.7rem] right-13"
              />
              <CircularIconButton
                icon={<BsSend />}
                className="absolute right-0 md:bottom-[3.4rem] bottom-[1.7rem]"
              />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ChatPanel;
