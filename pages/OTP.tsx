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
import { Text } from "@/components/shared/Text";
import SectionWrapper from "@/components/shared/SectionWrapper";

const OTP = () => {
  return (
    <CenteredPageLayout contentClassName="gap-6">
      <div className="flex items-center gap-4">
        <Text variant="4xl" as="h1">
          +91 9080240564
        </Text>
        <CircularIconButton icon={<GrEdit />} />
      </div>
      <SectionWrapper variant="columnCenter">
        <Text>We have sent you a message in Chat</Text>
        <Text>with the code.</Text>
      </SectionWrapper>
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
