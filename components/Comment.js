import React from 'react';
import styled from '@emotion/native';
import { Rating } from './Rating';
import { Small } from '../utils';

const Card = styled.View`
  border-radius: 16px;
  background: white;
  padding: 25px;
  width: 300px;
  height: 200px;
`;

export const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <Card>
      <Small>{comment.title}</Small>
      <Rating rating={comment.rating} />
      <Small>{comment.body}</Small>
    </Card>
  );
};
