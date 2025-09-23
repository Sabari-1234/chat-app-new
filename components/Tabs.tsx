import React, { useState, useRef, useEffect } from "react";
import SectionWrapper from "./shared/SectionWrapper";
import IconTextRow from "./shared/IconTextRow";
import { cn } from "@/lib/utils";

const Tabs = () => {
  const tabs = [
    { label: "Media", Content: <div>abjajsbhavs1</div> },
    { label: "Files", Content: <div>abjajsbhavs2</div> },
    { label: "Links", Content: <div>abjajsbhavs3</div> },
    { label: "Music", Content: <div>abjajsbhavs4</div> },
    { label: "Voice", Content: <div>abjajsbhavs5</div> },
  ];

  const [tabIndex, setTabIndex] = useState<number>(0);
  const tabRefs = useRef<HTMLDivElement[] | HTMLButtonElement[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
    instant: false,
  });

  useEffect(() => {
    const updateUnderline = (instant: boolean) => {
      const activeTab = tabRefs.current[tabIndex];
      if (!activeTab || !activeTab.parentElement) return;

      const textElement = activeTab.querySelector(".tabTitle");
      const parentRect = activeTab.parentElement.getBoundingClientRect();

      if (textElement) {
        const rect = textElement.getBoundingClientRect();
        setUnderlineStyle({
          width: rect.width,
          left: rect.left - parentRect.left,
          instant,
        });
      }
    };

    // Animated update on tab change
    updateUnderline(false);

    // Instant update on parent resize
    const resizeObserver = new ResizeObserver(() => updateUnderline(true));
    const parentElement = tabRefs.current[tabIndex]?.parentElement;
    if (parentElement) resizeObserver.observe(parentElement);

    return () => resizeObserver.disconnect();
  }, [tabIndex]);

  return (
    <>
      <SectionWrapper variant={"row"} className="relative">
        {tabs.map((tab, index) => (
          <IconTextRow
            key={index}
            title={tab.label}
            titleClassName={cn(
              "me-0 transition-colors duration-200 tabTitle",
              tabIndex === index ? "text-primary" : "text-muted-foreground"
            )}
            titleVariant="row_Center"
            onClick={() => setTabIndex(index)}
            ref={(el) => {
              if (el) tabRefs.current[index] = el;
            }}
          />
        ))}
        <div
          className={cn(
            "absolute bottom-0 h-0.5 bg-primary rounded-full border-[1.5px]",
            !underlineStyle.instant && "transition-all duration-250 ease-in-out"
          )}
          style={{
            width: `${underlineStyle.width}px`,
            left: `${underlineStyle.left}px`,
          }}
        />
      </SectionWrapper>
      {tabs[tabIndex].Content}
    </>
  );
};

export default Tabs;
