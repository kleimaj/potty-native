import React, { useState } from 'react';
import { Container, Header, Subhead, Body, Small, Smallest } from '../utils';
import { useComments } from '../hooks';
import { Rating, Comment, Input } from '../components';
import styled, { css } from '@emotion/native';
import { FlatList } from 'react-native-gesture-handler';

const CommentContainer = styled.View`
  height: 300px;
`;

export const Potty = ({ route, navigation }) => {
  /*"address": "225 Bush Street, San Francisco, CA 94104",
    "createdAt": "2020-11-27T23:37:07.542Z",
    "id": 3,
    "latitude": "37.7910409",
    "longitude": "-122.4010156",
    "name": "General Assembly",
    "rating": 5,
    "state": "California",
    "updatedAt": "2020-11-27T23:37:07.542Z",
    "zip": "91355",*/
  const [potty] = useState(route.params);
  const comments = useComments(potty.id);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  return potty ? (
    <Container>
      <Header>{potty.name}</Header>
      <Rating rating={parseInt(potty.rating, 10)} />
      <Body
        style={css`
          padding: 14px;
        `}
      >
        {potty.address}
      </Body>
      <Subhead>Comments</Subhead>
      <CommentContainer>
        <FlatList
          data={comments}
          style={css``}
          renderItem={(comment) => <Comment comment={comment} />}
          keyExtractor={(comment) => comment.id}
          ListEmptyComponent={<Body>No comments yet!</Body>}
        />
      </CommentContainer>
      {/* <Subhead>Add a comment</Subhead>
      <Smallest>Title</Smallest>
      <Input onChangeText={setTitle} value={title} />
      <Smallest>Body</Smallest>
      <Input onChangeText={setBody} value={body} /> */}
    </Container>
  ) : (
    <Container>
      <Header>Loading</Header>
    </Container>
  );
};
