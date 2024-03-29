import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { changeSearchFilter } from 'redux/searchFilter/searchSlice';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import ExtraIcons from 'components/navigation/extraIcons';
import { getHeaderName } from 'helpers/getHeaderName';
import HeaderIcon from 'components/UI-kit/icons/headerIcon';
import { headerIconTypes } from 'constants/headerIconTypes';
import { initialSearchStatus } from 'redux/searchFilter/searchConstants';
import { NavigationListStyled, PageName, Wrapper } from './Navigation.styled';
import PagesNavigation from './pagesNavigation';
import SearchBar from 'components/navigation/searchBar';
import Select from 'components/UI-kit/select';
import {
  setExtraMenuIsOpen,
  setMobileIsOpen,
  setPopUpSearchIsOpen,
} from 'redux/modal/modalSlice';
import {
  setCocktailCategory,
  setIngredientCategory,
} from 'redux/categoriesFilter/categoriesFilterSlice';
import {
  useGetPageCategories,
  useInitialFilterStatusLabel,
} from 'hooks/useGetPageCategories';
import { useGetNavSelectLabel } from 'hooks/useGetNavSelectLabel';
import { useGetLocation } from 'hooks/useGetLocation';
import { initialFilterStatus } from 'redux/categoriesFilter/categoriesConstants';
import { useGetHeaderName } from 'hooks/useGetHeaderName';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    isMainRoute,
    isExtraRoute,
    isMainRouteSearching,
    isMainRouteFilter,
    isCardRouteSearching,
    isIngredients,
    isCocktails,
    isSearchInDetails,
    isSearch,
    isCreateNewIngredient,
  } = useGetLocation();
  const filter = useGetPageCategories(isIngredients);
  const selectLabel = useGetNavSelectLabel(isIngredients);
  const initialFilterStatusLabel = useInitialFilterStatusLabel();
  const pageName = useGetHeaderName(location.pathname);

  const handleSideMenu = () => {
    dispatch(setMobileIsOpen(true));
  };

  const handleBackButton = () => {
    if (location?.state?.from) {
      navigate(-2);
      return;
    }

    if (isSearch) {
      dispatch(setPopUpSearchIsOpen(false));
      dispatch(changeSearchFilter(initialSearchStatus));
    }

    if (isCreateNewIngredient) {
      navigate('/ingredients');
      return;
    }
    navigate(-1);
  };

  const handleSearchButton = () => {
    if (isIngredients) {
      navigate('/ingredients/search');
      return;
    }

    if (isCocktails) {
      navigate('/cocktails/search');
      return;
    }

    if (isMainRouteSearching || isSearchInDetails) {
      navigate(-1);
      dispatch(setPopUpSearchIsOpen(false));
      dispatch(changeSearchFilter(initialSearchStatus));
      return;
    }

    if (!isMainRoute) {
      navigate(`${location.pathname}/search`);
      return;
    }
  };

  const handleDeleteSearch = () => {
    dispatch(setPopUpSearchIsOpen(false));
    dispatch(changeSearchFilter(initialSearchStatus));
  };

  const handleAppMenu = () => {
    dispatch(setExtraMenuIsOpen(true));
  };

  const handleFilter = (value: string) => {
    const filter =
      value === initialFilterStatusLabel ? initialFilterStatus : value;

    isIngredients
      ? dispatch(setIngredientCategory(filter))
      : dispatch(setCocktailCategory(filter));
  };

  return (
    <>
      {filter && (
        <Wrapper isExtraRoute={isExtraRoute}>
          {isMainRouteFilter && (
            <>
              <ClearButton aria-label="mobile-menu" onClick={handleSideMenu}>
                <HeaderIcon type={headerIconTypes.burgerMenu} />
              </ClearButton>
              <Select
                label={!selectLabel ? initialFilterStatusLabel : selectLabel}
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
            <PageName>{pageName}</PageName>
          ) : (
            <ExtraIcons
              handleSearch={handleSearchButton}
              handleDelete={handleDeleteSearch}
              handleAppMenu={handleAppMenu}
            />
          )}
        </Wrapper>
      )}

      {(isMainRoute || isMainRouteSearching) && filter && (
        <NavigationListStyled role="tablist">
          <PagesNavigation />
        </NavigationListStyled>
      )}
    </>
  );
};

export default Navigation;
