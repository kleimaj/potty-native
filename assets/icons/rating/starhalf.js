import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { css } from '@emotion/native';

export const StarHalfIcon = () => {
  const icon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half" class="svg-inline--fa fa-star-half fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z"></path></svg>`;
  return <SvgXml xml={icon} width="100%" height="100%" />;
};
