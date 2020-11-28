import React, { useContext } from 'react';
// import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Signup, Splash, Profile, MapView } from './screens';
import { UserContextProvider, UserContext } from './hooks';

const OnboardingStack = createStackNavigator();
const MapStack = createStackNavigator();

function MapScreen() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="Map"
        component={MapView}
        options={{ headerShown: false }}
      />
    </MapStack.Navigator>
  );
}

function ProfileScreen() {
  const [currentUser] = useContext(UserContext);
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
