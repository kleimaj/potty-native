import React from 'react';
import styled, { css } from '@emotion/native';
import { Subhead, Small, HyperLinkText } from '../utils';
import { PrimaryButton } from './Buttons';

import { Rating } from './Rating';

const Window = styled.View`
  //   margin: 50px 20px;
  //   position: relative;
  //   padding: 30px 10px;
`;
const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 280px;
  margin: 10px;
  padding: 12px;
`;
const RatingContainer = styled.View`
  display: flex;
  margin-right: 50px;
  height: 0;
`;
const ItemHeader = styled(Small)`
  font-weight: bold;
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
  width: 280px;
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

export const InfoWindow = ({ name, address, rating }) => {
  return (
    <Window>
      <Bubble>
        <Subhead>{name}</Subhead>
        <ItemContainer>
          <ItemHeader>Location</ItemHeader>
          <HyperLinkText
            style={css`
              width: 170px;
              text-decoration: underline;
            `}
          >
            {address}
          </HyperLinkText>
        </ItemContainer>
        <ItemContainer>
          <ItemHeader>Rating</ItemHeader>
          <RatingContainer>
            <Rating rating={rating} />
          </RatingContainer>
        </ItemContainer>
        <PrimaryButton onPress={(e) => console.log(e)}>
          View Details
        </PrimaryButton>
      </Bubble>
      <ArrowBorder />
      <Arrow />
    </Window>
  );
};
