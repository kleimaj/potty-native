import React from 'react';
import styled from '@emotion/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 8px 0;
`;
const Line = styled.View`
  flex: 1;
  height: 1;
  background-color: #ccc;
`;
const Text = styled.Text`
  width: 50;
  text-align: center;
  color: #ccc;
`;
export const HorizontalRule = (props) => (
  <Container>
    <Line />
    <Text>{props.children}</Text>
    <Line />
  </Container>
);
