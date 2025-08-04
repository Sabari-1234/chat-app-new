import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import SettingsPageHeader from "./SettingsPageHeader";

interface PageWrapperProps {
  title: string;
  variant?: "full-width" | "between";
  showEditButton?: boolean;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  title,
  variant = "full-width",
  showEditButton = false,
  children,
}) => {
  return (
    <div className="min-w-[300px]">
      <SettingsPageHeader
        title={title}
        variant={variant}
        showEditButton={showEditButton}
      />
      <ScrollArea className="h-[90dvh] rounded-md px-6">
        <div className="flex flex-col gap-4 my-2">{children}</div>
      </ScrollArea>
    </div>
  );
};

export default PageWrapper;
