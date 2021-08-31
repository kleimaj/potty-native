import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Subhead } from '../utils';
import styled from '@emotion/native';
import { DefaultInput } from './Input';
import { EditableRating } from './Rating';
import { PrimaryButton, SecondaryButton } from './Buttons';

const ModalWrapper = styled.View`
  display: ${(props) => (props.showModal ? 'flex' : 'none')};
  background: #fff;
  z-index: 3;
  width: 300px;
  height: 400px;
  position: absolute;
  border-radius: 12px;
  left: ${(props) => (props.width / 10).toString()};
  top: ${(props) => (props.height / 10).toString()};
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddPottyModal = ({ showModal, setShowModal }) => {
  const { width, height } = Dimensions.get('screen');
  const [name, setName] = useState('');
  const [currRating, setCurrRating] = useState(0);
  // const [location, setLocation] = useState({});
  return (
    <ModalWrapper width={width} height={height} showModal={showModal}>
      <Subhead>Potty Name</Subhead>
      <DefaultInput setText={setName} value={name} />
      <Subhead>Rating</Subhead>
      <EditableRating currRating={currRating} setCurrRating={setCurrRating} />
      <Subhead>Location</Subhead>

      <ButtonContainer>
        <PrimaryButton>Add Potty</PrimaryButton>
        <SecondaryButton onPress={() => setShowModal(!showModal)}>
          Cancel
        </SecondaryButton>
      </ButtonContainer>
    </ModalWrapper>
  );
};
