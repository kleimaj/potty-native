import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { css } from '@emotion/native';

export const PasswordIcon = () => {
  const icon =
    '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="lock-alt" class="svg-inline--fa fa-lock-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 420c-11 0-20-9-20-20v-64c0-11 9-20 20-20s20 9 20 20v64c0 11-9 20-20 20zm224-148v192c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48h16v-64C64 71.6 136-.3 224.5 0 312.9.3 384 73.1 384 161.5V224h16c26.5 0 48 21.5 48 48zM96 224h256v-64c0-70.6-57.4-128-128-128S96 89.4 96 160v64zm320 240V272c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16z"></path></svg>';
  return (
    <SvgXml
      style={css`
        color: #ccc;
        position: absolute;
      `}
      xml={icon}
      width="5%"
      height="100%"
    />
  );
};
