import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  priority?: boolean;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  src,
  alt,
  size = 200,
  className,
  priority = false,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("rounded-full", className)}
      priority={priority}
    />
  );
};

export default ProfileAvatar;