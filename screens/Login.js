import React from 'react';
import { View, Text } from 'react-native';
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

export const Login = () => {
  return (
    <Container>
      <Text>Login!</Text>
    </Container>
  );
};
