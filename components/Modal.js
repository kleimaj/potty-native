import React from 'react';
import { Subhead } from '../utils';
import styled from '@emotion/native';
import { Input } from './Input';
import { EditableRating } from './Rating';

const ModalWrapper = styled.View`
  background: #fff;
  width: 300px;
  padding: 12px 24px;
  height: 300px;
`;

export const AddPottyModal = () => {
  return (
    <ModalWrapper>
      <Subhead>Potty Name</Subhead>
      <Input />
      <Subhead>Rating</Subhead>
      <EditableRating />
    </ModalWrapper>
  );
};
