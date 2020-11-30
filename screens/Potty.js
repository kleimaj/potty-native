import React, { useState } from 'react';
import { Container, Header, Subhead, Body, Small, Smallest } from '../utils';
import { useComments } from '../hooks';
import {
  Rating,
  PrimaryButton,
  EditableRating,
  Comment,
  Input,
} from '../components';
import styled, { css } from '@emotion/native';
import { FlatList } from 'react-native-gesture-handler';

const CommentContainer = styled.View`
  height: 300px;
`;
const Main = styled.View`
  width: 100%;
  height: 100px;
`;
const Inputs = styled.View`
  padding: 18px;
  align-items: center;
`;
const Scroll = styled.ScrollView``;

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
  const { comments, addComment } = useComments(potty.id);

  const [title, setTitle] = useState('');
  const [currRating, setCurrRating] = useState(0);
  const [body, setBody] = useState('');

  //   const createComment = () => {};

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
      <Main>
        <Scroll>
          <Small>Add a comment</Small>
          <Inputs>
            <Smallest>Title</Smallest>
            <Input onChangeText={setTitle} value={title} />
            <EditableRating
              currRating={currRating}
              setCurrRating={setCurrRating}
            />
            <Smallest>Body</Smallest>
            <Input onChangeText={setBody} value={body} />
            <PrimaryButton onPress={() => addComment()}>Post</PrimaryButton>
          </Inputs>
        </Scroll>
      </Main>
    </Container>
  ) : (
    <Container>
      <Header>Loading</Header>
    </Container>
  );
};
