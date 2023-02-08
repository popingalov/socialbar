import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
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
import { useEffect, useRef } from 'react';

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

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleRef = (el: HTMLButtonElement) => {
    const tabNames = tabRefs.current.map(button => button?.name);

    if (tabNames.includes(el?.name)) {
      tabRefs.current = tabRefs.current.filter(
        button => button?.name !== el?.name,
      );
    }

    if (tabRefs.current.length < 6 && el) {
      tabRefs.current.push(el);
    }
  };

  const executeScroll = (statusFilter: string) => {
    tabRefs.current.forEach(button => {
      if (button?.name === statusFilter) {
        button.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    });
  };

  return (
    <>
      {navigation.map(({ label, statusFilter }) => (
        <li key={label}>
          <Button
            tabName={statusFilter}
            ref={handleRef}
            selected={filter === statusFilter}
            onClick={() => {
              executeScroll(statusFilter);
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
