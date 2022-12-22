import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import ExtraMenu from 'components/navigation/extraMenu';
import { getHeaderName } from 'helpers/getHeaderName';
import HeaderIcon from 'components/UI-kit/icons/headerIcon';
import { headerIconTypes } from 'constants/headerIconTypes';
import { NavigationListStyled, PageName, Wrapper } from './Navigation.styled';
import PagesNavigation from './pagesNavigation';
import { paths } from 'constants/paths';
import SearchBar from 'components/searchBar';
import Select from 'components/UI-kit/select';
import { setMobileIsOpen } from 'redux/modal/modalSlice';
import { cocktailTypes, ingredientTypes } from 'constants/categories';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearch, setSearch] = useState(false);
  const dispatch = useDispatch();
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
  const filter = isIngredients ? ingredientTypes : cocktailTypes;

  const handleSideMenu = () => {
    dispatch(setMobileIsOpen(true));
  };

  const handleBackButton = () => {
    if (isSearch) setSearch(false);
    else navigate(-1);
  };

  const handleSearchButton = () => setSearch(true);

  const handleAppMenu = () => console.log('Go App menu');

  return (
    <>
      <Wrapper isExtraRoute={isExtraRoute}>
        {isMainRouteFilter && (
          <>
            <ClearButton aria-label="mobile-menu" onClick={handleSideMenu}>
              <HeaderIcon type={headerIconTypes.burgerMenu} />
            </ClearButton>
            <Select
              label="No Filter"
              values={filter}
              onChange={(v: any) => console.log(v)}
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
          <ExtraMenu
            handleSearch={handleSearchButton}
            handleAppMenu={handleAppMenu}
          />
        )}
      </Wrapper>

      {isMainRoute && (
        <NavigationListStyled>
          <PagesNavigation />
        </NavigationListStyled>
      )}
    </>
  );
};

export default Navigation;
