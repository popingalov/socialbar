import { mainNavItems } from 'constants/navItems';
import React from 'react';
import { Link, NavigationStyled, NavItem } from './Navigation.styled';

interface IProps {
  closeMenu: () => void;
}

export const Navigation: React.FC<IProps> = ({ closeMenu }) => {
  return (
    <>
      <NavigationStyled>
        <ul>
          {mainNavItems.map(({ href, label }) => (
            <NavItem key={href} settings={href === `/settings`}>
              <Link onClick={closeMenu} to={href}>
                {label}
              </Link>
            </NavItem>
          ))}
        </ul>
      </NavigationStyled>
    </>
  );
};
