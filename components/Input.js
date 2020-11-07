import React from 'react';
import styled from '@emotion/native';
import { EmailIcon, NameIcon, PasswordIcon, SecureIcon } from '../assets';

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

export const EmailInput = (props) => (
  <Flex>
    <EmailIcon />
    <Input {...props} />
  </Flex>
);

export const NameInput = (props) => (
  <Flex>
    <NameIcon />
    <Input {...props} />
  </Flex>
);

export const PasswordInput = (props) => (
  <Flex>
    <PasswordIcon />
    <Input {...props} />
    <SecureIcon />
  </Flex>
);
