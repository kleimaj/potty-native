import React from 'react';
import styled from '@emotion/native';
import { css } from '@emotion/native';
import { Rating } from './Rating';
import { Small, Smallest } from '../utils';

const Container = styled.View`
  padding: 12px;
  margin: 0 12px;
`;
const Card = styled.View`
  border-radius: 16px;
  background: white;
  padding: 18px;
`;

export const Comment = (props) => {
  console.log(props.comment.item, '!');
  const { title, rating, body, author } = props.comment.item;
  console.log(title, rating, body);
  console.log('~~~~~~~~');
  return (
    <Container>
      <Card>
        <Small>{title}</Small>
        <Rating rating={parseInt(rating, 10)} />
        <Smallest>{body}</Smallest>
      </Card>
      <Smallest
        style={css`
          align-self: flex-end;
        `}
      >
        By {author} 👼
      </Smallest>
    </Container>
  );
};
