import React from "react";
import PageWrapper from "./shared/PageWrapper";
import { useLeftPanel } from "@/contexts/LeftPanelContext";
import SectionWrapper from "./shared/SectionWrapper";
import SectionTitle from "./shared/SectionTitle";
import CheckboxField from "./shared/CheckboxField";
import IconTextRow from "./shared/IconTextRow";
import { Icon } from "./shared/Icon";
import { Separator } from "./ui/separator";
import RadioGroupSetting from "./shared/RadioGroupSetting";

const LanguageSettings = () => {
  const translationOptions = [
    {
      id: "showTranslationButton",
      title: "Show Translation Button",
      isChecked: true,
    },
    {
      id: "translateEntireChat",
      title: "Translate Entire Chat",
      isChecked: true,
    },
  ];

  const languages = [
    { title: "English", subtitle: "English" },
    { title: "العربية", subtitle: "Arabic" },
    { title: "Беларуская", subtitle: "Belarusian" },
    { title: "Català", subtitle: "Catalan" },
    { title: "Hrvatski", subtitle: "Croatian" },
    { title: "Čeština", subtitle: "Czech" },
    { title: "Nederlands", subtitle: "Dutch" },
    { title: "Suomi", subtitle: "Finnish" },
    { title: "Français", subtitle: "French" },
    { title: "Deutsch", subtitle: "German" },
    { title: "עברית", subtitle: "Hebrew" },
    { title: "Magyar", subtitle: "Hungarian" },
    { title: "Bahasa Indonesia", subtitle: "Indonesian" },
    { title: "Italiano", subtitle: "Italian" },
    { title: "Қазақша", subtitle: "Kazakh" },
    { title: "한국어", subtitle: "Korean" },
    { title: "Bahasa Melayu", subtitle: "Malay" },
    { title: "Norsk (Bokmål)", subtitle: "Norwegian (Bokmål)" },
    { title: "فارسی", subtitle: "Persian" },
    { title: "Polski", subtitle: "Polish" },
    { title: "Português (Brasil)", subtitle: "Portuguese (Brazil)" },
    { title: "Русский", subtitle: "Russian" },
    { title: "Српски", subtitle: "Serbian" },
    { title: "Español", subtitle: "Spanish" },
    { title: "Türkçe", subtitle: "Turkish" },
    { title: "Українська", subtitle: "Ukrainian" },
    { title: "O'zbek", subtitle: "Uzbek" },
  ];
  const options = languages.map((language) => ({
    label: language.title,
    subtitle: language.subtitle,
    value: language.subtitle,
    id: language.subtitle,
  }));
  const { setLeftPanel } = useLeftPanel();
  return (
    <PageWrapper
      title="Language Settings"
      variant="full-width"
      onBack={() => setLeftPanel("settings")}
    >
      <SectionWrapper>
        <SectionTitle>Language</SectionTitle>
        {translationOptions.map((option) => (
          <CheckboxField
            key={option.id}
            id={option.id}
            checked={option.isChecked}
            title={option.title}
          />
        ))}
        <IconTextRow title="Do not Translate" icon={<Icon name="Prohibit" />} />
        <IconTextRow
          subtitle="The 'Translate' button l appear in the context menu of message containing text"
          hoverEffectNeeded={false}
        />
      </SectionWrapper>
      <Separator />
      <SectionWrapper>
        <SectionTitle>Interface Language</SectionTitle>

        <RadioGroupSetting options={options} />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default LanguageSettings;
