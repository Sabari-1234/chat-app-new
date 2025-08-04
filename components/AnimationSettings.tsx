import React, { Children, useState } from "react";
import { CaretUp, CaretDown } from "phosphor-react";
import { Separator } from "./ui/separator";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import CheckboxField from "./shared/CheckboxField";
import SectionTitle from "./shared/SectionTitle";
import SecondarySectionHeading from "./shared/SecondarySectionHeading";
import PageWrapper from "./shared/PageWrapper";
import SectionWrapper from "./shared/SectionWrapper";
import SliderSetting from "./shared/SliderSetting";

interface AnimationSettingsState {
  interfaceAnimations: boolean;
  pageTransitions: boolean;
  messageSendingAnimation: boolean;
  mediaViewerAnimations: boolean;
  messageComposerAnimations: boolean;
  contextMenuAnimation: boolean;
  contextMenuBlur: boolean;
  rightColumnAnimation: boolean;
  dustEffectDeletion: boolean;
  stickersAndEmoji: boolean;
  allowAnimatedEmoji: boolean;
  loopAnimatedStickers: boolean;
  reactionEffects: boolean;
  stickerEffects: boolean;
  mediaAutoplay: boolean;
  autoplayGIFs: boolean;
  autoplayVideos: boolean;
}

interface SectionWrapperProps {
  children: React.ReactNode;
}

interface ToggleButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

const DropDownItemWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  return <SectionWrapper className="ml-9">{children}</SectionWrapper>;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ isExpanded, onClick }) => {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} className="h-8 w-8">
      {isExpanded ? (
        <CaretUp size={20} className="text-muted-foreground" />
      ) : (
        <CaretDown size={20} className="text-muted-foreground" />
      )}
    </Button>
  );
};
const ToggleWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  return <div className="flex items-center justify-between">{children}</div>;
};

const AnimationSettings: React.FC = () => {
  const [animationLevel, setAnimationLevel] = useState<number[]>([100]);
  const [interfaceAnimationsExpanded, setInterfaceAnimationsExpanded] =
    useState<boolean>(true);
  const [stickersEmojiExpanded, setStickersEmojiExpanded] =
    useState<boolean>(true);
  const [mediaAutoplayExpanded, setMediaAutoplayExpanded] =
    useState<boolean>(true);

  const [settings, setSettings] = useState<AnimationSettingsState>({
    interfaceAnimations: true,
    pageTransitions: true,
    messageSendingAnimation: true,
    mediaViewerAnimations: true,
    messageComposerAnimations: true,
    contextMenuAnimation: true,
    contextMenuBlur: true,
    rightColumnAnimation: true,
    dustEffectDeletion: true,
    stickersAndEmoji: true,
    allowAnimatedEmoji: true,
    loopAnimatedStickers: true,
    reactionEffects: true,
    stickerEffects: true,
    mediaAutoplay: true,
    autoplayGIFs: true,
    autoplayVideos: true,
  });

  const handleSettingChange = (setting: keyof AnimationSettingsState) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  const getAnimationLevelText = (level: number) => {
    if (level < 40) return "Power Saving";
    if (level < 80) return "Nice and Fast";
    return "Lots of Stuff";
  };

  return (
    <PageWrapper title="Animation And Performance" variant="full-width">
      {/* Animation Level Section */}
      <SectionWrapper>
        <SectionTitle>Animation Level</SectionTitle>
        <SecondarySectionHeading>
          Choose the desired animations amount.
        </SecondarySectionHeading>

        <SliderSetting
          label="Animation Level"
          value={animationLevel[0]}
          min={0}
          max={100}
          step={1}
          defaultValue={animationLevel}
          onChange={setAnimationLevel}
          labels={["Power Saving", "Nice and Fast", "Lots of Stuff"]}
          thresholds={[40, 80]}
        />
      </SectionWrapper>

      <Separator />

      {/* Resource-Intensive Processes Section */}
      <SectionWrapper>
        <SectionTitle>Resource-Intensive Processes</SectionTitle>

        {/* Interface Animations Group */}
        <SectionWrapper>
          <ToggleWrapper>
            <CheckboxField
              id="interfaceAnimations"
              checked={settings.interfaceAnimations}
              onCheckedChange={() => handleSettingChange("interfaceAnimations")}
              title="Interface Animations"
            />
            <ToggleButton
              isExpanded={interfaceAnimationsExpanded}
              onClick={() =>
                setInterfaceAnimationsExpanded(!interfaceAnimationsExpanded)
              }
            />
          </ToggleWrapper>

          {interfaceAnimationsExpanded && (
            <DropDownItemWrapper>
              {[
                {
                  key: "pageTransitions" as const,
                  label: "Page Transitions",
                },
                {
                  key: "messageSendingAnimation" as const,
                  label: "Message Sending Animation",
                },
                {
                  key: "mediaViewerAnimations" as const,
                  label: "Media Viewer Animations",
                },
                {
                  key: "messageComposerAnimations" as const,
                  label: "Message Composer Animations",
                },
                {
                  key: "contextMenuAnimation" as const,
                  label: "Context Menu Animation",
                },
                {
                  key: "contextMenuBlur" as const,
                  label: "Context Menu Blur",
                },
                {
                  key: "rightColumnAnimation" as const,
                  label: "Right Column Animation",
                },
                {
                  key: "dustEffectDeletion" as const,
                  label: "Dust-effect deletion",
                },
              ].map((item) => (
                <CheckboxField
                  key={item.key}
                  id={item.key}
                  checked={settings[item.key]}
                  onCheckedChange={() => handleSettingChange(item.key)}
                  title={item.label}
                />
              ))}
            </DropDownItemWrapper>
          )}
        </SectionWrapper>

        {/* Stickers and Emoji Group */}
        <SectionWrapper>
          <ToggleWrapper>
            <CheckboxField
              id="stickersAndEmoji"
              checked={settings.stickersAndEmoji}
              onCheckedChange={() => handleSettingChange("stickersAndEmoji")}
              title="Stickers and Emoji"
            />
            <ToggleButton
              isExpanded={stickersEmojiExpanded}
              onClick={() => setStickersEmojiExpanded(!stickersEmojiExpanded)}
            />
          </ToggleWrapper>

          {stickersEmojiExpanded && (
            <DropDownItemWrapper>
              {[
                {
                  key: "allowAnimatedEmoji" as const,
                  label: "Allow Animated Emoji",
                },
                {
                  key: "loopAnimatedStickers" as const,
                  label: "Loop Animated Stickers",
                },
                {
                  key: "reactionEffects" as const,
                  label: "Reaction Effects",
                },
                {
                  key: "stickerEffects" as const,
                  label: "Sticker Effects",
                },
              ].map((item) => (
                <CheckboxField
                  key={item.key}
                  id={item.key}
                  checked={settings[item.key]}
                  onCheckedChange={() => handleSettingChange(item.key)}
                  title={item.label}
                />
              ))}
            </DropDownItemWrapper>
          )}
        </SectionWrapper>

        {/* Media Autoplay Group */}
        <SectionWrapper>
          <ToggleWrapper>
            <CheckboxField
              id="mediaAutoplay"
              checked={settings.mediaAutoplay}
              onCheckedChange={() => handleSettingChange("mediaAutoplay")}
              title="  Media Autoplay"
            />
            <ToggleButton
              isExpanded={mediaAutoplayExpanded}
              onClick={() => setMediaAutoplayExpanded(!mediaAutoplayExpanded)}
            />
          </ToggleWrapper>

          {mediaAutoplayExpanded && (
            <DropDownItemWrapper>
              {[
                { key: "autoplayGIFs" as const, label: "Autoplay GIFs" },
                {
                  key: "autoplayVideos" as const,
                  label: "Autoplay Videos",
                },
              ].map((item) => (
                <CheckboxField
                  key={item.key}
                  id={item.key}
                  checked={settings[item.key]}
                  onCheckedChange={() => handleSettingChange(item.key)}
                  title={item.label}
                />
              ))}
            </DropDownItemWrapper>
          )}
        </SectionWrapper>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default AnimationSettings;
