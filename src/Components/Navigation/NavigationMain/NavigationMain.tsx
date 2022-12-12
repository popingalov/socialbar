import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from 'Components/SearchBar';
import ClearButton from 'Components/UI-kit/buttons/ClearButton';
import { Wrapper, MenuHolder } from './NavigationMain.styled';

import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BiArrowBack, BiDotsVerticalRounded } from 'react-icons/bi';

const NavigationMain = () => {
  const navigate = useNavigate();

  const [isSearch, setSearch] = useState(false);

  const handleSideMenu = () => {
    if (isSearch) setSearch(false);
    else navigate(-1);
  };

  const handleSearchButton = () => setSearch(true);

  const handleAppMenu = () => console.log('Go App menu');

  const renderSideButton = () => {
    if (isSearch)
      return (
        <ClearButton onClick={handleSideMenu}>
          <BiArrowBack />
        </ClearButton>
      );
    else
      return (
        <ClearButton onClick={handleSideMenu}>
          <AiOutlineMenu />
        </ClearButton>
      );
  };

  return (
    <Wrapper>
      {renderSideButton()}

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
