"use client";
import React from "react";
import { SelectScrollable } from "@/components/ui/SelectScrollable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CheckboxField from "@/components/shared/CheckboxField";
import AuthLayout from "@/components/shared/AuthLayout";

const PhoneNumberLogIn = () => {
  const subtitle = (
    <>
      <p className="text-muted-foreground">Please confirm your country code</p>
      <p className="text-muted-foreground">and enter your phone number</p>
    </>
  );

  return (
    <AuthLayout title="Sign in to Chat" subtitle={subtitle}>
      <SelectScrollable />
      <Input type="text" placeholder="Phone Number" className="w-full" />
      <div>
        <CheckboxField
          id="terms"
          title="Keep me signed in"
          className="p-0"
          hoverEffectNeeded={false}
        />
      </div>
      <Separator />
      <Button>NEXT</Button>
      <Button>LOG IN WITH QR CODE</Button>
    </AuthLayout>
  );
};

export default PhoneNumberLogIn;
