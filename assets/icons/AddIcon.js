import * as React from 'react';
import { SvgXml } from 'react-native-svg';
// import { css } from '@emotion/native';

export const AddIcon = () => {
  const icon =
    '<svg width="85" height="86" viewBox="0 0 85 86" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M42.594 82.857C64.6456 82.857 82.522 64.9806 82.522 42.929C82.522 20.8774 64.6456 3.00101 42.594 3.00101C20.5424 3.00101 2.66602 20.8774 2.66602 42.929C2.66602 64.9806 20.5424 82.857 42.594 82.857Z" fill="#F9D117" stroke="black" stroke-width="5" stroke-miterlimit="10"/><path d="M63.3125 28.75C63.6906 28.75 64 28.4406 64 28.0625V26.6875C64 26.3094 63.6906 26 63.3125 26H31.6875C31.3094 26 31 26.3094 31 26.6875V28.0625C31 28.4406 31.3094 28.75 31.6875 28.75H33.75V43.5914C32.0141 44.4594 31 45.4992 31 46.625C31 52.4 33.9734 57.4703 38.4594 60.418L36.6203 66.4508C36.0789 68.2125 37.4023 70 39.25 70H55.75C57.5977 70 58.9211 68.2125 58.3797 66.4508L56.5406 60.418C61.0266 57.4703 64 52.4 64 46.625C64 45.4992 62.9859 44.4594 61.25 43.5914V28.75H63.3125ZM36.5 28.75H58.5V42.5344C55.5781 41.6578 51.7281 41.125 47.5 41.125C43.2719 41.125 39.4219 41.6578 36.5 42.5344V28.75ZM47.5 43.875C54.7102 43.875 60.5625 45.1039 60.5625 46.625C60.5625 48.1461 54.7102 49.375 47.5 49.375C40.2898 49.375 34.4375 48.1461 34.4375 46.625C34.4375 45.1039 40.2898 43.875 47.5 43.875ZM39.25 67.25L40.9258 61.7586C42.9453 62.6352 45.1625 63.125 47.5 63.125C49.8375 63.125 52.0547 62.6352 54.0742 61.7586L55.75 67.25H39.25ZM47.5 60.375C41.0375 60.375 35.632 55.8805 34.1711 49.8563C37.1703 51.2313 42.0172 52.125 47.5 52.125C52.9828 52.125 57.8297 51.2313 60.8289 49.8563C59.368 55.8805 53.9625 60.375 47.5 60.375ZM44.0625 31.5H39.9375C39.5594 31.5 39.25 31.8094 39.25 32.1875V33.5625C39.25 33.9406 39.5594 34.25 39.9375 34.25H44.0625C44.4406 34.25 44.75 33.9406 44.75 33.5625V32.1875C44.75 31.8094 44.4406 31.5 44.0625 31.5Z" fill="black"/><path d="M27.7857 26.3125H22.3214V21.25C22.3214 20.6288 21.7777 20.125 21.1071 20.125H19.8929C19.2223 20.125 18.6786 20.6288 18.6786 21.25V26.3125H13.2143C12.5438 26.3125 12 26.8163 12 27.4375V28.5625C12 29.1837 12.5438 29.6875 13.2143 29.6875H18.6786V34.75C18.6786 35.3712 19.2223 35.875 19.8929 35.875H21.1071C21.7777 35.875 22.3214 35.3712 22.3214 34.75V29.6875H27.7857C28.4562 29.6875 29 29.1837 29 28.5625V27.4375C29 26.8163 28.4562 26.3125 27.7857 26.3125Z" fill="black"/></g><defs><clipPath id="clip0"><rect width="85" height="85.333" fill="white"/></clipPath></defs></svg>';
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