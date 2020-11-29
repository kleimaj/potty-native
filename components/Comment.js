import React from 'react';
import styled from '@emotion/native';
import { Rating } from './Rating';
import { Small, Smallest } from '../utils';

const Card = styled.View`
  border-radius: 16px;
  background: white;
  padding: 25px;
  margin: 18px;
`;

export const Comment = (props) => {
  console.log(props.comment.item, '!');
  const { title, rating, body } = props.comment.item;
  console.log(title, rating, body);
  console.log('~~~~~~~~');
  return (
    <Card>
      <Small>{title}</Small>
      <Rating rating={parseInt(rating, 10)} />
      <Smallest>{body}</Smallest>
    </Card>
  );
};
