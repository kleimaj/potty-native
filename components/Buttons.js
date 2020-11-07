import styled from '@emotion/native';

const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  padding: 12px;
`;

export const PrimaryButton = styled(Button)`
  background-color: black;
  color: white;
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid black;
  color: black;
`;
