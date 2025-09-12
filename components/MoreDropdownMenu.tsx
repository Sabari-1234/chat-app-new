"use client";
import Image from "next/image";
import { MdMenuOpen } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLeftPanel } from "@/contexts/LeftPanelContext";
import { Icon } from "./shared/Icon";
import {
  GenericDropdownMenu,
  DropdownMenuSection,
} from "./shared/GenericDropdownMenu";

export function MoreDropdownMenu() {
  const nightModeSwitchRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme } = useTheme();
  const { setLeftPanel } = useLeftPanel();

  const [isDark, setIsDark] = useState(false);

  const handleNightModeSwitch = () => {
    if (nightModeSwitchRef.current) {
      nightModeSwitchRef.current?.click();
    }
  };

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const handleToggle = (value: boolean) => {
    setTheme(value ? "dark" : "light");
    setIsDark(value);
  };

  const sections: DropdownMenuSection[] = [
    {
      items: [
        {
          icon: (
            <Image
              src="/images/logo.png"
              alt="QR Test Image"
              width={18}
              height={18}
              className="rounded-full size-8"
            />
          ),
          title: "Sabarinathan Shyguyguytguytuytuytuyt",
        },
      ],
    },
    {
      items: [
        {
          icon: <Icon name="Plus" />,
          title: "Add Account",
        },
      ],
    },
    {
      items: [
        {
          icon: <Icon name="FileArrowDown" />,
          title: "Saved Messages",
        },
        {
          icon: <Icon name="UserCircle" />,
          title: "Contacts",
        },
        {
          icon: <Icon name="Book" />,
          title: "My Stories",
        },
        {
          icon: <Icon name="GearSix" />,
          title: "Settings",
          onClick: () => setLeftPanel("settings"),
        },
        {
          icon: <Icon name="CloudMoon" />,
          title: "Night Mode",
          rightIcon: (
            <Switch
              ref={nightModeSwitchRef}
              onClick={(e) => {
                e.stopPropagation();
              }}
              checked={isDark}
              onCheckedChange={handleToggle}
            />
          ),
          onClick: handleNightModeSwitch,
        },
      ],
    },
  ];

  return (
    <GenericDropdownMenu triggerIcon={<MdMenuOpen />} sections={sections} />
  );
}
