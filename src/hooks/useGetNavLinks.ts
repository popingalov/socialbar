import { useTranslation } from 'react-i18next';
import { INavLink } from 'types/navLink';

export const useGetMainNavLinks = () => {
  const { t } = useTranslation();

  const mainNavItems: INavLink[] = [
    { href: 'ingredients', label: t('mainNav.ingredients') },
    { href: 'cocktails', label: t('mainNav.cocktails') },
    { href: 'settings', label: t(t('mainNav.settings')) },
  ];

  return mainNavItems;
};

export const useGetExtraMenuNavLinks = () => {
  const { t } = useTranslation();

  const extraMenuNavLinks: INavLink[] = [
    { href: 'settings', label: t('extraMenuNav.settings') },
    { href: 'ingredients/new', label: t('extraMenuNav.createIngredient') },
    { href: 'cocktails/new', label: t('extraMenuNav.createCocktail') },
  ];

  return extraMenuNavLinks;
};
