import { mainNavItems } from 'constants/navItems';
import { useDispatch } from 'react-redux';
import { setMobileIsOpen } from 'redux/modal/modalSlice';
import { Link, NavigationStyled, NavItem } from './mobileNavigation.styled';

const MobileNavigation = () => {
  const dispatch = useDispatch();

  return (
    <>
      <NavigationStyled>
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
      </NavigationStyled>
    </>
  );
};

export default MobileNavigation;
