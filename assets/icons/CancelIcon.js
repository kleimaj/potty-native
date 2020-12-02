import * as React from 'react';
import { SvgXml } from 'react-native-svg';
// import { css } from '@emotion/native';

export const CancelIcon = () => {
  const icon =
    '<svg width="85" height="86" viewBox="0 0 85 86" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M42.594 82.857C64.6456 82.857 82.522 64.9806 82.522 42.929C82.522 20.8774 64.6456 3.00101 42.594 3.00101C20.5424 3.00101 2.66602 20.8774 2.66602 42.929C2.66602 64.9806 20.5424 82.857 42.594 82.857Z" fill="#F91725" stroke="black" stroke-width="5" stroke-miterlimit="10"/><g clip-path="url(#clip1)"><path d="M49.735 43.5L67.2395 26.0376C68.2519 25.0276 68.2519 23.3887 67.2395 22.3771L63.1721 18.3195C62.1598 17.3096 60.5169 17.3096 59.5029 18.3195L42 35.7836L24.4955 18.3212C23.4831 17.3112 21.8403 17.3112 20.8263 18.3212L16.7605 22.3771C15.7481 23.3871 15.7481 25.026 16.7605 26.0376L34.265 43.5L16.7605 60.9624C15.7481 61.9724 15.7481 63.6113 16.7605 64.6228L20.8279 68.6804C21.8403 69.6904 23.4831 69.6904 24.4971 68.6804L42 51.2164L59.5045 68.6788C60.5169 69.6888 62.1598 69.6888 63.1738 68.6788L67.2411 64.6212C68.2535 63.6113 68.2535 61.9724 67.2411 60.9608L49.735 43.5Z" fill="black"/></g></g><defs><clipPath id="clip0"><rect width="85" height="85.333" fill="white"/></clipPath><clipPath id="clip1"><rect width="52" height="83" fill="white" transform="translate(16 2)"/></clipPath></defs></svg>';
  return (
    <SvgXml
      //   style={css`
      //     color: #ccc;
      //     position: absolute;
      //     right: 0;
      //   `}
      xml={icon}
      //   width="5%"
      //   height="100%"
    />
  );
};
