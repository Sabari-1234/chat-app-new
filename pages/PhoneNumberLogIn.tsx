import React from "react";
import Image from "next/image";
import { SelectScrollable } from "@/components/ui/SelectScrollable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const PhoneNumberLogIn = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-[100dvh]">
      <div className="flex flex-col justify-center items-center gap-6 min-w-[400px] w-fit">
        <Image
          src="/images/logo.png"
          alt="QR Test Image"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h2 className="text-3xl font-semibold tracking-tight ">
          Sign in to Chat
        </h2>
        <div className="flex flex-col items-center">
          <p className=" text-muted-foreground">
            Please confirm your country code
          </p>
          <p className=" text-muted-foreground">and enter your phone number</p>
        </div>
        <Separator />
        <SelectScrollable />
        <Input type="text" placeholder="Phone Number" className="w-full" />
        <div>
          <div className="flex space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Keep me signed in</Label>
          </div>
        </div>
        <Separator />
        <Button variant="outline" className="w-full">
          NEXT
        </Button>
        <Button variant="outline" className="w-full">
          LOG IN WITH QR CODE
        </Button>
      </div>
    </div>
  );
};

export default PhoneNumberLogIn;
