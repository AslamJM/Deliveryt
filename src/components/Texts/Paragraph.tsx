import React from "react";
import { Text, ITextProps } from "native-base";
const Paragraph = ({ text, props }: { text: string; props?: ITextProps }) => {
  return (
    <Text fontSize="md" color="dark" {...props}>
      {text}
    </Text>
  );
};

export default Paragraph;
