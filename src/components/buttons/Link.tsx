import { Button, Text } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

type LinkButtonProps = {
  text: string;
  onPress: () => void;
};

const Link = ({ text, onPress }: LinkButtonProps) => {
  return (
    <Button
      onPress={onPress}
      variant="ghost"
      rightIcon={<AntDesign name="arrowright" size={20} color="#FFC000" />}
      size="lg"
    >
      <Text fontSize="md" color="primary.200" fontWeight="bold">
        {text}
      </Text>
    </Button>
  );
};

export default Link;
