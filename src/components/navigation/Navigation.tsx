import { mainNavItems } from 'constants/navItems';
import { Link, NavigationStyled, NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <NavigationStyled>
        <ul>
          {mainNavItems.map(({ href, label }) => (
            <NavItem key={href} settings={href === `/settings`}>
              <Link to={href}>{label}</Link>
            </NavItem>
          ))}
        </ul>
      </NavigationStyled>
    </>
  );
};
