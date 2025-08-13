import React from "react";
import CenteredPageLayout from "./CenteredPageLayout";
import ProfileAvatar from "./ProfileAvatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import SectionWrapper from "./SectionWrapper";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string | React.ReactNode;
  showLogo?: boolean;
  logoSize?: number;
  className?: string;
  contentClassName?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  showLogo = true,
  logoSize = 200,
  className,
  contentClassName,
}) => {
  return (
    <CenteredPageLayout className={className} contentClassName={cn("gap-6 w-fit", contentClassName)}>
      {showLogo && (
        <ProfileAvatar
          src="/images/logo.png"
          alt="App Logo"
          size={logoSize}
          priority
        />
      )}
      <h2 className="text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <SectionWrapper variant="columnCenter" className="text-center">
          {typeof subtitle === "string" ? (
            <p className="text-muted-foreground">{subtitle}</p>
          ) : (
            subtitle
          )}
        </SectionWrapper>
      )}
      <Separator />
      {children}
    </CenteredPageLayout>
  );
};

export default AuthLayout;