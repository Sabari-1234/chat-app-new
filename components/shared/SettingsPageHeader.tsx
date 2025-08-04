import React from "react";
import { Backspace, Pencil } from "phosphor-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SettingsPageHeaderProps {
  title: string;
  onBack?: () => void;
  onEdit?: () => void;
  showEditButton?: boolean;
  variant?: "centered" | "between" | "full-width";
  className?: string;
}

const SettingsPageHeader: React.FC<SettingsPageHeaderProps> = ({
  title,
  onBack,
  onEdit,
  showEditButton = false,
  variant = "centered",
  className,
}) => {
  if (variant === "between") {
    return (
      <>
        <div
          className={cn(
            "flex w-full justify-between items-center px-4",
            className
          )}
        >
          <Backspace
            size={25}
            className="text-icon-foreground shrink-0 hover:cursor-pointer"
            strokeWidth={1.5}
            onClick={onBack}
          />
          <h2 className="my-2 text-2xl font-bold tracking-tight">{title}</h2>
          {showEditButton && (
            <Pencil
              size={25}
              className="text-icon-foreground shrink-0 hover:cursor-pointer"
              strokeWidth={1.5}
              onClick={onEdit}
            />
          )}
        </div>
        <Separator />
      </>
    );
  }

  if (variant === "full-width") {
    return (
      <>
        <div className={cn("relative flex w-full items-center p-4", className)}>
          <Backspace
            size={25}
            className="text-icon-foreground shrink-0 hover:cursor-pointer"
            strokeWidth={1.5}
            onClick={onBack}
          />
          <h2 className="text-2xl font-bold tracking-tight w-full text-center">
            {title}
          </h2>
        </div>
        <Separator />
      </>
    );
  }

  return (
    <>
      <div className={cn("relative flex w-full items-center p-4", className)}>
        <Backspace
          size={25}
          className="text-icon-foreground shrink-0 hover:cursor-pointer"
          strokeWidth={1.5}
          onClick={onBack}
        />
        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold tracking-tight">
          {title}
        </h2>
      </div>
      <Separator />
    </>
  );
};

export default SettingsPageHeader;
