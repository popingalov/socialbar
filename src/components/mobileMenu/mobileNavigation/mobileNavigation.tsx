import MobileIcon from 'components/UI-kit/icons/mobileIcon';
import { mainNavItems } from 'constants/navItems';
import { paths } from 'constants/paths';
import { useDispatch } from 'react-redux';
import { initialFilterStatus } from 'redux/categoriesFilter/categoriesConstants';
import {
  setCocktailCategory,
  setIngredientCategory,
} from 'redux/categoriesFilter/categoriesFilterSlice';
import { setMobileIsOpen } from 'redux/modal/modalSlice';
import { Link, NavigationStyled, NavItem } from './mobileNavigation.styled';

const MobileNavigation = () => {
  const dispatch = useDispatch();

  return (
    <>
      <NavigationStyled>
        {mainNavItems.map(({ href, label }) => (
          <NavItem key={href} settings={href === paths.settings}>
            <Link
              to={href}
              onClick={() => {
                dispatch(setMobileIsOpen(false));
                if (href !== 'ingredients') {
                  dispatch(setIngredientCategory(initialFilterStatus));
                }
                if (href !== 'cocktails') {
                  dispatch(setCocktailCategory(initialFilterStatus));
                }
              }}
            >
              <MobileIcon type={`/${href}`} />
              {label}
            </Link>
          </NavItem>
        ))}
      </NavigationStyled>
    </>
  );
};

export default MobileNavigation;
