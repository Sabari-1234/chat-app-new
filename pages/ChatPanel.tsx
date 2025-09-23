"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ChatSidebar from "@/components/ChatSidebar";
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
import { useLeftPanel } from "@/contexts/LeftPanelContext";
import AnimatedLeftPanel from "@/components/shared/AnimatedLeftPanel";
import LanguageSettings from "@/components/LanguageSettings";
import StickerAndEmoji from "@/components/StickerAndEmoji";
import ChatPage from "@/components/ChatPage";
import ChatInfo from "@/components/ChatInfo";

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
  const { leftPanel } = useLeftPanel();

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
          <div className="relative w-full h-full">
            <AnimatedLeftPanel panelKey={leftPanel || "chatSidebar"}>
              {(() => {
                switch (leftPanel) {
                  case "settings":
                    return <Settings />;
                  case "profileEdit":
                    return <ProfileEdit />;
                  case "generalSettings":
                    return <GeneralSettings />;
                  case "animationSettings":
                    return <AnimationSettings />;
                  case "notificationSettings":
                    return <NotificationSettings />;
                  case "dataAndStorageSettings":
                    return <DataAndStorageSettings />;
                  case "privacyAndSecurity":
                    return <PrivacyAndSecurity />;
                  case "chatFolder":
                    return <ChatFolder />;
                  case "devicesSettings":
                    return <DevicesSettings />;
                  case "languageSettings":
                    return <LanguageSettings />;
                  case "stickerAndEmoji":
                    return <StickerAndEmoji />;
                  default:
                    return (
                      <ChatSidebar
                        chats={chatData}
                        onChatSelect={(chatId) =>
                          console.log("Selected chat:", chatId)
                        }
                      />
                    );
                }
              })()}
            </AnimatedLeftPanel>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          defaultSize={100 - 2 * panelSize}
          className="flex justify-center"
        >
          <ChatPage />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={panelSize}>
          <ChatInfo />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ChatPanel;
