import Button from 'components/UI-kit/buttons/button';
import { cocktailsNavItems, ingredientsNavItems } from 'constants/navItems';
import { useGetLocation } from 'hooks/useGetLocation';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  selectCocktailFilter,
  selectIngredientFilter,
} from 'redux/filter/filterSelectors';
import {
  setCocktailStatusFilter,
  setIngredientStatusFilter,
} from 'redux/filter/filterSlice';
import { setPopUpIsOpen } from 'redux/modal/modalSlice';
import { initialSearchStatus } from 'redux/searchFilter/searchConstants';
import { changeSearchFilter } from 'redux/searchFilter/searchSlice';

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
