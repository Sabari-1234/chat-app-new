import React from "react";
import Image from "next/image";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import CenteredPageLayout from "@/components/shared/CenteredPageLayout";
import { Text } from "@/components/shared/Text";
const QRLogIn = () => {
  return (
    <CenteredPageLayout contentClassName="gap-2">
      <Image
        src="/images/QR.png"
        alt="QR Test Image"
        width={300}
        height={300}
        className="rounded-lg"
      />
      <div className="flex flex-col md:items-start gap-2 items-center">
        <Text as="h2" variant="3xl">
          Log in to Chat with QR Code
        </Text>
        <Separator />
        <ul className=" list-inside list-disc [&>li]:mb-2 h-fi m-0">
          <li>Open the Chat app</li>
          <li>
            Go to settings {">"} Devices {">"} Link Desktop Device
          </li>
          <li>Point your Phone at this screen to confirm Login</li>
        </ul>
        <Separator />
        <Button>LOG IN WITH PHONE NUMBER</Button>
      </div>
    </CenteredPageLayout>
  );
};

export default QRLogIn;
