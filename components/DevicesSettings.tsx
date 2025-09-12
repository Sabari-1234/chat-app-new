import React, { useState } from "react";
import { Icon } from "./shared/Icon";
import { Separator } from "./ui/separator";
import SliderSetting from "./shared/SliderSetting";
import IconTextRow from "./shared/IconTextRow";
import SectionTitle from "./shared/SectionTitle";
// import SecondarySectionHeading from "./shared/SecondarySectionHeading";
import PageWrapper from "./shared/PageWrapper";
import SectionWrapper from "./shared/SectionWrapper";
import { useLeftPanel } from "@/contexts/LeftPanelContext";

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
  const { setLeftPanel } = useLeftPanel();
  const [terminationPeriod, setTerminationPeriod] = useState<number>(6);

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
        return <Icon name="GoogleChromeLogo" />;
      case "android":
        return <Icon name="AndroidLogo" />;
      case "web":
        return <Icon name="Globe" />;
      default:
        return <Icon name="Globe" />;
    }
  };

  // const getIconBackground = (iconType: string) => {
  //   switch (iconType) {
  //     case "chrome":
  //       return "bg-blue-500";
  //     case "android":
  //       return "bg-emerald-500";
  //     case "web":
  //       return "bg-blue-500";
  //     case "unknown":
  //       return "bg-orange-500";
  //     default:
  //       return "bg-muted";
  //   }
  // };

  const DeviceItem: React.FC<{
    device: DeviceSession;
    showTerminate?: boolean;
    onTerminate?: () => void;
  }> = ({
    device,
    // showTerminate = false, onTerminate
  }) => {
    const icon = <>{getDeviceIcon(device.iconType)}</>;

    const subtitle = `${device.appName} ${device.appVersion}${
      device.platform ? `, ${device.platform}` : ""
    }\n${device.isCurrentDevice ? "– " : ""}`;

    const rightContent = device.lastActive ? (
      <div className="text-sm text-muted-foreground">{device.lastActive}</div>
    ) : undefined;

    return (
      <IconTextRow
        icon={icon}
        title={device.deviceName}
        subtitle={subtitle}
        rightContent={rightContent}
        subTitleRightContent={device.location}
      />
    );
  };

  return (
    <PageWrapper
      title="Devices"
      variant="full-width"
      onBack={() => setLeftPanel("settings")}
    >
      {/* Active Sessions Section */}
      <SectionWrapper>
        <SectionTitle>Active sessions</SectionTitle>
        {activeSessions.map((session) => (
          <DeviceItem key={session.id} device={session} />
        ))}
      </SectionWrapper>
      <Separator />
      {/* THIS DEVICE Section */}
      <SectionWrapper>
        <SectionTitle>This device</SectionTitle>
        <DeviceItem device={currentDevice} />

        {/* Terminate All Other Sessions Button */}
        <IconTextRow
          icon={<Icon name="MinusCircle" />}
          title="Terminate All Other Sessions"
          onClick={handleTerminateAllSessions}
        />
      </SectionWrapper>
      <Separator />
      {/* Automatically Terminate Old Sessions Section */}
      <SectionWrapper>
        <SectionTitle>Automatically terminate old sessions</SectionTitle>
        {/* <SecondarySectionHeading>If inactive for</SecondarySectionHeading> */}

        <SliderSetting
          label="If inactive for"
          value={terminationPeriod}
          min={0}
          max={12}
          step={6}
          defaultValue={[6]}
          onChange={(value) => setTerminationPeriod(value[0])}
          labels={["1 month", "6 months", "12 months"]}
          thresholds={[6, 12]}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default DevicesSettings;
