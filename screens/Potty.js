import React, { useState } from 'react';
import { Header, Container } from '../utils';
import { useComments } from '../hooks';

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
  const [comments] = useComments(potty.id);
  console.log(comments);

  return potty ? (
    <Container>
      <Header>{potty.name}</Header>
    </Container>
  ) : (
    <Container>
      <Header>Loading</Header>
    </Container>
  );
};
