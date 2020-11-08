import React, { useState, useCallback } from 'react';
import { Header } from '../utils';
import styled, { css } from '@emotion/native';
// import Back from './back.svgx';
import { BackIcon } from '../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
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
// const DismissKeyboard = ({ children }) => (
//   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//     {children}
//   </TouchableWithoutFeedback>
// );
export const Login = ({ route, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(() => {
    console.log('Login');
    console.log(email, password);
  }, [email, password]);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            <EmailInput
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </Inputs>
          <PrimaryButton onPress={() => handleSubmit()}>Log in</PrimaryButton>
          <HorizontalRule>Or</HorizontalRule>
          <SecondaryButton onPress={() => navigation.navigate('Signup')}>
            Sign up
          </SecondaryButton>
        </Main>
      </Container>
    </TouchableWithoutFeedback>
  );
};
