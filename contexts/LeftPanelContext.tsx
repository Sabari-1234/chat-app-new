"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
  useMemo,
} from "react";

type LeftPanelType =
  | "chatSidebar"
  | "settings"
  | "profileEdit"
  | "generalSettings"
  | "animationSettings"
  | "notificationSettings"
  | "dataAndStorageSettings"
  | "privacyAndSecurity"
  | "chatFolder"
  | "devicesSettings"
  | "languageSettings"
  | "stickerAndEmoji";

type NavigationDirection = "forward" | "backward";

interface LeftPanelContextType {
  leftPanel: LeftPanelType;
  setLeftPanel: (panel: LeftPanelType, isBackNavigation?: boolean) => void;
  navigationDirection: NavigationDirection;
}

const LeftPanelContext = createContext<LeftPanelContextType | undefined>(
  undefined
);

interface LeftPanelProviderProps {
  children: ReactNode;
}

export const LeftPanelProvider: React.FC<LeftPanelProviderProps> = ({
  children,
}) => {
  const [leftPanel, setLeftPanel] = useState<LeftPanelType>("chatSidebar");
  const [navigationDirection, setNavigationDirection] =
    useState<NavigationDirection>("forward");
  const [navigationHistory, setNavigationHistory] = useState<LeftPanelType[]>([
    "chatSidebar",
  ]);

  // Define navigation hierarchy for determining direction
  const navigationHierarchy = useMemo<Record<LeftPanelType, number>>(
    () => ({
      chatSidebar: 0,
      settings: 1,
      profileEdit: 2,
      generalSettings: 2,
      animationSettings: 2,
      notificationSettings: 2,
      dataAndStorageSettings: 2,
      privacyAndSecurity: 2,
      chatFolder: 2,
      devicesSettings: 2,
      languageSettings: 2,
      stickerAndEmoji: 2,
    }),
    []
  );

  const handleSetLeftPanel = useCallback(
    (panel: LeftPanelType, isBackNavigation = false) => {
      // Prevent setting the same panel
      if (panel === leftPanel) return;

      if (isBackNavigation) {
        setNavigationDirection("backward");
        // For back navigation, just update the history by removing current panel
        setNavigationHistory((prev) => {
          const newHistory = [...prev];
          if (newHistory.length > 1) {
            newHistory.pop(); // Remove current panel
          }
          return newHistory;
        });
      } else {
        // Determine direction based on hierarchy
        const currentLevel = navigationHierarchy[leftPanel];
        const newLevel = navigationHierarchy[panel];

        if (newLevel < currentLevel) {
          setNavigationDirection("backward");
          // For hierarchical back navigation, trim history to the target panel
          setNavigationHistory((prev) => {
            const targetIndex = prev.lastIndexOf(panel);
            if (targetIndex !== -1) {
              return prev.slice(0, targetIndex + 1);
            }
            return [...prev, panel];
          });
        } else {
          setNavigationDirection("forward");
          // Add to navigation history for forward navigation
          setNavigationHistory((prev) => [...prev, panel]);
        }

        // Always create a history entry for forward navigation (except when coming back)
        window.history.pushState(
          { panel, preventBack: true },
          "",
          window.location.href
        );
      }

      setLeftPanel(panel);
    },
    [leftPanel, navigationHierarchy]
  );

  useEffect(() => {
    // Handle browser back button
    const handlePopState = () => {
      const prevPanel = navigationHistory[navigationHistory.length - 2];
      handleSetLeftPanel(prevPanel, true);
    };

    console.log("hi");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigationHistory, handleSetLeftPanel]);

  // Don't automatically push to browser history on every panel change
  // Only push when explicitly needed in handleSetLeftPanel

  return (
    <LeftPanelContext.Provider
      value={{
        leftPanel,
        setLeftPanel: handleSetLeftPanel,
        navigationDirection,
      }}
    >
      {children}
    </LeftPanelContext.Provider>
  );
};

export const useLeftPanel = () => {
  const context = useContext(LeftPanelContext);
  if (context === undefined) {
    throw new Error("useLeftPanel must be used within a LeftPanelProvider");
  }
  return context;
};
