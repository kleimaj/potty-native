import React, { useState } from 'react';
import { Modal, Dimensions } from 'react-native';
import { Subhead } from '../utils';
import styled from '@emotion/native';
import { Input } from './Input';
import { EditableRating } from './Rating';
import { PrimaryButton, SecondaryButton } from './Buttons';

const ModalWrapper = styled.View`
  background: #fff;
  width: 300px;
  height: 400px;
  position: absolute;
  left: ${(props) => (props.width / 10).toString()};
  top: ${(props) => (props.height / 10).toString()};
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddPottyModal = ({ showModal, setShowModal }) => {
  const { width, height } = Dimensions.get('screen');
  const [currRating, setCurrRating] = useState(0);
  return (
    <ModalWrapper width={width} height={height} showModal={showModal}>
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
    </ModalWrapper>
  );
};
