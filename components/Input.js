import styled, { css } from '@emotion/native';
import { Body } from '../utils';

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
