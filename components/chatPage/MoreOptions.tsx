import React from "react";
import {
  DropdownMenuSection,
  GenericDropdownMenu,
} from "../shared/GenericDropdownMenu";
import { Icon } from "../shared/Icon";
import { AiOutlineMore } from "react-icons/ai";

const MoreOptions = () => {
  const sections: DropdownMenuSection[] = [
    {
      items: [
        {
          icon: <Icon name="Pencil" />,
          title: "Edit",
        },
        {
          icon: <Icon name="VideoCamera" />,
          title: "Video Call",
        },
        {
          icon: <Icon name="Phone" />,
          title: "Call",
        },
        {
          icon: <Icon name="BellSlash" />,
          title: "Mute...",
        },
        {
          icon: <Icon name="CheckCircle" />,
          title: "Select Messages",
        },
        {
          icon: <Icon name="Gift" />,
          title: "Send a Gift",
        },
        {
          icon: <Icon name="Hand" />,
          title: "Block User",
        },
      ],
    },
    {
      items: [
        {
          icon: <Icon name="Trash" />,
          title: "Delete Chat",
        },
      ],
    },
  ];

  return (
    <GenericDropdownMenu triggerIcon={<AiOutlineMore />} sections={sections} />
  );
};

export default MoreOptions;
