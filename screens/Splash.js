import React from 'react';
import { StatusBar } from 'react-native';
import { Display, Title, Small } from '../utils';
import { PrimaryButton, SecondaryButton } from '../components';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  background: white;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 25px;
  padding-top: 100px;
`;
const Main = styled.View`
  flex: 1;
  margin: 25px;
  width: 100%;
  justify-content: flex-end;
`;
const ButtonGroup = styled.View`
  margin-top: 30px;
`;
export const Splash = ({ route, navigation }) => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <Display>Potty Angel</Display>
      <Main>
        <Title>Bathroom finder</Title>
        <Small>
          Discover, Locate, and Review quality bathrooms in your area!
        </Small>
        <ButtonGroup>
          <PrimaryButton
            onPress={() => {
              console.log('Login');
              navigation.navigate('Login');
            }}
          >
            Log in
          </PrimaryButton>
          <SecondaryButton onPress={() => navigation.navigate('Signup')}>
            Sign up
          </SecondaryButton>
        </ButtonGroup>
      </Main>
    </Container>
  );
};
