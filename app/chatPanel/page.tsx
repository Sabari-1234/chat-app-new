"use client";
import ChatPanel from "@/pages/ChatPanel";
import { LeftPanelProvider } from "@/contexts/LeftPanelContext";

const page = () => {
  return (
    <LeftPanelProvider>
      <ChatPanel />
    </LeftPanelProvider>
  );
};

export default page;
