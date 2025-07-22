"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
// import { ModeToggle } from "@/components/ModeToggle";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
// import { PiPhoneLight } from "react-icons/pi";
// import { CiSearch } from "react-icons/ci";
import { AiOutlineMore } from "react-icons/ai";
import { BsEmojiWink } from "react-icons/bs";
import { RiAttachment2 } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { MoreDropdownMenu } from "@/components/MoreDropdownMenu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "usehooks-ts";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const ChatPanel: React.FC = () => {
  const [panelSize, setPanelSize] = useState(0);
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const initialHeightRef = useRef<number | null>(null);

  useEffect(() => {
    let newSize: number | null = null;
    if (isMobile) newSize = 100;
    else if (isTablet) newSize = 40;
    else newSize = 25;
    setPanelSize((prevSize) => (prevSize === newSize ? prevSize : newSize));
  }, [isMobile, isTablet]);

  useEffect(() => {
    // Store the initial viewport height
    initialHeightRef.current = window.visualViewport?.height || null;

    const handleResize = () => {
      const currentHeight = window.visualViewport?.height;
      const initialHeight = initialHeightRef.current;

      if (initialHeight && currentHeight && currentHeight < initialHeight) {
        const kbHeight = initialHeight - currentHeight;
        setKeyboardHeight(kbHeight);
      } else {
        setKeyboardHeight(0); // Keyboard likely hidden
      }
    };

    window.visualViewport?.addEventListener("resize", handleResize);

    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  // Avoid rendering until client-side check is done
  if (panelSize === 0) return null;

  return (
    <div
      className="relative "
      style={{ height: `calc(100dvh - ${keyboardHeight}px)` }}
    >
      <ResizablePanelGroup
        direction="horizontal"
        className=" rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel key={panelSize} defaultSize={panelSize}>
          <div className=" h-full items-center justify-center p-6 min-w-[260px]">
            <div>
              <div className="flex w-full justify-between pb-3 gap-2">
                <MoreDropdownMenu />
                <Input type="text" placeholder="Search" />
                {/* <ModeToggle /> */}
              </div>
            </div>
            <Separator />
            <ScrollArea className="h-[95%] w-full rounded-md pt-3">
              <div>
                {tags.map((tag) => (
                  <React.Fragment key={tag}>
                    <div className="text-md">{tag}</div>
                    <Separator className="my-4" />
                  </React.Fragment>
                ))}
              </div>
            </ScrollArea>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          defaultSize={100 - panelSize}
          className="flex justify-center"
        >
          <div className="flex flex-col items-center xl:w-[50%] lg:w-[60%] md:w-[80%]  w-[90%] max-h-[100dvh] min-w-[350px]">
            <div className="min-h-16 w-full flex items-center justify-between md:mt-5 ">
              <div className="flex items-center w-[calc(100%-2.8rem)]">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="md:size-12 size-10 rounded-full md:min-w-12 md:min-h-12 min-w-10 min-h-10"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className=" ms-2 overflow-hidden text-ellipsis whitespace-nowrap text-lg inline">
                  sabarinathanhsdghsdgsdbnsvdhdsvbvdfvdghvfhdvfhdvfhvdbfhdsbfhbdshfgh
                </p>
              </div>
              <div className="flex items-center gap-2">
                {/* <Button variant="outline" className="rounded-full" size="icon">
                <CiSearch size={25} strokeWidth={0.5} />
              </Button>
              <Button variant="outline" className="rounded-full " size="icon">
                <PiPhoneLight size={25} strokeWidth={3} />
              </Button> */}
                <Button variant="outline" className="rounded-full" size="icon">
                  <AiOutlineMore size={25} strokeWidth={3} />
                </Button>
              </div>
            </div>
            <Separator />
            <div className="transition-all duration-300 w-full overflow-y-auto pt-4 h-[85vh]">
              <div className=" w-full flex flex-col items-start">
                <p className="text-left border w-fit p-2 rounded-lg">
                  hello how are you
                </p>
                <div className=" border-l h-3 transform rotate-300 origin-top-left"></div>
              </div>
              <div className=" w-full flex flex-col items-end">
                <p className="text-right border w-fit p-2 rounded-lg">
                  hello how are you
                </p>
                <div className=" border-l h-3 transform rotate-60 origin-top-right"></div>
              </div>
            </div>

            <Separator />
            <div className="w-full relative flex items-center">
              <Button
                variant="outline"
                className="rounded-full absolute md:bottom-[3.4rem] bottom-[1.7rem] left-2"
                size="icon"
              >
                <BsEmojiWink />
              </Button>
              <Textarea
                placeholder="Type your message here."
                className=" max-h-40 resize-none md:mb-11 mb-5 mt-2 md:py-4 py-3 px-12 w-[calc(100%-2.8rem)]"
              />
              <Button
                variant="outline"
                className="rounded-full absolute md:bottom-[3.4rem] bottom-[1.7rem] right-13"
                size="icon"
              >
                <RiAttachment2 />
              </Button>
              <Button
                variant="outline"
                className="rounded-full absolute right-0  md:bottom-[3.4rem] bottom-[1.7rem]"
                size="icon"
              >
                <BsSend />
              </Button>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ChatPanel;
