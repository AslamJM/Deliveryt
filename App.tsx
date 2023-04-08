import "react-native-gesture-handler";

import { NativeBaseProvider } from "native-base";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "./src/auth/cache";
import { CLERK_PUBLIC_KEY } from "./src/keys";
import AuthNavigator from "./src/auth/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";

import { theme } from "./src/theme";

export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLIC_KEY} tokenCache={tokenCache}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </ClerkProvider>
  );
}
