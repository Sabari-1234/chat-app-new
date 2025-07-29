import React from "react";
import { GrEdit } from "react-icons/gr";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import CenteredPageLayout from "@/components/shared/CenteredPageLayout";
import CircularIconButton from "@/components/shared/CircularIconButton";

const OTP = () => {
  return (
    <CenteredPageLayout contentClassName="gap-6">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-balance">
          +91 9080240564
        </h1>
        <CircularIconButton icon={<GrEdit />} />
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
    </CenteredPageLayout>
  );
};

export default OTP;
