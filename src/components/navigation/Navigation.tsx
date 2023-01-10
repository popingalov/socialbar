import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import ExtraIcons from 'components/navigation/extraIcons';
import { getHeaderName } from 'helpers/getHeaderName';
import HeaderIcon from 'components/UI-kit/icons/headerIcon';
import { headerIconTypes } from 'constants/headerIconTypes';
import { NavigationListStyled, PageName, Wrapper } from './Navigation.styled';
import PagesNavigation from './pagesNavigation';
import { paths } from 'constants/paths';
import SearchBar from 'components/navigation/searchBar';
import Select from 'components/UI-kit/select';
import { setExtraMenuIsOpen, setMobileIsOpen } from 'redux/modal/modalSlice';
import { useGetCategoriesQuery } from 'redux/api/manualApi';
import { initialFilterStatus } from 'redux/categoriesFilter/categoriesConstants';
import {
  setCocktailCategory,
  setIngredientCategory,
} from 'redux/categoriesFilter/categoriesFilterSlice';
import { useSelector } from 'react-redux';
import {
  selectCocktailFilter,
  selectIngredientFilter,
} from 'redux/filter/filterSelectors';

const Navigation = () => {
  const ingredientFilter = useSelector(selectIngredientFilter);
  const cocktailFilter = useSelector(selectCocktailFilter);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { data } = useGetCategoriesQuery();
  const [isSearch, setSearch] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [selectValue, setSelectValue] = useState(initialFilterStatus);

  const isMainRoute =
    location.pathname === paths.ingredients ||
    location.pathname === paths.cocktails;
  const isExtraRoute =
    location.pathname === paths.settings ||
    location.pathname === paths.newCocktail ||
    location.pathname === paths.newIngredient;
  const isMainRouteSearching = isMainRoute && isSearch;
  const isMainRouteFilter = isMainRoute && !isSearch;
  const isCardRouteSearching = isSearch && !isMainRoute;
  const isIngredients = location.pathname === paths.ingredients;

  const ingredientCategories = data?.ingredients.map(({ title }) => title);
  ingredientCategories?.unshift(initialFilterStatus);
  const cocktailCategories = data?.cocktails.map(({ title }) => title);
  cocktailCategories?.unshift(initialFilterStatus);
  const filter = isIngredients ? ingredientCategories : cocktailCategories;

  useEffect(() => {
    if (isIngredients && currentPath !== ingredientFilter) {
      dispatch(setIngredientCategory(initialFilterStatus));
      setSelectValue(initialFilterStatus);
    }

    if (!isIngredients && currentPath !== cocktailFilter) {
      dispatch(setCocktailCategory(initialFilterStatus));
      setSelectValue(initialFilterStatus);
    }

    isIngredients
      ? setCurrentPath(ingredientFilter)
      : setCurrentPath(cocktailFilter);
  }, [ingredientFilter, cocktailFilter, isIngredients, currentPath, dispatch]);

  const handleSideMenu = () => {
    dispatch(setMobileIsOpen(true));
  };

  const handleBackButton = () => {
    if (isSearch) setSearch(false);
    else navigate(-1);
  };

  const handleSearchButton = () => setSearch(prevState => !prevState);

  const handleAppMenu = () => {
    dispatch(setExtraMenuIsOpen(true));
  };

  const handleFilter = (value: string) => {
    isIngredients
      ? dispatch(setIngredientCategory(value))
      : dispatch(setCocktailCategory(value));

    setSelectValue(value);
  };

  return (
    <>
      <Wrapper isExtraRoute={isExtraRoute}>
        {isMainRouteFilter && filter && (
          <>
            <ClearButton aria-label="mobile-menu" onClick={handleSideMenu}>
              <HeaderIcon type={headerIconTypes.burgerMenu} />
            </ClearButton>
            <Select
              value={selectValue}
              options={filter}
              onChange={handleFilter}
            />
          </>
        )}
        {(isMainRouteSearching || !isMainRoute) && (
          <ClearButton aria-label="back-button" onClick={handleBackButton}>
            <HeaderIcon type={headerIconTypes.backArrow} />
          </ClearButton>
        )}
        {(isMainRouteSearching || isCardRouteSearching) && <SearchBar />}

        {isExtraRoute ? (
          <PageName>{getHeaderName(location.pathname)}</PageName>
        ) : (
          <ExtraIcons
            handleSearch={handleSearchButton}
            handleAppMenu={handleAppMenu}
          />
        )}
      </Wrapper>

      {isMainRoute && (
        <NavigationListStyled role="tablist">
          <PagesNavigation />
        </NavigationListStyled>
      )}
    </>
  );
};

export default Navigation;
