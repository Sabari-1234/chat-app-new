import React from "react";
import { Text } from "./Text";

interface InfoTextProps {
  info: string;
}
const InfoText = ({ info }: InfoTextProps) => {
  return <Text>{info}</Text>;
};

export default InfoText;
