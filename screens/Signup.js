import React, { useState, useCallback } from 'react';
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
  NameInput,
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

export const Signup = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(() => {
    console.log('Signup');
    console.log(name, email, password);
  }, [name, email, password]);
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
        Create Account
      </Header>
      <Main>
        <Inputs>
          <NameInput placeholder="Name" onChangeText={setName} value={name} />
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
        <PrimaryButton onPress={() => handleSubmit()}>Sign up</PrimaryButton>
        <HorizontalRule>or</HorizontalRule>
        <SecondaryButton onPress={() => navigation.navigate('Login')}>
          Log in
        </SecondaryButton>
      </Main>
    </Container>
  );
};
