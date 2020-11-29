import React, { useState } from 'react';
import { Header } from '../utils';

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
  //   console.log(route.params);

  return potty ? <Header>{potty.name}</Header> : <Header>Loading</Header>;
};
