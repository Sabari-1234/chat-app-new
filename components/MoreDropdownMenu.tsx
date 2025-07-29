"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { MdMenuOpen } from "react-icons/md";
import CircularIconButton from "./shared/CircularIconButton";
import { IoMdAdd } from "react-icons/io";
// import { FiPlayCircle } from "react-icons/fi";
import { IoMdSave } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdNightsStay } from "react-icons/md";
// import { MdAnimation } from "react-icons/md";
// import { MdQuestionMark } from "react-icons/md";
// import { IoMdBug } from "react-icons/io";
import { Switch } from "@/components/ui/switch";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function MoreDropdownMenu() {
  const nightModeSwitchRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme } = useTheme();

  const [isDark, setIsDark] = useState(false);
  const handleNightModeSwitch = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
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
        <DropdownMenuItem className="">
          <Image
            src="/images/logo.png"
            alt="QR Test Image"
            width={18}
            height={18}
            className="rounded-full size-9"
          />
          <p className="md:text-sm  text-[16px] overflow-hidden text-ellipsis whitespace-nowrap">
            {" "}
            Sabarinathan Shyguyguytguytuytuytuyt
          </p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="my-1">
          <IoMdAdd className=" size-6 text-icon-foreground" />

          <p className="md:text-sm md:ms-2 ms-3 text-[16px]"> Add Account</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="my-1">
            {/* */}
            <IoMdSave className=" size-6 text-icon-foreground" />
            {/* */}
            <p className="md:text-sm md:ms-2 ms-3 text-[16px]">
              {" "}
              Saved Messages
            </p>
          </DropdownMenuItem>
          <DropdownMenuItem className="my-1">
            <IoMdContacts className=" size-6 text-icon-foreground" />

            <p className="md:text-sm md:ms-2 ms-3 text-[16px]">Contacts</p>
          </DropdownMenuItem>
          {/* <DropdownMenuItem className="my-1">
            <FiPlayCircle className=" size-6 text-icon-foreground" />

            <p className="md:text-sm md:ms-2 ms-3 text-[16px]">My Stories</p>
          </DropdownMenuItem> */}
          <DropdownMenuItem className="my-1">
            <IoMdSettings className=" size-6 text-icon-foreground" />

            <p className="md:text-sm md:ms-2 ms-3 text-[16px]">Settings</p>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="my-1"
            onClick={(e) => handleNightModeSwitch(e)}
          >
            <div
              className="flex w-full items-center justify-between"
              onClick={(e) => e.preventDefault()}
            >
              <div className="flex items-center gap-2">
                <MdNightsStay className=" size-6 text-icon-foreground" />
                <p className="md:text-sm md:ms-2 ms-3 text-[16px] ">
                  {" "}
                  Night Mode
                </p>
              </div>
              <Switch
                ref={nightModeSwitchRef}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents parent click from firing when clicking the switch
                }}
                checked={isDark}
                onCheckedChange={handleToggle}
              />
            </div>
          </DropdownMenuItem>
          {/* <DropdownMenuItem className="my-1">
            <MdAnimation className=" size-6 text-icon-foreground" />

            <p className="md:text-sm md:ms-2 ms-3 text-[16px]"> Animation</p>
          </DropdownMenuItem>
          <DropdownMenuItem className="my-1">
            <MdQuestionMark className=" size-6 text-icon-foreground" />

            <p className="md:text-sm md:ms-2 ms-3 text-[16px]">Chat Features</p>
          </DropdownMenuItem>
          <DropdownMenuItem className="my-1">
            <IoMdBug className=" size-6 text-icon-foreground" />

            <p className="md:text-sm md:ms-2 ms-3 text-[16px]">Report Bug</p>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
