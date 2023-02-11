import { useDispatch } from 'react-redux';
import { initialFilterStatus } from 'redux/categoriesFilter/categoriesConstants';
import { Link, NavigationStyled, NavItem } from './mobileNavigation.styled';
import MobileIcon from 'components/UI-kit/icons/mobileIcon';
import { paths } from 'constants/paths';
import {
  setCocktailCategory,
  setIngredientCategory,
} from 'redux/categoriesFilter/categoriesFilterSlice';
import { setMobileIsOpen } from 'redux/modal/modalSlice';
import { useGetMainNavLinks } from 'hooks/useGetNavLinks';

const MobileNavigation = () => {
  const dispatch = useDispatch();
  const navItems = useGetMainNavLinks();

  const handleLinkClick = (href: string) => {
    dispatch(setMobileIsOpen(false));
    if (href !== 'ingredients') {
      dispatch(setIngredientCategory(initialFilterStatus));
    }
    if (href !== 'cocktails') {
      dispatch(setCocktailCategory(initialFilterStatus));
    }
  };

  return (
    <>
      <NavigationStyled>
        {navItems.map(({ href, label }) => (
          <NavItem key={href} settings={href === paths.settings}>
            <Link to={href} onClick={() => handleLinkClick(href)}>
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
