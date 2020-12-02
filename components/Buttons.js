import React from 'react';
import styled, { css } from '@emotion/native';
import { Body, HyperLinkText } from '../utils';
import { TargetIcon, AddIcon } from '../assets';

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
const IconButton = styled.TouchableOpacity`
  padding: 12px;
  // right: 0;
  // top: 70%;
  // position: absolute;
  // align-items: center;
  // border-radius: 50%;
  // margin: 8px 0;
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

export const TargetButton = (props) => (
  <IconButton
    onPress={props.onPress}
    style={css`
      right: 0;
      top: 70%;
      position: absolute;
    `}
  >
    <TargetIcon />
  </IconButton>
);

export const AddButton = (props) => (
  <IconButton
    onPress={props.onPress}
    style={css`
      right: 0;
      top: 55%;
      position: absolute;
    `}
  >
    <AddIcon />
  </IconButton>
);
