import React from 'react';
import styled, { css } from '@emotion/native';
import { Body, HyperLinkText } from '../utils';

const Button = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  border-radius: 12px;
  padding: 12px;
  margin: 8px 0;
`;
const Link = styled.TouchableOpacity`
  background: black;
`;

export const PrimaryButton = (props) => (
  <Button
    onPress={props.onPress}
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
    onPress={props.onPress}
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

export const DangerButton = (props) => (
  <Button
    onPress={props.onPress}
    style={css`
      border: 1px solid black;
      background-color: #f9d117;
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

export const HyperLink = (props) => (
  <Link onPress={props.onPress}>
    <HyperLinkText>{props.childrem}</HyperLinkText>
  </Link>
);
