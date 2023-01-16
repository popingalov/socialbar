export interface IStaticURL {
  [key: string]: any;
  'api/ingredients': boolean;
  'api/ingredients/my': boolean;
  'api/my-ingredient-list': boolean;
  'api/cocktails': boolean;
  'api/glasses': boolean;
  'api/users/me': boolean;
  'api/shoping-list': boolean;
  'api/categories': boolean;
  // 'favorite',
  next: boolean;
}
export const staticUrl: IStaticURL = {
  'api/ingredients': true,
  'api/ingredients/my': true,
  'api/my-ingredient-list': true,
  'api/cocktails': true,
  'api/glasses': true,
  'api/users/me': true,
  'api/shoping-list': true,
  'api/categories': true,
  // 'favorite',
  next: false,
};
// перед заміною не забути почистити попередній кеш
export const cacheName = 'version-one';
