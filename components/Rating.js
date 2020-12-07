import React from 'react';
import styled, { css } from '@emotion/native';
import { StarIcon, StarBlankIcon } from '../assets';

const RatingContainer = styled.View`
  flex-direction: row;
  // align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 80px;
  // background: black;
`;
const EditableRatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 80px;
  height: 80px;
  // background: black;
`;
const Touch = styled.TouchableOpacity`
  width: 80px;
  margin: 64px;
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
    <EditableRatingContainer>
      {Array(currRating)
        .fill(1)
        .map((star, idx) => (
          <Touch onPress={() => setCurrRating(idx + 1)}>
            <StarIcon key={idx} />
          </Touch>
        ))}
      {Array(5 - currRating)
        .fill(1)
        .map((star, idx) => (
          <Touch onPress={() => setCurrRating(currRating + (idx + 1))}>
            <StarBlankIcon key={idx} />
          </Touch>
        ))}
    </EditableRatingContainer>
  );
};
