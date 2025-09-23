import React, { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import IconTextRow from "./IconTextRow";
import { Icon } from "./Icon";
import Autoplay from "embla-carousel-autoplay";

const UserInfo = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <>
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
    </>
  );
};

export default UserInfo;
