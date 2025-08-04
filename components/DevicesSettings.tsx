import React, { useState } from "react";
import {
  MinusCircle,
  GoogleChromeLogo,
  AndroidLogo,
  Globe,
} from "phosphor-react";
import { Separator } from "./ui/separator";
import RadioGroupSetting from "./shared/RadioGroupSetting";
import IconTextRow from "./shared/IconTextRow";
import SectionTitle from "./shared/SectionTitle";
import SecondarySectionHeading from "./shared/SecondarySectionHeading";
import PageWrapper from "./shared/PageWrapper";
import SectionWrapper from "./shared/SectionWrapper";

interface DeviceSession {
  id: string;
  deviceName: string;
  appName: string;
  appVersion: string;
  platform: string;
  location: string;
  lastActive: string;
  iconType: "chrome" | "android" | "web" | "unknown";
  isCurrentDevice?: boolean;
}

const DevicesSettings: React.FC = () => {
  const [terminationPeriod, setTerminationPeriod] = useState<string>("6months");

  const currentDevice: DeviceSession = {
    id: "current",
    deviceName: "Chrome 138",
    appName: "Telegram Web",
    appVersion: "10.9.57 A",
    platform: "macOS",
    location: "Chennai, India",
    lastActive: "",
    iconType: "chrome",
    isCurrentDevice: true,
  };

  const activeSessions: DeviceSession[] = [
    {
      id: "vivo",
      deviceName: "Vivo X100",
      appName: "Telegram Android",
      appVersion: "11.13.3",
      platform: "Android 15 (35)",
      location: "Chennai, India",
      lastActive: "Mon",
      iconType: "android",
    },
    {
      id: "chrome-android",
      deviceName: "Chrome 138",
      appName: "Telegram Web",
      appVersion: "10.9.57 A",
      platform: "Android",
      location: "Coimbatore, India",
      lastActive: "Sat",
      iconType: "chrome",
    },
    {
      id: "chrome-macos",
      deviceName: "Chrome 138",
      appName: "Telegram Web",
      appVersion: "10.9.56 A",
      platform: "macOS",
      location: "Chennai, India",
      lastActive: "Thu",
      iconType: "chrome",
    },
    {
      id: "unknown",
      deviceName: "Unknown browser",
      appName: "Telegram Web",
      appVersion: "Web",
      platform: "",
      location: "Chennai, India",
      lastActive: "Jul 19",
      iconType: "unknown",
    },
  ];

  const handleTerminateAllSessions = () => {
    console.log("Terminating all other sessions");
  };

  const getDeviceIcon = (iconType: string) => {
    switch (iconType) {
      case "chrome":
        return <GoogleChromeLogo size={24} />;
      case "android":
        return <AndroidLogo size={24} />;
      case "web":
        return <Globe size={24} />;
      default:
        return <Globe size={24} />;
    }
  };

  const getIconBackground = (iconType: string) => {
    switch (iconType) {
      case "chrome":
        return "bg-blue-500";
      case "android":
        return "bg-emerald-500";
      case "web":
        return "bg-blue-500";
      case "unknown":
        return "bg-orange-500";
      default:
        return "bg-muted";
    }
  };

  const DeviceItem: React.FC<{
    device: DeviceSession;
    showTerminate?: boolean;
    onTerminate?: () => void;
  }> = ({ device, showTerminate = false, onTerminate }) => {
    const icon = <>{getDeviceIcon(device.iconType)}</>;

    const subtitle = `${device.appName} ${device.appVersion}${
      device.platform ? `, ${device.platform}` : ""
    }\n${device.isCurrentDevice ? "– " : ""}${device.location}`;

    const rightContent = device.lastActive ? (
      <div className="text-sm text-muted-foreground">{device.lastActive}</div>
    ) : undefined;

    return (
      <IconTextRow
        icon={icon}
        title={device.deviceName}
        subtitle={subtitle}
        rightContent={rightContent}
      />
    );
  };

  return (
    <PageWrapper title="Devices" variant="full-width">
      {/* THIS DEVICE Section */}
      <SectionWrapper>
        <SectionTitle>This device</SectionTitle>
        <DeviceItem device={currentDevice} />

        {/* Terminate All Other Sessions Button */}
        <IconTextRow
          icon={<MinusCircle className="size-6" />}
          title="Terminate All Other Sessions"
          onClick={handleTerminateAllSessions}
        />
      </SectionWrapper>

      <Separator />

      {/* Active Sessions Section */}
      <SectionWrapper>
        <SectionTitle>Active sessions</SectionTitle>
        {activeSessions.map((session) => (
          <DeviceItem key={session.id} device={session} />
        ))}
      </SectionWrapper>

      <Separator />

      {/* Automatically Terminate Old Sessions Section */}
      <SectionWrapper>
        <SectionTitle>Automatically terminate old sessions</SectionTitle>
        <SecondarySectionHeading>If inactive for</SecondarySectionHeading>

        <RadioGroupSetting
          value={terminationPeriod}
          onValueChange={setTerminationPeriod}
          options={[
            { value: "1week", label: "1 week", id: "1week" },
            { value: "1month", label: "1 month", id: "1month" },
            { value: "3months", label: "3 months", id: "3months" },
            { value: "6months", label: "6 months", id: "6months" },
          ]}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default DevicesSettings;
