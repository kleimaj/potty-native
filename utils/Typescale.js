import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

// Type Scale Resources
// https://www.pinterest.com/pin/326299935487905443/

const Font = styled.Text`
  font-family: System;
`;

// Splash, Modal Titles
export const Display = styled(Font)`
  font-size: 42px;
  font-weight: bold;
`;

// Page titles
export const Header = styled(Font)`
  font-size: 36px;
  font-weight: bold;
`;

// Buttons,t abs, cell titles, forms
export const Title = styled(Font)`
  font-size: 32px;
  font-weight: bold;
  line-height: 52;
`;

// Intro paragraphs, player subhead
export const Subhead = styled(Font)`
  font-size: 28px;
  font-weight: bold;
`;

// Station descriptions
export const Body = styled(Font)`
  font-size: 24px;
`;

// Small Text - time stamps, footer, informational
export const Small = styled(Font)`
  font-size: 20px;
  line-height: 28;
`;
export const Smallest = styled(Font)`
  font-size: 18px;
  line-height: 28;
`;
export const HyperLinkText = styled(Smallest)`
  color: #0000ee;
`;
