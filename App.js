import React, { useState, useContext } from 'react';
// import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Signup, Splash, Profile } from './screens';

import styled from '@emotion/native';
import UserModel from './models';
import { UserContextProvider, UserContext } from './hooks';

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
  const [currentUser, setUser] = useContext(UserContext);
  console.log('Currently logged in:', currentUser);
  return (
    <Container>
      <Title>
        {currentUser && currentUser.name ? currentUser.name : 'Map!'}
      </Title>
    </Container>
  );
}

function ProfileScreen() {
  const [currentUser, setUser] = useContext(UserContext);
  console.log('Profile', currentUser);
  return (
    // <Container>
    <OnboardingStack.Navigator>
      {!Object.keys(currentUser).length ? (
        <>
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
        </>
      ) : (
        <>
          <OnboardingStack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: true }}
          />
        </>
      )}
    </OnboardingStack.Navigator>
    // </Container>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  // const [currentUser, setUser] = useContext(UserContext);

  // To be moved to onboarding screens
  // const storeUser = (userId, name) => {
  //   setUser({ currentUser: userId, name });
  //   // set async storage
  // };
  // To be moved to onboarding screens
  // const logout = async () => {
  // // remove from async storage
  // await UserModel.logout();
  // setUser(null);
  // // navigate to Map or Profile?
  // };
  // console.log('APP USER', currentUser);
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}
