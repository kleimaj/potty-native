import React from 'react';
import styled from '@emotion/native';
import { EmailIcon } from '../assets';

export const Input = styled.TextInput`
  border-bottom-width: 2;
  border-bottom-color: #ccc;
  height: 50;
  margin: 12px 0;
  &::placeholder {
    color: black;
    padding: 0 40px;
  }
`;

const Flex = styled.View``;

export const EmailInput = ({ placeholder }) => (
  <Flex>
    <EmailIcon />
    <Input placeholder={placeholder} />
  </Flex>
);
