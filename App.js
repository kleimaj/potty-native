import React from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Signup, Splash } from './screens';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`;

const OnboardingStack = createStackNavigator();

function MapScreen() {
  return (
    <Container>
      <Title>Map!</Title>
    </Container>
  );
}

function ProfileScreen() {
  return (
    // <Container>
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <OnboardingStack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <OnboardingStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </OnboardingStack.Navigator>
    // </Container>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
