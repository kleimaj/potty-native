import React, { useState, useCallback, useContext } from 'react';
import { Header } from '../utils';
import styled, { css } from '@emotion/native';
// import Back from './back.svgx';
import { BackIcon } from '../assets';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  PrimaryButton,
  SecondaryButton,
  HorizontalRule,
  EmailInput,
  PasswordInput,
  NameInput,
} from '../components';
import UserModel from '../models/user';
import { UserContext } from '../hooks';
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

export const Signup = ({ route, navigation }) => {
  const [user, setUser] = useContext(UserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async () => {
    console.log('Signup');
    // console.log(name, email, password);
    const response = await UserModel.create({ name, email, password });
    console.log(response);
    setUser({ userId: response.id, name });
    // set async storage
    try {
      await AsyncStorage.setItem('user', response.id);
      console.log('Success');
      // navigate
      navigation.navigate('Map');
    } catch {
      console.error('Error setting user to async storage');
    }
  }, [name, email, password]);
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
    </TouchableWithoutFeedback>
  );
};
