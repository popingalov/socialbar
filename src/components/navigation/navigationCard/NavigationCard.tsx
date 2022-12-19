import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from 'components/searchBar';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import { MenuHolder } from './NavigationCard.styled';

import { AiOutlineSearch } from 'react-icons/ai';
import { BiArrowBack, BiDotsVerticalRounded } from 'react-icons/bi';

const NavigationCard = () => {
  const navigate = useNavigate();
  const [isSearch, setSearch] = useState(false);

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

      {isSearch && <SearchBar />}

      <MenuHolder>
        <ClearButton onClick={handleSearchButton}>
          <AiOutlineSearch />
        </ClearButton>

        <ClearButton onClick={handleAppMenu}>
          <BiDotsVerticalRounded />
        </ClearButton>
      </MenuHolder>
    </>
  );
};

export default NavigationCard;
