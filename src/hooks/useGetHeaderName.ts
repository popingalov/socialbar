import { useTranslation } from 'react-i18next';
import { paths } from 'constants/paths';

export const useGetHeaderName = (path: string) => {
  const { t } = useTranslation();

  switch (path) {
    case paths.settings:
      return t('extraMenuNav.settings');
    case paths.newCocktail:
      return t('extraMenuNav.createCocktail');
    case paths.newIngredient:
      return t('extraMenuNav.createIngredient');
    default:
      return ``;
  }
};
