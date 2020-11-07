import React from 'react';
import styled, { css } from '@emotion/native';
import { Body } from '../utils';

const Button = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  border-radius: 12px;
  padding: 12px;
`;

export const PrimaryButton = (props) => (
  <Button
    style={css`
      background-color: black;
    `}
  >
    <Body
      style={css`
        color: white;
      `}
    >
      {props.children}
    </Body>
  </Button>
);

export const SecondaryButton = (props) => (
  <Button
    style={css`
      border: 1px solid black;
    `}
  >
    <Body
      style={css`
        color: black;
      `}
    >
      {props.children}
    </Body>
  </Button>
);
