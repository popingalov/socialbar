import Button from 'components/UI-kit/buttons/button';
import { cocktailsNavItems, ingredientsNavItems } from 'constants/navItems';
import { paths } from 'constants/paths';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import {
  selectCocktailFilter,
  selectIngredientFilter,
} from 'redux/filter/filterSelectors';
import {
  setCocktailStatusFilter,
  setIngredientStatusFilter,
} from 'redux/filter/filterSlice';
import { useAppDispatch } from 'redux/hooks';

const PagesNavigation = () => {
  const location = useLocation();

  const navigation =
    location.pathname === paths.ingredients
      ? ingredientsNavItems
      : cocktailsNavItems;
  const filter = useSelector(
    location.pathname === paths.ingredients
      ? selectIngredientFilter
      : selectCocktailFilter,
  );
  const dispatch = useAppDispatch();
  const handleStatusFilterChange = (value: string) => {
    const setStatusFilter =
      location.pathname === paths.ingredients
        ? setIngredientStatusFilter
        : setCocktailStatusFilter;
    dispatch(setStatusFilter(value));
  };

  return (
    <>
      {navigation.map(({ label, statusFilter }) => (
        <li key={label}>
          <Button
            selected={filter === statusFilter}
            onClick={() => {
              handleStatusFilterChange(statusFilter);
            }}
          >
            {label}
          </Button>
        </li>
      ))}
    </>
  );
};

export default PagesNavigation;
