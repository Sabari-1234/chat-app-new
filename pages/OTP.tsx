import { Button } from "@/components/ui/button";
import React from "react";
import { GrEdit } from "react-icons/gr";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OTP = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh] gap-6 min-w-[400px]">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-balance">
          +91 9080240564
        </h1>
        <Button variant="outline" className="rounded-full" size="icon">
          <GrEdit />
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm text-muted-foreground">
          We have sent you a message in Chat
        </p>
        <p className=" text-muted-foreground">with the code.</p>
      </div>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default OTP;
