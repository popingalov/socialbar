import { useDispatch } from 'react-redux';
import { initialFilterStatus } from 'redux/categoriesFilter/categoriesConstants';
import { LinkStyled } from './ExtraMenu.styled';
import {
  setCocktailCategory,
  setIngredientCategory,
} from 'redux/categoriesFilter/categoriesFilterSlice';
import { setExtraMenuIsOpen } from 'redux/modal/modalSlice';
import { useGetExtraMenuNavLinks } from 'hooks/useGetNavLinks';

const ExtraMenu = () => {
  const navigation = useGetExtraMenuNavLinks();
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
