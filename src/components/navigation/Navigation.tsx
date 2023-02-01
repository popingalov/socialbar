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
import {
  setExtraMenuIsOpen,
  setMobileIsOpen,
  setPopUpIsOpen,
} from 'redux/modal/modalSlice';
import {
  setCocktailCategory,
  setIngredientCategory,
} from 'redux/categoriesFilter/categoriesFilterSlice';
import { useGetPageCategories } from 'hooks/useGetPageCategories';
import { useGetNavSelectLabel } from 'hooks/useGetNavSelectLabel';
import { changeSearchFilter } from 'redux/searchFilter/searchSlice';
import { initialSearchStatus } from 'redux/searchFilter/searchConstants';
import { getLocation } from 'helpers/getLocation';

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
  } = getLocation(location.pathname);
  const filter = useGetPageCategories(isIngredients);
  const selectLabel = useGetNavSelectLabel(isIngredients);

  const handleSideMenu = () => {
    dispatch(setMobileIsOpen(true));
  };

  const handleBackButton = () => {
    navigate(-1);
    dispatch(setPopUpIsOpen(false));
    dispatch(changeSearchFilter(initialSearchStatus));
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
      dispatch(setPopUpIsOpen(false));
      dispatch(changeSearchFilter(initialSearchStatus));
      return;
    }

    if (!isMainRoute) {
      navigate(`${location.pathname}/search`);
      return;
    }
  };

  const handleDelete = () => {
    dispatch(setPopUpIsOpen(false));
    dispatch(changeSearchFilter(initialSearchStatus));
  };

  const handleAppMenu = () => {
    dispatch(setExtraMenuIsOpen(true));
  };

  const handleFilter = (value: string) => {
    isIngredients
      ? dispatch(setIngredientCategory(value))
      : dispatch(setCocktailCategory(value));
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
              handleDelete={handleDelete}
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
