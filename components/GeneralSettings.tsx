import { Backspace, Image } from "phosphor-react";
import React from "react";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { Slider } from "./ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const GeneralSettings = () => {
  return (
    <div className="min-w-[350px] my-4">
      <div className="relative flex w-full items-center px-4 mb-4">
        <Backspace
          size={25}
          className="text-icon-foreground shrink-0 hover:cursor-pointer"
          strokeWidth={1.5}
        />
        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold tracking-tight">
          General
        </h2>
      </div>
      <Separator />
      <ScrollArea className="h-[93dvh]  rounded-md px-6">
        <div className="flex flex-col gap-6 my-4">
          <div className="text-lg font-semibold">Settings</div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-[16px]">Message Font Size</p>

              <p className="text-[16px]">15</p>
            </div>
            <Slider
              min={12}
              defaultValue={[50]}
              max={20}
              step={1}
              className="w-[100%] cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-7">
            <Image
              size={30}
              className="text-icon-foreground shrink-0 hover:cursor-pointer"
              strokeWidth={1.5}
            />
            <p className="text-[16px]">General Settings</p>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-6 my-4">
          <div className="text-lg font-semibold">Theme</div>
          <RadioGroup
            defaultValue="comfortable"
            className="flex flex-col gap-6 "
          >
            <div className="flex items-center gap-7 ">
              <RadioGroupItem
                value="default"
                id="r1"
                className="size-6 cursor-pointer"
              />
              <Label htmlFor="r1" className="text-[16px] cursor-pointer">
                Light
              </Label>
            </div>
            <div className="flex items-center gap-7 ">
              <RadioGroupItem
                value="comfortable"
                id="r2"
                className="size-6 cursor-pointer"
              />
              <Label htmlFor="r2" className="text-[16px] cursor-pointer">
                Dark
              </Label>
            </div>
            <div className="flex items-center gap-7">
              <RadioGroupItem
                value="compact"
                id="r3"
                className="size-6 cursor-pointer"
              />
              <Label htmlFor="r3" className="text-[16px] cursor-pointer">
                System
              </Label>
            </div>
          </RadioGroup>
        </div>
        <Separator />
        <div className="flex flex-col gap-6 my-4">
          <div className="text-lg font-semibold">Time Format</div>
          <RadioGroup
            defaultValue="comfortable"
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-7 cursor-pointer">
              <RadioGroupItem
                value="default"
                id="r1"
                className="size-6 cursor-pointer"
              />
              <Label htmlFor="r1" className="text-[16px] cursor-pointer">
                12-hour
              </Label>
            </div>
            <div className="flex items-center gap-7">
              <RadioGroupItem
                value="comfortable"
                id="r2"
                className="size-6 cursor-pointer"
              />
              <Label htmlFor="r2" className="text-[16px] cursor-pointer">
                24-hour
              </Label>
            </div>
          </RadioGroup>
        </div>
        <Separator />
        <div className="flex flex-col gap-6 my-4">
          <div className="text-lg font-semibold ">Keyboard</div>
          <RadioGroup
            defaultValue="comfortable"
            className="flex flex-col gap-6 cursor-pointer"
          >
            <div className="flex items-center gap-7 ">
              <RadioGroupItem
                value="default"
                id="r1"
                className="size-6 cursor-pointer"
              />
              <div>
                <Label htmlFor="r1" className="text-[16px] cursor-pointer">
                  Send with Enter
                </Label>
                <p className="text-muted-foreground text-sm ">
                  Press Shift+Enter for New line
                </p>
              </div>
            </div>
            <div className="flex items-center gap-7 ">
              <RadioGroupItem
                value="comfortable"
                id="r2"
                className="size-6 cursor-pointer"
              />
              <div>
                <Label htmlFor="r2" className="text-[16px] cursor-pointer">
                  Send with Cmd+Enter
                </Label>
                <p className="text-muted-foreground text-sm ">
                  Press Enter for New line
                </p>
              </div>
            </div>
          </RadioGroup>
        </div>
      </ScrollArea>
    </div>
  );
};

export default GeneralSettings;
