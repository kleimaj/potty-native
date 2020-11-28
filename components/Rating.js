import React from 'react';
import styled from '@emotion/native';
import { StarIcon } from '../assets';

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

const Rating = ({ rating }) => (
  <RatingContainer>
    {Array(parseInt(rating, 10))
      .fill(1)
      .map((star, idx) => (
        <StarIcon />
      ))}
  </RatingContainer>
);
