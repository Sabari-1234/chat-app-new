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
} from "phosphor-react";
import { ScrollArea } from "./ui/scroll-area";
import IconTextRow from "./shared/IconTextRow";
import SettingsPageHeader from "./shared/SettingsPageHeader";

const Settings = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="min-w-[350px]">
      <SettingsPageHeader 
        title="Settings" 
        variant="between" 
        showEditButton={true}
      />
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
          <IconTextRow
            icon={<Phone size={30} strokeWidth={1.5} />}
            title="+91 9080240564"
            subtitle="Phone"
          />
          <IconTextRow
            icon={<At size={30} strokeWidth={1.5} />}
            title="@mr.360AndVk"
            subtitle="Username"
          />
          <IconTextRow
            icon={<Info size={30} strokeWidth={1.5} />}
            title="dont bsjdbj sdbfj sbdjsbd kjbskjdbj jhjhjhj jhjh fgfgfhfhgjhghgjgjg more text that overflows the 2-line limit intentionally"
            subtitle="Bio"
          />
          <IconTextRow
            icon={<CalendarBlank size={30} strokeWidth={1.5} />}
            title="August 5 (22 years old)"
            subtitle="Date of Birth"
          />
        </div>
        <Separator />
        <div className="ms-4 my-6 flex flex-col gap-6">
          <IconTextRow
            icon={<GearSix size={30} strokeWidth={1.5} />}
            title="General Settings"
            onClick={() => console.log('General Settings clicked')}
          />
          <IconTextRow
            icon={<Planet size={30} strokeWidth={1.5} />}
            title="Animation and Performance"
            onClick={() => console.log('Animation Settings clicked')}
          />
          <IconTextRow
            icon={<Bell size={30} strokeWidth={1.5} />}
            title="Notification"
            onClick={() => console.log('Notification clicked')}
          />
          <IconTextRow
            icon={<Database size={30} strokeWidth={1.5} />}
            title="Data and Storage"
            onClick={() => console.log('Data and Storage clicked')}
          />
          <IconTextRow
            icon={<LockSimple size={30} strokeWidth={1.5} />}
            title="Privacy and Security"
            onClick={() => console.log('Privacy clicked')}
          />
          <IconTextRow
            icon={<Folders size={30} strokeWidth={1.5} />}
            title="Chat Folders"
            onClick={() => console.log('Chat Folders clicked')}
          />
          <IconTextRow
            icon={<DeviceMobile size={30} strokeWidth={1.5} />}
            title="Active Sessions"
            rightContent={<span className="text-[16px]">5</span>}
            onClick={() => console.log('Active Sessions clicked')}
          />
          <IconTextRow
            icon={<Translate size={30} strokeWidth={1.5} />}
            title="Languages"
            rightContent={<span className="text-[16px]">English</span>}
            onClick={() => console.log('Languages clicked')}
          />
          <IconTextRow
            icon={<Sticker size={30} strokeWidth={1.5} />}
            title="Stickers and Emoji"
            onClick={() => console.log('Stickers clicked')}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Settings;
