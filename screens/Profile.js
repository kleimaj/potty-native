import React from 'react';
import { Header } from '../utils';
import styled, { css } from '@emotion/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProfileIcon } from '../assets';

const Container = styled.View`
  flex: 1;
  background: white;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 25px;
  padding-top: 100px;
`;

export const Profile = ({ route, navigation }) => {
  return (
    <Container>
      <ProfileIcon />
      <Header>User Name</Header>
    </Container>
  );
};
