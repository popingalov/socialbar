import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { initialFilterStatus } from 'redux/categoriesFilter/categoriesConstants';
import {
  setCocktailCategory,
  setIngredientCategory,
} from 'redux/categoriesFilter/categoriesFilterSlice';
import { LinkStyled } from './BottomMessageLink.styled';

interface IProps {
  children: ReactNode;
  to: string;
}
const BottomMessageLink: React.FC<IProps> = ({ children, to }) => {
  const dispatch = useDispatch();

  return (
    <LinkStyled
      to={to}
      onClick={() => {
        if (to !== 'ingredients') {
          dispatch(setIngredientCategory(initialFilterStatus));
        }
        if (to !== 'cocktails') {
          dispatch(setCocktailCategory(initialFilterStatus));
        }
      }}
    >
      {children}
    </LinkStyled>
  );
};

export default BottomMessageLink;
