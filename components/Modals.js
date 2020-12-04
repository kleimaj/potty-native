import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Subhead } from '../utils';
import styled from '@emotion/native';
import { Input } from './Input';
import { EditableRating } from './Rating';
import { PrimaryButton, SecondaryButton } from './Buttons';

const ModalWrapper = styled.View`
  background: #fff;
  position: absolute;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddPottyModal = ({ showModal, setShowModal }) => {
  const [currRating, setCurrRating] = useState(0);
  return (
    <ModalWrapper>
      <Modal visible={showModal}>
        <Subhead>Potty Name</Subhead>
        <Input />
        <Subhead>Rating</Subhead>
        <EditableRating currRating={currRating} setCurrRating={setCurrRating} />
        <ButtonContainer>
          <PrimaryButton>Create Potty</PrimaryButton>
          <SecondaryButton onPress={() => setShowModal(!showModal)}>
            Cancel
          </SecondaryButton>
        </ButtonContainer>
      </Modal>
    </ModalWrapper>
  );
};
