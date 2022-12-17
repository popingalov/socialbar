import { mainNavItems } from 'constants/navItems';
import React from 'react';
import { Link, NavigationStyled, NavItem } from './MainNavigation.styled';

interface IProps {
  closeMenu: () => void;
}

const MainNavigation: React.FC<IProps> = ({ closeMenu }) => {
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

export default MainNavigation;
