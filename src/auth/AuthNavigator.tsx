import { createStackNavigator } from "@react-navigation/stack";

import OtpScreen from "./OtpScreen";
import RegisterScreen from "./RegisterScreen";
import SignInScreen from "./SignInScreen";

const AuthStack = createStackNavigator<AuthStackParams>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="Otp" component={OtpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
