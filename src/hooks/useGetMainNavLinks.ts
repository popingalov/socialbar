import { useTranslation } from 'react-i18next';
import { INavLink } from 'types/navLink';

export const useGetMainNavLinks = () => {
  const { t, i18n } = useTranslation();

  const mainNavItems: INavLink[] = [
    { href: 'ingredients', label: 'Ingredients' },
    { href: 'cocktails', label: 'Cocktails' },
    { href: 'settings', label: 'Settings' },
  ];
};
