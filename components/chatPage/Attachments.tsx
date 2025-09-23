import React from "react";
import { Icon } from "../shared/Icon";
import {
  DropdownMenuSection,
  GenericDropdownMenu,
} from "../shared/GenericDropdownMenu";
import { RiAttachment2 } from "react-icons/ri";

const Attachments = () => {
  const sections: DropdownMenuSection[] = [
    {
      items: [
        {
          icon: <Icon name="Image" />,
          title: "Photo or Video",
        },
        {
          icon: <Icon name="File" />,
          title: "File",
        },
        {
          icon: <Icon name="CheckCircle" />,
          title: "Checklist",
        },
      ],
    },
  ];

  return (
    <GenericDropdownMenu
      triggerIcon={<RiAttachment2 />}
      sections={sections}
      className="absolute md:bottom-[3.3rem] bottom-[1.7rem] right-13"
    />
  );
};

export default Attachments;
