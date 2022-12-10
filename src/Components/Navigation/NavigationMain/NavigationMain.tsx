import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BiArrowBack, BiDotsVerticalRounded } from 'react-icons/bi';

import SearchBar from 'Components/SearchBar';

import { Wrapper, ButtonIcon, MenuHolder } from './NavigationMain.styled';

const NavigationMain = () => {
  const navigate = useNavigate();

  const [isSearch, setSearch] = useState(false);

  const handleSideMenu = () => {
    if (isSearch) setSearch(false);
    else navigate(-1);
  };

  const handleSearchButton = () => setSearch(true);

  const handleAppMenu = () => console.log('Go App menu');

  return (
    <Wrapper>
      <ButtonIcon onClick={handleSideMenu}>
        <AiOutlineMenu />
      </ButtonIcon>

      {isSearch && <SearchBar />}

      <MenuHolder>
        <ButtonIcon onClick={handleSearchButton}>
          <AiOutlineSearch />
        </ButtonIcon>

        <ButtonIcon onClick={handleAppMenu}>
          <BiDotsVerticalRounded />
        </ButtonIcon>
      </MenuHolder>
    </Wrapper>
  );
};

export default NavigationMain;
