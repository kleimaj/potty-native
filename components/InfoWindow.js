import React from 'react';
import { View } from 'react-native';
import styled from '@emotion/native';
import { Title, Body } from '../utils';

const Bubble = styled.View`
  flex-direction: row;
  align-self: flex-start;
  background-color: #fff;
  border-radius: 8px;
  border-color: #ccc;
  border-width: 0.5;
  padding: 15px;
  width: 150px;
`;
const ArrowBorder = styled.View`
  background-color: transparent;
  border-color: transparent;
  border-top-color: #007a87;
  border-width: 16;
  align-self: center;
  margin-top: -0.5;
`;
const Arrow = styled.View`
  background-color: transparent;
  border-color: transparent;
  border-top-color: #fff;
  border-width: 16;
  align-self: center;
  margin-top: -32;
`;

export const InfoWindow = ({ title, rating }) => (
  <View>
    <Bubble>
      <Title>{title}</Title>
      <Body>{rating}</Body>
      <ArrowBorder />
      <Arrow />
    </Bubble>
  </View>
);
