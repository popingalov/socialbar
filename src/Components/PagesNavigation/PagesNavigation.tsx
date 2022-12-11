import { Button } from 'Components/button/Button';
import { cocktailsNavItems, ingredientsNavItems } from 'constants/navItems';
import { useSelector } from 'react-redux';
import {
  cocktailFilterStatus,
  ingredientFilterStatus,
} from 'redux/filter/filterConstants';
import {
  selectCocktailFilter,
  selectIngredientFilter,
} from 'redux/filter/filterSelectors';
import {
  setCocktailStatusFilter,
  setIngredientStatusFilter,
} from 'redux/filter/filterSlice';
import { useAppDispatch } from 'redux/hooks';
import { NavigationListStyled } from './PagesNavigation.styled';

interface IProps {
  type: 'ingredients' | 'cocktails';
}

export const PagesNavigation: React.FC<IProps> = ({ type }) => {
  const navigation =
    type === 'ingredients' ? ingredientsNavItems : cocktailsNavItems;
  const filter = useSelector(
    type === 'ingredients' ? selectIngredientFilter : selectCocktailFilter,
  );
  const dispatch = useAppDispatch();
  const handleStatusFilterChange = (value: string) => {
    const setStatusFilter =
      type === 'ingredients'
        ? setIngredientStatusFilter
        : setCocktailStatusFilter;
    dispatch(setStatusFilter(value));
  };

  return (
    <NavigationListStyled>
      {navigation.map(({ label, statusFilter }) => (
        <li key={label}>
          <Button
            selected={filter === statusFilter}
            onClick={() => handleStatusFilterChange(statusFilter)}
          >
            {label}
          </Button>
        </li>
      ))}
    </NavigationListStyled>
  );
};
