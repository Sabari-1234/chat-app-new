import { Backspace } from "phosphor-react";
import React from "react";
import { Separator } from "./ui/separator";

const AnimationSettings = () => {
  return (
    <div className="min-w-[350px] my-4">
      <div className="relative flex w-full items-center px-4 mb-4 gap-7">
        <Backspace
          size={25}
          className="text-icon-foreground shrink-0 hover:cursor-pointer"
          strokeWidth={1.5}
        />
        <h2 className=" text-2xl font-bold tracking-tight w-full">
          Animation And Performance
        </h2>
      </div>
      <Separator />
    </div>
  );
};

export default AnimationSettings;
