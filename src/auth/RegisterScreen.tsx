import React, { useState } from "react";
import {
  Box,
  Input,
  Flex,
  Button,
  InputGroup,
  InputLeftAddon,
  Text,
  Image,
  Center,
} from "native-base";

import { useSignUp } from "@clerk/clerk-expo";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import Paragraph from "../components/Texts/Paragraph";
import Link from "../components/buttons/Link";

type Props = StackScreenProps<AuthStackParams, "Register">;

const PhoneNumberScreen = ({ navigation }: Props) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useSignUp();

  const registerHandler = async () => {
    setLoading(true);
    console.log(phone);

    if (!signUp) {
      return;
    }
    try {
      await signUp.create({
        phoneNumber: `+94${phone}`,
      });
      //navigation.navigate("Otp");
      await signUp.preparePhoneNumberVerification();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
        text="Welcome to Deliveryt. please register with your phone number to continue with our app."
        props={{
          my: 2,
        }}
      />
      <InputGroup w="100%">
        <InputLeftAddon fontSize="lg">+94</InputLeftAddon>
        <Input
          w="90%"
          keyboardType="numeric"
          placeholder="Enter your phone number"
          fontSize="md"
          onChangeText={setPhone}
          colorScheme="primary"
        />
      </InputGroup>
      <Flex w="1/2" mx="auto">
        <Button
          mt={3}
          size="md"
          onPress={registerHandler}
          isLoading={loading}
          isLoadingText="sending OTP..."
          bg="primary.100"
          isDisabled={phone.length < 9}
        >
          <Text fontSize="md" color="dark" fontWeight="bold">
            Register
          </Text>
        </Button>
      </Flex>
      <Flex mt={4} direction="row" alignItems="center" justifyContent="center">
        <Paragraph text="Already registered? Continue to " />
        <Link text="Sign In" onPress={() => navigation.navigate("SignIn")} />
      </Flex>
    </Box>
  );
};

export default PhoneNumberScreen;
