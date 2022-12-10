import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [x: string]: string;
    };

    space: number[];

    fontFamily: string;

    fontWeight: {
      normal: number;
      medium: number;
      semiBold: number;
      bold: number;
    };

    fontSizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };

    transitionTiming: string;
  }
}

export const theme: DefaultTheme = {
  colors: {
    lightText: '#ebebeb', // white text color on blue bg
    mainText: '#333333', // main dark black color
    secondaryText: '#757575', // lighter grey text color
    accent: '#2B7A78', // dark green-blue color -- for hover
    secondaryAccent: '#17252A', // the most dark -- additional color / just in case
    accentBackgroundColor: '#3AAFA9', // header-navigation color
    mainBackgroundColor: '#f5f4fa', // very light white color
    secondaryBackgroundColor: '#cdf7f5', // very light blue color
    backdropColor: ' rgba(0, 0, 0, 0.5)', // backdrop grey shadow color
    inputError: ' rgba(142, 22, 0, 0.08)', // red input error color
    borderBottom: 'rgba(0, 0, 0, 0.13)',
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fontFamily: "'Montserrat', sans- serif",

  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '20px',
    l: '24px',
    xl: '32px',
  },

  transitionTiming: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

// accent: '#254E58',
// secondaryAccent: '#4F4A41',
// accentBackgroundColor: '#88BDBC',
