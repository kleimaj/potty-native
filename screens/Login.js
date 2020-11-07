import React from 'react';
import { Header } from '../utils';
import styled, { css } from '@emotion/native';
// import Back from './back.svgx';
import { BackIcon } from '../assets';
// import Svg, { Path } from 'react-native-svg';

const Container = styled.View`
  flex: 1;
  background: white;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 25px;
  padding-top: 100px;
`;

const Main = styled.View`
  flex: 1;
  margin: 25px;
  width: 100%;
  justify-content: flex-end;
`;

export const Login = ({ route, navigation }) => {
  return (
    <Container>
      <BackIcon />
      {/* <Svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fal"
        data-icon="chevron-left"
        class="svg-inline--fa fa-chevron-left fa-w-8"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
      >
        <Path
          fill="black"
          d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
        ></Path>
      </Svg> */}
      <Header
        style={css`
          align-self: flex-start;
        `}
      >
        Login!
      </Header>
    </Container>
  );
};
