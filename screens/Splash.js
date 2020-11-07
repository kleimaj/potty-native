import React from 'react';
import { View } from 'react-native';
import { Display } from '../utils';
import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
`;
const Title = styled(Display)`
  align-self: flex-start;
  margin: 25px;
  margin-top: 100px;
  font-family: Avenir Next;
  font-size: 42px;
`;
export const Splash = () => {
  return (
    <Container>
      <Title>Potty Angel</Title>
    </Container>
  );
};
