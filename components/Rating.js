import React from 'react';
import styled from '@emotion/native';
import { StarIcon, StarBlankIcon } from '../assets';

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  // background: black;
`;
const Touch = styled.TouchableOpacity`
  width: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80px;
`;

export const Rating = ({ rating }) => (
  <RatingContainer>
    {Array(parseInt(rating, 10))
      .fill(1)
      .map((star, idx) => (
        <StarIcon key={idx} />
      ))}
    {Array(5 - parseInt(rating, 10))
      .fill(1)
      .map((star, idx) => (
        <StarBlankIcon key={idx} />
      ))}
  </RatingContainer>
);

export const EditableRating = ({ currRating, setCurrRating }) => {
  return (
    <RatingContainer>
      {Array(currRating)
        .fill(1)
        .map((star, idx) => (
          <Touch
            onPress={() => {
              console.log(idx + 1);
              setCurrRating(idx + 1);
            }}
          >
            <StarIcon key={idx} />
          </Touch>
        ))}
      {Array(5 - currRating)
        .fill(1)
        .map((star, idx) => (
          <Touch
            onPress={() => {
              console.log(currRating + idx + 1);
              setCurrRating(currRating + (idx + 1));
            }}
          >
            <StarBlankIcon key={idx} />
          </Touch>
        ))}
    </RatingContainer>
  );
};
