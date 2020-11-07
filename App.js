import React, { useState } from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

function MapScreen() {
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
      <Title>Map!</Title>
    </Container>
  );
}

function ProfileScreen() {
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
      <Title>Signup / Profile</Title>
    </Container>
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
