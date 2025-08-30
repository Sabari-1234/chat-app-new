"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { MdMenuOpen } from "react-icons/md";
import CircularIconButton from "./shared/CircularIconButton";

import { Switch } from "@/components/ui/switch";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLeftPanel } from "@/contexts/LeftPanelContext";
import IconTextRow from "./shared/IconTextRow";
import {
  Book,
  CloudMoon,
  FileArrowDown,
  GearSix,
  Plus,
  UserCircle,
} from "phosphor-react";

export function MoreDropdownMenu() {
  const nightModeSwitchRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme } = useTheme();
  const { setLeftPanel } = useLeftPanel();

  const [isDark, setIsDark] = useState(false);
  const handleNightModeSwitch = () => {
    if (nightModeSwitchRef.current) {
      nightModeSwitchRef.current?.click(); // Programmatically trigger click
    }
  };
  // Sync the switch state with the current theme
  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const handleToggle = (value: boolean) => {
    setTheme(value ? "dark" : "light");
    setIsDark(value);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CircularIconButton icon={<MdMenuOpen />} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <IconTextRow
          icon={
            <Image
              src="/images/logo.png"
              alt="QR Test Image"
              width={18}
              height={18}
              className="rounded-full size-8"
            />
          }
          title="Sabarinathan Shyguyguytguytuytuytuyt"
        />
        <DropdownMenuSeparator />
        <IconTextRow icon={<Plus size={24} />} title="Add Account" />
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <IconTextRow
            icon={<FileArrowDown size={24} />}
            title="Saved Messages"
          />

          <IconTextRow icon={<UserCircle size={24} />} title="Contacts" />
          <IconTextRow icon={<Book size={24} />} title="My Stories" />
          <IconTextRow
            icon={<GearSix size={24} />}
            title="Settings"
            onClick={() => setLeftPanel("settings")}
          />
          <IconTextRow
            icon={<CloudMoon size={24} />}
            title="Night Mode"
            rightIcon={
              <Switch
                ref={nightModeSwitchRef}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents parent click from firing when clicking the switch
                }}
                checked={isDark}
                onCheckedChange={handleToggle}
              />
            }
            onClick={handleNightModeSwitch}
          />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
