import React from "react";
import { Box, Center, Flex, Image } from "native-base";
import Paragraph from "../components/Texts/Paragraph";
import Link from "../components/buttons/Link";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<AuthStackParams, "SignIn">;

const SignInScreen = ({ navigation }: Props) => {
  return (
    <Box flex={1} px={4} justifyContent="center" bg="gray">
      <Center mb={6}>
        <Image
          source={require("../assets/logo.png")}
          width="100%"
          resizeMode="contain"
          alt="logo"
        />
      </Center>
      <Paragraph
        text="Enter your phone number to sign in to the app."
        props={{
          my: 2,
        }}
      />
      <Box>{/* input component */}</Box>
      <Flex direction="row" alignItems="center" justify="center">
        <Paragraph text="If you have not registered yet continue to" />
        <Link text="Register" onPress={() => navigation.navigate("Register")} />
      </Flex>
    </Box>
  );
};

export default SignInScreen;
