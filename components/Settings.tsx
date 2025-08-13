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
import IconTextRow from "./shared/IconTextRow";
import PageWrapper from "./shared/PageWrapper";
import SectionWrapper from "./shared/SectionWrapper";
import { useLeftPanel } from "@/contexts/LeftPanelContext";

const Settings = () => {
  const { setLeftPanel } = useLeftPanel();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <PageWrapper
      title="Settings"
      variant="between"
      showEditButton={true}
      onBack={() => setLeftPanel("chatSidebar")}
      onEdit={() => setLeftPanel("profileEdit")}
    >
      <SectionWrapper variant="columnCenter">
        <Carousel
          plugins={[plugin.current]}
          className=" w-[70%]  max-w-xl "
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
      </SectionWrapper>
      <Separator />
      <SectionWrapper>
        <IconTextRow
          icon={<Phone size={24} />}
          title="+91 9080240564"
          subtitle="Phone"
        />
        <IconTextRow
          icon={<At size={24} />}
          title="@mr.360AndVk"
          subtitle="Username"
        />
        <IconTextRow
          icon={<Info size={24} />}
          title="dont bsjdbj sdbfj sbdjsbd kjbskjdbj jhjhjhj jhjh fgfgfhfhgjhghgjgjg more text that overflows the 2-line limit intentionally"
          subtitle="Bio"
        />
        <IconTextRow
          icon={<CalendarBlank size={24} />}
          title="August 5 (22 years old)"
          subtitle="Date of Birth"
        />
      </SectionWrapper>
      <Separator />
      <SectionWrapper>
        <IconTextRow
          icon={<GearSix size={24} />}
          title="General Settings"
          onClick={() => setLeftPanel("generalSettings")}
        />
        <IconTextRow
          icon={<Planet size={24} />}
          title="Animation and Performance"
          onClick={() => setLeftPanel("animationSettings")}
        />
        <IconTextRow
          icon={<Bell size={24} />}
          title="Notification"
          onClick={() => setLeftPanel("notificationSettings")}
        />
        <IconTextRow
          icon={<Database size={24} />}
          title="Data and Storage"
          onClick={() => setLeftPanel("dataAndStorageSettings")}
        />
        <IconTextRow
          icon={<LockSimple size={24} />}
          title="Privacy and Security"
          onClick={() => setLeftPanel("privacyAndSecurity")}
        />
        <IconTextRow
          icon={<Folders size={24} />}
          title="Chat Folders"
          onClick={() => setLeftPanel("chatFolder")}
        />
        <IconTextRow
          icon={<DeviceMobile size={24} />}
          title="Active Sessions"
          rightContent={<span className="text-[16px]">5</span>}
          onClick={() => setLeftPanel("devicesSettings")}
        />
        <IconTextRow
          icon={<Translate size={24} />}
          title="Languages"
          rightContent={<span className="text-[16px]">English</span>}
          onClick={() => console.log("Languages clicked")}
        />
        <IconTextRow
          icon={<Sticker size={24} />}
          title="Stickers and Emoji"
          onClick={() => console.log("Stickers clicked")}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Settings;
