import React from 'react';
import { Display, Title, Small } from '../utils';
import styled, { css } from '@emotion/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin: 25px;
  margin-top: 100px;
`;
const Main = styled.View`
  flex: 1;
  margin: 25px;
  width: 100%;
  justify-content: flex-end;
`;
export const Splash = () => {
  return (
    <Container>
      <Display>Potty Angel</Display>
      <Main>
        <Title>Bathroom finder</Title>
        <Small>
          Discover, Locate, and Review quality bathrooms in your area!
        </Small>
      </Main>
    </Container>
  );
};
