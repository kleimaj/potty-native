import React from 'react';
import styled from '@emotion/native';
import { Subhead, Small } from '../utils';

const Window = styled.View`
  //   margin: 50px 20px;
  position: relative;
  //   padding: 30px 10px;
`;

const Bubble = styled.View`
  flex-direction: column;
  align-self: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  border-color: #ccc;
  border-width: 0.5px;
  padding: 15px;
  width: 180px;
`;
const ArrowBorder = styled.View`
  background-color: transparent;
  border-color: transparent;
  border-top-color: #007a87;
  border-width: 16px;
  align-self: center;
  margin-top: -0.5;
`;
const Arrow = styled.View`
  background-color: transparent;
  border-color: transparent;
  border-top-color: #fff;
  border-width: 16px;
  align-self: center;
  margin-top: -32;
`;
const Address = styled.TouchableOpacity``;

export const InfoWindow = ({ name, address, rating }) => (
  <Window>
    <Bubble>
      <Subhead>{name}</Subhead>
      <Address>
        <Small link>{address}</Small>
      </Address>
      <Small>{rating}</Small>
    </Bubble>
    <ArrowBorder />
    <Arrow />
  </Window>
);
