import { CameraRotate } from "phosphor-react";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import SettingsPageHeader from "./shared/SettingsPageHeader";

const ProfileEdit = () => {
  return (
    <div className="min-w-[350px] my-4">
      <SettingsPageHeader title="Edit profile" />
      <ScrollArea className="  rounded-md">
        <div className="flex flex-col  items-center mt-6 relative">
          <Image
            src="/images/logo.png"
            alt="QR Test Image"
            width={200}
            height={200}
            className="rounded-full"
          />
          <CameraRotate
            size={50}
            className="absolute top-2/5 text-icon-foreground transition-transform duration-300 ease-in-out hover:scale-150 hover:cursor-pointer"
          />
        </div>
        <div className="px-4 mt-4 mb-6 flex flex-col gap-4">
          <Input type="text" placeholder="First Name (required) " />
          <Input type="text" placeholder="Last Name" />
          <Textarea
            placeholder="Bio (Tell us a little bit about yourself)"
            className="resize-none"
          />
        </div>
        <Separator />
        <div className="px-4 my-6 flex flex-col gap-4">
          <Input type="text" placeholder="User Name " />
          <p>
            You can choose a username on <b>Chat</b>. If you do, people will be
            able to find you by this username and contact you without needing
            your phone number. <br /> <br /> You can use <b>a–z</b>, <b>0–9</b>{" "}
            and underscores. Minimum length is <b>5</b> characters.
          </p>
          <p className="settings-item-description">
            This link opens a chat with you:
            <br />
            <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              @radix-ui/react-alert-dialog
            </code>
          </p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProfileEdit;
