import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import SettingsPageHeader from "./SettingsPageHeader";
import SectionWrapper from "./SectionWrapper";
import { MoreDropdownMenu } from "../MoreDropdownMenu";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { useViewportHeight } from "@/hooks/useViewportHeight";

interface PageWrapperProps {
  title: string;
  variant?: "full-width" | "between";
  showEditButton?: boolean;
  showBackButton?: boolean;
  onBack?: () => void;
  onEdit?: () => void;
  children: React.ReactNode;
  searchPlaceholder?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  title,
  variant = "full-width",
  showEditButton = false,
  showBackButton = true,
  onBack,
  onEdit,
  children,
  searchPlaceholder = "Search",
}) => {
  const viewportHeight = useViewportHeight();

  return (
    <div
      className="min-w-[300px] flex flex-col"
      style={{ height: viewportHeight }}
    >
      <SettingsPageHeader
        title={title}
        variant={variant}
        showEditButton={showEditButton}
        showBackButton={showBackButton}
        onBack={onBack}
        onEdit={onEdit}
      />
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full rounded-md px-2">
          <SectionWrapper className="gap-4 my-4">{children}</SectionWrapper>
        </ScrollArea>
      </div>
      <Separator />
      <SectionWrapper
        variant={"row_Between"}
        className="w-full py-3 gap-2 px-4"
      >
        <MoreDropdownMenu />
        <Input type="text" placeholder={searchPlaceholder} />
      </SectionWrapper>
    </div>
  );
};

export default PageWrapper;
