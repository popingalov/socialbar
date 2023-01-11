import { extraMenuNavLinks } from 'constants/navItems';
import { useDispatch } from 'react-redux';
import { initialFilterStatus } from 'redux/categoriesFilter/categoriesConstants';
import {
  setCocktailCategory,
  setIngredientCategory,
} from 'redux/categoriesFilter/categoriesFilterSlice';
import { setExtraMenuIsOpen } from 'redux/modal/modalSlice';
import { LinkStyled } from './ExtraMenu.styled';

const ExtraMenu = () => {
  const navigation = extraMenuNavLinks;
  const dispatch = useDispatch();

  return (
    <>
      {navigation.map(({ href, label }) => (
        <li key={href}>
          <LinkStyled
            to={href}
            onClick={() => {
              dispatch(setExtraMenuIsOpen(false));
              if (href !== 'ingredients') {
                dispatch(setIngredientCategory(initialFilterStatus));
              }
              if (href !== 'cocktails') {
                dispatch(setCocktailCategory(initialFilterStatus));
              }
            }}
          >
            {label}
          </LinkStyled>
        </li>
      ))}
    </>
  );
};
export default ExtraMenu;
