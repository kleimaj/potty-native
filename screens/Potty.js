import React, { useState } from 'react';
import { Header } from '../utils';

export const Potty = ({ route, navigation }) => {
  const [potty, setPotty] = useState();

  return potty ? <Header>{potty.name}</Header> : <Header>Loading</Header>;
};
