"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";
import CircularIconButton from "./CircularIconButton";
import IconTextRow from "./IconTextRow";

export interface DropdownMenuItem {
  icon?: ReactNode;
  title: string;
  rightIcon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface DropdownMenuSection {
  items: DropdownMenuItem[];
}

interface GenericDropdownMenuProps {
  triggerIcon: ReactNode;
  sections: DropdownMenuSection[];
  menuWidth?: string;
  menuAlign?: "start" | "center" | "end";
  className?: string;
}

export function GenericDropdownMenu({
  triggerIcon,
  sections,
  menuWidth = "w-56",
  menuAlign = "start",
  className,
}: GenericDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CircularIconButton icon={triggerIcon} className={className} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={menuWidth} align={menuAlign}>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <DropdownMenuGroup>
              {section.items.map((item, itemIndex) => (
                <IconTextRow
                  key={itemIndex}
                  icon={item.icon}
                  title={item.title}
                  rightIcon={item.rightIcon}
                  onClick={item.onClick}
                />
              ))}
            </DropdownMenuGroup>
            {sectionIndex < sections.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
