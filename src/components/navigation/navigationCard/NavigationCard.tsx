import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SearchBar from 'components/searchBar';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import { MenuHolder, PageName } from './NavigationCard.styled';

import { AiOutlineSearch } from 'react-icons/ai';
import { BiArrowBack, BiDotsVerticalRounded } from 'react-icons/bi';
import { paths } from 'constants/paths';
import { getHeaderName } from 'helpers/getHeaderName';

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
        <BiArrowBack />
      </ClearButton>

      {isShortHeader && <PageName>{getHeaderName(location.pathname)}</PageName>}

      {isSearch && !isShortHeader && <SearchBar />}

      {!isShortHeader && (
        <MenuHolder>
          <ClearButton onClick={handleSearchButton}>
            <AiOutlineSearch />
          </ClearButton>

          <ClearButton onClick={handleAppMenu}>
            <BiDotsVerticalRounded />
          </ClearButton>
        </MenuHolder>
      )}
    </>
  );
};

export default NavigationCard;
