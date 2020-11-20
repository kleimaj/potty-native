import React, { useContext } from 'react';
import { UserContext } from '../hooks';
import { Header } from '../utils';
import styled, { css } from '@emotion/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PrimaryButton, DangerButton } from '../components';
import UserModel from '../models/user';
import { ProfileIcon } from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.View`
  flex: 1;
  background: white;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 25px;
  padding-top: 100px;
`;
const ButtonGroup = styled.View`
  flex: 1;
  margin: 25px;
  width: 100%;
  justify-content: flex-end;
`;

export const Profile = ({ route, navigation }) => {
  const [currentUser, setUser] = useContext(UserContext);

  const handleLogout = async () => {
    await UserModel.logout();
    // remove from async storage
    try {
      await AsyncStorage.removeItem('user');
      console.log('Success');
      setUser({});
      console.log('Navigating...');
      navigation.navigate('Profile', { screen: 'Splash' });

      // navigate to Map or Profile?
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <ProfileIcon />
      <Header
        style={css`
          margin-top: 20px;
        `}
      >
        {currentUser.name ? `Welcome, ${currentUser.name}!` : 'Loading...'}
      </Header>
      <ButtonGroup>
        <PrimaryButton onPress={() => handleLogout()}>Logout</PrimaryButton>
        <DangerButton>Delete Account</DangerButton>
      </ButtonGroup>
    </Container>
  );
};
