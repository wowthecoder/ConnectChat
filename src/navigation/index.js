import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/Authentication/SignInScreen';
import SignUpScreen from '../screens/Authentication/SignUpScreen';
import ConfirmEmailScreen from '../screens/Authentication/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/Authentication/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/Authentication/NewPasswordScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreens from '../screens/ContactsScreens';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'whitesmoke' } }}>
          <Stack.Screen name="Sign In" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="New Password" component={NewPasswordScreen} options={{ headerShown: false }} />

          <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Contacts" component={ContactsScreens} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator