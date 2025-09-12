import { useLeftPanel } from "@/contexts/LeftPanelContext";
import React from "react";
import SectionWrapper from "./shared/SectionWrapper";
import PageWrapper from "./shared/PageWrapper";
import CheckboxField from "./shared/CheckboxField";
import IconTextRow from "./shared/IconTextRow";
import { Icon } from "./shared/Icon";
import { Separator } from "./ui/separator";
import SectionTitle from "./shared/SectionTitle";

const StickerAndEmoji = () => {
  const { setLeftPanel } = useLeftPanel();
  const emojiPacks = [
    {
      title: "Mia Bunny",
      icon: <Icon name="ThumbsUp" />,
      Subtitle: "30 stickers",
    },
    {
      title: "Cool Toco's love pack [@TodorokiShouto]",
      icon: <Icon name="ThumbsUp" />,
      Subtitle: "25 stickers",
    },
    {
      title: "Dead Death",
      icon: <Icon name="ThumbsUp" />,
      Subtitle: "40 stickers",
    },
    {
      title: "Little Flame",
      icon: <Icon name="ThumbsUp" />,
      Subtitle: "15 stickers",
    },
    {
      title: "Hot Cherry",
      icon: <Icon name="ThumbsUp" />,
      Subtitle: "20 stickers",
    },
  ];
  return (
    <PageWrapper
      title="Stickers & Emoji"
      variant="full-width"
      onBack={() => setLeftPanel("settings")}
    >
      <SectionWrapper>
        <CheckboxField
          id="Suggest stickers by emoji"
          title="Suggest stickers by emoji"
        />
        <IconTextRow
          icon={<Icon name="Smiley" />}
          title="Custom Emoji"
          rightContent={0}
        />
        <IconTextRow icon={<Icon name="ThumbsUp" />} title="Quick Reaction" />
      </SectionWrapper>
      <Separator />
      <SectionWrapper>
        <SectionTitle>Dynamic Pack Order</SectionTitle>
        <CheckboxField id="Dynamic Pack Order" title="Dynamic Pack Order" />
        <IconTextRow subtitle="Recently used sticker sets will be displayed above the older ones." />
      </SectionWrapper>
      <Separator />
      <SectionWrapper>
        <SectionTitle>My sticker sets</SectionTitle>
        {emojiPacks.map((emojiPack, index) => (
          <IconTextRow
            key={index}
            title={emojiPack.title}
            subtitle={emojiPack.Subtitle}
            icon={emojiPack.icon}
          />
        ))}
        <IconTextRow subtitle="Artists are welcome to add their own sticker sets using our @stickers bot." />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default StickerAndEmoji;
