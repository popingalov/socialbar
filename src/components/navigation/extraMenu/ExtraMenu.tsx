import { useDispatch } from 'react-redux';
import { extraMenuNavLinks } from 'constants/navItems';
import { initialFilterStatus } from 'redux/categoriesFilter/categoriesConstants';
import { LinkStyled } from './ExtraMenu.styled';
import {
  setCocktailCategory,
  setIngredientCategory,
} from 'redux/categoriesFilter/categoriesFilterSlice';
import { setExtraMenuIsOpen } from 'redux/modal/modalSlice';

const ExtraMenu = () => {
  // const user = useSee
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
