import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Separator } from "./ui/separator";
import {
  At,
  CalendarBlank,
  GearSix,
  Phone,
  Info,
  Planet,
  Bell,
  Database,
  LockSimple,
  Folders,
  DeviceMobile,
  Translate,
  Sticker,
  Pencil,
  Backspace,
} from "phosphor-react";
import { ScrollArea } from "./ui/scroll-area";

const Settings = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="min-w-[350px]">
      <div className="flex w-full justify-between items-center px-4">
        <Backspace
          size={25}
          className="text-icon-foreground shrink-0"
          strokeWidth={1.5}
        />
        <h2 className="my-2  text-2xl font-bold tracking-tight  ">Settings</h2>
        <Pencil
          size={25}
          className="text-icon-foreground shrink-0"
          strokeWidth={1.5}
        />
      </div>

      <Separator />
      <ScrollArea className="h-[93dvh]  rounded-md">
        <div className="flex flex-col items-center gap-2 py-2">
          <Carousel
            plugins={[plugin.current]}
            className=" w-[70%] min-w-[250px] max-w-xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Separator />
        <div className="ms-4 flex flex-col gap-6 my-6 pr-4">
          <div className="flex items-center gap-7">
            <Phone
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <p className="text-16 ">+91 9080240564</p>
              <p className="text-muted-foreground text-sm">Phone</p>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <At
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />

            <div>
              <p className="text-16 ">@mr.360AndVk</p>
              <p className="text-muted-foreground text-sm">Username</p>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <Info
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <p className="text-[16px] line-clamp-2">
                dont bsjdbj sdbfj sbdjsbd kjbskjdbj jhjhjhj jhjh
                fgfgfhfhgjhghgjgjg more text that overflows the 2-line limit
                intentionally
              </p>
              <p className="text-muted-foreground text-sm">Bio</p>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <CalendarBlank
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <p className="text-[16px]">August 5 (22 years old)</p>
              <p className="text-muted-foreground text-sm">Date of Birth</p>
            </div>
          </div>
        </div>
        <Separator />
        <div className="ms-4 my-6 flex flex-col gap-6">
          <div className="flex gap-7 items-center">
            <GearSix
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <p className="text-[16px]">General Settings</p>
          </div>
          <div className="flex gap-7 items-center">
            <Planet
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <p className="text-[16px]">Animation and Performance</p>
          </div>
          <div className="flex gap-7 items-center">
            <Bell
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <p className="text-[16px]">Notification</p>
          </div>{" "}
          <div className="flex gap-7 items-center">
            <Database
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <p className="text-[16px]">Data and Storage</p>
          </div>{" "}
          <div className="flex gap-7 items-center">
            <LockSimple
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <p className="text-[16px]">Privacy and Security</p>
          </div>{" "}
          <div className="flex gap-7 items-center">
            <Folders
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <p className="text-[16px]">Chat Folders</p>
          </div>{" "}
          <div className="flex gap-7 items-center">
            <DeviceMobile
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <div className=" flex justify-between w-full">
              <p className="text-[16px]">Active Sessions</p>
              <p className="text-[16px] text-muted-foreground me-4">5</p>
            </div>
          </div>{" "}
          <div className="flex gap-7 items-center">
            <Translate
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <div className=" flex justify-between w-full">
              <p className="text-[16px]">Languages</p>
              <p className="text-[16px] text-muted-foreground me-4">English</p>
            </div>
          </div>{" "}
          <div className="flex gap-7 items-center">
            <Sticker
              size={30}
              className="text-icon-foreground shrink-0"
              strokeWidth={1.5}
            />
            <p className="text-[16px]">Stickers and Emoji</p>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Settings;
