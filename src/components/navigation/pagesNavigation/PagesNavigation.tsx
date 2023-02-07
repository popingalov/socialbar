import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from 'components/UI-kit/buttons/button';
import { changeSearchFilter } from 'redux/searchFilter/searchSlice';
import { cocktailsNavItems, ingredientsNavItems } from 'constants/navItems';
import { initialSearchStatus } from 'redux/searchFilter/searchConstants';
import {
  selectCocktailFilter,
  selectIngredientFilter,
} from 'redux/filter/filterSelectors';
import {
  setCocktailStatusFilter,
  setIngredientStatusFilter,
} from 'redux/filter/filterSlice';
import { setPopUpIsOpen } from 'redux/modal/modalSlice';
import { useGetLocation } from 'hooks/useGetLocation';

const PagesNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isMainRouteSearching, isIngredientsAndSearch, isIngredients } =
    useGetLocation();

  const navigation = isIngredientsAndSearch
    ? ingredientsNavItems
    : cocktailsNavItems;
  const filter = useSelector(
    isIngredients ? selectIngredientFilter : selectCocktailFilter,
  );

  const handleStatusFilterChange = (value: string) => {
    if (isMainRouteSearching) {
      navigate(-1);
      dispatch(setPopUpIsOpen(false));
      dispatch(changeSearchFilter(initialSearchStatus));
    }

    const setStatusFilter = isIngredientsAndSearch
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
