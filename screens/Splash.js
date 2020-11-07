import React from 'react';
import { Display } from '../utils';
import styled, { css } from '@emotion/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin: 25px;
  margin-top: 100px;
`;
export const Splash = () => {
  return (
    <Container>
      <Display
        style={css`
          align-self: flex-start;
        `}
      >
        Potty Angel
      </Display>
    </Container>
  );
};
