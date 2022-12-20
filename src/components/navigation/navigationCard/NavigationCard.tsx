import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SearchBar from 'components/searchBar';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import { MenuHolder, PageName } from './NavigationCard.styled';
import { paths } from 'constants/paths';
import { getHeaderName } from 'helpers/getHeaderName';
import HeaderIcon from 'components/UI-kit/icons/headerIcon';
import { headerIconTypes } from 'constants/headerIconTypes';

const NavigationCard = () => {
  const navigate = useNavigate();
  const [isSearch, setSearch] = useState(false);
  const location = useLocation();
  const isShortHeader =
    location.pathname === paths.settings ||
    location.pathname === paths.newCocktail ||
    location.pathname === paths.newIngredient;

  const handleSideMenu = () => {
    if (isSearch) setSearch(false);
    else navigate(-1);
  };

  const handleSearchButton = () => setSearch(true);

  const handleAppMenu = () => console.log('Go App menu');

  return (
    <>
      <ClearButton onClick={handleSideMenu}>
        <HeaderIcon type={headerIconTypes.backArrow} />
      </ClearButton>

      {isShortHeader && <PageName>{getHeaderName(location.pathname)}</PageName>}

      {isSearch && !isShortHeader && <SearchBar />}

      {!isShortHeader && (
        <MenuHolder>
          <ClearButton onClick={handleSearchButton}>
            <HeaderIcon type={headerIconTypes.searching} />
          </ClearButton>

          <ClearButton onClick={handleAppMenu}>
            <HeaderIcon type={headerIconTypes.extraMenu} />
          </ClearButton>
        </MenuHolder>
      )}
    </>
  );
};

export default NavigationCard;
