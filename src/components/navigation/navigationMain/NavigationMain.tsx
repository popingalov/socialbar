import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from 'components/searchBar';
import ClearButton from 'components/UI-kit/buttons/clearButton';
import { Wrapper, MenuHolder } from './NavigationMain.styled';

import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BiArrowBack, BiDotsVerticalRounded } from 'react-icons/bi';

const NavigationMain = () => {
  const [isSearch, setSearch] = useState(false);

  const handleSideMenu = () => {
    console.log('open side menu');
  };

  const handleBackButton = () => setSearch(false);

  const handleSearchButton = () => setSearch(true);

  const handleAppMenu = () => console.log('Go App menu');

  return (
    <Wrapper>
      {isSearch ? (
        <ClearButton onClick={handleBackButton}>
          <BiArrowBack />
        </ClearButton>
      ) : (
        <ClearButton onClick={handleSideMenu}>
          <AiOutlineMenu />
        </ClearButton>
      )}

      {isSearch && <SearchBar />}

      <MenuHolder>
        <ClearButton onClick={handleSearchButton}>
          <AiOutlineSearch />
        </ClearButton>

        <ClearButton onClick={handleAppMenu}>
          <BiDotsVerticalRounded />
        </ClearButton>
      </MenuHolder>
    </Wrapper>
  );
};

export default NavigationMain;
