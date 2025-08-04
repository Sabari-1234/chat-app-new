import React from "react";
import Image from "next/image";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
const QRLogIn = () => {
  return (
    <div className="flex  flex-col justify-center items-center h-[100dvh] md:gap-14 gap-8 min-w-[400px]">
      <Image
        src="/images/QR.png"
        alt="QR Test Image"
        width={300}
        height={300}
        className="rounded-lg"
      />
      <div className="flex flex-col md:items-start gap-2 items-center">
        <h2 className="text-3xl font-semibold tracking-tight m-0">
          Log in to Chat with QR Code
        </h2>
        <Separator />
        <ul className=" list-inside list-disc [&>li]:mb-2 h-fi m-0">
          <li>Open the Chat app</li>
          <li>
            Go to settings {">"} Devices {">"} Link Desktop Device
          </li>
          <li>Point your Phone at this screen to confirm Login</li>
        </ul>
        <Separator />
        <Button variant="outline" className="w-full">
          LOG IN WITH PHONE NUMBER
        </Button>
      </div>
    </div>
  );
};

export default QRLogIn;
