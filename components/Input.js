import React from 'react';
import styled from '@emotion/native';
import { EmailIcon, NameIcon, PasswordIcon, SecureIcon } from '../assets';

const Flex = styled.View`
  display: flex;
`;

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

export const DefaultInput = styled.TextInput`
  border: 2px solid #c4c4c4;
  border-radius: 8px;
  width: 70%;
  height: 50;
  margin: 12px 0;
  &::placeholder {
    color: black;
    padding: 12px;
  }
`;

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
