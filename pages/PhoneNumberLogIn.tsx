import React from "react";
import { SelectScrollable } from "@/components/ui/SelectScrollable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/shared/AuthLayout";

const PhoneNumberLogIn = () => {
  const subtitle = (
    <>
      <p className="text-muted-foreground">
        Please confirm your country code
      </p>
      <p className="text-muted-foreground">and enter your phone number</p>
    </>
  );

  return (
    <AuthLayout title="Sign in to Chat" subtitle={subtitle}>
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
    </AuthLayout>
  );
};

export default PhoneNumberLogIn;
