import { mainNavItems } from 'constants/navItems';
import { useDispatch } from 'react-redux';
import { setMobileIsOpen } from 'redux/modal/modalSlice';
import { Link, NavigationStyled, NavItem } from './MainNavigation.styled';

const MainNavigation = () => {
  const dispatch = useDispatch();

  return (
    <>
      <NavigationStyled>
        <ul>
          {mainNavItems.map(({ href, label }) => (
            <NavItem key={href} settings={href === `/settings`}>
              <Link
                to={href}
                onClick={() => {
                  dispatch(setMobileIsOpen(false));
                }}
              >
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
