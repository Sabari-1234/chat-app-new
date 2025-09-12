import React from "react";
import { Icon } from "./Icon";
import { Separator } from "@/components/ui/separator";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const settingsHeaderVariants = cva(
  "flex w-full items-center px-4",
  {
    variants: {
      variant: {
        centered: "relative",
        between: "justify-between",
        "full-width": "relative",
      },
    },
    defaultVariants: {
      variant: "centered",
    },
  }
);

const titleVariants = cva(
  "my-2 text-2xl font-bold tracking-tight",
  {
    variants: {
      variant: {
        centered: "absolute left-1/2 transform -translate-x-1/2",
        between: "",
        "full-width": "w-full text-center",
      },
    },
    defaultVariants: {
      variant: "centered",
    },
  }
);

interface SettingsPageHeaderProps extends VariantProps<typeof settingsHeaderVariants> {
  title: string;
  onBack?: () => void;
  onEdit?: () => void;
  showEditButton?: boolean;
  showBackButton?: boolean;
  className?: string;
}

const SettingsPageHeader: React.FC<SettingsPageHeaderProps> = ({
  title,
  onBack,
  onEdit,
  showEditButton = false,
  showBackButton = true,
  variant = "centered",
  className,
}) => {
  return (
    <>
      <div className={cn(settingsHeaderVariants({ variant }), className)}>
        {showBackButton && (
          <Icon
            name="Backspace"
            size={25}
            className={cn(
              "text-icon-foreground shrink-0 hover:cursor-pointer",
              variant === "centered" && "my-2"
            )}
            onClick={onBack}
          />
        )}
        <h2 className={titleVariants({ variant })}>{title}</h2>
        {variant === "between" && showEditButton && (
          <Icon
            name="Pencil"
            size={25}
            className="text-icon-foreground shrink-0 hover:cursor-pointer"
            onClick={onEdit}
          />
        )}
      </div>
      <Separator />
    </>
  );
};

export default SettingsPageHeader;
