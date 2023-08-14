import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashPage from '../pages/splash';
import AnimationPage from '../pages/animation';

export const routeSplash = 'Splash';
export const routeAnimation = 'Animation';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={routeSplash}>
        <Stack.Screen name={routeSplash} component={SplashPage} />
        <Stack.Screen name={routeAnimation} component={AnimationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
