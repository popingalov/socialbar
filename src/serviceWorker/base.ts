export interface IStaticURL {
  [key: string]: any;
  ingredients: boolean;
  'ingredients/my': boolean;
  'my-ingredient-list': boolean;
  cocktails: boolean;
  glasses: boolean;
  'users/me': boolean;
  'shoping-list': boolean;
  categories: boolean;
  // 'favorite',
  next: boolean;
}
export const staticUrl: IStaticURL = {
  ingredients: true,
  'ingredients/my': true,
  'my-ingredient-list': true,
  cocktails: true,
  glasses: true,
  'users/me': true,
  'shoping-list': true,
  categories: true,
  // 'favorite',
  next: false,
};
//

export const cacheName = 'version-one';
