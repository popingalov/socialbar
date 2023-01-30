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
import {
  setCocktailCategory,
  setIngredientCategory,
} from 'redux/categoriesFilter/categoriesFilterSlice';
import { useSelector } from 'react-redux';
import {
  selectCocktailFilter,
  selectIngredientFilter,
} from 'redux/filter/filterSelectors';
import { useGetPageCategories } from 'hooks/useGetPageCategories';
import { useGetNavSelectLabel } from 'hooks/useGetNavSelectLabel';
import { changeSearchFilter } from 'redux/searchFilter/searchSlice';
import { initialSearchStatus } from 'redux/searchFilter/searchConstants';

const Navigation = () => {
  const ingredientFilter = useSelector(selectIngredientFilter);
  const cocktailFilter = useSelector(selectCocktailFilter);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  // const [isSearch, setSearch] = useState(false);
  // const [currentPath, setCurrentPath] = useState('');

  const isMainRoute =
    location.pathname === paths.ingredients ||
    location.pathname === paths.cocktails;
  const isExtraRoute =
    location.pathname === paths.settings ||
    location.pathname === paths.newCocktail ||
    location.pathname === paths.newIngredient;

  const isSearch = location.pathname === paths.searchIngredient;
  console.log(' location.pathname', isSearch);
  const isMainRouteSearching = isMainRoute && isSearch;
  const isMainRouteFilter = isMainRoute && !isSearch;
  const isCardRouteSearching = isSearch && !isMainRoute;
  const isIngredients = location.pathname === paths.ingredients;
  // const isCocktails = location.pathname === paths.cocktails;

  const filter = useGetPageCategories(isIngredients);
  const selectLabel = useGetNavSelectLabel(isIngredients);

  // useEffect(() => {
  // if (isIngredients && currentPath !== ingredientFilter && isSearch) {
  //   setSearch(false);
  //   dispatch(changeSearchFilter(initialSearchStatus));
  // }

  // if (isCocktails && currentPath !== cocktailFilter && isSearch) {
  //   setSearch(false);
  //   dispatch(changeSearchFilter(initialSearchStatus));
  // }

  //   isIngredients
  //     ? setCurrentPath(ingredientFilter)
  //     : setCurrentPath(cocktailFilter);
  // }, [
  //   ingredientFilter,
  //   cocktailFilter,
  //   isIngredients,
  // currentPath,
  // dispatch,
  // isSearch,
  // isCocktails,
  // ]);

  const handleSideMenu = () => {
    dispatch(setMobileIsOpen(true));
  };

  const handleBackButton = () => {
    console.log('handle back btn');
    navigate(-1);
    // if (isSearch) {
    //   setSearch(false);
    //   dispatch(changeSearchFilter(initialSearchStatus));
    // } else navigate(-1);
  };

  const handleSearchButton = () => {
    // setSearch(prevState => !prevState);
    navigate('/ingredients/search');
  };

  const handleAppMenu = () => {
    dispatch(setExtraMenuIsOpen(true));
  };

  const handleFilter = (value: string) => {
    isIngredients
      ? dispatch(setIngredientCategory(value))
      : dispatch(setCocktailCategory(value));

    // setSelectValue(value);
  };

  return (
    <>
      {filter && (
        <Wrapper isExtraRoute={isExtraRoute}>
          {isMainRouteFilter && filter && (
            <>
              <ClearButton aria-label="mobile-menu" onClick={handleSideMenu}>
                <HeaderIcon type={headerIconTypes.burgerMenu} />
              </ClearButton>
              <Select
                label={selectLabel}
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
      )}

      {(isMainRoute || isSearch) && filter && (
        <NavigationListStyled role="tablist">
          <PagesNavigation />
        </NavigationListStyled>
      )}
    </>
  );
};

export default Navigation;

// const [selectValue, setSelectValue] = useState(initialFilterStatus);

// return (
//   <>
//     {filter && (
//       <Wrapper isExtraRoute={isExtraRoute}>

/* {isMainRouteFilter && filter && (
            <>
              <ClearButton aria-label="mobile-menu" onClick={handleSideMenu}>
                <HeaderIcon type={headerIconTypes.burgerMenu} />
              </ClearButton>
              <Select
                label={selectLabel}
                options={filter}
                onChange={handleFilter}
              />
            </>
          )} */

/* {(isMainRouteSearching || !isMainRoute) && (
            <ClearButton aria-label="back-button" onClick={handleBackButton}>
              <HeaderIcon type={headerIconTypes.backArrow} />
            </ClearButton>
          )}
          {(isMainRouteSearching || isCardRouteSearching) && <SearchBar />} */

/* 
          {isExtraRoute ? (
            <PageName>{getHeaderName(location.pathname)}</PageName>
          ) : (
            <ExtraIcons
              handleSearch={handleSearchButton}
              handleAppMenu={handleAppMenu}
            />
          )}
        </Wrapper>
      )}

      {isMainRoute && filter && (
        <NavigationListStyled role="tablist">
          <PagesNavigation />
        </NavigationListStyled>
      )}
    </>
  );
}; */

/* <>
            <ClearButton aria-label="mobile-menu" onClick={handleSideMenu}>
              <HeaderIcon type={headerIconTypes.burgerMenu} />
            </ClearButton>
            <Select
              label={selectLabel}
              options={filter}
              onChange={handleFilter}
            />
          </> */
