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
import { Icon } from "./shared/Icon";
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
          icon={<Icon name="Phone" />}
          title="+91 9080240564"
          subtitle="Phone"
        />
        <IconTextRow
          icon={<Icon name="At" />}
          title="@mr.360AndVk"
          subtitle="Username"
        />
        <IconTextRow
          icon={<Icon name="Info" />}
          title="dont bsjdbj sdbfj sbdjsbd kjbskjdbj jhjhjhj jhjh fgfgfhfhgjhghgjgjg more text that overflows the 2-line limit intentionally"
          subtitle="Bio"
        />
        <IconTextRow
          icon={<Icon name="CalendarBlank" />}
          title="August 5 (22 years old)"
          subtitle="Date of Birth"
        />
      </SectionWrapper>
      <Separator />
      <SectionWrapper>
        <IconTextRow
          icon={<Icon name="GearSix" />}
          title="General Settings"
          onClick={() => setLeftPanel("generalSettings")}
        />
        <IconTextRow
          icon={<Icon name="Planet" />}
          title="Animation and Performance"
          onClick={() => setLeftPanel("animationSettings")}
        />
        <IconTextRow
          icon={<Icon name="Bell" />}
          title="Notification"
          onClick={() => setLeftPanel("notificationSettings")}
        />
        <IconTextRow
          icon={<Icon name="Database" />}
          title="Data and Storage"
          onClick={() => setLeftPanel("dataAndStorageSettings")}
        />
        <IconTextRow
          icon={<Icon name="LockSimple" />}
          title="Privacy and Security"
          onClick={() => setLeftPanel("privacyAndSecurity")}
        />
        <IconTextRow
          icon={<Icon name="Folders" />}
          title="Chat Folders"
          onClick={() => setLeftPanel("chatFolder")}
        />
        <IconTextRow
          icon={<Icon name="DeviceMobile" />}
          title="Active Sessions"
          rightContent={<span className="text-[16px]">5</span>}
          onClick={() => setLeftPanel("devicesSettings")}
        />
        <IconTextRow
          icon={<Icon name="Translate" />}
          title="Languages"
          rightContent={<span className="text-[16px]">English</span>}
          onClick={() => setLeftPanel("languageSettings")}
        />
        <IconTextRow
          icon={<Icon name="Sticker" />}
          title="Stickers and Emoji"
          onClick={() => setLeftPanel("stickerAndEmoji")}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Settings;
