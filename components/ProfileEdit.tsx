import { CameraRotate } from "phosphor-react";
import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import PageWrapper from "./shared/PageWrapper";
import SectionWrapper from "./shared/SectionWrapper";
import { useLeftPanel } from "@/contexts/LeftPanelContext";

const ProfileEdit = () => {
  const { setLeftPanel } = useLeftPanel();
  
  return (
    <PageWrapper 
      title="Edit profile" 
      variant="full-width"
      onBack={() => setLeftPanel("settings")}
    >
      <SectionWrapper className="items-center relative">
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
      </SectionWrapper>
      <SectionWrapper className="gap-4">
        <Input type="text" placeholder="First Name (required) " />
        <Input type="text" placeholder="Last Name" />
        <Textarea
          placeholder="Bio (Tell us a little bit about yourself)"
          className="resize-none"
        />
      </SectionWrapper>
      <Separator />
      <SectionWrapper className="gap-4">
        <Input type="text" placeholder="User Name " />
        <p>
          You can choose a username on <b>Chat</b>. If you do, people will be
          able to find you by this username and contact you without needing your
          phone number.
        </p>
        <p>
          {" "}
          You can use <b>a–z</b>, <b>0–9</b> and underscores. Minimum length is{" "}
          <b>5</b> characters.
        </p>
        <p className="settings-item-description">
          This link opens a chat with you:
          <br />
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            @radix-ui/react-alert-dialog
          </code>
        </p>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default ProfileEdit;
