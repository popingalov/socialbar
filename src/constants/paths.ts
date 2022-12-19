interface IPaths {
  readonly home: string;
  readonly ingredients: string;
  readonly cocktails: string;
  readonly settings: string;
}

export const paths: IPaths = {
  home: '/',
  ingredients: '/ingredients',
  cocktails: '/cocktails',
  settings: '/settings',
};
