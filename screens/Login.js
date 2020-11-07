import React from 'react';
import { Header } from '../utils';
import styled, { css } from '@emotion/native';
// import Back from './back.svgx';
import { BackIcon } from '../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  PrimaryButton,
  SecondaryButton,
  HorizontalRule,
  EmailInput,
  PasswordInput,
} from '../components';
// import Svg, { Path } from 'react-native-svg';

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

const Main = styled.View`
  width: 100%;
`;
const Inputs = styled.View`
  margin: 18px 0;
`;

export const Login = ({ route, navigation }) => {
  return (
    <Container>
      <TouchableOpacity
        style={css`
          width: 40;
          height: 40;
        `}
        onPress={() => navigation.navigate('Splash')}
      >
        <BackIcon />
      </TouchableOpacity>
      <Header
        style={css`
          align-self: flex-start;
        `}
      >
        Welcome Back
      </Header>
      <Main>
        <Inputs>
          <EmailInput placeholder="Email" />
          <PasswordInput placeholder="Password" secureTextEntry={true} />
        </Inputs>
        <PrimaryButton>Log in</PrimaryButton>
        <HorizontalRule>Or</HorizontalRule>
        <SecondaryButton onPress={() => navigation.navigate('Signup')}>
          Sign up
        </SecondaryButton>
      </Main>
    </Container>
  );
};
