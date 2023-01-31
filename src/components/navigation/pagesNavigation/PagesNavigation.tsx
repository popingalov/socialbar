import Button from 'components/UI-kit/buttons/button';
import { cocktailsNavItems, ingredientsNavItems } from 'constants/navItems';
import { paths } from 'constants/paths';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
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
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isMainRouteSearching =
    location.pathname === paths.searchIngredient ||
    location.pathname === paths.searchCocktails;
  const isIngredients =
    location.pathname === paths.ingredients ||
    location.pathname === paths.searchIngredient;

  const navigation = isIngredients ? ingredientsNavItems : cocktailsNavItems;
  const filter = useSelector(
    location.pathname === paths.ingredients
      ? selectIngredientFilter
      : selectCocktailFilter,
  );

  const handleStatusFilterChange = (value: string) => {
    if (isMainRouteSearching) {
      navigate(-1);
      dispatch(setPopUpIsOpen(false));
      dispatch(changeSearchFilter(initialSearchStatus));
    }

    const setStatusFilter = isIngredients
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
