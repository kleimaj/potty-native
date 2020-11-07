import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled, { css } from '@emotion/native';

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

function HomeScreen() {
  return (
    <Container
    // style={
    //   // { flex: 1, justifyContent: 'center', alignItems: 'center' }
    //   css`
    //     flex: 1;
    //     justifycontent: 'center';
    //     alignitems: center;
    //   `
    // }
    >
      <Title>Home!</Title>
    </Container>
  );
}

function SettingsScreen() {
  return (
    <Container
    // style={
    //   { flex: 1, justifyContent: 'center', alignItems: 'center' }}
    //   // css`
    //   //   flex: 1;
    //   //   justifycontent: 'center';
    //   //   // eslint-disable-next-line prettier/prettier
    //   //   alignitems: center;
    //   // `
    // }
    >
      <Title>Settings!</Title>
    </Container>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
