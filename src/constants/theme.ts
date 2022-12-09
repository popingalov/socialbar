import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [x: string]: string;
    };

    space: number[];
  }
}

export const theme: DefaultTheme = {
  colors: {
    mainText: '#333333',
    accent: '#03453b',
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};
