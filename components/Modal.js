import React from 'react';
import { Subhead } from '../utils';
import styled from '@emotion/native';
import { Input } from './Input';
import { EditableRating } from './Rating';
import { PrimaryButton, SecondaryButton } from './Buttons';

const ModalWrapper = styled.View`
  background: #fff;
  width: 300px;
  padding: 12px 24px;
  height: 300px;
  align-items: center;
`;
const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddPottyModal = () => {
  return (
    <ModalWrapper>
      <Subhead>Potty Name</Subhead>
      <Input />
      <Subhead>Rating</Subhead>
      <EditableRating />
      <ButtonContainer>
        <PrimaryButton>Create Potty</PrimaryButton>
        <SecondaryButton>Cancel</SecondaryButton>
      </ButtonContainer>
    </ModalWrapper>
  );
};
